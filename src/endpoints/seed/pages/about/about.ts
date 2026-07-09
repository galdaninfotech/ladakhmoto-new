 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const about:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'about',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Authentic Ladakh Experiences',
          subtitle: 'Guided by the people who know the land best.',
          image: mediaMap['about-us-slide.webp'],
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
                  text: 'About Us',
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
        // media: mediaMap['about-us-content.webp'],
        mediaPosition: 'right',
        content: {
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
                    text: 'Authentic Adventures Guided By Locals',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h1',
                version: 1,
              },
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
                    text: 'Ladakh Moto is a local company located right in the center of Leh, Ladakh. We provide authentic and seamless travel experiences with full accountability and a deep-rooted knowledge of the region.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },
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
                    text: 'Being a direct provider is the key, as it ensures you receive personalized service, immediate support and the emphasis on detail is there to make your whole journey a seamless one. Whether you\'re looking to put together a greater route, need a road captain or mechanic, we\'re here for you! With Ladakh Moto you not only receive a piece of memoirs by participating in a memorable adventure, you also support a local enterprise dedicated to responsible, sustainable tourism in Ladakh. Please contact us by phome/email to learn more about us.',
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
    ],
    meta: {
      description: 'Ladakh Moto is a local company located right in Leh, providing authentic travel experiences with our deep-rooted knowledge of the region.',
      image: mediaMap['about-us-slide.webp'],
      title: 'Discover Leh Ladakh with Expert Local Guides - Ladakh Moto',
    },
    title: 'About Us',
  }
}
