import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { HighlightsCarousel } from './HighlightsCarousel'

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
      <div className="intro flex flex-col items-center justify-center mb-12">
        <h2 className="font-oswald text-[16px] md:text-xl uppercase text-foreground">Tour Highlights</h2>
      </div>

      {highlights.docs && <HighlightsCarousel highlights={highlights.docs as any} />}
    </div>
  )
}

export default HighlightsComponent
