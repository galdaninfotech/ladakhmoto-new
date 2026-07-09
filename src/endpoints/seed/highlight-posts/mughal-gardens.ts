
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const mughalGardens: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Mughal Gardens',
    slug: 'mughal-gardens',
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
                text: 'Elegance blooming in the Valley of Kashmir.',
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
                text: 'The Mughal Gardens of Srinagar are a collection of beautifully landscaped gardens built during the Mughal era, featuring terraced lawns, cascading fountains, vibrant flowerbeds, and magnificent views of Dal Lake. These historic gardens showcase the elegance of Mughal architecture and provide a peaceful retreat amidst Kashmir\'s natural beauty.',
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
        image: mediaMap['mughal-gardens-gallery-image-1.webp'],
        caption: 'Mughal Gardens Gallery Image 1',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-2.webp'],
        caption: 'Mughal Gardens Gallery Image 2',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-3.webp'],
        caption: 'Mughal Gardens Gallery Image 3',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-4.webp'],
        caption: 'Mughal Gardens Gallery Image 4',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-5.webp'],
        caption: 'Mughal Gardens Gallery Image 5',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-6.webp'],
        caption: 'Mughal Gardens Gallery Image 6',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-7.webp'],
        caption: 'Mughal Gardens Gallery Image 7',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-8.webp'],
        caption: 'Mughal Gardens Gallery Image 8',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-9.webp'],
        caption: 'Mughal Gardens Gallery Image 9',
      },
      {
        image: mediaMap['mughal-gardens-gallery-image-10.webp'],
        caption: 'Mughal Gardens Gallery Image 10',
      },
    ],
  }
}
