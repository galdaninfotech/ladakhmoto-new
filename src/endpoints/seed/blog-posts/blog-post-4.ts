 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const blogPost4: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  mediaMap,
  author,
}) => {
  return {
    slug: "why-ladakhMoto-leads-bike-adventures",
    excerpt: "Ladakh Moto excels as Leh's hometown provider, delivering seamless motorbike tours with road captains, mechanics, and deep regional knowledge. Packages like Leh Ladakh with Turtuk weave Nubra sands, Pangong blues, and Tso Moriri loops into authentic journeys.",
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
                text: 'Why Ladakh Moto Leads Bike Adventures',
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
                text: "Ladakh Moto excels as Leh's hometown provider, delivering seamless motorbike tours with road captains, mechanics, and deep regional knowledge. Packages like Leh Ladakh with Turtuk weave Nubra sands, Pangong blues, and Tso Moriri loops into authentic journeys. Stay in spots like Skylake or Dream Ville for genuine comfort.",
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
                mode: "normal",
                style: "",
                text: "Past rides highlight efficiency in fuel management, accommodations, and support across 5-17 rider groups. Investments in safety gear and team training shine on routes to Hanle or Umling La. Cultural immersion at Diskit or Lamayuru enriches every kilometer",
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
                mode: "normal",
                style: "",
                text: "Personalized options, from solo tweaks to group dynamics, prioritize adventure and security. Local pros avoid crowds for pristine paths and starry camps. Riders gain insights beyond maps.",
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
                mode: "normal",
                style: "",
                text: "Team up with Ladakh Moto for worry-free epics fueling Ladakh's economy. Direct service means real stories, every throttle twist.",
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
    heroImage: mediaMap['slide4.webp'],
    creditText: 'Ladakh Moto',
    meta: {
      description: "Ladakh Moto excels as Leh's hometown provider, delivering seamless motorbike tours with road captains, mechanics, and deep regional knowledge. Packages like Leh Ladakh with Turtuk weave Nubra sands, Pangong blues, and Tso Moriri loops into authentic journeys.",
      image: mediaMap['slide4.webp'],
      title: "Why Ladakh Moto Leads Bike Adventures",
    },
    relatedPosts: [], // this is populated by the seed script
    title: "Why Ladakh Moto Leads Bike Adventures",
  }
}
