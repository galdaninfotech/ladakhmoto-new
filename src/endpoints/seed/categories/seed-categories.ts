import type { Payload, PayloadRequest } from 'payload'

export const seedCategories = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}) => {
  payload.logger.info(`— Seeding categories...`)

  const categories = [
    { title: 'Biking Adventures', slug: 'biking-adventures' },
    { title: 'Holiday Packages', slug: 'holiday-packages' },
    { title: 'Ultimate Adventures', slug: 'ultimate-adventures' },
    { title: 'Family Tours', slug: 'family-tours' },
    { title: 'Off-Road Expeditions', slug: 'off-road-expeditions' },
    { title: 'Trekking & Hiking', slug: 'trekking-hiking' },
    { title: 'Cultural Sightseeing', slug: 'cultural-sightseeing' },
    { title: 'Spiti Valley Special', slug: 'spiti-valley' },
    { title: 'Leh Ladakh Special', slug: 'leh-ladakh' },
  ]

  const categoriesMap: Record<string, any> = {}

  for (const cat of categories) {
    const doc = await payload.create({
      collection: 'categories',
      depth: 0,
      context: req.context,
      data: {
        title: cat.title,
        slug: cat.slug,
      },
    })
    categoriesMap[cat.slug] = doc
  }

  return { categoriesMap }
}
