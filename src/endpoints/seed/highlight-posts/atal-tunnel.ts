
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  mediaMap: Record<string, any>
  author: User
}

export const atalTunnel: (args: PostArgs) => RequiredDataFromCollectionSlug<'highlights'> = ({ mediaMap, author }) => {
  return {
    title: 'Atal Tunnel',
    slug: 'atal-tunnel',
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
                text: 'Engineering through the heart of the Himalayas.',
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
                text: 'Atal Tunnel is one of the world\'s longest highway tunnels above 10,000 feet, stretching beneath the Pir Panjal range to connect Manali with the Lahaul Valley. This engineering marvel significantly reduces travel time while offering travelers a seamless journey through the Himalayas and access to some of the region\'s most spectacular landscapes.',
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
        image: mediaMap['atal-tunnel-gallery-image-1.webp'],
        caption: 'Atal Tunnel Gallery Image 1',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-2.webp'],
        caption: 'Atal Tunnel Gallery Image 2',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-3.webp'],
        caption: 'Atal Tunnel Gallery Image 3',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-4.webp'],
        caption: 'Atal Tunnel Gallery Image 4',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-5.webp'],
        caption: 'Atal Tunnel Gallery Image 5',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-6.webp'],
        caption: 'Atal Tunnel Gallery Image 6',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-7.webp'],
        caption: 'Atal Tunnel Gallery Image 7',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-8.webp'],
        caption: 'Atal Tunnel Gallery Image 8',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-9.webp'],
        caption: 'Atal Tunnel Gallery Image 9',
      },
      {
        image: mediaMap['atal-tunnel-gallery-image-10.webp'],
        caption: 'Atal Tunnel Gallery Image 10',
      },
    ],
  }
}
