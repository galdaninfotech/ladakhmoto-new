
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const khardongLaPass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Khardung La Pass',
    slug: 'khardung-la-pass',
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
                text: 'Gateway to the roof of the world.',
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
                text: 'Khardung La Pass is one of the world\'s highest motorable mountain passes, situated at an altitude of over 5,300 meters (18,380 ft). Serving as the gateway to Nubra Valley, the pass offers breathtaking views of snow-capped peaks, rugged mountain landscapes, and an unforgettable high-altitude experience for travelers.',
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
        image: mediaMap['khardong-la-pass-gallery-image-1.webp'],
        caption: 'Khardung La Pass Gallery Image 1',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-2.webp'],
        caption: 'Khardung La Pass Gallery Image 2',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-3.webp'],
        caption: 'Khardung La Pass Gallery Image 3',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-4.webp'],
        caption: 'Khardung La Pass Gallery Image 4',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-5.webp'],
        caption: 'Khardung La Pass Gallery Image 5',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-6.webp'],
        caption: 'Khardung La Pass Gallery Image 6',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-7.webp'],
        caption: 'Khardung La Pass Gallery Image 7',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-8.webp'],
        caption: 'Khardung La Pass Gallery Image 8',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-9.webp'],
        caption: 'Khardung La Pass Gallery Image 9',
      },
      {
        image: mediaMap['khardong-la-pass-gallery-image-10.webp'],
        caption: 'Khardong La Pass Gallery Image 10',
      },
    ],
  }
}
