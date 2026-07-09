
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const fotulaPass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Fotula Pass',
    slug: 'fotula-pass',
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
                text: 'The highest point on the Srinagar–Leh Highway.',
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
                text: 'Fotu La Pass is the highest point on the Srinagar–Leh Highway, standing at an elevation of around 4,108 meters (13,478 ft). Known for its panoramic vistas of the surrounding Himalayan ranges and winding roads, the pass provides a memorable experience for travelers journeying through Ladakh\'s breathtaking terrain.',
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
        image: mediaMap['fotula-pass-gallery-image-1.webp'],
        caption: 'Fotula Pass Gallery Image 1',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-2.webp'],
        caption: 'Fotula Pass Gallery Image 2',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-3.webp'],
        caption: 'Fotula Pass Gallery Image 3',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-4.webp'],
        caption: 'Fotula Pass Gallery Image 4',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-5.webp'],
        caption: 'Fotula Pass Gallery Image 5',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-6.webp'],
        caption: 'Fotula Pass Gallery Image 6',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-7.webp'],
        caption: 'Fotula Pass Gallery Image 7',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-8.webp'],
        caption: 'Fotula Pass Gallery Image 8',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-9.webp'],
        caption: 'Fotula Pass Gallery Image 9',
      },
      {
        image: mediaMap['fotula-pass-gallery-image-10.webp'],
        caption: 'Fotula Pass Gallery Image 10',
      },
    ],
  }
}
