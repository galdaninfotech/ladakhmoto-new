
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const hallofFame: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Hall of Fame',
    slug: 'hall-of-fame',
    publishedAt: "2026-06-21T04:33:56.549Z",
    generateSlug: false,
    updatedAt: "2026-06-21T04:41:56.520Z",
    createdAt: "2026-06-21T04:33:52.363Z",
    _status: "published",
    intro: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,

        children: [
          {
            tag: 'h4',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                mode: 'normal',
                text: 'Honouring the heroes of the Himalayas.',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1,
              },
            ],
            direction: null,
          },
        ],
        direction: null,
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
                text: 'The Hall of Fame is a museum built and maintained by the Indian Army in honor of the brave soldiers who served in Ladakh and the Kargil War. It showcases military history, war memorabilia, local culture, and exhibits highlighting the challenges of life in the high-altitude region, making it both an educational and inspiring visit.',
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
        image: mediaMap['hall-of-fame-gallery-image-1.webp'],
        caption: 'Hall of Fame Gallery Image 1',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-2.webp'],
        caption: 'Hall of Fame Gallery Image 2',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-3.webp'],
        caption: 'Hall of Fame Gallery Image 3',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-4.webp'],
        caption: 'Hall of Fame Gallery Image 4',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-5.webp'],
        caption: 'Hall of Fame Gallery Image 5',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-6.webp'],
        caption: 'Hall of Fame Gallery Image 6',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-7.webp'],
        caption: 'Hall of Fame Gallery Image 7',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-8.webp'],
        caption: 'Hall of Fame Gallery Image 8',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-9.webp'],
        caption: 'Hall of Fame Gallery Image 9',
      },
      {
        image: mediaMap['hall-of-fame-gallery-image-10.webp'],
        caption: 'Hall of Fame Gallery Image 10',
      },
    ],
  }
}
