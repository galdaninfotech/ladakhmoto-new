
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const indoPakBorderThang: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Indo-Pak Border Thang',
    slug: 'indo-pak-border-thang',
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
                text: 'At the edge of history and geography',
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
                text: 'The Indo-Pak Border near Turtuk offers visitors a rare opportunity to witness one of India\'s most strategically important frontier regions. Surrounded by the rugged Karakoram Mountains, the area provides insight into the region\'s history, geopolitics, and the vital role played by the Indian Armed Forces in safeguarding the border.',
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
        image: mediaMap['indo-pak-border-thang-gallery-image-1.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 1',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-2.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 2',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-3.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 3',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-4.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 4',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-5.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 5',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-6.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 6',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-7.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 7',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-8.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 8',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-9.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 9',
      },
      {
        image: mediaMap['indo-pak-border-thang-gallery-image-10.webp'],
        caption: 'Indo-Pak Border Thang Gallery Image 10',
      },
    ],
  }
}
