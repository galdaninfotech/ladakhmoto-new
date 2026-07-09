
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const shantiStupa: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Shanti Stupa',
    slug: 'shanti-stupa',
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
                text: 'Peace above the clouds',
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
                text: 'Shanti Stupa is a beautiful white-domed Buddhist monument perched on a hilltop overlooking Leh. Built to promote world peace and prosperity, it offers breathtaking panoramic views of Leh town, the Indus Valley, and the surrounding Himalayan mountains, making it one of Ladakh\'s most iconic landmarks.',
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
        image: mediaMap['shanti-stupa-gallery-image-1.webp'],
        caption: 'Shanti Stupa Gallery Image 1',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-2.webp'],
        caption: 'Shanti Stupa Gallery Image 2',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-3.webp'],
        caption: 'Shanti Stupa Gallery Image 3',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-4.webp'],
        caption: 'Shanti Stupa Gallery Image 4',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-5.webp'],
        caption: 'Shanti Stupa Gallery Image 5',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-6.webp'],
        caption: 'Shanti Stupa Gallery Image 6',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-7.webp'],
        caption: 'Shanti Stupa Gallery Image 7',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-8.webp'],
        caption: 'Shanti Stupa Gallery Image 8',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-9.webp'],
        caption: 'Shanti Stupa Gallery Image 9',
      },
      {
        image: mediaMap['shanti-stupa-gallery-image-10.webp'],
        caption: 'Shanti Stupa Gallery Image 10',
      },
    ],
  }
}
