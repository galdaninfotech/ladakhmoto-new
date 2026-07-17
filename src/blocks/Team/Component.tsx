import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { TeamCarousel } from './TeamCarousel'

async function TeamComponent() {
  const payload = await getPayload({ config: configPromise })

  const team = await payload.find({
    collection: 'users',
    depth: 1,
    limit: 100,
    select: {
      avatar: true,
      name: true,
      designation: true,
      bio: true,
    },
    where: {
      name: {
        not_equals: 'Admin',
      },
    },
  })

  return (
    <div className="container mx-auto mb-6 my-32">
      <div className="relative intro flex flex-col items-center justify-center mb-12">
        <h2 className="font-oswald text-[16px] md:text-xl uppercase text-foreground">Ladakh Moto Team</h2>
        <span className="absolute -bottom-1 w-full h-px bg-accent/50" />
      </div>

      <p className="text-muted-foreground text-xs font-sans font-light tracking-wide mx-auto -mt-6 mb-12">
        Meet our expert team of certified tour captains, veteran marshals, and local guides, all dedicated to making your Himalayan ride safe, seamless, and unforgettable.
      </p>

      {team.docs && <TeamCarousel members={team.docs as any} />}
    </div>
  )
}

export default TeamComponent

