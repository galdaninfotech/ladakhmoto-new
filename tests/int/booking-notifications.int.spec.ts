import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FormBookingsEndpoint } from '../../src/api/form-bookings'
import { PayloadRequest } from 'payload'

// Mock the notification utility
vi.mock('../../src/lib/firebase-admin', () => ({
  sendFCMNotification: vi.fn().mockResolvedValue({ successCount: 1, failureCount: 0 }),
}))

import { sendFCMNotification } from '../../src/lib/firebase-admin'

describe('FormBookingsEndpoint Notifications', () => {
  const mockPayload = {
    sendEmail: vi.fn().mockResolvedValue({}),
    find: vi.fn().mockResolvedValue({
      docs: [{ token: 'mock-fcm-token' }],
    }),
  }

  const baseData = {
    tourName: 'Notification Test Tour',
    tourDate: '2026-02-25',
    travelMode: 'Bike',
    numberOfPerson: '1',
    name: 'Notification User',
    email: 'notify@example.com',
    phone: '1234567890',
    recaptchaToken: 'mock-token',
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, score: 0.9 }),
    } as Response))
  })

  it('should trigger FCM notification after successful booking', async () => {
    const req = {
      body: baseData,
      payload: mockPayload,
    } as unknown as PayloadRequest

    const response = await FormBookingsEndpoint(req)
    expect(response.status).toBe(200)
    
    // Check if subscriptions were fetched
    expect(mockPayload.find).toHaveBeenCalledWith(expect.objectContaining({
      collection: 'notification-subscriptions',
    }))

    // Check if notification was sent
    expect(sendFCMNotification).toHaveBeenCalledWith(
      ['mock-fcm-token'],
      expect.objectContaining({
        title: 'New Booking Received!',
        body: expect.stringContaining('Notification User'),
      })
    )
  })
})
