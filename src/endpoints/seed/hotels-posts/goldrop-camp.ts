
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const goldropCamp: (args: PostArgs) => RequiredDataFromCollectionSlug<'hotels'> = ({ mediaMap, author }) => {
  return {
    name: "Goldrop Camp",
    description: "Goldrop Camp",
    website: "goldropcamp",
    starRating: "3",
    updatedAt: "2026-06-21T10:26:03.491Z",
    createdAt: "2026-06-21T10:26:03.491Z",
    image: mediaMap['goldrop-camp.webp'],
  }
}
