
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const drass: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Drass',
    slug: 'drass',
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
                text: 'Life thrives where the cold reigns.',
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
                text: 'Drass is a charming mountain town situated along the Srinagar–Leh Highway and is famously known as the second coldest inhabited place in the world. Surrounded by rugged mountains and beautiful valleys, it serves as an important gateway to Ladakh and offers a unique glimpse into life in one of the harshest climates on Earth.',
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
        image: mediaMap['drass-gallery-image-1.webp'],
        caption: 'Drass Gallery Image 1',
      },
      {
        image: mediaMap['drass-gallery-image-2.webp'],
        caption: 'Drass Gallery Image 2',
      },
      {
        image: mediaMap['drass-gallery-image-3.webp'],
        caption: 'Drass Gallery Image 3',
      },
      {
        image: mediaMap['drass-gallery-image-4.webp'],
        caption: 'Drass Gallery Image 4',
      },
      {
        image: mediaMap['drass-gallery-image-5.webp'],
        caption: 'Drass Gallery Image 5',
      },
      {
        image: mediaMap['drass-gallery-image-6.webp'],
        caption: 'Drass Gallery Image 6',
      },
      {
        image: mediaMap['drass-gallery-image-7.webp'],
        caption: 'Drass Gallery Image 7',
      },
      {
        image: mediaMap['drass-gallery-image-8.webp'],
        caption: 'Drass Gallery Image 8',
      },
      {
        image: mediaMap['drass-gallery-image-9.webp'],
        caption: 'Drass Gallery Image 9',
      },
      {
        image: mediaMap['drass-gallery-image-10.webp'],
        caption: 'Drass Gallery Image 10',
      },
    ],
  }
}
