
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const dalLake: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Dal Lake',
    slug: 'dal-lake',
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
                text: 'The jewel of Kashmir.',
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
                text: 'Dal Lake is the jewel of Srinagar and one of Kashmir\'s most iconic attractions, renowned for its serene waters, traditional houseboats, and colorful shikara rides. Surrounded by the majestic Himalayas and lush gardens, the lake offers a tranquil and unforgettable experience that captures the beauty and charm of Kashmir.',
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
        image: mediaMap['dal-lake-gallery-image-1.webp'],
        caption: 'Dal Lake Gallery Image 1',
      },
      {
        image: mediaMap['dal-lake-gallery-image-2.webp'],
        caption: 'Dal Lake Gallery Image 2',
      },
      {
        image: mediaMap['dal-lake-gallery-image-3.webp'],
        caption: 'Dal Lake Gallery Image 3',
      },
      {
        image: mediaMap['dal-lake-gallery-image-4.webp'],
        caption: 'Dal Lake Gallery Image 4',
      },
      {
        image: mediaMap['dal-lake-gallery-image-5.webp'],
        caption: 'Dal Lake Gallery Image 5',
      },
      {
        image: mediaMap['dal-lake-gallery-image-6.webp'],
        caption: 'Dal Lake Gallery Image 6',
      },
      {
        image: mediaMap['dal-lake-gallery-image-7.webp'],
        caption: 'Dal Lake Gallery Image 7',
      },
      {
        image: mediaMap['dal-lake-gallery-image-8.webp'],
        caption: 'Dal Lake Gallery Image 8',
      },
      {
        image: mediaMap['dal-lake-gallery-image-9.webp'],
        caption: 'Dal Lake Gallery Image 9',
      },
      {
        image: mediaMap['dal-lake-gallery-image-10.webp'],
        caption: 'Dal Lake Gallery Image 10',
      },
    ],
  }
}
