import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Media, Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { articleSchema, imageSchema, SchemaComponent } from '@/components/Schema'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getCachedRedirects } from '@/utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { getPreferredMediaSource } from '@/utilities/getPreferredMediaSource'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: true,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug

  const { post, nextPost, prevPost } = await queryPostAndNeighbors({ slug: decodedSlug })

  if (!post) {
    const redirects = await getCachedRedirects()()
    const normalizedUrl = url !== '/' && url.endsWith('/') ? url.slice(0, -1) : url

    const redirectItem = redirects.find((redirect) => {
      const from = redirect.from !== '/' && redirect.from.endsWith('/') ? redirect.from.slice(0, -1) : redirect.from
      return from === normalizedUrl
    })

    if (redirectItem) {
      if (redirectItem.to?.url) {
        redirect(redirectItem.to.url)
      }

      if (redirectItem.to?.type === 'reference' && redirectItem.to?.reference?.value) {
        const { relationTo, value } = redirectItem.to.reference
        let redirectUrl: string = ''

        if (typeof value === 'object' && value !== null && 'slug' in value) {
          const slug = value.slug
          if (slug) {
            let prefix = ''
            if (relationTo === 'pages') {
              prefix = ''
            } else if (relationTo === 'bikingAdventures') {
              prefix = '/bike-tours'
            } else if (relationTo === 'holidayPackages') {
              prefix = '/holiday-packages'
            } else {
              prefix = `/${relationTo}`
            }
            redirectUrl = `${prefix}/${slug}`
          }
        }

        if (redirectUrl) {
          redirect(redirectUrl)
        }
      }
    }

    notFound()
  }

  const schema = [
    imageSchema(post.meta?.image as Media),
    articleSchema(post)
  ]

  const heroImageUrl = typeof post.heroImage === 'object' && post.heroImage !== null && 'url' in post.heroImage 
    ? formatImageUrl(getPreferredMediaSource(post.heroImage, ['large', 'xlarge', 'medium']).url) 
    : null;

  return (
    <>
      <SchemaComponent data={schema} />
      <article className="pt-16 pb-16">
        {heroImageUrl && (
          <link rel="preload" as="image" href={heroImageUrl} fetchPriority="high" />
        )}
        <PageClient />
        {/* Allows redirects for valid pages too */}
        <PayloadRedirects disableNotFound url={url} />
        {draft && <LivePreviewListener />}

        <PostHero post={post} />

        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-9 mt-12">
            <RichText className="" data={post.content} enableGutter={false} />

            {/* Post Navigation */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-6">
              {prevPost ? (
                <Link
                  href={`/posts/${prevPost.slug}`}
                  className="flex-1 group p-6 border border-slate-100 rounded-sm hover:border-primary transition-colors bg-slate-50/30"
                >
                  <span className="flex items-center text-xs uppercase tracking-[0.2em] text-accent mb-2 group-hover:text-primary transition-colors">
                    <ChevronLeft className="mr-1 w-4 h-4" /> Previous Story
                  </span>
                  <span className="font-oswald text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : <div className="flex-1" />}

              {nextPost ? (
                <Link
                  href={`/posts/${nextPost.slug}`}
                  className="flex-1 group p-6 border border-slate-100 rounded-sm text-right hover:border-primary transition-colors bg-slate-50/30"
                >
                  <span className="flex items-center justify-end text-xs uppercase tracking-[0.2em] text-accent mb-2 group-hover:text-primary transition-colors">
                    Next Story <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                  <span className="font-oswald text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              ) : <div className="flex-1" />}
            </div>
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <RelatedPosts
                className="mt-20"
                docs={post.relatedPosts.filter((post) => typeof post === 'object')}
              />
            )}
          </main>

          <aside className="lg:col-span-3">
            <div className="sticky top-24">
              <Sidebar isOverview={false} />
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const { post } = await queryPostAndNeighbors({ slug: decodedSlug })

  return generateMeta({ doc: post, collection: 'posts' })
}

const queryPostAndNeighbors = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  // 1. Get current post
  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: true,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const post = result.docs?.[0] || null

  if (!post) return { post: null, nextPost: null, prevPost: null }

  // 2. Get Next and Previous posts based on createdAt
  const neighbors = await Promise.all([
    // Previous Post (created before current)
    payload.find({
      collection: 'posts',
      limit: 1,
      sort: '-createdAt',
      where: {
        createdAt: {
          less_than: post.createdAt,
        },
      },
      select: { title: true, slug: true }
    }),
    // Next Post (created after current)
    payload.find({
      collection: 'posts',
      limit: 1,
      sort: 'createdAt',
      where: {
        createdAt: {
          greater_than: post.createdAt,
        },
      },
      select: { title: true, slug: true }
    })
  ])

  return {
    post,
    prevPost: neighbors[0].docs?.[0] || null,
    nextPost: neighbors[1].docs?.[0] || null,
  }
})
