 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'
import type { GalleryBlock } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
  galleryImages: GalleryBlock
}

export const gallery: (args: PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap,
  galleryImages,
}) => {
  return {
    slug: 'gallery',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Gallery',
          subtitle: '',
          image: mediaMap['gallery-slide.webp'],
        },
      ],
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Gallery',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        // media: mediaMap['gallery-content.webp'],
        mediaPosition: 'right',
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Explore our collection of moments from various expeditions and activities in Ladakh.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
      {
        ...galleryImages,
        enabled: true,
        blockName: null,
      },
    ],
    meta: {
      description: 'Explore our Gallery — stunning photos and videos capturing breathtaking landscapes, epic biking adventures, culture, and traveler moments from Ladakh.',
      image: mediaMap['gallery-slide.webp'],
      title: 'Gallery - Photos & Videos of Ladakh Bike Tours | Ladakh Moto',
    },
    title: 'Gallery',
  }
}
