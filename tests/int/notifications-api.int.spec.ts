import { getPayload, Payload } from 'payload'
import config from '@/payload.config'
import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('NotificationSubscriptions API', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('should allow creating a subscription via Payload API', async () => {
    const dummyToken = 'test-token-' + Date.now()
    const result = await payload.create({
      collection: 'notification-subscriptions',
      data: {
        token: dummyToken,
        deviceInfo: 'Vitest',
      },
    })

    expect(result.token).toBe(dummyToken)
    expect(result.id).toBeDefined()
  })

  it('should not allow duplicate tokens', async () => {
    const duplicateToken = 'duplicate-token'
    
    await payload.create({
      collection: 'notification-subscriptions',
      data: {
        token: duplicateToken,
      },
    })

    await expect(
      payload.create({
        collection: 'notification-subscriptions',
        data: {
          token: duplicateToken,
        },
      })
    ).rejects.toThrow()
  })
})
