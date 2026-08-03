'use client'
import React from 'react'
import type { UltimateAdventure } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { ExploreLink } from '@/components/ExploreLink'
import { motion } from 'framer-motion'
import TourIcons from '@/components/TourIcons'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { ArrowUpRight, Download, Calendar, MapPin } from 'lucide-react'

const getCategoryStyle = (slug?: string | null): { bg: string; text: string } => {
  switch (slug) {
    case 'bike-tour':
      return { bg: 'bg-amber-500', text: 'text-white' }
    case 'holiday-packages':
      return { bg: 'bg-emerald-600', text: 'text-white' }
    case 'extreme':
      return { bg: 'bg-rose-600', text: 'text-white' }
    case 'group-tour':
      return { bg: 'bg-cyan-600', text: 'text-white' }
    case 'off-road-expeditions':
      return { bg: 'bg-orange-600', text: 'text-white' }
    case 'trekking-hiking':
      return { bg: 'bg-teal-600', text: 'text-white' }
    case 'cultural-sightseeing':
      return { bg: 'bg-indigo-600', text: 'text-white' }
    case 'spiti-valley':
      return { bg: 'bg-purple-600', text: 'text-white' }
    case 'leh-ladakh':
      return { bg: 'bg-sky-600', text: 'text-white' }
    default:
      return { bg: 'bg-accent', text: 'text-accent-on' }
  }
}

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

  // Fallbacks for CMS title and subtitle
  const displayTitle = title || "Ultimate Adventures 2026"
  const displaySubtitle = subtitle || "Conquer the highest motorable passes and cross the most formidable terrains in the Himalayas. Our signature, high-octane expeditions are custom-built for seasoned riders seeking the ultimate test of endurance and adventure."

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
    <section className="py-16 bg-background overflow-hiddenz border-t border-border/20">
      <div className="container mx-auto">

        {/* Editorial Split Header */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-border/25 pb-12">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                Signature Expeditions
              </span>
            </div>
            <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl uppercase text-foreground tracking-wide leading-none">
              {displayTitle}
            </h2>
          </div>
          <div className="lg:max-w-md lg:border-l lg:border-border/40 lg:pl-8">
            <p className="text-muted-foreground text-xs md:text-sm font-sans font-light tracking-wide leading-relaxed">
              {displaySubtitle}
            </p>
          </div>
        </div>

        {/* Symmetric Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-12">
          {tours.map((tour, index) => {
            const imageUrl = `/api/media/file/${tour.slug}-home.webp`
            const normalizedImageUrl = formatImageUrl(imageUrl) || '/images/placeholder.jpg'
            const savings = calculateDiscount(tour.minCost, tour.cutOutCost)

            return (
              <motion.div
                key={tour.id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                className="group relative flex flex-col h-full bg-card border border-border/40 hover:border-accent/40 transition-all duration-500 rounded-lg overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  {/* Dark overlay that fades slightly on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

                  <Image
                    src={normalizedImageUrl}
                    alt={tour.title || ''}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Floating Glassmorphic Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
                    <div className="flex flex-wrap gap-2">
                      {/* Category Pill Badge */}
                      {tour.categories && tour.categories.length > 0 && (
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                          {tour.categories.map((category) => {
                            if (category && typeof category === 'object') {
                              const style = getCategoryStyle(category.slug)
                              return (
                                <div
                                  key={category.id}
                                  className={`${style.bg} ${style.text} font-oswald text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-[2px] shadow-md`}
                                >
                                  {category.title}
                                </div>
                              )
                            }
                            return null
                          })}
                        </div>
                      )}

                      {savings <= 0 && (
                        <div className="backdrop-blur-md bg-accent text-accent-on font-oswald text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-on animate-ping" />
                          Signature Tour
                        </div>
                      )}
                    </div>

                    {/* Cost Badge */}
                    {tour.minCost && (
                      <div className="backdrop-blur-md bg-black/75 border border-white/15 text-white font-oswald text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                        {formatCost(tour.minCost)} <span className="text-[8px] opacity-70">/ pp</span>
                      </div>
                    )}
                  </div>

                  {/* Route & Duration Overlay */}
                  <div className="absolute bottom-4 inset-x-4 z-20 flex items-end justify-between pointer-events-none">
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span className="font-oswald text-[10px] text-white uppercase tracking-wider font-semibold">
                        {tour.duration ? formatTourDuration(tour.duration) : 'Duration N/A'}
                      </span>
                    </div>
                    {tour.startEndCity && (
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        <span className="font-oswald text-[10px] text-white uppercase tracking-wider font-semibold">
                          {tour.startEndCity}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Body Details Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1 bg-card/95 justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <h3 className="font-oswald text-xl md:text-2xl font-bold tracking-wide text-foreground uppercase group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug">
                        {tour.title}
                      </h3>
                      {savings > 0 && (
                        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-sans text-xs font-extrabold uppercase px-2.5 py-1 rounded-sm shrink-0 tracking-wider">
                          SAVE {savings}%
                        </span>
                      )}
                    </div>

                    {/* Tour Key Statistics Grid */}
                    <div className="py-5 border-y border-border/30 my-4 bg-muted/20 px-3 rounded-md">
                      <TourIcons
                        isOverview={true}
                        highestPeak={tour.highestPeak}
                        distance={tour.distance}
                        duration={tour.duration}
                        accommodation={tour.accommodation as string[]}
                        meal={tour.meal as string[]}
                      />
                    </div>
                  </div>

                  <div>
                    {/* Cost Info Panel */}
                    <div className="flex justify-between items-center my-3 text-xs">
                      <span className="text-muted-foreground font-sans uppercase tracking-wider font-medium text-[10px]">
                        Starting Price
                      </span>
                      <div className="text-right flex items-center justify-end">
                        {tour.cutOutCost && (
                          <span className="line-through text-muted-foreground/60 mr-2.5 font-sans text-[11px]">
                            {formatCost(tour.cutOutCost)}
                          </span>
                        )}
                        <span className="font-oswald text-xl font-bold tracking-wider text-foreground">
                          {formatCost(tour.minCost)}
                          <span className="font-sans text-[10px] text-muted-foreground font-normal ml-1">
                            / person
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Actions Panel */}
                    <div className="mt-4 flex gap-4 pt-6 border-t border-border/20">
                      <Link
                        href={`/downloads/ultimate-adventures/${tour.slug}.pdf`}
                        className="flex-1 inline-flex items-center justify-center gap-2 border border-border bg-transparent font-oswald text-[10px] text-foreground uppercase font-bold text-center py-3.5 rounded-md hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 cursor-pointer tracking-widest"
                      >
                        <Download className="w-3.5 h-3.5" />
                        View PDF
                      </Link>
                      <Link
                        href={`/ultimate-adventures/${tour.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-accent text-accent-on font-oswald text-[10px] uppercase font-bold text-center py-3.5 rounded-md hover:bg-accent/90 hover:shadow-md transition-all duration-300 cursor-pointer tracking-widest"
                      >
                        Explore Ride
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Explore All Bottom Section */}
        <div className="mt-16 text-center">
          <ExploreLink url="/ultimate-adventures" title="Explore All Ultimate Adventures" />
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
