import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { formatImageUrl } from '@/utilities/formatImageUrl'

export const Logos = async () => {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'settings' })
  const lightModeLogo = settings.lightModeLogo as Media
  const darkModeLogo = settings.darkModeLogo as Media
  const lightLogoSrc = lightModeLogo?.url ? formatImageUrl(lightModeLogo.url) : ''
  const darkLogoSrc = darkModeLogo?.url ? formatImageUrl(darkModeLogo.url) : ''

  return (
    <>
      {lightLogoSrc && (
        <Image
          src={lightLogoSrc}
          alt={lightModeLogo.alt || ''}
          width={lightModeLogo.width || 640}
          height={lightModeLogo.height || 360}
          className={'light-mode-image'}
        />
      )}
      {darkLogoSrc && (
        <Image
          src={darkLogoSrc}
          alt={darkModeLogo.alt || ''}
          width={darkModeLogo.width || 640}
          height={darkModeLogo.height || 360}
          className={'dark-mode-image'}
        />
      )}
    </>
  )
}
