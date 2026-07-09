
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const hadimbaTemple: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Hadimba Temple',
    slug: 'hadimba-temple',
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
                text: 'A timeless sanctuary amidst cedar forests',
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
                text: 'Hadimba Temple is a unique ancient shrine dedicated to Goddess Hadimba, a character from the Mahabharata. Surrounded by towering deodar forests, the temple is renowned for its distinctive wooden architecture, intricately carved doors, and peaceful setting, making it one of Manali\'s most iconic cultural and spiritual landmarks.',
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
        image: mediaMap['hadimba-temple-gallery-image-1.webp'],
        caption: 'Hadimba Temple Gallery Image 1',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-2.webp'],
        caption: 'Hadimba Temple Gallery Image 2',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-3.webp'],
        caption: 'Hadimba Temple Gallery Image 3',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-4.webp'],
        caption: 'Hadimba Temple Gallery Image 4',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-5.webp'],
        caption: 'Hadimba Temple Gallery Image 5',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-6.webp'],
        caption: 'Hadimba Temple Gallery Image 6',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-7.webp'],
        caption: 'Hadimba Temple Gallery Image 7',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-8.webp'],
        caption: 'Hadimba Temple Gallery Image 8',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-9.webp'],
        caption: 'Hadimba Temple Gallery Image 9',
      },
      {
        image: mediaMap['hadimba-temple-gallery-image-10.webp'],
        caption: 'Hadimba Temple Gallery Image 10',
      },
    ],
  }
}
