 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const blogPost3: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  mediaMap,
  author,
}) => {
  return {
    slug: "manali-to-srinagar-10-day-himalayan-odyssey",
    excerpt: "Ladakh Moto's Manali Leh Srinagar tour traverses 10 days over epic passes like Rohtang, Baralacha, and Zoji La, linking Manali to Srinagar via Nubra and Pangong. Bikes conquer icy climbs and gorges, with camps or hotels providing respite.",
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
                text: 'Manali to Srinagar: 10-Day Himalayan Odyssey',
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
                text: "Ladakh Moto's Manali Leh Srinagar tour traverses 10 days over epic passes like Rohtang, Baralacha, and Zoji La, linking Manali to Srinagar via Nubra and Pangong. Bikes conquer icy climbs and gorges, with camps or hotels providing respite. Direct local support elevates the trans-Himalayan epic.",
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
                text: "From Manali's greens to Leh's plateaus, riders hit Turtuk's borders and Pangong serenity. Tanglang La's switchbacks test skills before descending to Indus River valleys. Monasteries like Thiksey offer cultural anchors amid the ride.",
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
                text: "Airport transfers, mechanics, and bike hires from locals like Phuntsog ensure smooth sailing. Gear and oxygen prepare for high-altitude demands. Groups bond over shared challenges and scenic rewards.",
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
                text: "Choose Ladakh Moto for personalized routes sustaining Ladakh's spirit. Forge legends on this bucket-list traverse through the world's roof.",
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
    heroImage: mediaMap['slide3.webp'],
    creditText: 'Ladakh Moto',
    meta: {
      description: "Ladakh Moto's Manali Leh Srinagar tour traverses 10 days over epic passes like Rohtang, Baralacha, and Zoji La, linking Manali to Srinagar via Nubra and Pangong. Bikes conquer icy climbs and gorges, with camps or hotels providing respite.",
      image: mediaMap['slide3.webp'],
      title: "Manali to Srinagar: 10-Day Himalayan Odyssey",
    },
    relatedPosts: [], // this is populated by the seed script
    title: "Manali to Srinagar: 10-Day Himalayan Odyssey",
  }
}
