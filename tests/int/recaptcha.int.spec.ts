import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FormBookingsEndpoint } from '../../src/api/form-bookings'
import { PayloadRequest } from 'payload'

describe('FormBookingsEndpoint reCAPTCHA v3', () => {
  const mockPayload = {
    sendEmail: vi.fn().mockResolvedValue({}),
  }

  const baseData = {
    tourName: 'Test Tour',
    tourDate: '2026-01-12',
    travelMode: 'Bike',
    numberOfPerson: '2',
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    recaptchaToken: 'mock-token',
  }

  beforeEach(() => {
    vi.resetAllMocks()
    vi.stubGlobal('fetch', vi.fn())
  })

  it('should pass with high reCAPTCHA score', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, score: 0.9 }),
    } as Response)

    const req = {
      body: baseData,
      payload: mockPayload,
    } as unknown as PayloadRequest

    const response = await FormBookingsEndpoint(req)
    if (response.status !== 200) {
      console.log('Error Response:', await response.json())
    }
    expect(response.status).toBe(200)
    expect(mockPayload.sendEmail).toHaveBeenCalled()
  })

  it('should fail with low reCAPTCHA score', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true, score: 0.1 }),
    } as Response)

    const req = {
      body: baseData,
      payload: mockPayload,
    } as unknown as PayloadRequest

    const response = await FormBookingsEndpoint(req)
    // This is expected to fail currently as score is not checked
    expect(response.status).toBe(400)
    const body = await response.json()
    expect(body.message).toBe('reCAPTCHA verification failed.')
    expect(mockPayload.sendEmail).not.toHaveBeenCalled()
  })

  it('should fail if reCAPTCHA verification fails', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: false }),
    } as Response)

    const req = {
      body: baseData,
      payload: mockPayload,
    } as unknown as PayloadRequest

    const response = await FormBookingsEndpoint(req)
    expect(response.status).toBe(400)
    expect(mockPayload.sendEmail).not.toHaveBeenCalled()
  })
})
