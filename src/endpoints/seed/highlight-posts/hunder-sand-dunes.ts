
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const hunderSandDunes: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Hunder Sand Dunes',
    slug: 'hunder-sand-dunes',
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
                text: 'A desert hidden in the Himalayas.',
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
                text: 'Hunder Sand Dunes present a unique desert landscape nestled amidst the towering mountains of Ladakh. Famous for their rolling sand dunes and rare double-humped Bactrian camels, this remarkable destination offers visitors a chance to experience a stunning contrast of desert and Himalayan scenery in one place.',
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
        image: mediaMap['hunder-sand-dunes-gallery-image-1.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 1',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-2.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 2',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-3.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 3',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-4.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 4',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-5.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 5',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-6.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 6',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-7.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 7',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-8.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 8',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-9.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 9',
      },
      {
        image: mediaMap['hunder-sand-dunes-gallery-image-10.webp'],
        caption: 'Hunder Sand Dunes Gallery Image 10',
      },
    ],
  }
}
