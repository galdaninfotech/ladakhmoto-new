
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const zojilaPass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Zojila Pass',
    slug: 'zojila-pass',
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
                text: 'The dramatic gateway to Ladakh.',
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
                text: 'Zoji La Pass is a dramatic high-altitude mountain pass that serves as the gateway between Kashmir and Ladakh. Known for its winding roads, steep cliffs, and breathtaking views of snow-capped peaks, the pass offers one of the most thrilling and scenic drives in the Himalayas.',
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
        image: mediaMap['zojila-pass-gallery-image-1.webp'],
        caption: 'Zojila Pass Gallery Image 1',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-2.webp'],
        caption: 'Zojila Pass Gallery Image 2',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-3.webp'],
        caption: 'Zojila Pass Gallery Image 3',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-4.webp'],
        caption: 'Zojila Pass Gallery Image 4',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-5.webp'],
        caption: 'Zojila Pass Gallery Image 5',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-6.webp'],
        caption: 'Zojila Pass Gallery Image 6',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-7.webp'],
        caption: 'Zojila Pass Gallery Image 7',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-8.webp'],
        caption: 'Zojila Pass Gallery Image 8',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-9.webp'],
        caption: 'Zojila Pass Gallery Image 9',
      },
      {
        image: mediaMap['zojila-pass-gallery-image-10.webp'],
        caption: 'Zojila Pass Gallery Image 10',
      },
    ],
  }
}
