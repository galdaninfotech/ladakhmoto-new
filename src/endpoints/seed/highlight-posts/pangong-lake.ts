
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const pangongLake: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Pangong Lake',
    slug: 'pangong-lake',
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
                text: 'Nature\'s canvas painted in shades of blue.',
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
                text: 'Pangong Lake is one of Ladakh\'s most iconic attractions, stretching across India and Tibet at an altitude of about 4,350 meters (14,270 ft). Renowned for its crystal-clear waters that change shades of blue throughout the day, the lake is surrounded by majestic mountains, creating a mesmerizing landscape that leaves visitors spellbound.',
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
        image: mediaMap['pangong-lake-gallery-image-1.webp'],
        caption: 'Pangong Lake Gallery Image 1',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-2.webp'],
        caption: 'Pangong Lake Gallery Image 2',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-3.webp'],
        caption: 'Pangong Lake Gallery Image 3',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-4.webp'],
        caption: 'Pangong Lake Gallery Image 4',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-5.webp'],
        caption: 'Pangong Lake Gallery Image 5',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-6.webp'],
        caption: 'Pangong Lake Gallery Image 6',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-7.webp'],
        caption: 'Pangong Lake Gallery Image 7',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-8.webp'],
        caption: 'Pangong Lake Gallery Image 8',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-9.webp'],
        caption: 'Pangong Lake Gallery Image 9',
      },
      {
        image: mediaMap['pangong-lake-gallery-image-10.webp'],
        caption: 'Pangong Lake Gallery Image 10',
      },
    ],
  }
}
