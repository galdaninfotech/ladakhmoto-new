
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'

import { mandalchanHotel } from './mandalchan-hotel'
import { fossilResort } from './fossil-resort'
import { goldropCamp } from './goldrop-camp'
import { guaHomestay } from './gua-homestay'
import { kenilworthInternational } from './kenilworth-international'
import { mountainChalet } from './mountain-chalet'
import { royalGasho } from './royal-gasho'


export const seedHotelPosts = async ({
  payload,
  req,
  mediaMap,
  demoAuthor,
}: {
  payload: Payload
  req: PayloadRequest
  mediaMap: Record<string, any>
  demoAuthor: any
}) => {
  payload.logger.info(`— Seeding hotel posts...`)

  const mandalchanHotelDoc = await payload.create({
    collection: 'hotels',
    depth: 0,
    draft: false,
    context: req.context,
    data: mandalchanHotel({ mediaMap, author: demoAuthor }),
  })

  const fossilResortDoc = await payload.create({
    collection: 'hotels',
    depth: 0,
    draft: false,
    context: req.context,
    data: fossilResort({ mediaMap, author: demoAuthor }),
  })

  const goldropCampDoc = await payload.create({
    collection: 'hotels',
    depth: 0,
    draft: false,
    context: req.context,
    data: goldropCamp({ mediaMap, author: demoAuthor }),
  })

  const guaHomestayDoc = await payload.create({
    collection: 'hotels',
    depth: 0,
    draft: false,
    context: req.context,
    data: guaHomestay({ mediaMap, author: demoAuthor }),
  })

  const kenilworthInternationalDoc = await payload.create({
    collection: 'hotels',
    depth: 0,
    draft: false,
    context: req.context,
    data: kenilworthInternational({ mediaMap, author: demoAuthor }),
  })

  const mountainChaletDoc = await payload.create({
    collection: 'hotels',
    depth: 0,
    draft: false,
    context: req.context,
    data: mountainChalet({ mediaMap, author: demoAuthor }),
  })

  const royalGashoDoc = await payload.create({
    collection: 'hotels',
    depth: 0,
    draft: false,
    context: req.context,
    data: royalGasho({ mediaMap, author: demoAuthor }),
  })




  
  return {
    hotelsMap: {
      'mandalchan-hotel': mandalchanHotelDoc,
      'fossil-resort': fossilResortDoc,
      'goldrop-camp': goldropCampDoc,
      'gua-homestay': guaHomestayDoc,
      'kenilworth-international': kenilworthInternationalDoc,
      'mountain-chalet': mountainChaletDoc,
      'royal-gasho': royalGashoDoc,
    },
  }
}
