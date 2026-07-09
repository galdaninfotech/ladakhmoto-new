import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Sidebar from '@/components/Sidebar'
import { pageSchema, SchemaComponent } from '@/components/Schema'
import { getCachedRedirects } from '@/utilities/getRedirects'
import { notFound, redirect } from 'next/navigation'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { getPreferredMediaSource } from '@/utilities/getPreferredMediaSource'
import GoogleReviews from '@/components/GoogleReviews'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug: [slug] }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await paramsPromise
  
  // Join the slug segments back into a string
  const slugString = slug ? slug.join('/') : 'home'
  
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slugString)
  const url = '/' + decodedSlug
  
  // For the query, we still only support top-level pages for now
  // If we had nested pages (breadcrumbs), we'd query by the full path
  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug: decodedSlug,
  })

  if (!page) {
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

  const { hero, layout } = page

  // Extract first slide image for preload
  const firstSlideImage = hero?.slides?.[0]?.image;
  const firstSlideUrl = typeof firstSlideImage === 'object' && firstSlideImage !== null && 'url' in firstSlideImage 
    ? formatImageUrl(getPreferredMediaSource(firstSlideImage, ['large', 'xlarge', 'medium']).url) 
    : null;

  return (
    <article className="">
      <SchemaComponent data={pageSchema(page)} />
      {firstSlideUrl && (
        <link rel="preload" as="image" href={firstSlideUrl} fetchPriority="high" />
      )}
      <PageClient />
      
      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />

      <div className="container mx-auto px-4 mt-8 lg:mt-16">
        {decodedSlug !== 'home' && decodedSlug !== 'gallery' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <main className="lg:col-span-9">
              <RenderBlocks blocks={layout} />
            </main>
            
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <Sidebar isOverview={false} />
              </div>
            </aside>
          </div>
        ) : (
          <main>
            <RenderBlocks blocks={layout} />
          </main>
        )}
      </div>
      
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug } = await paramsPromise
  const slugString = slug ? slug.join('/') : 'home'
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slugString)
  const page = await queryPageBySlug({
    slug: decodedSlug,
  })

  return generateMeta({ doc: page, collection: 'pages' })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
