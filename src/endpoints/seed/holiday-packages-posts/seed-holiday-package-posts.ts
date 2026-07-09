 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'

import { allLadakhTour } from './all-ladakh-tour'
import { amazingLadakhTour } from './amazing-ladakh-tour'
import { ladakhTourWithHanle } from './ladakh-tour-with-hanle'
import { ladakhZanskarValley } from './ladakh-zanskar-valley'

export const seedHolidayPackagePosts = async ({
  payload,
  req,
  mediaMap,
  demoAuthor,
  highlightsMap,
  hotelsMap,
}: {
  payload: Payload
  req: PayloadRequest
  mediaMap: Record<string, any>
  demoAuthor: any
  highlightsMap: Record<string, any>
  hotelsMap: Record<string, any>
}) => {
  payload.logger.info(`— Seeding holiday package posts...`)

  await payload.create({
    collection: 'holidayPackages',
    depth: 0,
    draft: false,
    context: req.context,
    data: allLadakhTour({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'holidayPackages',
    depth: 0,
    draft: false,
    context: req.context,
    data: amazingLadakhTour({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'holidayPackages',
    depth: 0,
    draft: false,
    context: req.context,
    data: ladakhTourWithHanle({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'holidayPackages',
    depth: 0,
    draft: false,
    context: req.context,
    data: ladakhZanskarValley({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })
}
