
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const magneticHill: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Magnetic Hill',
    slug: 'magnetic-hill',
    publishedAt: "2026-06-21T04:33:56.549Z",
    generateSlug: false,
    updatedAt: "2026-06-21T04:41:56.520Z",
    createdAt: "2026-06-21T04:33:52.363Z",
    _status: "published",
    intro: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'RiWhere gravity seems to take a break.',
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
                text: 'Magnetic Hill is one of Ladakh\'s most intriguing natural wonders, famous for the optical illusion that makes vehicles appear to move uphill against gravity. Surrounded by the stark landscapes of the Himalayas, it is a popular stop for travelers eager to experience this unique phenomenon and enjoy the scenic beauty of the region.',
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
        image: mediaMap['magnetic-hill-gallery-image-1.webp'],
        caption: 'Magnetic Hill Gallery Image 1',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-2.webp'],
        caption: 'Magnetic Hill Gallery Image 2',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-3.webp'],
        caption: 'Magnetic Hill Gallery Image 3',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-4.webp'],
        caption: 'Magnetic Hill Gallery Image 4',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-5.webp'],
        caption: 'Magnetic Hill Gallery Image 5',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-6.webp'],
        caption: 'Magnetic Hill Gallery Image 6',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-7.webp'],
        caption: 'Magnetic Hill Gallery Image 7',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-8.webp'],
        caption: 'Magnetic Hill Gallery Image 8',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-9.webp'],
        caption: 'Magnetic Hill Gallery Image 9',
      },
      {
        image: mediaMap['magnetic-hill-gallery-image-10.webp'],
        caption: 'Magnetic Hill Gallery Image 10',
      },
    ],
  }
}
