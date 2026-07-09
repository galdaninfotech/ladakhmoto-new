
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const fossilResort: (args: PostArgs) => RequiredDataFromCollectionSlug<'hotels'> = ({ mediaMap, author }) => {
  return {
    name: "Fossil Resort",
    description: "Fossil Resort",
    website: "fossilresort.com",
    starRating: "3",
    updatedAt: "2026-06-21T10:26:03.491Z",
    createdAt: "2026-06-21T10:26:03.491Z",
    image: mediaMap['fossil-resort.webp'],
  }
}
