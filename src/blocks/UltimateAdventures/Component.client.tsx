'use client'
import React from 'react'
import type { UltimateAdventure } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TourIcons from '@/components/TourIcons'
import { formatImageUrl } from '@/utilities/formatImageUrl'

interface UltimateAdventuresProps {
  ultimateAdventureData: Partial<UltimateAdventure>[]
  title?: string
  subtitle?: string
}

export const UltimateAdventures: React.FC<UltimateAdventuresProps> = ({
  ultimateAdventureData,
  title,
  subtitle,
}) => {
  const tours = ultimateAdventureData.slice(0, 2)

  if (tours.length === 0) return null

  // Helper to calculate saving percentage
  const calculateDiscount = (min?: string | number | null, cutout?: string | number | null) => {
    const minVal = typeof min === 'string' ? parseFloat(min) : min
    const cutoutVal = typeof cutout === 'string' ? parseFloat(cutout) : cutout
    if (!minVal || !cutoutVal || cutoutVal <= minVal) return 0
    return Math.round(((cutoutVal - minVal) / cutoutVal) * 100)
  }

  // Helper to format cost nicely with $ symbol
  const formatCost = (cost?: string | number | null) => {
    if (!cost) return ''
    const val = typeof cost === 'string' ? parseFloat(cost) : cost
    return isNaN(val) ? String(cost) : `$ ${val.toLocaleString()}`
  }

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-16 text-center max-w-3xl mx-auto">
            {title && (
              <div className="intro flex flex-col items-center justify-center mb-6">
                <h2 className="font-oswald text-xl md:text-2xl uppercase text-foreground tracking-[0.2em] relative pb-3">
                  Ultimate Adventures 2026
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-accent" />
                </h2>
              </div>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {tours.map((tour, index) => {
            const imageUrl = `/api/media/file/${tour.slug}-home.webp`
            const normalizedImageUrl = formatImageUrl(imageUrl) || '/images/placeholder.jpg'
            const savings = calculateDiscount(tour.minCost, tour.cutOutCost)

            return (
              <motion.div
                key={tour.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative flex flex-col h-full bg-card border border-border/60 rounded-[2px] hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-500 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <Image
                    src={normalizedImageUrl}
                    alt={tour.title || ''}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Savings Pill Badge */}
                  {savings > 0 && (
                    <div className="absolute top-6 left-6 bg-accent text-accent-on font-oswald text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px] z-20 shadow-md">
                      SAVE {savings}%
                    </div>
                  )}

                  {/* Ultimate Experience Badge */}
                  {savings <= 0 && (
                    <div className="absolute top-6 left-6 bg-accent text-accent-on font-oswald text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px] z-20 shadow-md">
                      Ultimate Experience
                    </div>
                  )}

                  {/* Cost Pill Badge */}
                  {tour.minCost && (
                    <div className="absolute top-6 right-6 bg-black/85 backdrop-blur-md border border-white/10 text-white font-oswald text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-[2px] z-20 shadow-md">
                      {formatCost(tour.minCost)} / pp
                    </div>
                  )}

                  {/* Duration & Route Banner */}
                  <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black via-black/40 to-transparent p-6 pt-12 text-white z-10 flex items-end justify-between pointer-events-none">
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

                {/* Body Details Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1 gap-1 bg-card">
                  <h3 className="font-oswald text-lg font-bold tracking-wide text-foreground uppercase group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {tour.title}
                  </h3>

                  {/* Tour Key Statistics Grid */}
                  <div className="py-4 border-y border-border/50 my-4">
                    <TourIcons
                      isOverview={true}
                      highestPeak={tour.highestPeak}
                      distance={tour.distance}
                      duration={tour.duration}
                      accommodation={tour.accommodation as string[]}
                      meal={tour.meal as string[]}
                    />
                  </div>

                  {/* Cost Info Panel */}
                  <div className="flex justify-between items-center my-1 text-xs">
                    <span className="text-muted-foreground font-sans tracking-wide">Starting from</span>
                    <div className="text-right flex items-center justify-end">
                      {tour.cutOutCost && (
                        <span className="line-through text-muted-foreground mr-2 font-sans text-[11px]">
                          {formatCost(tour.cutOutCost)}
                        </span>
                      )}
                      <span className="text-primary font-oswald text-base font-bold tracking-wide">
                        {formatCost(tour.minCost)}
                        <span className="font-sans text-[10px] text-muted-foreground font-normal ml-1">
                          / pp
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Actions / Enquire Panel */}
                  <div className="mt-auto flex gap-4 pt-6 border-t border-border/30">
                    <Link
                      href={`/downloads/ultimate-adventures/${tour.slug}.pdf`}
                      className="flex-1 border border-accent bg-transparent font-oswald text-[10px] text-foreground uppercase font-bold text-center py-3 rounded-[2px] hover:bg-accent hover:text-black transition-all duration-300 cursor-pointer tracking-widest"
                    >
                      View PDF
                    </Link>
                    <Link
                      href={`/ultimate-adventures/${tour.slug}`}
                      className="flex-1 bg-primary font-oswald text-[10px] text-primary-foreground uppercase font-bold text-center py-3 rounded-[2px] hover:opacity-90 hover:shadow-md transition-all duration-300 cursor-pointer tracking-widest"
                    >
                      Explore Ride
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Explore All Bottom Section */}
        <div className="mt-16 text-right">
          <Link
            href="/ultimate-adventures"
            className="inline-flex items-center font-oswald text-xs md:text-sm uppercase tracking-[0.3em] group text-muted-foreground hover:text-foreground transition-colors"
          >
            Explore All Ultimate Adventures
            <span className="ml-2 -mt-1 transform group-hover:translate-x-1.5 transition-transform duration-300 inline-block">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
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
