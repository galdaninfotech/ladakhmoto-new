import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('NotificationSubscriptions Collection', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('should have a notification-subscriptions collection', async () => {
    const subscriptions = await payload.find({
      collection: 'notification-subscriptions',
    })
    expect(subscriptions).toBeDefined()
  })
})
