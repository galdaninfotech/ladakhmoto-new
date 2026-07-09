 
 
 
 
import type { Payload, PayloadRequest } from 'payload'

export const seedHolidayPackageRedirects = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}) => {
  payload.logger.info(`— Seeding holiday package redirects...`)

  const holidayPackages = await payload.find({
    collection: 'holidayPackages',
    depth: 0,
    limit: 100,
    draft: false
  })

  for (const doc of holidayPackages.docs) {
    if (doc.slug) {
      // Create redirect from /bike-tour-packages/[slug] to /holiday-packages/[slug]
      await payload.create({
        collection: 'redirects',
        context: req.context,
        data: {
          from: `/bike-tour-packages/${doc.slug}`,
          to: {
            type: 'reference',
            reference: {
              relationTo: 'holidayPackages',
              value: doc.id,
            },
          },
        },
      })
    }
  }
}
