 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'

import { home } from './home'

import { about } from './about/about'
import { aboutLadakh } from './about/about-ladakh'
import { ourServices } from './about/our-services'
import { ourTeam } from './about/our-team'

import { gallery } from './gallery'
import { contact } from './contact'
import { disclaimer } from './disclaimer'
import { guidesAndStaffs } from './guides-and-staffs'
import { howToReach } from './how-to-reach'
import { ourCoreValues } from './our-core-values'
import { privacyPolicy } from './privacy-policy'
import { termsAndConditions } from './terms-and-conditions'
import { whyTravelWithUs } from './why-travel-with-us'
import { accessibility } from './accessibility'
import { acclimatization } from './acclimatization'
import { airportCabs } from './airport-cabs'
import { bikeRental } from './bike-rental'
import { businessAssociate } from './business-associate'
import { businessTravel } from './business-travel'
import { carRental } from './car-rental'
import { careersAtLadakhMoto } from './careers-at-ladakh-moto'
import { charitableInitiatives } from './charitable-initiatives'
import { corporateTravel } from './corporate-travel'
import { holidayPackages } from './holiday-packages'
import { hotelBooking } from './hotel-booking'
import { howWeWork } from './how-we-work'
import { internationalPackages } from './international-packages'
import { leadershipTeam } from './leadership-team'
import { manageCookies } from './manage-cookies'
import { newsletter } from './newsletter'
import { premiumAdventures } from './premium-adventures'
import { refundPolicy } from './refund-policy'
import { responsibleTravel } from './responsible-travel'



import { GalleryBlock } from '@/payload-types'


export const seedPages = async ({ payload, req, mediaMap, galleryImageDocs }: {
  payload: Payload
  req: PayloadRequest
  mediaMap: Record<string, any>
  galleryImageDocs: GalleryBlock
}) => {
    payload.logger.info(`— Seeding pages...`)


    // ************************* HOME *************************
    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...home({ mediaMap }),
        _status: 'published',
      },
    })

    // ************************* ABOUT *************************
    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...about({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...aboutLadakh({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...ourServices({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...ourTeam({ mediaMap }),
        _status: 'published',
      },
    })


    
    // ************************* Other Pages *************************
    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...accessibility({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...acclimatization({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...airportCabs({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...bikeRental({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...businessAssociate({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...businessTravel({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...carRental({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...careersAtLadakhMoto({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...charitableInitiatives({ mediaMap }),
        _status: 'published',
      },
    })
    

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...contact({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...gallery({ mediaMap, galleryImages: galleryImageDocs }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...corporateTravel({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...disclaimer({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...guidesAndStaffs({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...holidayPackages({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...hotelBooking({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...howToReach({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...howWeWork({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...internationalPackages({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...leadershipTeam({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...manageCookies({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...newsletter({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...ourCoreValues({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...premiumAdventures({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...privacyPolicy({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...refundPolicy({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...responsibleTravel({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...termsAndConditions({ mediaMap }),
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'pages', depth: 0, context: req.context,
      data: {
        ...whyTravelWithUs({ mediaMap }),
        _status: 'published',
      },
    })

    
    

}