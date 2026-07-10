 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media, Page } from '@/payload-types'

type HomeArgs = {
  mediaMap: Record<string, any>
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  mediaMap,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'highImpact',
      slides: [
        {
          image: mediaMap['slide1.webp'],
          title: 'Magnificent Pangong Lake',
          subtitle: 'The Ultimate Summer Deal',
          offerTitle: 'Starting At ₹15,500.00',
          offerDescription: 'Hotel | Meal | Bike | Fuel | Mechanic and Backup Vehicle',
          offerBtnText: 'View Deal',
          offerUrl: '/bike-tours/leh-ladakh-adventure',
          cta1Text: 'Call Us',
          cta2Text: 'Book Now',
        },
        {
          image: mediaMap['slide2.webp'],
          title: 'Conquest of Umling La',
          subtitle: 'Ride At 19,024 Feet',
          offerTitle: 'Starting At ₹35,500.00',
          offerDescription: 'Hotel | Bike & Fuel | Backup SUV | Oxygen Support',
          offerBtnText: 'Explore',
          offerUrl: '/bike-tours/ladakh-with-umlingla',
          cta1Text: 'Call Us',
          cta2Text: 'Book Now',
        },
        {
          image: mediaMap['slide3.webp'],
          title: 'Mystic Valleys of Ladakh',
          subtitle: 'Premium Family Package',
          offerTitle: 'Starting At ₹18,500.00',
          offerDescription: 'Hotel | Private Transport | Local Guide | Permits',
          offerBtnText: 'Customize',
          offerUrl: '/holiday-packages',
          cta1Text: 'Call Us',
          cta2Text: 'Book Now',
        },
        {
          image: mediaMap['slide4.webp'],
          title: 'The Untamed Zanskar',
          subtitle: 'Off-road Biking Excitement',
          offerTitle: 'Starting At ₹29,000.00',
          offerDescription: 'Bikes | Camping | Food | Fuel | Mechanical Support',
          offerBtnText: 'Claim Offer',
          offerUrl: '/bike-tours/leh-zanskar-leh',
          cta1Text: 'Call Us',
          cta2Text: 'Book Now',
        },
        {
          image: mediaMap['slide5.webp'],
          title: 'Trans-Himalayan Odyssey',
          subtitle: 'Srinagar, Leh, Manali Loop',
          offerTitle: 'Starting At ₹43,000.00',
          offerDescription: 'Hotel | Meal | Bike | Fuel | Mechanic and Backup Vehicle',
          offerBtnText: 'Get Quote',
          offerUrl: '/bike-tours/srinagar-leh-manali',
          cta1Text: 'Call Us',
          cta2Text: 'Book Now',
        },
      ].filter(slide => slide.image),
    },
    layout: [
      {
        blockName: null,
        blockType: 'companyIntro',
        enabled: true,
        title: 'Why Choose Ladakh Moto?',
        subTitle: 'Authentic Adventures Guided By Locals',
        content: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Ladakh Moto is a local company located in the center of Leh, Ladakh and a trusted choice for Leh Ladakh bike tours and adventure travel in the region. As local travel experts, we provide authentic and seamless travel experiences with full accountability and deep knowledge of Ladakh. Please read more to know why to choose Ladakh Moto?',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
        readMore: {
          root: {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: "Being a direct provider ensures personalized service, immediate support, and careful attention to detail so your entire journey runs smoothly. Whether you're planning one of our bike tours across Ladakh, need a road captain, or require mechanical support, our experienced local team is here to help.",
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: "Why choose Ladakh Moto? Because when you travel with us, you not only experience an unforgettable adventure through Leh and Ladakh, you also support a local enterprise committed to responsible and sustainable tourism.",
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: null,
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
                textFormat: 0,
                textStyle: '',
              },
            ],
            direction: null,
            format: '',
            indent: 0,
            type: 'root',
            version: 1,
          },
        },
      },
      {
        enabled: true,
        title: null,
        limit: 6,
        blockName: null,
        blockType: 'adventureRides',
        categories: [],
      },
      {
        enabled: true,
        title: 'Ultimate Ladakh Adventures',
        subtitle: 'Experience the most challenging and scenic routes of the Himalayas with our handpicked ultimate tours.',
        blockName: null,
        blockType: 'ultimateAdventuresBlock',
      },
      {
        enabled: true,
        title: null,
        limit: 6,
        blockName: null,
        blockType: 'holidayPackages',
        categories: [],
      },
      {
        enabled: true,
        title: null,
        blockName: null,
        blockType: 'highlightsBlock',
      },
      {
        enabled: true,
        title: null,
        blockName: null,
        blockType: 'hotelsBlock',
      },
      {
        enabled: true,
        title: null,
        blockName: null,
        blockType: 'team',
      },
    ],
    meta: {
      description:
        'Ladakh Moto is a local travel agency in Ladakh specializing in motorcycle tours, adventure rides, and customized bike tour packages in and around Leh',
      image: mediaMap['slide1.webp'],
      title: 'Local Travel Experts for Leh Ladakh Bike Tours | Ladakh Moto',
    },
    title: 'Home',
  }
}
