
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const sonmarg: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Sonmarg',
    slug: 'sonmarg',
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
                text: 'The golden meadow of Kashmir.',
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
                text: 'Sonmarg, meaning "Meadow of Gold," is a picturesque hill station nestled amidst towering mountains, lush green meadows, and sparkling glaciers. Its stunning natural beauty and serene surroundings make it one of the most enchanting destinations in the Kashmir Valley.',
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
        image: mediaMap['sonmarg-gallery-image-1.webp'],
        caption: 'Sonmarg Gallery Image 1',
      },
      {
        image: mediaMap['sonmarg-gallery-image-2.webp'],
        caption: 'Sonmarg Gallery Image 2',
      },
      {
        image: mediaMap['sonmarg-gallery-image-3.webp'],
        caption: 'Sonmarg Gallery Image 3',
      },
      {
        image: mediaMap['sonmarg-gallery-image-4.webp'],
        caption: 'Sonmarg Gallery Image 4',
      },
      {
        image: mediaMap['sonmarg-gallery-image-5.webp'],
        caption: 'Sonmarg Gallery Image 5',
      },
      {
        image: mediaMap['sonmarg-gallery-image-6.webp'],
        caption: 'Sonmarg Gallery Image 6',
      },
      {
        image: mediaMap['sonmarg-gallery-image-7.webp'],
        caption: 'Sonmarg Gallery Image 7',
      },
      {
        image: mediaMap['sonmarg-gallery-image-8.webp'],
        caption: 'Sonmarg Gallery Image 8',
      },
      {
        image: mediaMap['sonmarg-gallery-image-9.webp'],
        caption: 'Sonmarg Gallery Image 9',
      },
      {
        image: mediaMap['sonmarg-gallery-image-10.webp'],
        caption: 'Sonmarg Gallery Image 10',
      },
    ],
  }
}
