
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const taglanglaPass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Taglangla Pass',
    slug: 'taglangla-pass',
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
                text: 'Above the clouds, beyond the ordinary.',
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
                text: 'Taglang La Pass is one of the highest mountain passes on the Manali–Leh Highway, standing at an altitude of approximately 5,328 meters (17,480 ft). Known for its dramatic high-altitude landscapes, sweeping mountain views, and thrilling roads, the pass offers travelers a memorable experience amidst the rugged beauty of the Trans-Himalayan region.',
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
        image: mediaMap['taglangla-gallery-image-1.webp'],
        caption: 'Taglangla Gallery Image 1',
      },
      {
        image: mediaMap['taglangla-gallery-image-2.webp'],
        caption: 'Taglangla Gallery Image 2',
      },
      {
        image: mediaMap['taglangla-gallery-image-3.webp'],
        caption: 'Taglangla Gallery Image 3',
      },
      {
        image: mediaMap['taglangla-gallery-image-4.webp'],
        caption: 'Taglangla Gallery Image 4',
      },
      {
        image: mediaMap['taglangla-gallery-image-5.webp'],
        caption: 'Taglangla Gallery Image 5',
      },
      {
        image: mediaMap['taglangla-gallery-image-6.webp'],
        caption: 'Taglangla Gallery Image 6',
      },
      {
        image: mediaMap['taglangla-gallery-image-7.webp'],
        caption: 'Taglangla Gallery Image 7',
      },
      {
        image: mediaMap['taglangla-gallery-image-8.webp'],
        caption: 'Taglangla Gallery Image 8',
      },
      {
        image: mediaMap['taglangla-gallery-image-9.webp'],
        caption: 'Taglangla Gallery Image 9',
      },
      {
        image: mediaMap['taglangla-gallery-image-10.webp'],
        caption: 'Taglangla Gallery Image 10',
      },
    ],
  }
}
