
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const umlinglaPass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Umlingla Pass',
    slug: 'umlingla-pass',
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
                text: 'Ride the world\'s highest motorable road.',
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
                text: 'Umling La Pass is recognized as the world\'s highest motorable road, soaring to an astonishing altitude of approximately 5,798 meters (19,024 ft) above sea level. Located in the remote frontier region of eastern Ladakh, this engineering marvel offers an unparalleled adventure through rugged high-altitude terrain, breathtaking mountain vistas, and some of the most extreme riding and driving conditions on the planet. Reaching Umling La is considered a once-in-a-lifetime achievement for adventure enthusiasts and motorcyclists from around the world.',
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
        image: mediaMap['umlingla-pass-gallery-image-1.webp'],
        caption: 'Umling La Pass Gallery Image 1',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-2.webp'],
        caption: 'Umling La Pass Gallery Image 2',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-3.webp'],
        caption: 'Umling La Pass Gallery Image 3',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-4.webp'],
        caption: 'Umling La Pass Gallery Image 4',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-5.webp'],
        caption: 'Umling La Pass Gallery Image 5',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-6.webp'],
        caption: 'Umling La Pass Gallery Image 6',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-7.webp'],
        caption: 'Umling La Pass Gallery Image 7',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-8.webp'],
        caption: 'Umling La Pass Gallery Image 8',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-9.webp'],
        caption: 'Umling La Pass Gallery Image 9',
      },
      {
        image: mediaMap['umlingla-pass-gallery-image-10.webp'],
        caption: 'Umling La Pass Gallery Image 10',
      },
    ],
  }
}
