
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const lehMarket: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Leh Market',
    slug: 'leh-market',
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
                text: 'Leh Market',
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
                text: 'Leh Market is the vibrant heart of Ladakh, offering a blend of local culture, traditional handicrafts, Tibetan souvenirs, woolen garments, and cozy cafés. It\'s the perfect place to explore the town, interact with locals, shop for unique souvenirs, and experience the charm of Leh\'s bustling streets.',
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
        image: mediaMap['leh-market-gallery-image-1.webp'],
        caption: 'Leh Market Gallery Image 1',
      },
      {
        image: mediaMap['leh-market-gallery-image-2.webp'],
        caption: 'Leh Market Gallery Image 2',
      },
      {
        image: mediaMap['leh-market-gallery-image-3.webp'],
        caption: 'Leh Market Gallery Image 3',
      },
      {
        image: mediaMap['leh-market-gallery-image-4.webp'],
        caption: 'Leh Market Gallery Image 4',
      },
      {
        image: mediaMap['leh-market-gallery-image-5.webp'],
        caption: 'Leh Market Gallery Image 5',
      },
      {
        image: mediaMap['leh-market-gallery-image-6.webp'],
        caption: 'Leh Market Gallery Image 6',
      },
      {
        image: mediaMap['leh-market-gallery-image-7.webp'],
        caption: 'Leh Market Gallery Image 7',
      },
      {
        image: mediaMap['leh-market-gallery-image-8.webp'],
        caption: 'Leh Market Gallery Image 8',
      },
      {
        image: mediaMap['leh-market-gallery-image-9.webp'],
        caption: 'Leh Market Gallery Image 9',
      },
      {
        image: mediaMap['leh-market-gallery-image-10.webp'],
        caption: 'Leh Market Gallery Image 10',
      },
    ],
  }
}
