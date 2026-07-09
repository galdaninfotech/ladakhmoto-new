
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'

import { acclimatization } from './acclimatization'
import { atalTunnel } from './atal-tunnel'
import { baltiCulture } from './balti-culture'
import { baralachaLaPass } from './baralacha-la-pass'
import { changLaPass } from './chang-la-pass'
import { changthangPlateau } from './changthang-plateau'
import { dalLake } from './dal-lake'
import { diskitMonatery } from './diskit-monastery'
import { drass } from './drass'
import { fotulaPass } from './fotula-pass'
import { gataLoops } from './gata-loops'
import { hadimbaTemple } from './hadimba-temple'
import { hallofFame } from './hall-of-fame'
import { hanleObservatory } from './hanle-observatory'
import { hunderSandDunes } from './hunder-sand-dunes'
import { indoPakBorderThang } from './indo-pak-border-thang'
import { indusValley } from './indus-valley'
import { kargilWarMemorial } from './kargil-war-memorial'
import { keylong } from './keylong'
import { khardongLaPass } from './khardong-la-pass'
import { lamayuruMonastery } from './lamayuru-monastery'
import { lehMarket } from './leh-market'
import { lehPalace } from './leh-palace'
import { magneticHill } from './magnetic-hill'
import { mallRoad } from './mall-road'
import { mughalGardens } from './mughal-gardens'
import { namkilaPass } from './namkila-pass'
import { pangongLake } from './pangong-lake'
import { patharSahib } from './pathar-sahib'
import { remoteVillageHanle } from './remote-village-hanle'
import { shantiStupa } from './shanti-stupa'
import { shyokRiver } from './shyok-river'
import { sonmarg } from './sonmarg'
import { taglanglaPass } from './taglangla-pass'
import { thikseyMonastery } from './thiksey-monastery'
import { turtukVillage } from './turtuk-village'
import { umlinglaPass } from './umlingla-pass'
import { zojilaPass } from './zojila-pass'


export const seedHighlightPosts = async ({
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
  payload.logger.info(`— Seeding highlight posts...`)

  const acclimatizationDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: acclimatization({ mediaMap, author: demoAuthor }),
  })


  const atalTunnelDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: atalTunnel({ mediaMap, author: demoAuthor }),
  })

  const baltiCultureDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: baltiCulture({ mediaMap, author: demoAuthor }),
  })

  const baralachaLaPassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: baralachaLaPass({ mediaMap, author: demoAuthor }),
  })

  const changLaPassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: changLaPass({ mediaMap, author: demoAuthor }),
  })

  const changthangPlateauDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: changthangPlateau({ mediaMap, author: demoAuthor }),
  })

  const dalLakeDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: dalLake({ mediaMap, author: demoAuthor }),
  })

  const diskitMonateryDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: diskitMonatery({ mediaMap, author: demoAuthor }),
  })

  const drassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: drass({ mediaMap, author: demoAuthor }),
  })

  const fotulaPassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: fotulaPass({ mediaMap, author: demoAuthor }),
  })

  const gataLoopsDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: gataLoops({ mediaMap, author: demoAuthor }),
  })

  const hadimbaTempleDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: hadimbaTemple({ mediaMap, author: demoAuthor }),
  })

  const hallofFameDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: hallofFame({ mediaMap, author: demoAuthor }),
  })

  const hanleObservatoryDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: hanleObservatory({ mediaMap, author: demoAuthor }),
  })

  const hunderSandDunesDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: hunderSandDunes({ mediaMap, author: demoAuthor }),
  })

  const indoPakBorderThangDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: indoPakBorderThang({ mediaMap, author: demoAuthor }),
  })

  const indusValleyDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: indusValley({ mediaMap, author: demoAuthor }),
  })

  const kargilWarMemorialDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: kargilWarMemorial({ mediaMap, author: demoAuthor }),
  })

  const keylongDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: keylong({ mediaMap, author: demoAuthor }),
  })

  const khardongLaPassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: khardongLaPass({ mediaMap, author: demoAuthor }),
  })

  const lamayuruMonasteryDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: lamayuruMonastery({ mediaMap, author: demoAuthor }),
  })

  const lehMarketDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: lehMarket({ mediaMap, author: demoAuthor }),
  })

  const lehPalaceDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: lehPalace({ mediaMap, author: demoAuthor }),
  })

  const magneticHillDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: magneticHill({ mediaMap, author: demoAuthor }),
  })

  const mallRoadDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: mallRoad({ mediaMap, author: demoAuthor }),
  })

  const mughalGardensDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: mughalGardens({ mediaMap, author: demoAuthor }),
  })

  const namkilaPassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: namkilaPass({ mediaMap, author: demoAuthor }),
  })

  const pangongLakeDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: pangongLake({ mediaMap, author: demoAuthor }),
  })

  const patharSahibDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: patharSahib({ mediaMap, author: demoAuthor }),
  })

  const remoteVillageHanleDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: remoteVillageHanle({ mediaMap, author: demoAuthor }),
  })

  const shantiStupaDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: shantiStupa({ mediaMap, author: demoAuthor }),
  })

  const shyokRiverDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: shyokRiver({ mediaMap, author: demoAuthor }),
  })

  const sonmargDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: sonmarg({ mediaMap, author: demoAuthor }),
  })

  const taglanglaPassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: taglanglaPass({ mediaMap, author: demoAuthor }),
  })

  const thikseyMonasteryDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: thikseyMonastery({ mediaMap, author: demoAuthor }),
  })

  const turtukVillageDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: turtukVillage({ mediaMap, author: demoAuthor }),
  })

  const umlinglaPassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: umlinglaPass({ mediaMap, author: demoAuthor }),
  })

  const zojilaPassDoc = await payload.create({
    collection: 'highlights',
    depth: 0,
    draft: false,
    context: req.context,
    data: zojilaPass({ mediaMap, author: demoAuthor }),
  })

  return {
    highlightsMap: {
      'acclimatization': acclimatizationDoc,
      'atal-tunnel': atalTunnelDoc,
      'balti-culture': baltiCultureDoc,
      'baralacha-la-pass': baralachaLaPassDoc,
      'chang-la-pass': changLaPassDoc,
      'changthang-plateau': changthangPlateauDoc,
      'dal-lake': dalLakeDoc,
      'diskit-monastery': diskitMonateryDoc,
      'diskit-monatery': diskitMonateryDoc,
      'drass': drassDoc,
      'fotula-pass': fotulaPassDoc,
      'gata-loops': gataLoopsDoc,
      'hadimba-temple': hadimbaTempleDoc,
      'hall-of-fame': hallofFameDoc,
      'hanle-observatory': hanleObservatoryDoc,
      'hunder-sand-dunes': hunderSandDunesDoc,
      'indo-pak-border-thang': indoPakBorderThangDoc,
      'indus-valley': indusValleyDoc,
      'kargil-war-memorial': kargilWarMemorialDoc,
      'keylong': keylongDoc,
      'khardong-la-pass': khardongLaPassDoc,
      'khardung-la-pass': khardongLaPassDoc,
      'lamayuru-monastery': lamayuruMonasteryDoc,
      'leh-market': lehMarketDoc,
      'leh-palace': lehPalaceDoc,
      'magnetic-hill': magneticHillDoc,
      'mall-road': mallRoadDoc,
      'mughal-gardens': mughalGardensDoc,
      'namkila-pass': namkilaPassDoc,
      'pangong-lake': pangongLakeDoc,
      'pathar-sahib': patharSahibDoc,
      'remote-village-hanle': remoteVillageHanleDoc,
      'shanti-stupa': shantiStupaDoc,
      'shyok-river': shyokRiverDoc,
      'sonmarg': sonmargDoc,
      'taglangla-pass': taglanglaPassDoc,
      'thiksey-monastery': thikseyMonasteryDoc,
      'turtuk-village': turtukVillageDoc,
      'umlingla-pass': umlinglaPassDoc,
      'umling-la-pass': umlinglaPassDoc,
      'zojila-pass': zojilaPassDoc,
    },
  }
}
