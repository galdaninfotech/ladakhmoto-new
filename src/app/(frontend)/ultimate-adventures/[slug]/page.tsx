import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import { Overview } from '@/components/TourNavBar/Overview'
import { Itinerary } from '@/components/TourNavBar/Itinerary'
import { Dates } from '@/components/TourNavBar/Dates'
import { Cost } from '@/components/TourNavBar/Cost'

import ScrollSpyNav from '@/components/ScrollSpyNavigation';

import InclusionExclusionUltimateAdventureComponent from '@/globals/InclusionExclusionUltimateAdventure/component'
import TourPoliciesComponent from '@/globals/TourPolicies/component'
import ThingsToKeepInMindComponent from '@/globals/ThingsToKeepInMind/component'
import { TourHero } from '@/heros/TourHero'
import Sidebar from '@/components/Sidebar'
import { SchemaComponent, tourSchema } from '@/components/Schema'
import BikeTourTitleArea from '@/components/BikeTourTitleArea'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { getPreferredMediaSource } from '@/utilities/getPreferredMediaSource'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'ultimateAdventures',
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
  const url = '/ultimate-adventures/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) {
    return <PayloadRedirects url={url} />
  }

  const tourOverview = {
    duration: post.duration,
    distance: post.distance,
    highestPeak: post.highestPeak,
    accommodation: post.accommodation,
    meal: post.meal,
    description: post.description,
    summary: post.summary,
    highlights: post.highlights,
    overviewImage: post.overviewImage,
    overviewGallery: (post as any).overviewGallery,
    overviewVideo: (post as any).overviewVideo,
    overviewMap: (post as any).overviewMap,
    itineraries: post.itineraries,
  }

  // console.log("POST : ", post)

  const heroImageUrl = typeof post.heroImage === 'object' && post.heroImage !== null && 'url' in post.heroImage 
    ? formatImageUrl(getPreferredMediaSource(post.heroImage, ['large', 'xlarge', 'medium']).url) 
    : null;

  return (
    <article className="">
      <SchemaComponent data={tourSchema(post, true)} />
      {heroImageUrl && (
        <link rel="preload" as="image" href={heroImageUrl} fetchPriority="high" />
      )}
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <TourHero post={post} />


      <div className="container mx-auto px-4 mt-8 lg:mt-16 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12
            gap-2 md:gap-3 lg:gap-4">
        <div className="col-span-4 sm:col-span-8 lg:col-span-9">
          <BikeTourTitleArea post={post} isUltimateAdventure={true} />
          {/* ScrollSpy */}
          <div className="sticky top-[56px] lg:top-[68px] z-10">
            <ScrollSpyNav
              items={[
                { id: 'overview', label: 'Overview' },
                { id: 'itinerary', label: 'Itinerary' },
                { id: 'dates', label: 'Dates' },
                { id: 'cost', label: 'Cost' },
              ]}
            />
          </div>
          {/* Content */}
          <div className="col-span-4 sm:col-span-8 lg:col-span-9 space-y-4">
            <Overview tourOverview={tourOverview} />
            <Itinerary itineraries={post.itineraries} />
            <Dates dates={post.dates} />
            <Cost cost={post.cost} privateRoomUpgrade={post.privateRoomUpgrade} bikeUpgrade={post.bikeUpgrade} isUltimateAdventure={true} />
          </div>
          
          <InclusionExclusionUltimateAdventureComponent />
          <TourPoliciesComponent />
          <ThingsToKeepInMindComponent />
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

  return generateMeta({ doc: post, collection: 'ultimateAdventures' })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'ultimateAdventures',
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

  return (result.docs?.[0] as any) || null
})
