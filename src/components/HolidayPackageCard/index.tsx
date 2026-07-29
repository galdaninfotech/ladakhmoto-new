'use client'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'
import type { HolidayPackage } from '@/payload-types'
import { Media } from '@/components/Media'
import TourIcons from '../TourIcons'
import RichText from '../RichText'
import { ExploreLink } from '../ExploreLink'

export type HolidayPackageCardData = Pick<
  HolidayPackage,
  | 'slug'
  | 'meta'
  | 'title'
  | 'duration'
  | 'distance'
  | 'highestPeak'
  | 'accommodation'
  | 'meal'
  | 'description'
  | 'difficulty'
  | 'cost'
  | 'heroImage'
>

export const HolidayPackageCard: React.FC<{
  className?: string
  doc?: HolidayPackageCardData
}> = (props) => {
  const { className, doc } = props

  const {
    slug,
    meta,
    title,
    duration,
    distance,
    highestPeak,
    accommodation,
    meal,
    description: tourDescription,
    difficulty,
    cost,
    heroImage,
  } = doc || {}
  
  const { description: metaDescription, image: metaImage } = meta || {}

  const sanitizedMetaDescription = metaDescription?.replace(/\s/g, ' ')
  const href = `/holiday-packages/${slug}`
  
  const displayImage = metaImage || heroImage

  const costValues = cost?.map((c) => c.costPerPerson).filter((c): c is number => typeof c === 'number') || []
  const minCost = costValues.length > 0 ? Math.min(...costValues) : null

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy':
        return 'border-emerald-500/30 text-emerald-400 bg-emerald-950/80'
      case 'medium':
        return 'border-amber-500/30 text-amber-400 bg-amber-950/80'
      case 'hard':
        return 'border-rose-500/30 text-rose-400 bg-rose-950/80'
      default:
        return 'border-white/10 text-white bg-black/80'
    }
  }

  return (
    <article
      className={cn(
        'group flex flex-col md:flex-row border border-border/40 dark:border-border/10 rounded-xl overflow-hidden bg-card/60 backdrop-blur-md hover:border-accent/40 hover:shadow-2xl dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 mb-12',
        className,
      )}
    >
      {/* Image Section - Left on desktop, Top on mobile */}
      <div className="relative w-full md:w-[320px] lg:w-96 xl:w-104 h-64 md:h-auto overflow-hidden shrink-0">
        {!displayImage ? (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground font-oswald uppercase tracking-widest min-h-64">
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

        {/* Duration Overlay - Top Left */}
        {duration && (
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] md:text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-md shadow-lg">
              {duration}
            </span>
          </div>
        )}

        {/* Difficulty Badge - Top Right */}
        {difficulty && (
          <div className="absolute top-4 right-4 z-20">
            <span
              className={cn(
                'backdrop-blur-md border text-[10px] uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-md shadow-lg',
                getDifficultyColor(difficulty),
              )}
            >
              {difficulty}
            </span>
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
              Premium Holiday Package
            </span>
          </div>

          <h3 className="font-oswald text-xl md:text-2xl lg:text-3xl text-foreground font-semibold leading-tight uppercase tracking-wider mb-4 hover:text-accent transition-colors duration-300">
            <Link className="hover:text-accent transition-colors" href={href}>
              {title}
            </Link>
          </h3>

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
              <RichText
                data={tourDescription}
                enableGutter={false}
                className="line-clamp-3 text-muted-foreground text-xs md:text-sm font-light"
              />
            </div>
          )}
        </div>

        {/* Pricing and Action Row */}
        <div className="mt-6 pt-6 border-t border-border/20 flex flex-row items-center justify-between gap-4">
          {minCost ? (
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                Starting Price
              </span>
              <span className="font-oswald text-lg md:text-2xl font-bold text-foreground tracking-wide mt-0.5">
                ₹ {minCost.toLocaleString()} <span className="font-sans text-[10px] text-muted-foreground font-normal">/ pp</span>
              </span>
            </div>
          ) : (
            <div />
          )}

          <ExploreLink url={href} title="Explore Package" />
        </div>
      </div>
    </article>
  )
}
