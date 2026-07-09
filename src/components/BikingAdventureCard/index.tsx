'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import type { BikingAdventure } from '@/payload-types'
import { Media } from '@/components/Media'
import TourIcons from '../TourIcons'
import RichText from '../RichText'

export type BikingAdventureCardData = Pick<BikingAdventure, 'slug' | 'meta' | 'title' | 'minCost' | 'duration' | 'startEndCity' | 'distance' | 'highestPeak' | 'accommodation' | 'meal' | 'description'>

export const BikingAdventureCard: React.FC<{
  className?: string
  doc?: BikingAdventureCardData
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc } = props

  const { slug, meta, title, minCost, duration, startEndCity, distance, highestPeak, accommodation, meal, description: tourDescription } = doc || {}
  const { description: metaDescription, image: metaImage } = meta || {}

  const sanitizedMetaDescription = metaDescription?.replace(/\s/g, ' ')
  const href = `/bike-tours/${slug}`

  return (
    <article
      className={cn(
        'group flex flex-col border border-border rounded-sm overflow-hidden bg-card hover:shadow-2xl transition-all duration-500 mb-12',
        className,
      )}
      ref={card.ref}
    >
      {/* Image Section - Top */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        {!metaImage ? (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-oswald uppercase tracking-widest">
            No image available
          </div>
        ) : (
          typeof metaImage !== 'string' && (
            <Media 
              resource={metaImage} 
              fill
              imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )
        )}
        
        {/* Price/Duration Overlay */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
          {minCost && (
            <span className="bg-primary text-primary-foreground text-[10px] md:text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-sm shadow-lg">
              Starting ₹ {minCost}
            </span>
          )}
          {duration && (
            <span className="bg-slate-900 text-white text-[10px] md:text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-sm shadow-lg">
              {duration}
            </span>
          )}
        </div>

        {startEndCity && (
          <div className="absolute bottom-6 left-6 z-10">
            <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] md:text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-sm shadow-lg">
              {startEndCity}
            </span>
          </div>
        )}
      </div>

      {/* Content Section - Bottom */}
      <div className="px-8 py-8 md:px-10 md:py-10 flex flex-col">
        <h2 className="font-oswald text-sm md:text-xl text-foreground mb-6 leading-tight uppercase tracking-wider">
          <Link className="hover:text-primary transition-colors" href={href} ref={link.ref}>
            {title}
          </Link>
        </h2>

        <div className="mb-8">
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
          <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed text-sm md:text-sm font-semibold">
            {sanitizedMetaDescription}
          </p>
        )}

        {tourDescription && (
          <div className="mb-8">
            <RichText data={tourDescription} enableGutter={false} className="line-clamp-3 text-muted-foreground text-sm md:text-sm" />
          </div>
        )}

        <div className="pt-6 border-t border-border mt-auto">
          <Link 
            href={href}
            className="inline-flex items-center text-primary font-bold text-xs md:text-sm uppercase tracking-[0.1em] group/link"
          >
            Explore Adventure
            <svg 
              className="text-accent ml-3 w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
