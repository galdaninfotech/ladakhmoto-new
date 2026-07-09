
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const indusValley: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Indus Valley',
    slug: 'indus-valley',
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
                text: 'Where civilization flows through the mountains.',
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
                text: 'The Indus Valley is the lifeline of Ladakh, shaped by the mighty Indus River that has sustained civilizations for thousands of years. Dotted with ancient monasteries, traditional villages, fertile fields, and dramatic mountain backdrops, the valley showcases the rich cultural heritage and stunning natural beauty of the region.',
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
        image: mediaMap['indus-valley-gallery-image-1.webp'],
        caption: 'Indus Valley Gallery Image 1',
      },
      {
        image: mediaMap['indus-valley-gallery-image-2.webp'],
        caption: 'Indus Valley Gallery Image 2',
      },
      {
        image: mediaMap['indus-valley-gallery-image-3.webp'],
        caption: 'Indus Valley Gallery Image 3',
      },
      {
        image: mediaMap['indus-valley-gallery-image-4.webp'],
        caption: 'Indus Valley Gallery Image 4',
      },
      {
        image: mediaMap['indus-valley-gallery-image-5.webp'],
        caption: 'Indus Valley Gallery Image 5',
      },
      {
        image: mediaMap['indus-valley-gallery-image-6.webp'],
        caption: 'Indus Valley Gallery Image 6',
      },
      {
        image: mediaMap['indus-valley-gallery-image-7.webp'],
        caption: 'Indus Valley Gallery Image 7',
      },
      {
        image: mediaMap['indus-valley-gallery-image-8.webp'],
        caption: 'Indus Valley Gallery Image 8',
      },
      {
        image: mediaMap['indus-valley-gallery-image-9.webp'],
        caption: 'Indus Valley Gallery Image 9',
      },
      {
        image: mediaMap['indus-valley-gallery-image-10.webp'],
        caption: 'Indus Valley Gallery Image 10',
      },
    ],
  }
}
