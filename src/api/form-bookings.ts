import type { PayloadRequest } from 'payload'
import { z } from 'zod'

export interface BookingData {
  tourName: string
  tourDate: string
  travelMode: string
  numberOfPerson: string
  name?: string
  email?: string
  phone?: string
  recaptchaToken: string
}

const BookingSchema = z.object({
  tourName: z.string(),
  tourDate: z.string(),
  travelMode: z.string(),
  numberOfPerson: z.string(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  recaptchaToken: z.string(),
})

export const FormBookingsEndpoint = async (req: PayloadRequest) => {
  try {
    const data: BookingData = BookingSchema.parse(req.body)

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_V3_SECRET_KEY}&response=${data.recaptchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.5)) {
      return new Response(JSON.stringify({ message: 'reCAPTCHA verification failed.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    await req.payload.sendEmail({
      from: 'bookings@ladakhmoto.com',
      to: 'info@ladakhmoto.com',
      subject: `Booking Reserved!!`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Booking Reserved!!!!!!!!</h2>
          <p>Hi ,</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Tour:</strong> ${data.tourName}</p>
                  <p><strong>Date:</strong> ${data.tourDate}</p>
                  <p><strong>Mode:</strong> ${data.travelMode}</p>
                  <p><strong>Pax:</strong> ${data.numberOfPerson}</p>
                  <p><strong>Name:</strong> ${data.name}</p>
                  <p><strong>Email:</strong> ${data.email}</p>
                  <p><strong>Phone:</strong> ${data.phone}</p>
                  <p><strong>Slot:</strong> Message</p>
                  </div>
                  <p>Thank you for choosing Ladakh Moto!</p>
                  <p>Best regards,<br>The Ladakh Moto Team</p>
                  </div>
                  `,
    })

    return new Response(JSON.stringify({ message: 'Booking sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ errors: error.message }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }
    return new Response(JSON.stringify({ message: 'An unexpected error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}