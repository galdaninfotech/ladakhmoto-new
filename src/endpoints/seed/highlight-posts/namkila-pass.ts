
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const namkilaPass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Namkila Pass',
    slug: 'namkila-pass',
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
                text: 'Enter the land of high passes.',
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
                text: 'Namkila Pass, situated at an altitude of approximately 3,700 meters (12,140 ft), is one of the scenic mountain passes on the Srinagar–Leh Highway. Surrounded by rugged brown mountains and dramatic landscapes, the pass offers travelers spectacular views and marks an important transition into the heart of Ladakh.',
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
        image: mediaMap['namkila-pass-gallery-image-1.webp'],
        caption: 'Namkila Pass Gallery Image 1',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-2.webp'],
        caption: 'Namkila Pass Gallery Image 2',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-3.webp'],
        caption: 'Namkila Pass Gallery Image 3',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-4.webp'],
        caption: 'Namkila Pass Gallery Image 4',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-5.webp'],
        caption: 'Namkila Pass Gallery Image 5',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-6.webp'],
        caption: 'Namkila Pass Gallery Image 6',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-7.webp'],
        caption: 'Namkila Pass Gallery Image 7',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-8.webp'],
        caption: 'Namkila Pass Gallery Image 8',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-9.webp'],
        caption: 'Namkila Pass Gallery Image 9',
      },
      {
        image: mediaMap['namkila-pass-gallery-image-10.webp'],
        caption: 'Namkila Pass Gallery Image 10',
      },
    ],
  }
}
