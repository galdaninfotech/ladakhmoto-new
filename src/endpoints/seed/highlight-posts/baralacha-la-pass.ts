
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const baralachaLaPass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Baralacha La Pass',
    slug: 'baralacha-la-pass',
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
                text: 'Where mountains, glaciers, and adventure meet.',
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
                text: 'Baralacha La Pass is a high-altitude mountain pass situated at approximately 4,890 meters (16,040 ft) on the Manali–Leh Highway. Surrounded by rugged peaks, glaciers, and pristine mountain scenery, the pass is a favorite among adventure travelers and serves as a gateway between the Lahaul region and the vast landscapes of Ladakh.',
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
        image: mediaMap['baralacha-la-pass-gallery-image-1.webp'],
        caption: 'Baralacha La Pass Gallery Image 1',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-2.webp'],
        caption: 'Baralacha La Pass Gallery Image 2',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-3.webp'],
        caption: 'Baralacha La Pass Gallery Image 3',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-4.webp'],
        caption: 'Baralacha La Pass Gallery Image 4',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-5.webp'],
        caption: 'Baralacha La Pass Gallery Image 5',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-6.webp'],
        caption: 'Baralacha La Pass Gallery Image 6',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-7.webp'],
        caption: 'Baralacha La Pass Gallery Image 7',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-8.webp'],
        caption: 'Baralacha La Pass Gallery Image 8',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-9.webp'],
        caption: 'Baralacha La Pass Gallery Image 9',
      },
      {
        image: mediaMap['baralacha-la-pass-gallery-image-10.webp'],
        caption: 'Baralacha La Pass Gallery Image 10',
      },
    ],
  }
}
