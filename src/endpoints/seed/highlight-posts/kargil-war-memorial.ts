
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const kargilWarMemorial: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Kargil War Memorial',
    slug: 'kargil-war-memorial',
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
                text: 'A tribute to courage and sacrifice.',
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
                text: 'The Kargil War Memorial, located at the foothills of the Tololing Range near Drass, stands as a tribute to the brave Indian soldiers who sacrificed their lives during the 1999 Kargil War. Featuring a museum, war exhibits, and the iconic pink sandstone memorial, it offers visitors a moving and inspiring insight into India\'s military history and the valor of its armed forces.',
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
        image: mediaMap['kargil-war-memorial-gallery-image-1.webp'],
        caption: 'Kargil War Memorial Gallery Image 1',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-2.webp'],
        caption: 'Kargil War Memorial Gallery Image 2',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-3.webp'],
        caption: 'Kargil War Memorial Gallery Image 3',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-4.webp'],
        caption: 'Kargil War Memorial Gallery Image 4',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-5.webp'],
        caption: 'Kargil War Memorial Gallery Image 5',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-6.webp'],
        caption: 'Kargil War Memorial Gallery Image 6',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-7.webp'],
        caption: 'Kargil War Memorial Gallery Image 7',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-8.webp'],
        caption: 'Kargil War Memorial Gallery Image 8',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-9.webp'],
        caption: 'Kargil War Memorial Gallery Image 9',
      },
      {
        image: mediaMap['kargil-war-memorial-gallery-image-10.webp'],
        caption: 'Kargil War Memorial Gallery Image 10',
      },
    ],
  }
}
