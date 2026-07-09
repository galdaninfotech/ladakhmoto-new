import { getPayload } from 'payload'
import config from '@payload-config'
import { z } from 'zod'

const ContactSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
  recaptchaToken: z.string(),
})

const payloadPromise = getPayload({ config })

export async function POST(req: Request) {
  console.log('API /api/contact: Received request')
  try {
    const payload = await payloadPromise
    const data = await req.json()
    console.log('API /api/contact: Data parsed')
    
    // Validate data
    const validatedData = ContactSchema.parse(data)
    console.log('API /api/contact: Data validated')

    // Verify reCAPTCHA
    console.log('API /api/contact: Verifying reCAPTCHA...')
    const secretKey = process.env.RECAPTCHA_V3_SECRET_KEY
    if (secretKey) {
      try {
        const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${secretKey}&response=${validatedData.recaptchaToken}`,
        })

        const recaptchaData = await recaptchaResponse.json()
        console.log('API /api/contact: reCAPTCHA response:', recaptchaData)

        if (!recaptchaData.success || (recaptchaData.score !== undefined && recaptchaData.score < 0.5)) {
          console.error('API /api/contact: reCAPTCHA verification failed or low score.', recaptchaData)
          // Only block in production if success is false
          if (!recaptchaData.success && process.env.NODE_ENV === 'production') {
            return Response.json({ 
              message: 'reCAPTCHA verification failed. Please try again.', 
              details: recaptchaData 
            }, { status: 400 })
          }
        }
      } catch (err) {
        console.error('API /api/contact: reCAPTCHA fetch error:', err)
      }
    } else {
      console.warn('API /api/contact: RECAPTCHA_V3_SECRET_KEY not set. Skipping verification.')
    }

    // Send email to admin
    console.log('API /api/contact: Sending email to admin...')
    try {
      await payload.sendEmail({
        from: 'contact@ladakhmoto.com',
        to: 'info@ladakhmoto.com',
        subject: `${validatedData.firstname} ${validatedData.lastname} - New Contact Message`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Message</h2>
          <p>Hi Team, you have received a new message from the contact form:</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.firstname} ${validatedData.lastname}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message}</p>
          </div>
          <p>Best regards,<br>The Ladakh Moto Website</p>
        </div>
      `,
      })
      console.log('API /api/contact: Email sent')
    } catch (emailError) {
      console.error('API /api/contact: Failed to send email:', emailError)
    }

    return Response.json({ message: 'Message sent successfully!' })

  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('API /api/contact: Validation failed', error.issues)
      return Response.json({ message: 'Validation failed', errors: error.issues }, { status: 400 })
    }
    console.error('API /api/contact: Unexpected error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return Response.json({ 
      message: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 })
  }
}
