 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, any>
}

export const termsAndConditions:(args:PageArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap
}) => {
  return {
    slug: 'terms-and-conditions',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      slides: [
        {
          title: 'Terms & Conditions',
          subtitle: '',
          image: mediaMap['terms-and-conditions-slide.webp'],
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
                  text: 'Terms & Conditions',
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
        // media: topContentImage.id,
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
                    text: 'Last Updated: December 8, 2025',
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
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'By accessing ladakhmoto.com or booking motorbike tours, you agree to these Terms and Conditions. Ladakh Moto provides adventure services in Leh Ladakh, including routes like Manali-Leh-Srinagar, with local guides, mechanics, and support for high-altitude rides.​',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Booking and Payments',
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
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Bookings require full details and confirmation via email or form. Participants must be 18+, physically fit for rugged terrains, high passes like Khardung La, and altitudes over 18,000 ft. Cancellations incur fees: 50% within 30 days, full after 15 days. No refunds for no-shows or weather-related changes.​​',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Tour Conduct and Risks',
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
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Riders follow marshal instructions, wear safety gear, and respect local customs. Ladakh Moto supplies bikes, backups, oxygen, and first aid but disclaims liability for accidents, injuries, delays from landslides, road closures, or altitude sickness. Comprehensive travel insurance is mandatory.​​​',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Liability and Cancellations',
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
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Tours depend on permits, weather, and conditions; changes may occur without notice. Ladakh Moto limits liability for third-party services like accommodations in Nubra or Pangong. Force majeure events void obligations.​',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
              },

              {
                type: 'heading',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Site Use and Governing Law',
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
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Site content is for information; no warranties on accuracy. Unauthorized use of images or text prohibited. These terms are governed by Indian law. Contact us for disputes.​',
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
      description: 'Read Ladakh Moto’s Terms & Conditions covering bookings, cancellations, payments, liabilities, and travel policies for motorcycle tours in Ladakh.',
      image: mediaMap['terms-and-conditions-slide.webp'],
      title: 'Terms & Conditions - Ladakh Moto Policies & Booking Terms',
    },
    title: 'Terms & Conditions',
  }
}
