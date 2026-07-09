
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const changLaPass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Chang La Pass',
    slug: 'chang-la-pass',
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
                text: 'Conquer the heights, embrace the views.',
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
                text: 'Chang La Pass is one of the highest motorable mountain passes in the world, standing at an altitude of approximately 5,360 meters (17,590 ft). Located on the route to Pangong Lake, the pass offers spectacular views of snow-covered peaks, rugged Himalayan landscapes, and an unforgettable high-altitude adventure.',
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
        image: mediaMap['chang-la-pass-gallery-image-1.webp'],
        caption: 'Chang La Pass Gallery Image 1',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-2.webp'],
        caption: 'Chang La Pass Gallery Image 2',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-3.webp'],
        caption: 'Chang La Pass Gallery Image 3',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-4.webp'],
        caption: 'Chang La Pass Gallery Image 4',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-5.webp'],
        caption: 'Chang La Pass Gallery Image 5',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-6.webp'],
        caption: 'Chang La Pass Gallery Image 6',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-7.webp'],
        caption: 'Chang La Pass Gallery Image 7',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-8.webp'],
        caption: 'Chang La Pass Gallery Image 8',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-9.webp'],
        caption: 'Chang La Pass Gallery Image 9',
      },
      {
        image: mediaMap['chang-la-pass-gallery-image-10.webp'],
        caption: 'Chang La Pass Gallery Image 10',
      },
    ],
  }
}
