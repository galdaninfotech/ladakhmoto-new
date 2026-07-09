 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const blogPost1: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  mediaMap,
  author,
}) => {
  return {
    slug: "leh-ladakh-adventure-6-days-epic-rides",
    excerpt: "Ladakh Moto's Leh Ladakh Adventure tour delivers six days of pure thrill across rugged terrains, from Leh to Khardung La, Nubra Valley, and Pangong Lake. Riders tackle high passes and desert trails on reliable bikes, with stays in cozy hotels or camps and meals to fuel the journey.",
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
                text: 'Leh Ladakh Adventure: 6 Days of Epic Rides',
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
                text: "Ladakh Moto's Leh Ladakh Adventure tour delivers six days of pure thrill across rugged terrains, from Leh to Khardung La, Nubra Valley, and Pangong Lake. Riders tackle high passes and desert trails on reliable bikes, with stays in cozy hotels or camps and meals to fuel the journey. Local guides ensure every twist reveals authentic Himalayan magic.",
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
                text: "The adventure kicks off with acclimatization in Leh, then surges to Diskit Monastery and camel safaris in Nubra's sand dunes. Pangong Lake's turquoise shores offer starry nights under vast skies, blending adrenaline with serene moments. Backup vehicles and mechanics handle the demanding roads seamlessly.",
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
                text: "Safety remains paramount, with oxygen support, first aid kits, and experienced Ladakhi marshals like those navigating Mandalchan stays. Cultural pit stops at monasteries add spiritual depth to the ride. This loop captures Ladakh's raw beauty for solo explorers or groups.",
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
                text: "Join Ladakh Moto for a responsible adventure that supports local communities. Create lasting memories amid lunar landscapes and unbreakable bonds forged on the road.",
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
    heroImage: mediaMap['slide1.webp'],
    creditText: 'Ladakh Moto',
    meta: {
      description: "Ladakh Moto's Leh Ladakh Adventure tour delivers six days of pure thrill across rugged terrains, from Leh to Khardung La, Nubra Valley, and Pangong Lake. Riders tackle high passes and desert trails on reliable bikes, with stays in cozy hotels or camps and meals to fuel the journey. Local guides ensure every twist reveals authentic Himalayan magic.",
      image: mediaMap['slide1.webp'],
      title: "Leh Ladakh Adventure: 6 Days of Epic Rides",
    },
    relatedPosts: [], // this is populated by the seed script
    title: "Leh Ladakh Adventure: 6 Days of Epic Rides",
  }
}
