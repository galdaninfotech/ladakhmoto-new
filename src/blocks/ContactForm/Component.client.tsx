"use client"
import React, { useState, useEffect } from 'react'
import type { ContactFormBlock as ContactFormBlockProps, LadakhMoto } from '@/payload-types'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import Image from 'next/image'
import { FieldErrors, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { Loader } from 'lucide-react'
import { EmailObfuscator } from '@/components/EmailObfuscator'

const contactSchema = z.object({
  firstname: z.string().min(2, 'First name must be at least 2 characters'),
  lastname: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

interface CustomContactFormBlockProps extends ContactFormBlockProps {
  ladakhMotoData: LadakhMoto;
}

// Correct way to extend Window for GTM
interface GTMWindow extends Window {
  dataLayer?: object[]
}

export const ContactFormClient: React.FC<CustomContactFormBlockProps> = (props) => {
  const [shouldLoadRecaptcha, setShouldLoadRecaptcha] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoadRecaptcha(true)
      removeEventListeners()
    }

    const removeEventListeners = () => {
      window.removeEventListener('mousemove', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
    }

    // Load after 4 seconds OR on interaction
    const timer = setTimeout(() => {
      setShouldLoadRecaptcha(true)
      removeEventListeners()
    }, 4000)

    window.addEventListener('mousemove', handleInteraction, { passive: true })
    window.addEventListener('scroll', handleInteraction, { passive: true })
    window.addEventListener('touchstart', handleInteraction, { passive: true })
    window.addEventListener('keydown', handleInteraction, { passive: true })

    return () => {
      clearTimeout(timer)
      removeEventListeners()
    }
  }, [])

  if (!shouldLoadRecaptcha) {
    return <ContactFormContent {...props} />
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY ?? ''}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <ContactFormContent {...props} />
    </GoogleReCaptchaProvider>
  )
}

const ContactFormContent: React.FC<CustomContactFormBlockProps> = (props) => {
  const { enabled, title, description, ladakhMotoData } = props
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onInvalid = (formErrors: FieldErrors<ContactFormData>) => {
    console.error('Contact form validation failed:', formErrors)
    toast.error('Please check the form for errors.')
  }

  const onSubmit = async (data: ContactFormData) => {
    console.log('Submitting contact form:', data)
    setLoading(true)
    setIsSubmitted(false)
    try {
      if (!executeRecaptcha) {
        console.error('reCAPTCHA not available yet.')
        toast.error('Security check not ready. Please wait a moment and try again.')
        setLoading(false)
        return
      }

      console.log('Executing reCAPTCHA...')
      let token: string;
      try {
        token = await executeRecaptcha('contact_submit')
      } catch (recaptchaError) {
        console.error('reCAPTCHA execution error:', recaptchaError)
        toast.error('Security check failed. Please refresh the page.')
        setLoading(false)
        return
      }

      if (!token) {
        console.error('No reCAPTCHA token returned.')
        toast.error('Failed to verify security token. Please try again.')
        setLoading(false)
        return
      }

      console.log('Sending request to /api/contact...')
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      })

      const responseData = await response.json()

      if (response.ok) {
        console.log('Contact form submitted successfully.')
        toast.success('Message sent successfully!')
        setIsSubmitted(true)
        reset()

        // Push to Google Tag Manager dataLayer
        const gtmWindow = window as GTMWindow
        if (typeof gtmWindow !== 'undefined' && gtmWindow.dataLayer) {
          gtmWindow.dataLayer.push({
            event: 'contact_form_submit',
            form_id: 'contact',
            submission_status: 'success',
            page_location: gtmWindow.location.href,
          })
        }
      } else {
        console.error('Contact form submission failed:', responseData)
        toast.error(responseData.message || 'Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      toast.error('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="contact-form-ladakhmoto-block bg-card md:p-8 rounded-sm shadow-xs border border-border">
        {enabled && (
          <>
            <h2 className="text-xl text-foreground mt-6 mb-4 font-oswald">{title}</h2>
            <p className="text-xs text-muted-foreground mb-16">{description}</p>
            
            {isSubmitted && (
              <div 
                id="contact-success-message" 
                className="bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 px-4 py-3 rounded-md mb-6 text-center text-sm font-medium"
              >
                Thank you! Your message has been received. We will get back to you shortly.
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onInvalid)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstname" className="block text-xs font-medium text-foreground/80">
                    First Name
                  </label>
                  <input
                    {...register('firstname')}
                    type="text"
                    id="firstname"
                    className="placeholder:text-xs mt-1 block w-full px-3 py-2 bg-background border border-border rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-foreground sm:text-sm"
                    placeholder="Your First Name"
                  />
                  {errors.firstname && <p className="mt-1 text-xs text-error">{errors.firstname.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-foreground/80">
                    Last Name
                  </label>
                  <input
                    {...register('lastname')}
                    type="text"
                    id="lastname"
                    className="placeholder:text-xs mt-1 block w-full px-3 py-2 bg-background border border-border rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-foreground sm:text-sm"
                    placeholder="Your Last Name"
                  />
                  {errors.lastname && <p className="mt-1 text-xs text-error">{errors.lastname.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="placeholder:text-xs mt-1 block w-full px-3 py-2 bg-background border border-border rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-foreground sm:text-sm"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="text"
                    id="phone"
                    className="placeholder:text-xs mt-1 block w-full px-3 py-2 bg-background border border-border rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-foreground sm:text-sm"
                    placeholder="Your Phone Number"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-error">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={10}
                  className="placeholder:text-xs mt-1 block w-full px-3 py-2 bg-background border border-border rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-foreground sm:text-sm"
                  placeholder="Your message..."
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-error">{errors.message.message}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center py-3 px-2 border border-transparent rounded-xs shadow-sm text-xs font-medium text-white uppercase bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary max-w-1/2 disabled:opacity-50 transition-colors cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin mr-2 h-4 w-4" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <div className="bg-card flex flex-col mt-12 md:p-8 text-xs border border-border rounded-sm">
        <h2 className="text-xl text-foreground mb-4 font-oswald">Our Office</h2>
        <p className="text-xs text-muted-foreground mb-16">Need help or do you have any Wishes or Questions? Just drop us a line and get more information!</p>

        <div className="company-name flex items-center">
          <Image src="/images/logo.webp" alt="Logo" width={75} height={40} className="dark:invert dark:brightness-200" />
          <div className="address-name -mt-3">
            {ladakhMotoData.name && <h5 className="text-sm text-foreground uppercase tracking-[9px] font-oswald">{ladakhMotoData.name}</h5>}
            {ladakhMotoData.slogan && <p className="text-[10px] text-muted-foreground mb-1">{ladakhMotoData.slogan}</p>}
          </div>
        </div>


        {(ladakhMotoData.addressline1 || ladakhMotoData.addressline2) && (
          <p className="flex items-center mb-2 mt-4 text-foreground">
            <FaMapMarkerAlt className="mr-2 text-accent" />
              {ladakhMotoData.addressline1 && (
                  <>{`${ladakhMotoData.addressline1}`}</>
              )}
              {ladakhMotoData.addressline2 && (
                  <>{`, ${ladakhMotoData.addressline2}`}</>
              )}
          </p>
        )}


        {(ladakhMotoData.phone1 || ladakhMotoData.phone2) && (
          <p className="flex items-center mb-4 text-foreground">
            <FaPhone className="mr-2 text-accent" />
              {ladakhMotoData.phone1 && (
                  <>{`${ladakhMotoData.phone1} `}</>
              )}
              {ladakhMotoData.phone2 && (
                  <>{`/ ${ladakhMotoData.phone2}`}</>
              )}
          </p>
        )}

        {(ladakhMotoData.email1 || ladakhMotoData.email2) && (
          <div className="flex items-center mb-4 text-foreground">
            <TbMail className="mr-2 text-accent" />
            <div className="flex flex-wrap items-center">
              {ladakhMotoData.email1 && (
                <EmailObfuscator email={ladakhMotoData.email1} />
              )}
              {ladakhMotoData.email1 && ladakhMotoData.email2 && (
                <span className="mx-1">/</span>
              )}
              {ladakhMotoData.email2 && (
                <EmailObfuscator email={ladakhMotoData.email2} />
              )}
            </div>
          </div>
        )}

        {ladakhMotoData.website && <p className="flex items-center mb-4 text-foreground"><FaGlobeAmericas className="mr-2 text-accent" />{ladakhMotoData.website}</p>}

        <div className="flex space-x-4 mt-10 mx-auto">
            <a href={ladakhMotoData.facebook? ladakhMotoData.facebook : '#'} target="_new" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><FaFacebookF size={20} /></a>
            <a href={ladakhMotoData.twitter? ladakhMotoData.twitter : '#'} target="_new" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><FaXTwitter size={20} /></a>
            <a href={ladakhMotoData.instagram? ladakhMotoData.instagram : '#'} target="_new" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><FaInstagram size={20} /></a>
            <a href={ladakhMotoData.youtube? ladakhMotoData.youtube : '#'} target="_new" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><FaYoutube size={20} /></a>
            <a href={ladakhMotoData.whatsapp? ladakhMotoData.whatsapp : '#'} target="_new" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><FaWhatsapp size={20} /></a>
        </div>
      </div>
    </>
  )
}
