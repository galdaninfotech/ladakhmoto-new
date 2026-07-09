 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'

import { hanleVillage } from './hanle-village'
import { lamayuruMonastery } from './lamayuru-monastery'
import { lehCity } from './leh-city'
import { nubraValley } from './nubra-valley'
import { pangongLake } from './pangong-lake'
import { shantiStupa } from './shanti-stupa'
import { thikseyMonastery } from './thiksey-monastery'
import { tsomoririLake } from './tsomoriri-lake'
import { zanskarValley } from './zanskar-valley'

export const seedDestinationPosts = async ({
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
  payload.logger.info(`— Seeding destination posts...`)

  const hanleVillageDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: hanleVillage({ mediaMap, author: demoAuthor }),
  })
  
  const lamayuruMonasteryDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: lamayuruMonastery({ mediaMap, author: demoAuthor }),
  })
  
  const lehCityDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: lehCity({ mediaMap, author: demoAuthor }),
  })

  const nubraValleyDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: nubraValley({ mediaMap, author: demoAuthor }),
  })

  const pangongLakeDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: pangongLake({ mediaMap, author: demoAuthor }),
  })

  const shantiStupaDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: shantiStupa({ mediaMap, author: demoAuthor }),
  })

  const thikseyMonasteryDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: thikseyMonastery({ mediaMap, author: demoAuthor }),
  })

  const tsomoririLakeDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: tsomoririLake({ mediaMap, author: demoAuthor }),
  })

  const zanskarValleyDoc = await payload.create({
    collection: 'destinations',
    depth: 0,
    draft: false,
    context: req.context,
    data: zanskarValley({ mediaMap, author: demoAuthor }),
  })

  return { lehCityDoc, hanleVillageDoc, lamayuruMonasteryDoc, nubraValleyDoc, pangongLakeDoc, shantiStupaDoc, thikseyMonasteryDoc, tsomoririLakeDoc, zanskarValleyDoc }
}
