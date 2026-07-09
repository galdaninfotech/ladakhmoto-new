
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const mallRoad: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Mall Road',
    slug: 'mall-road',
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
                text: 'The heartbeat of Manali.',
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
                text: 'Mall Road is the vibrant heart of Manali, lined with shops, cafés, restaurants, and local markets selling handicrafts, woolen garments, and souvenirs. It is a popular gathering place for visitors, offering a lively atmosphere where travelers can stroll, shop, enjoy local cuisine, and soak in the charm of this beautiful Himalayan town.',
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
        image: mediaMap['mall-road-gallery-image-1.webp'],
        caption: 'Mall Road Gallery Image 1',
      },
      {
        image: mediaMap['mall-road-gallery-image-2.webp'],
        caption: 'Mall Road Gallery Image 2',
      },
      {
        image: mediaMap['mall-road-gallery-image-3.webp'],
        caption: 'Mall Road Gallery Image 3',
      },
      {
        image: mediaMap['mall-road-gallery-image-4.webp'],
        caption: 'Mall Road Gallery Image 4',
      },
      {
        image: mediaMap['mall-road-gallery-image-5.webp'],
        caption: 'Mall Road Gallery Image 5',
      },
      {
        image: mediaMap['mall-road-gallery-image-6.webp'],
        caption: 'Mall Road Gallery Image 6',
      },
      {
        image: mediaMap['mall-road-gallery-image-7.webp'],
        caption: 'Mall Road Gallery Image 7',
      },
      {
        image: mediaMap['mall-road-gallery-image-8.webp'],
        caption: 'Mall Road Gallery Image 8',
      },
      {
        image: mediaMap['mall-road-gallery-image-9.webp'],
        caption: 'Mall Road Gallery Image 9',
      },
      {
        image: mediaMap['mall-road-gallery-image-10.webp'],
        caption: 'Mall Road Gallery Image 10',
      },
    ],
  }
}
