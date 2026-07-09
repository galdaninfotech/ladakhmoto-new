import React from 'react'
import type { BikingAdventure } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'

import TourIcons from '@/components/TourIcons'
import { formatImageUrl } from '@/utilities/formatImageUrl'

// Use a partial type because the server sometimes returns a selected subset of fields
export const AdventureRides: React.FC<{
  bikingAdventureData: Partial<BikingAdventure> | Partial<BikingAdventure>[]
}> = ({ bikingAdventureData }) => {
  // normalize to array so callers may pass a single tour or an array
  const tours: Partial<BikingAdventure>[] = Array.isArray(bikingAdventureData)
    ? bikingAdventureData
    : bikingAdventureData
      ? [bikingAdventureData]
      : []

  return (
    <>
      <div
      className="container mx-auto
            grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12
            gap-y-8 md:gap-y-16 gap-x-4 mb-6 mt-12"
    >
      <div className="intro flex flex-col items-center justify-center col-span-4 sm:col-span-8 lg:col-span-12">
        <h2 className="font-oswald text-[16px] md:text-xl uppercase text-foreground">
          Adventure Rides 2026
        </h2>
      </div>

      {tours.map((tour, index) => {
        const imageUrl = `/api/media/file/${tour.slug}-home.webp`
        const normalizedImageUrl = formatImageUrl(imageUrl) || '/images/placeholder.jpg'

        return (
          <div
            key={tour.id}
            className="col-span-4 w-full rounded-md overflow-hidden shadow-lg bg-card border border-border"
          >
            <div className="relative h-55">
              <Image
                src={normalizedImageUrl}
                alt={tour.title ? tour.title : ''}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
                className="object-cover"
              />
              { tour.minCost && 
                <>
                  <div className="absolute top-3 right-3 bg-red-500 text-primary-foreground text-[11px] uppercase tracking-widest px-3 py-1">
                    ₹ {tour.minCost} / pp
                  </div>
                </>
              }

              { tour.minCost && 
                <>
                  <div className="absolute top-3 right-3 bg-red-500 text-primary-foreground text-[11px] uppercase tracking-widest px-3 py-1">
                    ₹ {tour.minCost} / pp
                  </div>
                </>
              }

              <div className="absolute bottom-0 left-1/2 w-[80%] -translate-x-1/2 bg-primary font-oswald text-primary-foreground text-sm py-2 text-center rounded-t shadow-md">
                {tour.duration ? formatTourDuration(tour.duration) : 'Duration unavailable'} &nbsp;
                | &nbsp; {tour.startEndCity}
              </div>
            </div>

            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-oswald text-sm font-semibold tracking-wide text-foreground uppercase">
                {tour.title}
              </h3>

              <TourIcons
                isOverview={true}
                highestPeak={tour.highestPeak}
                distance={tour.distance}
                duration={tour.duration}
                accommodation={tour.accommodation}
                meal={tour.meal}
              />

              <div className="text-xs text-muted-foreground my-2">
                Starting from{' '}
                <span className="line-through text-muted-foreground mr-1">₹ {tour.cutOutCost}</span>
                <span className="text-primary font-bold">₹ {tour.minCost}</span>{' '}
                <span className="text-muted-foreground">per person</span>
              </div>

              <div className="flex gap-3 mt-2">
                <Link
                  href={`/downloads/bike-tours/${tour.slug}.pdf`}
                  className="flex-1 border border-accent bg-card font-oswald text-[10px] text-primary uppercase font-thick text-center py-2.5 rounded-sm hover:bg-accent hover:text-white transition cursor-pointer"
                >
                  View Full PDF
                </Link>
                <Link
                  href={`/bike-tours/${tour.slug}`}
                  className="flex-1 bg-primary font-oswald text-[10px] text-primary-foreground uppercase font-thick text-center py-2.5 rounded-sm hover:opacity-90 transition cursor-pointer"
                >
                  MORE DETAILS
                </Link>
              </div>
            </div>
          </div>
        )
      })}

      
    </div>

    <div className="mt-16 text-right">
      <Link
        href="/bike-tours"
        className="inline-flex items-center font-oswald text-sm uppercase tracking-[0.3em] group text-muted-foreground hover:text-foreground transition-colors"
      >
        Explore All Adventure Rides
        <span className="ml-2 -mt-1 transform group-hover:translate-x-1 transition-transform inline-block">
          →
        </span>
      </Link>
    </div>
    </>
  )
}

const formatTourDuration = (duration: string): string => {
  if (!duration) return ''

  // Extract number before 'D' after slash: /(\d+)D$/
  const match = duration.match(/\/(\d+)D$/)
  if (match && match[1]) {
    const days = parseInt(match[1], 10)
    return `${days} Days`
  }

  return duration // Fallback
}
