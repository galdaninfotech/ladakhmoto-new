'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'
import type { Destination } from '@/payload-types'
import { Media } from '@/components/Media'

export type DestinationCardData = Pick<Destination, 'slug' | 'meta' | 'title'>

export const DestinationCard: React.FC<{
  className?: string
  doc?: DestinationCardData
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc } = props

  const { slug, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/destinations/${slug}`

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
      </div>

      {/* Content Section - Bottom */}
      <div className="px-8 py-8 md:px-10 md:py-10 flex flex-col">
        <h3 className="font-oswald text-sm md:text-xl text-foreground mb-6 leading-tight uppercase tracking-wider">
          <Link className="hover:text-primary transition-colors" href={href} ref={link.ref}>
            {title}
          </Link>
        </h3>

        {description && (
          <p className="text-muted-foreground line-clamp-3 mb-8 leading-relaxed text-sm md:text-sm">
            {sanitizedDescription}
          </p>
        )}

        <div className="pt-6 border-t border-border">
          <Link 
            href={href}
            className="inline-flex items-center text-primary font-bold text-xs md:text-sm uppercase tracking-[0.1em] group/link"
          >
            Explore Destination
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
