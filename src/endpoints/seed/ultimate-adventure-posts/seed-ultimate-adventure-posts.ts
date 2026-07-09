 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'

import { ladakhHimalayanAdventure } from './ladakh-himalayan-adventure'
import { ladakhHimalayanGrandLoop } from './ladakh-himalayan-grand-loop'

export const seedUltimateAdventurePosts = async ({
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
  payload.logger.info(`— Seeding ultimate adventure posts...`)


  await payload.create({
    collection: 'ultimateAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: ladakhHimalayanAdventure({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'ultimateAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: ladakhHimalayanGrandLoop({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })
}
