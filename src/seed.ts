import dotenv from 'dotenv'
import path from 'path'
import payload from 'payload'
import { fileURLToPath } from 'url'
import { seed } from './endpoints/seed/index'
import type { PayloadRequest } from 'payload'

// 1. Load environment variables from the .env file first.
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

const seedDatabase = async (): Promise<void> => {
  try {
    // 2. Dynamically import the config only AFTER the environment is loaded.
    const { default: config } = await import('./payload.config')

    const filename = fileURLToPath(import.meta.url)
    const dirname = path.dirname(filename)
    process.env.PAYLOAD_CONFIG_PATH = path.resolve(dirname, './payload.config.ts')

    await payload.init({
      config,
    })

    // 3. Create a request object with the 'disableRevalidate' context
    const req = {
        context: {
            disableRevalidate: true,
        }
    } as unknown as PayloadRequest

    // 4. Pass the request object to the seeder
    await seed({payload, req})

  } catch (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('Database seeded successfully!')
  process.exit(0)
}

seedDatabase()