import type { Metadata } from 'next'
import { getSiteURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Ladakh Moto is a local biking adventure company based in Ladakh, who provides authentic and seamless biking experiences for riders from around the world.',
  images: [
    {
      url: `${getSiteURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Ladakh Moto',
  title: 'Ladakh Moto',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
