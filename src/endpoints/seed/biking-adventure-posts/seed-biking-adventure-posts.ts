 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'

import { ladakhSrinagarWithUmlingla } from './ladakh-srinagar-with-umlingla'
import { ladakhWithUmlingla } from './ladakh-with-umlingla'
import { lehLadakhAdventure } from './leh-ladakh-adventure'
import { lehLadakhWithTurtuk } from './leh-ladakh-with-turtuk'
import { lehZanskarLeh } from './leh-zanskar-leh'
import { manaliLehSrinagar } from './manali-leh-srinagar'
import { manaliLehWithUmlingla } from './manali-leh-with-umlingla'
import { srinagarLehManali } from './srinagar-leh-manali'


export const seedBikingAdventurePosts = async ({
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
  payload.logger.info(`— Seeding biking adventure posts...`)

  await payload.create({
    collection: 'bikingAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: ladakhSrinagarWithUmlingla({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'bikingAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: ladakhWithUmlingla({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'bikingAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: lehLadakhAdventure({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'bikingAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: lehLadakhWithTurtuk({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'bikingAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: lehZanskarLeh({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'bikingAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: manaliLehSrinagar({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'bikingAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: manaliLehWithUmlingla({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

  await payload.create({
    collection: 'bikingAdventures',
    depth: 0,
    draft: false,
    context: req.context,
    data: srinagarLehManali({ mediaMap, author: demoAuthor, highlightsMap, hotelsMap }),
  })

}
