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

  // Helper to calculate saving percentage
  const calculateDiscount = (min?: string | number | null, cutout?: string | number | null) => {
    const minVal = typeof min === 'string' ? parseFloat(min) : min
    const cutoutVal = typeof cutout === 'string' ? parseFloat(cutout) : cutout
    if (!minVal || !cutoutVal || cutoutVal <= minVal) return 0
    return Math.round(((cutoutVal - minVal) / cutoutVal) * 100)
  }

  // Helper to format cost nicely
  const formatCost = (cost?: string | number | null) => {
    if (!cost) return ''
    const val = typeof cost === 'string' ? parseFloat(cost) : cost
    return isNaN(val) ? String(cost) : `₹ ${val.toLocaleString()}`
  }

  return (
    <div className="container mx-auto mb-16 mt-24">
      {/* Block Title */}
      <div className="intro flex flex-col items-center justify-center mb-16">
        <h2 className="font-oswald text-xl md:text-2xl uppercase text-foreground tracking-[0.2em] relative pb-3">
          Adventure Rides 2026
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-accent" />
        </h2>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour, index) => {
          const imageUrl = `/api/media/file/${tour.slug}-home.webp`
          const normalizedImageUrl = formatImageUrl(imageUrl) || '/images/placeholder.jpg'
          const savings = calculateDiscount(tour.minCost, tour.cutOutCost)

          return (
            <div
              key={tour.id}
              className="group relative flex flex-col w-full bg-card border border-border/60 rounded-[2px] hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-500 overflow-hidden"
            >
              {/* Card Header Image Area */}
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image
                  src={normalizedImageUrl}
                  alt={tour.title ? tour.title : ''}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-90"
                />

                {/* Savings Pill Badge */}
                {savings > 0 && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-on font-oswald text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px] z-20 shadow-md">
                    SAVE {savings}%
                  </div>
                )}

                {/* Duration & Route Banner */}
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black via-black/40 to-transparent p-4 pt-12 text-white z-10 flex items-end justify-between pointer-events-none">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-oswald text-[11px] uppercase tracking-[0.15em] text-accent font-semibold">
                      {tour.duration ? formatTourDuration(tour.duration) : 'Duration unavailable'}
                    </span>
                  </div>
                  <span className="font-sans text-[11px] text-white/80 font-medium tracking-wide">
                    {tour.startEndCity}
                  </span>
                </div>
              </div>

              {/* Card Body Area */}
              <div className="p-5 flex flex-col flex-1 gap-1">
                <h3 className="font-oswald text-base font-bold tracking-wide text-foreground uppercase group-hover:text-primary transition-colors duration-300 line-clamp-1">
                  {tour.title}
                </h3>

                {/* Tour Key Statistics Grid */}
                <div className="py-4 border-y border-border/50 my-3">
                  <TourIcons
                    isOverview={true}
                    highestPeak={tour.highestPeak}
                    distance={tour.distance}
                    duration={tour.duration}
                    accommodation={tour.accommodation}
                    meal={tour.meal}
                  />
                </div>

                {/* Cost Info Panel */}
                <div className="flex justify-between items-center my-1 text-xs">
                  <span className="text-muted-foreground font-sans tracking-wide">Trip Price</span>
                  <div className="text-right flex items-center justify-end">
                    {/* Savings Pill Badge */}
                    {savings > 0 && (
                      <div className="text-accent font-oswald text-[18px] font-bold uppercase tracking-widest mr-4">
                        SAVE {savings}%
                      </div>
                    )}

                    {tour.cutOutCost && (
                      <span className="line-through text-muted-foreground mr-2 font-sans text-[11px]">
                        {formatCost(tour.cutOutCost)}
                      </span>
                    )}
                    
                    <span className="text-primary font-oswald text-sm font-bold tracking-wide">
                      {formatCost(tour.minCost)}
                      <span className="font-sans text-[10px] text-muted-foreground font-normal ml-1">
                        / pp
                      </span>
                    </span>
                  </div>
                </div>

                {/* Navigation and Call to Action Links */}
                <div className="flex gap-3 mt-4">
                  <Link
                    href={`/downloads/bike-tours/${tour.slug}.pdf`}
                    className="flex-1 border border-accent bg-transparent font-oswald text-[10px] text-foreground uppercase font-bold text-center py-2.5 rounded-[2px] hover:bg-accent hover:text-black transition-all duration-300 cursor-pointer tracking-widest"
                  >
                    View PDF
                  </Link>
                  <Link
                    href={`/bike-tours/${tour.slug}`}
                    className="flex-1 bg-primary font-oswald text-[10px] text-primary-foreground uppercase font-bold text-center py-2.5 rounded-[2px] hover:opacity-90 hover:shadow-md transition-all duration-300 cursor-pointer tracking-widest"
                  >
                    Explore Ride
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Explore All Bottom Section */}
      <div className="mt-16 text-right">
        <Link
          href="/bike-tours"
          className="inline-flex items-center font-oswald text-xs md:text-sm uppercase tracking-[0.3em] group text-muted-foreground hover:text-foreground transition-colors"
        >
          Explore All Adventure Rides
          <span className="ml-2 -mt-1 transform group-hover:translate-x-1.5 transition-transform duration-300 inline-block">
            →
          </span>
        </Link>
      </div>
    </div>
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
