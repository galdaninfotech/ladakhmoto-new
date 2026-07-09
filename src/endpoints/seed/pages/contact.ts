 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const contact:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'contact',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Contact Us',
          subtitle: '',
          image: mediaMap['contact-slide.webp'],
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
                  text: 'Contact',
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
        blockName: 'Contact Form',
        blockType: 'contactForm',
        media: mediaMap['slide1.webp'],
        enabled: true,
        title: 'Contact Us - Ladakh Moto',
        description: 'Do not hesitage leave us a message. We are a team of local experts and we are happy to respond to your queries.',
      },
    ],
    meta: {
      description: 'Get in touch with Ladakh Moto for bike tour bookings, custom itineraries, and travel inquiries. Contact our team to plan an unforgettable Ladakh tour.',
      image: mediaMap['contact-slide.webp'],
      title: 'Contact Us - Ladakh Bike Tour Inquiries | Ladakh Moto',
    },
    title: 'Contact Us',
  }
}
