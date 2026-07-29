'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import type { UltimateAdventure } from '@/payload-types'
import { Media } from '@/components/Media'
import TourIcons from '../TourIcons'
import RichText from '../RichText'
import { ArrowUpRight, MapPin } from 'lucide-react'

export type UltimateAdventureCardData = Pick<UltimateAdventure, 'slug' | 'meta' | 'title' | 'minCost' | 'duration' | 'startEndCity' | 'distance' | 'highestPeak' | 'accommodation' | 'meal' | 'description' | 'heroImage'>

export const UltimateAdventureCard: React.FC<{
  className?: string
  doc?: UltimateAdventureCardData
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc } = props

  const { slug, meta, title, minCost, duration, startEndCity, distance, highestPeak, accommodation, meal, description: tourDescription, heroImage } = doc || {}
  const { description: metaDescription, image: metaImage } = meta || {}

  const sanitizedMetaDescription = metaDescription?.replace(/\s/g, ' ')
  const href = `/ultimate-adventures/${slug}`

  const displayImage = metaImage || heroImage

  return (
    <article
      className={cn(
        'group flex flex-col md:flex-row border border-border/40 dark:border-border/10 rounded-xl overflow-hidden bg-card/60 backdrop-blur-md hover:border-accent/40 hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 mb-12 cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      {/* Image Section - Left on desktop, Top on mobile */}
      <div className="relative w-full md:w-[320px] lg:w-95 xl:w-105 h-62.5 md:h-auto overflow-hidden shrink-0">
        {!displayImage ? (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-oswald uppercase tracking-widest min-h-62.5">
            No image available
          </div>
        ) : (
          typeof displayImage !== 'string' && (
            <Media 
              resource={displayImage} 
              fill
              imgClassName="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )
        )}
        
        {/* Dark Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500 z-10 pointer-events-none" />

        {/* Price/Duration Overlay - Top Left */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
          {duration && (
            <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] md:text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-md shadow-lg">
              {duration}
            </span>
          )}
        </div>

        {/* Start/End City overlay - Bottom Left */}
        {startEndCity && (
          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-3 py-1.5 rounded-md border border-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>{startEndCity}</span>
          </div>
        )}
      </div>

      {/* Content Section - Right on desktop, Bottom on mobile */}
      <div className="flex-1 flex flex-col justify-between p-6 md:p-8 lg:p-10">
        <div>
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Ultimate Expedition
            </span>
          </div>

          <h2 className="font-oswald text-xl md:text-2xl lg:text-3xl text-foreground font-semibold leading-tight uppercase tracking-wider mb-4 hover:text-accent transition-colors duration-300">
            <Link className="hover:text-accent transition-colors" href={href} ref={link.ref}>
              {title}
            </Link>
          </h2>

          <div className="py-4 border-y border-border/30 my-4 bg-muted/20 px-3 rounded-md">
            <TourIcons 
              isOverview={true}
              duration={duration}
              distance={distance}
              highestPeak={highestPeak}
              accommodation={accommodation}
              meal={meal}
            />
          </div>

          {metaDescription && (
            <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed text-xs md:text-sm font-light">
              {sanitizedMetaDescription}
            </p>
          )}

          {tourDescription && (
            <div className="mb-6">
              <RichText data={tourDescription} enableGutter={false} className="line-clamp-3 text-muted-foreground text-xs md:text-sm font-light" />
            </div>
          )}
        </div>

        {/* Pricing and Action Row */}
        <div className="mt-6 pt-6 border-t border-border/20 flex flex-row items-center justify-between gap-4">
          {minCost && (
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                Starting Price
              </span>
              <span className="font-oswald text-lg md:text-2xl font-bold text-foreground tracking-wide mt-0.5">
                ₹ {minCost.toLocaleString()} <span className="font-sans text-[10px] text-muted-foreground font-normal">/ pp</span>
              </span>
            </div>
          )}
          
          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-accent text-accent-on font-oswald text-xs uppercase font-bold text-center px-6 py-3 rounded-md hover:bg-accent/90 hover:shadow-[0_4px_20px_rgba(249,185,0,0.3)] transition-all duration-300 cursor-pointer tracking-widest shrink-0"
          >
            Explore Ride
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
