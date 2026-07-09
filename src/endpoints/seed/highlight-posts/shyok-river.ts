
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const shyokRiver: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Shyok River',
    slug: 'shyok-river',
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
                text: 'The lifeline winding through Ladakh\'s wilderness.',
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
                text: 'The Shyok River, often called the "River of Death" due to its challenging terrain and history, flows through some of Ladakh\'s most dramatic landscapes. Surrounded by towering mountains and vast valleys, the river adds a striking contrast to the arid region and offers breathtaking views along the route to Pangong Lake.',
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
        image: mediaMap['shyok-river-gallery-image-1.webp'],
        caption: 'Shyok River Gallery Image 1',
      },
      {
        image: mediaMap['shyok-river-gallery-image-2.webp'],
        caption: 'Shyok River Gallery Image 2',
      },
      {
        image: mediaMap['shyok-river-gallery-image-3.webp'],
        caption: 'Shyok River Gallery Image 3',
      },
      {
        image: mediaMap['shyok-river-gallery-image-4.webp'],
        caption: 'Shyok River Gallery Image 4',
      },
      {
        image: mediaMap['shyok-river-gallery-image-5.webp'],
        caption: 'Shyok River Gallery Image 5',
      },
      {
        image: mediaMap['shyok-river-gallery-image-6.webp'],
        caption: 'Shyok River Gallery Image 6',
      },
      {
        image: mediaMap['shyok-river-gallery-image-7.webp'],
        caption: 'Shyok River Gallery Image 7',
      },
      {
        image: mediaMap['shyok-river-gallery-image-8.webp'],
        caption: 'Shyok River Gallery Image 8',
      },
      {
        image: mediaMap['shyok-river-gallery-image-9.webp'],
        caption: 'Shyok River Gallery Image 9',
      },
      {
        image: mediaMap['shyok-river-gallery-image-10.webp'],
        caption: 'Shyok River Gallery Image 10',
      },
    ],
  }
}
