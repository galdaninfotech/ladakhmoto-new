import React from 'react'

import type { Page } from '@/payload-types'

export const MediumImpactHero: React.FC<Page['hero']> = ({ slides: _slides }) => {
  return (
    <div className="">
      <div className="container mb-8">
                
      </div>
      {/* <div className="container ">
        {media && typeof media === 'object' && (
          <div>
            <Media
              className="-mx-4 md:-mx-8 2xl:-mx-16"
              imgClassName=""
              priority
              resource={media}
            />
            {media?.caption && (
              <div className="mt-3">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div> */}
    </div>
  )
}