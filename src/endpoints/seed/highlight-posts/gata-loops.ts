
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const gataLoops: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Gata Loops',
    slug: 'gata-loops',
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
                text: 'Twenty-one bends, one unforgettable journey.',
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
                text: 'The Gata Loops are a series of 21 hairpin bends that wind their way up the mountains between Sarchu and Nakee La Pass. Famous among road trippers and motorcyclists, these sharp switchbacks provide stunning panoramic views of the surrounding valleys and barren mountains, making them one of the most iconic and exciting sections of the Manali–Leh Highway.',
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
        image: mediaMap['gata-loops-gallery-image-1.webp'],
        caption: 'Gata Loops Gallery Image 1',
      },
      {
        image: mediaMap['gata-loops-gallery-image-2.webp'],
        caption: 'Gata Loops Gallery Image 2',
      },
      {
        image: mediaMap['gata-loops-gallery-image-3.webp'],
        caption: 'Gata Loops Gallery Image 3',
      },
      {
        image: mediaMap['gata-loops-gallery-image-4.webp'],
        caption: 'Gata Loops Gallery Image 4',
      },
      {
        image: mediaMap['gata-loops-gallery-image-5.webp'],
        caption: 'Gata Loops Gallery Image 5',
      },
      {
        image: mediaMap['gata-loops-gallery-image-6.webp'],
        caption: 'Gata Loops Gallery Image 6',
      },
      {
        image: mediaMap['gata-loops-gallery-image-7.webp'],
        caption: 'Gata Loops Gallery Image 7',
      },
      {
        image: mediaMap['gata-loops-gallery-image-8.webp'],
        caption: 'Gata Loops Gallery Image 8',
      },
      {
        image: mediaMap['gata-loops-gallery-image-9.webp'],
        caption: 'Gata Loops Gallery Image 9',
      },
      {
        image: mediaMap['gata-loops-gallery-image-10.webp'],
        caption: 'Gata Loops Gallery Image 10',
      },
    ],
  }
}
