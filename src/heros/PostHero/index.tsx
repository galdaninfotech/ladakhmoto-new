import { formatDateTime } from '@/utilities/formatDateTime'
import React from 'react'

import type { Post, HolidayPackage, Destination } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { HeroBottomMask } from '@/components/HeroBottomMask'

export const PostHero: React.FC<{
  post: Post | HolidayPackage | Destination
}> = ({ post }) => {
  const { heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className="relative -mt-52 flex items-end justify-center h-[31.25rem]">
      <div className="container mx-auto p-4 z-10 relative text-white pb-8 -mb-4">
        <div className="relative bottom-12">
          <div className="mb-6 font-oswald uppercase font-normal text-accent text-xl md:text-2xl lg:text-3xl text-center">
            {title}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-16 hidden">
          {hasAuthors && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm">Author</p>
                <p>{formatAuthors(populatedAuthors)}</p>
              </div>
            </div>
          )}
          {publishedAt && (
            <div className="flex flex-col gap-1">
              <p className="text-sm">Date Published</p>
              <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
            </div>
          )}
        </div>
      </div>

      <div className="min-h-[80vh] select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media
            fill
            priority
            loading="eager"
            sizes="100vw"
            fetchPriority="high"
            quality={70}
            preferredSizes={['large', 'xlarge', 'medium']}
            imgClassName="-z-10 object-cover"
            resource={heroImage}
          />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-black to-transparent" />
      </div>

      <HeroBottomMask />
    </div>
  )
}
