import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import { DestinationHero } from '@/heros/DestinationHero'
import Sidebar from '@/components/Sidebar'
import { Media } from '@/components/Media'
import { destinationSchema, SchemaComponent } from '@/components/Schema'
import { getCachedRedirects } from '@/utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { getPreferredMediaSource } from '@/utilities/getPreferredMediaSource'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'destinations',
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
  const url = '/destinations/' + slug
  const post = await queryPostBySlug({ slug })

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

  // console.log(post)

  const heroImageUrl = typeof post.heroImage === 'object' && post.heroImage !== null && 'url' in post.heroImage 
    ? formatImageUrl(getPreferredMediaSource(post.heroImage, ['large', 'xlarge', 'medium']).url) 
    : null;

  return (
    <article className="">
      <SchemaComponent data={destinationSchema(post)} />
      {heroImageUrl && (
        <link rel="preload" as="image" href={heroImageUrl} fetchPriority="high" />
      )}
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <DestinationHero post={post} />

      <div
        className="container mx-auto px-4 mt-16 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12
            gap-2 md:gap-3 lg:gap-4"
      >
        <div className="col-span-4 md:col-span-8 lg:col-span-9">
          <div className="intro flex flex-col items-center justify-center">
            {post.title && <h1 className='font-oswald text-[18px] md:text-2xl uppercase text-foreground text-center w-full -mt-4'>{post.title}</h1>}
            
            <span className="mt-4 mb-6">
              {post.subTitle && <strong className='text-xs text-muted-foreground'><i>{post.subTitle}</i></strong>}
            </span>
          </div>

          {typeof post.topImage === 'object' && post.topImage !== null && (
            <div className="content-media">
              <Media resource={post.topImage} />
            </div>
          )}
          
          <div id="richtext" className="flex flex-col items-center gap-4 pt-8">
            <div className="container p-0">
              <RichText className="text-sm/6 text-foreground/90" data={post.description} enableGutter={false} />
            </div>
          </div>
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

  // console.log("Post : ", post)

  return generateMeta({ doc: post, collection: 'destinations' })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'destinations',
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
