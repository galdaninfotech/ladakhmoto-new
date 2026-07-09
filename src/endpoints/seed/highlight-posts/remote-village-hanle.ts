
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const remoteVillageHanle: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Remote Village Hanle',
    slug: 'remote-village-hanle',
    _status: 'published',
    intro: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Discover the soul of untouched Ladakh.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'The remote villages of Ladakh provide a rare glimpse into traditional Himalayan life, where ancient customs, simple lifestyles, and deep-rooted cultural traditions have been preserved for generations. Surrounded by rugged mountains and vast wilderness, these settlements offer travelers an authentic experience far from the usual tourist routes.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    gallery: [
      {
        image: mediaMap['remote-village-hanle-gallery-image-1.webp'],
        caption: 'Remote Village Hanle Gallery Image 1',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-2.webp'],
        caption: 'Remote Village Hanle Gallery Image 2',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-3.webp'],
        caption: 'Remote Village Hanle Gallery Image 3',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-4.webp'],
        caption: 'Remote Village Hanle Gallery Image 4',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-5.webp'],
        caption: 'Remote Village Hanle Gallery Image 5',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-6.webp'],
        caption: 'Remote Village Hanle Gallery Image 6',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-7.webp'],
        caption: 'Remote Village Hanle Gallery Image 7',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-8.webp'],
        caption: 'Remote Village Hanle Gallery Image 8',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-9.webp'],
        caption: 'Remote Village Hanle Gallery Image 9',
      },
      {
        image: mediaMap['remote-village-hanle-gallery-image-10.webp'],
        caption: 'Remote Village Hanle Gallery Image 10',
      },
    ],
  }
}
