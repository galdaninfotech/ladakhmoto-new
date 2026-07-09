 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const blogPost2: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  mediaMap,
  author,
}) => {
  return {
    slug: "conquering-umlingla-8-day-ultimate-quest",
    exccerpt: "Ladakh Moto's Ladakh with Umling La tour spans eight days, pushing to the world's highest motorable pass at Umling La via Nubra, Pangong, and Hanle. Expect hairpin bends, azure lakes, and remote villages, with comfortable camp or hotel nights included.",
    _status: 'published',
    authors: [author],
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
                text: 'Conquering Umling La: 8-Day Ultimate Quest',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: "Ladakh Moto's Ladakh with Umling La tour spans eight days, pushing to the world's highest motorable pass at Umling La via Nubra, Pangong, and Hanle. Expect hairpin bends, azure lakes, and remote villages, with comfortable camp or hotel nights included. Local expertise turns challenges into triumphs.",
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: "Riders ascend through Photi La's panoramas and Hanle's observatory vistas, circling back via stark deserts to fertile valleys. Nubra's double-humped camels and Pangong's reflections create unforgettable contrasts. Marshals lead with precision on unpredictable paths.",
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: "Equipped with walkie-talkies and spares, the team prioritizes rider well-being at extreme altitudes. Stays like Fossil Resort or Dark Sky camps blend adventure with rest. Permits and logistics flow effortlessly for immersive exploration.",
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: "Ladakh Moto crafts this pinnacle ride for thrill-seekers backing sustainable tourism. Summit Umling La and return transformed by Ladakh's isolation and splendor.",
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: mediaMap['slide2.webp'],
    creditText: 'Ladakh Moto',
    meta: {
      description: "Ladakh Moto's Ladakh with Umling La tour spans eight days, pushing to the world's highest motorable pass at Umling La via Nubra, Pangong, and Hanle. Expect hairpin bends, azure lakes, and remote villages, with comfortable camp or hotel nights included. Local expertise turns challenges into triumphs.",
      image: mediaMap['slide2.webp'],
      title: "Conquering Umling La: 8-Day Ultimate Quest",
    },
    relatedPosts: [], // this is populated by the seed script
    title: "Conquering Umling La: 8-Day Ultimate Quest",
  }
}
