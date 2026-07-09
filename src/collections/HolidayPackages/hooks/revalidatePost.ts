import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { HolidayPackage } from '../../../payload-types'

export const revalidatePost: CollectionAfterChangeHook<HolidayPackage> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/holiday-packages/${doc.slug}`

      payload.logger.info(`Revalidating holiday package at path: ${path}`)

      revalidatePath(path)
      revalidateTag('holiday-packages-sitemap', 'default')
      revalidateTag('collection_holidayPackages', 'default')
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/holiday-packages/${previousDoc.slug}`

      payload.logger.info(`Revalidating old holiday package at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('holiday-packages-sitemap', 'default')
      revalidateTag('collection_holidayPackages', 'default')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<HolidayPackage> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/holiday-packages/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('holiday-packages-sitemap', 'default')
    revalidateTag('collection_holidayPackages', 'default')
  }

  return doc
}