import type { Post, Media, User, BikingAdventure, HolidayPackage, Destination, Page, LadakhMoto, UltimateAdventure, Highlight } from '@/payload-types'
import React from 'react'
import { getSiteURL } from '@/utilities/getURL'

const getAbsoluteURL = (url?: string | null) => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  const serverUrl = getSiteURL()
  return `${serverUrl.endsWith('/') ? serverUrl.slice(0, -1) : serverUrl}${url.startsWith('/') ? url : `/${url}`}`
}

export const articleSchema = (props: Partial<Post>) => {
  const image = props.meta?.image as Media
  const authors = props.authors as User[]
  const url = getAbsoluteURL(`/posts/${props.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: props.title,
    datePublished: props.createdAt ? new Date(props.createdAt) : undefined,
    dateModified: props.updatedAt ? new Date(props.updatedAt) : undefined,
    image: image?.url ? [getAbsoluteURL(image.url)] : [],
    author: authors?.map((author) => ({
      '@type': 'Person',
      name: author.name,
      sameAs: ['https://www.youtube.com/@ladakhmoto'],
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Ladakh Moto',
      logo: {
        '@type': 'ImageObject',
        url: getAbsoluteURL('/images/logo.webp'),
      },
    },
  }
}

export const imageSchema = (props: Media) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: getAbsoluteURL(props.url),
    creditText: props.creditText,
  }
}

export const tourSchema = (
  props: Partial<BikingAdventure> | Partial<HolidayPackage> | Partial<UltimateAdventure>,
  isUltimateAdventure?: boolean,
) => {
  const bikingProps = props as Partial<BikingAdventure>
  const holidayProps = props as Partial<HolidayPackage>
  const ultimateProps = props as Partial<UltimateAdventure>

  // Identify if it's an ultimate adventure based on explicit flag or structure
  const hasDates = 'dates' in props && props.dates !== undefined
  
  const image = (props.meta?.image || bikingProps.heroImage || holidayProps.heroImage || ultimateProps.heroImage) as Media
  
  // Prefix logic
  let slugPrefix = '/bike-tours'
  if (isUltimateAdventure) {
    slugPrefix = '/ultimate-adventures'
  } else if (!hasDates) {
    slugPrefix = '/holiday-packages'
  }
  
  const url = getAbsoluteURL(`${slugPrefix}/${props.slug}`)

  // Calculate priceValidUntil from the last available date (only for biking adventures)
  const dates = (bikingProps.dates || ultimateProps.dates || []) as any[]
  let lastDate: string | null = null;
  
  if (dates.length > 0) {
    lastDate = dates.reduce((latest: string | null, current: any) => {
      const currentDate = current.end
      if (!currentDate) return latest
      if (!latest) return currentDate
      return new Date(currentDate) > new Date(latest) ? currentDate : latest
    }, dates[0]?.end || null)
  }

  // Fallback to 1 year from now if no valid end date found
  const fallbackDate = new Date()
  fallbackDate.setFullYear(fallbackDate.getFullYear() + 1)
  const finalPriceValidUntil = lastDate && !isNaN(new Date(lastDate).getTime())
    ? new Date(lastDate).toISOString().split('T')[0]
    : fallbackDate.toISOString().split('T')[0]

  const costs = (bikingProps.cost || holidayProps.cost || ultimateProps.cost || []) as any[]

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.title,
    description: props.meta?.description || '',
    image: image?.url ? [getAbsoluteURL(image.url)] : [],
    brand: {
      '@type': 'Brand',
      name: 'Ladakh Moto',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '24',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Amit Kumar',
      },
    },
    offers: costs.map((c: any) => ({
      '@type': 'Offer',
      url: url,
      price: c.costPerPerson,
      priceCurrency: 'INR',
      priceValidUntil: finalPriceValidUntil,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Ladakh Moto',
      },
    })),
  }
}

export const destinationSchema = (props: Partial<Destination>) => {
  const image = (props.meta?.image || props.heroImage) as Media
  const url = getAbsoluteURL(`/destinations/${props.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    name: props.title,
    description: props.meta?.description || props.subTitle || '',
    image: image?.url ? [getAbsoluteURL(image.url)] : [],
  }
}

export const highlightSchema = (props: Partial<Highlight>) => {
  const image = props.meta?.image as Media
  const url = getAbsoluteURL(`/highlights/${props.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    name: props.title,
    description: props.meta?.description || '',
    image: image?.url ? [getAbsoluteURL(image.url)] : [],
  }
}

export const pageSchema = (props: Partial<Page>) => {
  const image = props.meta?.image as Media
  const url = getAbsoluteURL(`/${props.slug === 'home' ? '' : props.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    name: props.title,
    description: props.meta?.description || '',
    image: image?.url ? [getAbsoluteURL(image.url)] : [],
    datePublished: props.createdAt ? new Date(props.createdAt) : undefined,
    dateModified: props.updatedAt ? new Date(props.updatedAt) : undefined,
  }
}

export const localBusinessSchema = (data: LadakhMoto) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': getAbsoluteURL('/#localbusiness'),
    name: data.name || 'Ladakh Moto',
    image: getAbsoluteURL('/images/logo.webp'),
    url: getSiteURL(),
    telephone: data.phone1 || '+91-9622958013',
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.addressline1,
      addressLocality: 'Leh',
      addressRegion: 'Ladakh',
      postalCode: '194101',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '34.1642',
      longitude: '77.5848',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '09:00',
        closes: '20:00',
      }
    ],
    sameAs: [
      data.facebook,
      data.instagram,
      data.youtube,
      data.twitter,
    ].filter(Boolean),
  }
}

export const SchemaComponent = ({ data }: { data: object | object[] }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
