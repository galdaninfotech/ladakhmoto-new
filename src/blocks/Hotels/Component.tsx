import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { HotelsCarousel } from './HotelsCarousel'

async function HotelsComponent() {
  const payload = await getPayload({ config: configPromise })

  const hotels = await payload.find({
    collection: 'hotels',
    depth: 1,
    limit: 100,
    select: {
      name: true,
      description: true,
      website: true,
      image: true,
      starRating: true,
    },
  })

  return (
    <div className="container mx-auto mb-6 my-32">
      <div className="intro flex flex-col items-center justify-center mb-12">
        <h2 className="font-oswald text-[16px] md:text-xl uppercase text-foreground">Featured Hotels</h2>
      </div>

      {hotels.docs && <HotelsCarousel hotels={hotels.docs as any} />}
    </div>
  )
}

export default HotelsComponent
