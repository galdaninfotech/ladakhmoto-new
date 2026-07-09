
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const lamayuruMonastery: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Lamayuru Monastery',
    slug: 'lamayuru-monastery',
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
                text: 'Mysticism amidst the Moonland of Ladakh.',
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
                text: 'Lamayuru Monastery is one of the oldest and most significant Buddhist monasteries in Ladakh, dramatically perched amidst the region\'s famous "Moonland" landscape. Renowned for its spiritual significance, ancient murals, and unique setting, the monastery offers visitors a fascinating glimpse into Ladakh\'s rich Buddhist heritage and history.',
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
        image: mediaMap['lamayuru-monastery-gallery-image-1.webp'],
        caption: 'Lamayuru Monastery Gallery Image 1',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-2.webp'],
        caption: 'Lamayuru Monastery Gallery Image 2',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-3.webp'],
        caption: 'Lamayuru Monastery Gallery Image 3',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-4.webp'],
        caption: 'Lamayuru Monastery Gallery Image 4',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-5.webp'],
        caption: 'Lamayuru Monastery Gallery Image 5',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-6.webp'],
        caption: 'Lamayuru Monastery Gallery Image 6',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-7.webp'],
        caption: 'Lamayuru Monastery Gallery Image 7',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-8.webp'],
        caption: 'Lamayuru Monastery Gallery Image 8',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-9.webp'],
        caption: 'Lamayuru Monastery Gallery Image 9',
      },
      {
        image: mediaMap['lamayuru-monastery-gallery-image-10.webp'],
        caption: 'Lamayuru Monastery Gallery Image 10',
      },
    ],
  }
}
