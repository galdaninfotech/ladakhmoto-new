import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

import { ContentWithMedia } from '@/blocks/ContentWithMedia/Component';
import { Gallery } from '@/blocks/Gallery/Component';
import { CompanyIntro } from '@/blocks/CompanyIntro/Component';
import AdventureRidesComponent from '@/blocks/AdventureRides/Component';
import HolidayPackagesComponent from '@/blocks/HolidayPackages/Component';
import UltimateAdventuresComponent from '@/blocks/UltimateAdventures/Component';
import TeamComponent from '@/blocks/Team/Component';
import { ContactForm } from '@/blocks/ContactForm/Component';
import HotelsComponent from '@/blocks/Hotels/Component';
import HighlightsComponent from '@/blocks/Highlights/Component';
import { DealOfTheDay } from '@/blocks/DealOfTheDay/Component';

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  contentWithMedia: ContentWithMedia,
  gallery: Gallery,
  companyIntro: CompanyIntro,
  adventureRides: AdventureRidesComponent,
  holidayPackages: HolidayPackagesComponent,
  ultimateAdventuresBlock: UltimateAdventuresComponent,
  team: TeamComponent,
  contactForm: ContactForm,
  hotelsBlock: HotelsComponent,
  highlightsBlock: HighlightsComponent,
  dealOfTheDay: DealOfTheDay,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <section className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </section>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
