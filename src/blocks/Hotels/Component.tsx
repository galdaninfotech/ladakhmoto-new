import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { HotelsCarousel } from './HotelsCarousel'
import Link from 'next/link'

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
    <div
      className="container mx-auto relative rounded-[4px] overflow-hidden py-20 px-8 md:px-12 mb-6 my-32 border border-white/5"
      style={{
        backgroundImage: "url('/images/slides/slide1.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] z-0 pointer-events-none" />

      <div className="relative z-10">
        <div className="intro flex flex-col items-center justify-center mb-12">
          <h2 className="font-oswald text-[16px] md:text-xl uppercase text-background tracking-[0.2em] relative pb-3">
            Featured Hotels
            {/* <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-accent" /> */}
          </h2>
        </div>

        {hotels.docs && <HotelsCarousel hotels={hotels.docs as any} />}

        <Link className='bg-accent text-background px-4 py-2 rounded-xs float-right' href="/hotels">View All Hotels</Link >
      </div>
    </div>
  )
}

export default HotelsComponent
