import { cn } from '@/utilities/ui'
import React from 'react'

import { Card } from './Card'

export type Posts = {
  id: number;
  title: string;
  duration?: string | null | undefined;
  distance?: string | null | undefined;
  highestPeak?: string | null | undefined;
  accommodation?: ("hotel" | "resort" | "camp" | "home-stay" | "gh" | "cottage")[] | null | undefined;
  meal?: ("breakfast" | "lunch" | "dinner")[] | null | undefined;
  isFeatured?: boolean | null | undefined;
  startEndCity?: string | null | undefined;
  minCost?: string | null | undefined;
  cutOutCost?: string | null | undefined;
  slug?: string | null | undefined;
}

export const BikingAdventures: React.FC<{ posts: Posts[] }> = ({ posts }) => {

  // console.log(posts)

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card
                    className="h-full"
                    doc={result}
                  />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
