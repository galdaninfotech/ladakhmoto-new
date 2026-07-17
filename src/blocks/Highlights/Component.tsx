import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { HighlightsCarousel } from './HighlightsCarousel'
import { ExploreLink } from '@/components/ExploreLink'

async function HighlightsComponent() {
  const payload = await getPayload({ config: configPromise })

  const highlights = await payload.find({
    collection: 'highlights',
    depth: 1,
    limit: 100,
    select: {
      title: true,
      slug: true,
      intro: true,
      gallery: true,
    },
  })

  return (
    <div className="container mx-auto mb-6 my-32">
      <div className="relative intro flex flex-col items-center justify-center mb-12">
        <h2 className="font-oswald text-[16px] md:text-xl uppercase text-foreground">Activity Highlights</h2>
        <span className="absolute -bottom-1 w-full h-px bg-accent/50" />
      </div>

      <p className="text-muted-foreground text-xs font-sans font-light tracking-wide mx-auto -mt-7 mb-6">
        Take a glimpse at the iconic landmarks, serene lakes, and majestic vistas of Ladakh that you will experience firsthand on our carefully crafted itineraries.
      </p>

      {highlights.docs && <HighlightsCarousel highlights={highlights.docs as any} />}

      <ExploreLink url="/highlights" title="Explore All Highlights" className="col-span-4 sm:col-span-8 lg:col-span-12" />
    </div>
  )
}

export default HighlightsComponent
