'use client'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'
import type { Destination } from '@/payload-types'
import { Media } from '@/components/Media'
import { ExploreLink } from '../ExploreLink'

export type DestinationCardData = Pick<Destination, 'slug' | 'meta' | 'title' | 'heroImage'>

export const DestinationCard: React.FC<{
  className?: string
  doc?: DestinationCardData
}> = (props) => {
  const { className, doc } = props

  const { slug, meta, title, heroImage } = doc || {}
  const { description, image: metaImage } = meta || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/destinations/${slug}`
  const displayImage = metaImage || heroImage

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
      </div>

      {/* Content Section - Right on desktop, Bottom on mobile */}
      <div className="flex-1 flex flex-col justify-between p-6 md:p-8 lg:p-10">
        <div>
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Explore Ladakh
            </span>
          </div>

          <h3 className="font-oswald text-xl md:text-2xl lg:text-3xl text-foreground font-semibold leading-tight uppercase tracking-wider mb-4 hover:text-accent transition-colors duration-300">
            <Link className="hover:text-accent transition-colors" href={href}>
              {title}
            </Link>
          </h3>

          {sanitizedDescription && (
            <p className="text-muted-foreground line-clamp-3 mb-6 leading-relaxed text-xs md:text-sm font-light">
              {sanitizedDescription}
            </p>
          )}
        </div>

        {/* Action Row */}
        <div className="mt-auto pt-6 border-t border-border/20 flex flex-row items-center justify-between gap-4">
          <div />
          <ExploreLink url={href} title="Explore Destination" />
        </div>
      </div>
    </article>
  )
}
