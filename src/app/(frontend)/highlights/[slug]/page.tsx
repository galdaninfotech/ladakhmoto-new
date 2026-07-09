import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Highlight } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import Sidebar from '@/components/Sidebar'
import { Media } from '@/components/Media'
import { highlightSchema, SchemaComponent } from '@/components/Schema'
import { getCachedRedirects } from '@/utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { getPreferredMediaSource } from '@/utilities/getPreferredMediaSource'
import { HighlightHero } from '@/heros/HighlightHero'
import { BackButton } from '@/components/BackButton'
import { HighlightGallery } from '@/components/HighlightGallery'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'highlights',
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
  const url = '/highlights/' + slug
  const post = await queryPostBySlug({ slug })

  console.log({post})

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
            const relation = relationTo as any
            if (relation === 'pages') {
              prefix = ''
            } else if (relation === 'bikingAdventures') {
              prefix = '/bike-tours'
            } else if (relation === 'holidayPackages') {
              prefix = '/holiday-packages'
            } else if (relation === 'highlights') {
              prefix = '/highlights'
            } else {
              prefix = `/${relation}`
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

  const heroImageUrl = typeof post.meta?.image === 'object' && post.meta?.image !== null && 'url' in post.meta.image 
    ? formatImageUrl(getPreferredMediaSource(post.meta.image as any, ['large', 'xlarge', 'medium']).url) 
    : null;

  return (
    <article className="">
      <SchemaComponent data={highlightSchema(post as any)} />
      {heroImageUrl && (
        <link rel="preload" as="image" href={heroImageUrl} fetchPriority="high" />
      )}
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <HighlightHero post={post} />


      <div
        className="container mx-auto px-4 mt-16 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12
            gap-2 md:gap-3 lg:gap-4"
      >
        <div className="col-span-4 md:col-span-8 lg:col-span-9">
          <div className="mb-8">
            <BackButton />
          </div>
          <div className="intro flex flex-col mb-8">
            {post.title && <h1 className='font-oswald text-[24px] md:text-3xl lg:text-4xl uppercase text-foreground mb-4'>{post.title}</h1>}
            
            {post.intro && (
               <RichText className="text-md/7 text-foreground/80 italic font-light border-l-2 border-accent pl-6" data={post.intro} enableGutter={false} />
            )}
          </div>

          <div id="richtext" className="flex flex-col items-start gap-4 pt-4">
            <div className="container p-0">
              <RichText className="text-md/7 text-foreground/90 leading-relaxed" data={post.description} enableGutter={false} />
            </div>
          </div>

          <HighlightGallery gallery={post.gallery as any} />
        </div>

        <div className="sidebar col-span-4 md:col-span-8 lg:col-span-4 lg:row-start-1 lg:row-end-7 lg:col-start-10 lg:col-end-13">
          <Sidebar isOverview={true} />
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post as any, collection: 'highlights' })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'highlights',
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

  return result.docs?.[0] || null
})
