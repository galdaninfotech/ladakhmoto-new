import dotenv from 'dotenv'
import path from 'path'
import payload from 'payload'
import { fileURLToPath } from 'url'
import type { PayloadRequest } from 'payload'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const hotelMediaMapping: Record<string, string> = {
  'Fossil Resort': 'fossil-resort.webp',
  'Goldrop Camp': 'goldrop-camp.webp',
  'Gua Homestay': 'gua-homestay.webp',
  'kenilworthInternational': 'kenilworth-international.webp',
  'Kenilworth International': 'kenilworth-international.webp',
  'Mandalchan Hotel': 'mandalchan-hotel.webp',
  'Mountain Chalet': 'mountain-chalet.webp',
  'royal Gasho': 'royal-gasho.webp',
  'Royal Gasho': 'royal-gasho.webp',
}

const seedHotelsOnly = async (): Promise<void> => {
  try {
    const { default: config } = await import('./payload.config')
    const filename = fileURLToPath(import.meta.url)
    const dirname = path.dirname(filename)
    process.env.PAYLOAD_CONFIG_PATH = path.resolve(dirname, './payload.config.ts')

    await payload.init({ config })

    const req = {
      context: {
        disableRevalidate: true,
      },
    } as unknown as PayloadRequest

    // Fetch media docs
    const mediaDocs = await payload.find({
      collection: 'media',
      limit: 1000,
      req,
    })

    const mediaMap: Record<string, any> = {}
    for (const doc of mediaDocs.docs) {
      if (doc.filename) {
        mediaMap[doc.filename] = doc
      }
    }

    // Fetch all hotels
    const existingHotels = await payload.find({
      collection: 'hotels',
      limit: 100,
      req,
    })

    console.log(`Found ${existingHotels.docs.length} hotels in database.`)

    for (const hotel of existingHotels.docs) {
      const mediaFilename = hotelMediaMapping[hotel.name] || `${hotel.name.toLowerCase().replace(/\s+/g, '-')}.webp`
      const mediaDoc = mediaMap[mediaFilename] || mediaDocs.docs[0]

      if (mediaDoc) {
        await payload.update({
          collection: 'hotels',
          id: hotel.id,
          data: {
            gallery: [
              {
                image: mediaDoc.id,
                caption: hotel.name,
              },
            ],
          },
          req,
        })
        console.log(`Updated hotel "${hotel.name}" (ID: ${hotel.id}) with gallery image: ${mediaFilename}`)
      } else {
        console.warn(`No media found for hotel "${hotel.name}"`)
      }
    }

    console.log('Hotel galleries updated successfully!')
  } catch (err) {
    console.error('Error updating hotel galleries:', err)
    process.exit(1)
  }

  process.exit(0)
}

seedHotelsOnly()
