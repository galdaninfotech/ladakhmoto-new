import React from 'react'
import { HolidayPackages } from './Component.client'
import { getCachedFeaturedHolidayPackages } from '@/utilities/getHolidayPackages'

async function HolidayPackagesComponent() {
  const featuredHolidayPackages = await getCachedFeaturedHolidayPackages()

  return <HolidayPackages holidayPackagesData={featuredHolidayPackages} />
}

export default HolidayPackagesComponent