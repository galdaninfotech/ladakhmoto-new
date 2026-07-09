import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { formatImageUrl } from '@/utilities/formatImageUrl'

export const Icons = async () => {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'settings' })
  const lightModeIcon = settings.lightModeIcon as Media
  const darkModeIcon = settings.darkModeIcon as Media
  const lightIconSrc = lightModeIcon?.url ? formatImageUrl(lightModeIcon.url) : ''
  const darkIconSrc = darkModeIcon?.url ? formatImageUrl(darkModeIcon.url) : ''

  return (
    <>
      {lightIconSrc && (
        <Image
          src={lightIconSrc}
          alt={lightModeIcon.alt || ''}
          width={lightModeIcon.width || 260}
          height={lightModeIcon.height || 260}
          className={'light-mode-image'}
        />
      )}
      {darkIconSrc && (
        <Image
          src={darkIconSrc}
          alt={darkModeIcon.alt || ''}
          width={darkModeIcon.width || 260}
          height={darkModeIcon.height || 260}
          className={'dark-mode-image'}
        />
      )}
    </>
  )
}
