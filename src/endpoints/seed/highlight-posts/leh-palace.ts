
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const lehPalace: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Leh Palace',
    slug: 'leh-palace',
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
                text: 'A royal window into Ladakh\'s past',
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
                text: 'Leh Palace is a 17th-century royal palace that once served as the residence of Ladakh\'s kings. Overlooking Leh town, this historic nine-story structure offers fascinating insights into Ladakh\'s rich heritage, traditional architecture, and stunning views of the surrounding mountains and valleys.',
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
        image: mediaMap['leh-palace-gallery-image-1.webp'],
        caption: 'Leh Palace Gallery Image 1',
      },
      {
        image: mediaMap['leh-palace-gallery-image-2.webp'],
        caption: 'Leh Palace Gallery Image 2',
      },
      {
        image: mediaMap['leh-palace-gallery-image-3.webp'],
        caption: 'Leh Palace Gallery Image 3',
      },
      {
        image: mediaMap['leh-palace-gallery-image-4.webp'],
        caption: 'Leh Palace Gallery Image 4',
      },
      {
        image: mediaMap['leh-palace-gallery-image-5.webp'],
        caption: 'Leh Palace Gallery Image 5',
      },
      {
        image: mediaMap['leh-palace-gallery-image-6.webp'],
        caption: 'Leh Palace Gallery Image 6',
      },
      {
        image: mediaMap['leh-palace-gallery-image-7.webp'],
        caption: 'Leh Palace Gallery Image 7',
      },
      {
        image: mediaMap['leh-palace-gallery-image-8.webp'],
        caption: 'Leh Palace Gallery Image 8',
      },
      {
        image: mediaMap['leh-palace-gallery-image-9.webp'],
        caption: 'Leh Palace Gallery Image 9',
      },
      {
        image: mediaMap['leh-palace-gallery-image-10.webp'],
        caption: 'Leh Palace Gallery Image 10',
      },
    ],
  }
}
