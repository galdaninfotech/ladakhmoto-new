import React from 'react'
import { HolidayPackages } from './Component.client'
import { getCachedFeaturedHolidayPackages } from '@/utilities/getHolidayPackages'

async function HolidayPackagesComponent({ title }: { title?: string }) {
  const featuredHolidayPackages = await getCachedFeaturedHolidayPackages()

  return <HolidayPackages holidayPackagesData={featuredHolidayPackages} title={title} />
}

export default HolidayPackagesComponent