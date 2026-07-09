import type { CollectionAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateRedirects: CollectionAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating redirects`)

    try {
      revalidateTag('redirects', 'default')
    } catch (err) {
      payload.logger.warn(`Error revalidating redirects: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  return doc
}
