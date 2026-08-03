'use client'
import React from 'react'
import type { HolidayPackage } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { formatImageUrl } from '@/utilities/formatImageUrl'
import { Clock, ArrowRight, MountainSnow, Route } from 'lucide-react'
import { ExploreLink } from '@/components/ExploreLink'
import { motion } from 'framer-motion'

// Use a partial type because the server sometimes returns a selected subset of fields
export const HolidayPackages: React.FC<{
  holidayPackagesData: Partial<HolidayPackage> | Partial<HolidayPackage>[]
  title?: string
}> = ({ holidayPackagesData, title }) => {
  // normalize to array so callers may pass a single tour or an array
  const tours: Partial<HolidayPackage>[] = Array.isArray(holidayPackagesData)
    ? holidayPackagesData
    : holidayPackagesData
      ? [holidayPackagesData]
      : []

  type LexicalNode = {
    type: string
    text?: string
    children?: LexicalNode[]
    [key: string]: unknown
  }

  type LexicalData = {
    root: {
      children: LexicalNode[]
      [key: string]: unknown
    }
    [key: string]: unknown
  }

  const extractPlainText = (lexicalData: LexicalData): string => {
    const textNodes: string[] = []
    const traverse = (node: LexicalNode): void => {
      if (node.text) textNodes.push(node.text)
      if (node.children) node.children.forEach(traverse)
    }
    if (lexicalData?.root?.children) {
      lexicalData.root.children.forEach(traverse)
    }
    return textNodes.join(' ')
  }

  const truncateToCharacters = (text: string, charLimit: number): string => {
    if (text.length <= charLimit) return text
    return text.slice(0, charLimit)
  }

  const getStartingCost = (cost?: any[] | null) => {
    if (!cost || cost.length === 0) return null
    const prices = cost
      .map((c) => c.costPerPerson)
      .filter((p): p is number => typeof p === 'number' && p > 0)
    if (prices.length === 0) return null
    return Math.min(...prices)
  }

  const getDifficultyColor = (difficulty?: string | null) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'
      case 'medium':
        return 'text-amber-500 bg-amber-500/10 border-amber-500/20'
      case 'hard':
        return 'text-rose-500 bg-rose-500/10 border-rose-500/20'
      default:
        return 'text-muted-foreground bg-muted/20 border-border/20'
    }
  }

  const displayTitle = title || "Holiday Packages 2026"

  return (
    <section className="py-16 bg-background overflow-hiddenz border-t border-border/20">
      <div className="container mx-auto">
        {/* Editorial Split Header */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-border/25 pb-12">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                Curated Escapes
              </span>
            </div>
            <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl uppercase text-foreground tracking-wide leading-none">
              {displayTitle}
            </h2>
          </div>
          <div className="lg:max-w-md lg:border-l lg:border-border/40 lg:pl-8">
            <p className="text-muted-foreground text-xs md:text-sm font-sans font-light tracking-wide leading-relaxed">
              Immerse yourself in the magic of Ladakh with our curated leisure, family, and adventure holiday packages tailored to offer a perfect blend of comfort, sightseeing, and local exploration.
            </p>
          </div>
        </div>

        {/* Symmetric Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
          {tours.map((tour, index) => {
            const imageUrl =
              typeof tour.overviewImage === 'object' &&
              tour.overviewImage !== null &&
              'url' in tour.overviewImage
                ? tour.overviewImage.url
                : `/api/media/file/${tour.slug}-overview.webp`
            const normalizedImageUrl = formatImageUrl(imageUrl) || ''
            
            const startingPrice = getStartingCost(tour.cost)

            return (
              <motion.div
                key={tour.id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                className="group relative flex flex-col h-full bg-card border border-border/40 hover:border-accent/40 transition-all duration-500 rounded-lg overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                {/* Image Section */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900 clip-path-holiday">
                  {/* Dark overlay that fades slightly on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent z-10 opacity-90 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

                  <Image
                    src={normalizedImageUrl}
                    alt={tour.title || ''}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Floating Glassmorphic Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
                    <div className="flex flex-wrap gap-2">
                      {tour.categories &&
                        tour.categories.map((category) => {
                          if (category && typeof category === 'object' && 'title' in category) {
                            return (
                              <div
                                key={category.id}
                                className="backdrop-blur-md bg-black/60 border border-white/10 text-white font-oswald text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm"
                              >
                                {category.title}
                              </div>
                            )
                          }
                          return null
                        })}
                    </div>

                    {tour.duration && (
                      <div className="backdrop-blur-md bg-black/75 border border-white/15 text-white font-oswald text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {tour.duration}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 md:p-6 flex flex-col flex-1 justify-between bg-card/95">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="font-oswald text-lg font-bold tracking-wide text-foreground uppercase group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug">
                        {tour.title}
                      </h3>
                      {tour.difficulty && (
                        <span className={`px-2 py-0.5 rounded-sm border text-[8px] font-sans font-extrabold uppercase shrink-0 tracking-wider ${getDifficultyColor(tour.difficulty)}`}>
                          {tour.difficulty}
                        </span>
                      )}
                    </div>

                    {tour.description && (
                      <p className="text-xs/relaxed text-muted-foreground/80 line-clamp-3 font-sans font-light tracking-wide">
                        {truncateToCharacters(extractPlainText(tour.description as LexicalData), 140)}...
                      </p>
                    )}

                    {/* Stats Summary Grid */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/10 mt-4">
                      {tour.distance && (
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-full bg-muted/40 border border-border/20 text-muted-foreground/80">
                            <Route className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider">Distance</span>
                            <span className="text-[11px] font-semibold text-foreground">{tour.distance} km</span>
                          </div>
                        </div>
                      )}
                      {tour.highestPeak && (
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-full bg-muted/40 border border-border/20 text-muted-foreground/80">
                            <MountainSnow className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider">Max Altitude</span>
                            <span className="text-[11px] font-semibold text-foreground">{tour.highestPeak} ft</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions & Price Panel */}
                  <div className="mt-6 pt-6 border-t border-border/20">
                    <Link
                      href={`/holiday-packages/${tour.slug}`}
                      className="group/btn flex items-center justify-between w-full gap-2 flex-wrap xl:flex-nowrap"
                    >
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-sans">
                          Starting Price
                        </span>
                        <span className="font-oswald text-base font-bold tracking-wider text-foreground">
                          {startingPrice ? `$ ${startingPrice.toLocaleString()}` : 'Price on Request'}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-accent text-accent-on font-oswald text-[9px] uppercase font-bold tracking-widest px-3.5 py-2.5 rounded-md hover:bg-accent/90 hover:shadow-md transition-all duration-300 cursor-pointer">
                        Explore Package
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Explore All Bottom Section */}
        <div className="mt-16 text-center">
          <ExploreLink url="/holiday-packages" title="Explore All Holiday Packages" />
        </div>
      </div>
    </section>
  )
}
