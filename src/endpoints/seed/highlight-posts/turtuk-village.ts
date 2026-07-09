
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const turtukVillage: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Turtuk Village',
    slug: 'turtuk-village',
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
                text: 'Where Ladakh meets Baltistan.',
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
                text: 'Turtuk Village is one of India\'s northernmost villages and a hidden gem nestled along the banks of the Shyok River. Opened to tourists only in 2010, this picturesque village is known for its lush apricot orchards, traditional stone houses, stunning mountain scenery, and unique cultural heritage that differs from the rest of Ladakh.',
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
        image: mediaMap['turtuk-village-gallery-image-1.webp'],
        caption: 'Turtuk Village Gallery Image 1',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-2.webp'],
        caption: 'Turtuk Village Gallery Image 2',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-3.webp'],
        caption: 'Turtuk Village Gallery Image 3',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-4.webp'],
        caption: 'Turtuk Village Gallery Image 4',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-5.webp'],
        caption: 'Turtuk Village Gallery Image 5',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-6.webp'],
        caption: 'Turtuk Village Gallery Image 6',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-7.webp'],
        caption: 'Turtuk Village Gallery Image 7',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-8.webp'],
        caption: 'Turtuk Village Gallery Image 8',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-9.webp'],
        caption: 'Turtuk Village Gallery Image 9',
      },
      {
        image: mediaMap['turtuk-village-gallery-image-10.webp'],
        caption: 'Turtuk Village Gallery Image 10',
      },
    ],
  }
}
