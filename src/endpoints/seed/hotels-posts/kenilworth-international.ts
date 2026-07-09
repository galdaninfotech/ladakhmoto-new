
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const kenilworthInternational: (args: PostArgs) => RequiredDataFromCollectionSlug<'hotels'> = ({ mediaMap, author }) => {
  return {
    name: "kenilworthInternational",
    description: "kenilworthInternational",
    website: "kenilworthinternational",
    starRating: "3",
    updatedAt: "2026-06-21T10:26:03.491Z",
    createdAt: "2026-06-21T10:26:03.491Z",
    image: mediaMap['kenilworth-international.webp'],
  }
}
