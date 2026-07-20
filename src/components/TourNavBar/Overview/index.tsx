import RichText from '@/components/RichText'
import { Media as MediaType, Highlight, Hotel } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { MediaTabs } from './MediaTabs'

import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import TourIcons from '@/components/TourIcons'

export const Overview: React.FC<{
  tourOverview?: {
    duration?: string | null | undefined
    distance?: string | null | undefined
    highestPeak?: string | null | undefined
    accommodation?: string[] | null | undefined
    meal?: string[] | null | undefined
    description?: DefaultTypedEditorState | null | undefined
    summary?: DefaultTypedEditorState | null | undefined
    overviewImage?: number | null | MediaType | undefined
    overviewGallery?:
      | {
          image: number | MediaType | null | undefined
          id?: string | null | undefined
        }[]
      | null
      | undefined
    overviewVideo?: {
      url?: string | null | undefined
      video?: number | MediaType | null | undefined
    } | null | undefined
    overviewMap?: string | null | undefined
    itineraries?:
      | {
          hotel?: number | Hotel | null | undefined
          structuredHighlights?: (number | Highlight)[] | null | undefined
        }[]
      | null
      | undefined
  }
}> = (props) => {
  const { tourOverview } = props
  const {
    duration,
    distance,
    highestPeak,
    accommodation,
    meal,
    description,
    summary,
    overviewImage,
    overviewGallery,
    overviewVideo,
    overviewMap,
    itineraries,
  } = tourOverview || {}

  const hotelsMap = new Map<number, Hotel>()
  itineraries?.forEach((itinerary) => {
    if (itinerary.hotel && typeof itinerary.hotel === 'object' && itinerary.hotel !== null) {
      if (itinerary.hotel.id) {
        hotelsMap.set(itinerary.hotel.id, itinerary.hotel)
      }
    }
  })
  const uniqueHotels = Array.from(hotelsMap.values())

  const highlightsMap = new Map<string, Highlight>()
  itineraries?.forEach((itinerary) => {
    if (itinerary.structuredHighlights && Array.isArray(itinerary.structuredHighlights)) {
      itinerary.structuredHighlights.forEach((highlight) => {
        if (typeof highlight === 'object' && highlight !== null && highlight.id) {
          highlightsMap.set(highlight.id.toString(), highlight)
        }
      })
    }
  })
  const uniqueHighlights = Array.from(highlightsMap.values())

  return (
    <section id="overview" className="pt-6 mb-12 text-xs/6">
      <h2 className="mb-2 font-oswald uppercase text-foreground tracking-[2px] text-[1.25rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
        Tour Overview
      </h2>

      <TourIcons
        isOverview={true}
        duration={duration}
        distance={distance}
        highestPeak={highestPeak}
        accommodation={accommodation}
        meal={meal}
      />

      <MediaTabs
        overviewImage={overviewImage}
        overviewGallery={overviewGallery}
        overviewVideo={overviewVideo}
        overviewMap={overviewMap}
        hotels={uniqueHotels}
        highlights={uniqueHighlights}
      />

      <div className="space-y-6">
        {description && (
          <RichText
            className="text-md/7 text-foreground/90 leading-relaxed font-light"
            data={description}
            enableGutter={false}
          />
        )}

        {summary && (
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 to-transparent rounded-full" />
            <RichText
              className="text-md/7 text-foreground/90 leading-relaxed pl-6 italic font-light"
              data={summary}
              enableGutter={false}
            />
          </div>
        )}
      </div>
    </section>
  )
}
