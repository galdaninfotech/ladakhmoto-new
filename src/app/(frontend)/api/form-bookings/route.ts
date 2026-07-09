import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

interface BookingData {
  tourName: string
  tourDate: string
  travelMode: string
  numberOfPerson: string
  name: string
  email: string
  phone: string
  recaptchaToken?: string
}

export async function POST(req: Request) {
  console.log('API /api/form-bookings: Received request')
  try {
    const data = await req.json() as BookingData

    // Validate data
    if (!data.tourName || !data.tourDate || !data.travelMode || !data.numberOfPerson || !data.name || !data.email || !data.phone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Verify reCAPTCHA
    if (data.recaptchaToken) {
      console.log('API /api/form-bookings: Verifying reCAPTCHA...')
      const secretKey = process.env.RECAPTCHA_V3_SECRET_KEY
      
      if (secretKey) {
        try {
          const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${secretKey}&response=${data.recaptchaToken}`,
          })

          const recaptchaData = await recaptchaResponse.json()
          console.log('API /api/form-bookings: reCAPTCHA response:', recaptchaData)

          if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.5)) {
            console.error('API /api/form-bookings: reCAPTCHA verification failed or low score.')
            // Only block in production if success is false. If it's just a low score, maybe log it.
            if (!recaptchaData.success && process.env.NODE_ENV === 'production') {
              return Response.json({ message: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 })
            }
          }
        } catch (err) {
          console.error('API /api/form-bookings: reCAPTCHA fetch error:', err)
        }
      } else {
        console.warn('API /api/form-bookings: RECAPTCHA_V3_SECRET_KEY not set. Skipping verification.')
      }
    }

    // Send email to admin
    console.log('API /api/form-bookings: Sending email to admin...')
    await payload.sendEmail({
      from: 'bookings@ladakhmoto.com',
      to: 'info@ladakhmoto.com',
      subject: `${data.name} - New Booking Request`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Booking Request</h2>
        <p>Hi Team, ${data.name} has sent a booking request with the following details:</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Tour:</strong> ${data.tourName}</p>
          <p><strong>Date:</strong> ${data.tourDate}</p>
          <p><strong>Travel Mode:</strong> ${data.travelMode}</p>
          <p><strong>Number Of Person:</strong> ${data.numberOfPerson}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
        </div>
        <p>Best regards,<br>The Ladakh Moto Team</p>
      </div>
    `,
    })

    return Response.json({ message: 'Booking sent sucessfully!' })

  } catch (error: unknown) {
    console.error('Booking endpoint error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return Response.json({ 
      error: 'Failed to send booking',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 })
  }
}
