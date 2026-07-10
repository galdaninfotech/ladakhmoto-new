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
      <div className="intro flex flex-col items-center justify-center mb-12">
        <h2 className="font-oswald text-[16px] md:text-xl uppercase text-foreground">Ladakh Moto Team</h2>
      </div>

      {team.docs && <TeamCarousel members={team.docs as any} />}
    </div>
  )
}

export default TeamComponent

