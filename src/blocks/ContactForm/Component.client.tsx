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
import { motion } from 'framer-motion'
import { ExploreLink } from '@/components/ExploreLink'



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
    <div className="w-full mx-auto py-6 md:py-12 lg:py-16">
      {enabled && (
        <div className="space-y-10 lg:space-y-12">
          {/* Full-width Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center lg:text-left animate-in fade-in slide-in-from-bottom duration-500"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold font-oswald block mb-2">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald text-foreground tracking-wide uppercase leading-tight font-semibold">
              {title || "Let's Plan Your Next Adventure"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-3xl leading-relaxed">
              {description || "Need help or do you have any wishes or questions? Just drop us a line and get more information!"}
            </p>
            <div className="h-0.75 w-12 bg-accent mt-6 rounded-full mx-auto lg:mx-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Office details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-bottom duration-500"
            >
              {/* Office Card */}
              <div className="bg-card border border-border/60 rounded-sm p-6 md:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
                
                <h3 className="text-lg text-foreground font-oswald uppercase tracking-wider mb-6 flex items-center gap-2">
                  Our Office
                </h3>

                {/* Logo / Company Name */}
                <div className="company-name flex items-center gap-4 mb-8">
                  <Image src="/images/logo.webp" alt="Logo" width={75} height={40} className="dark:invert dark:brightness-200" />
                  <div className="address-name">
                    {ladakhMotoData.name && <h5 className="text-md text-foreground uppercase tracking-[0.15em] font-oswald font-medium">{ladakhMotoData.name}</h5>}
                    {ladakhMotoData.slogan && <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{ladakhMotoData.slogan}</p>}
                  </div>
                </div>

                {/* Detail Items */}
                <div className="space-y-6">
                  {(ladakhMotoData.addressline1 || ladakhMotoData.addressline2) && (
                    <div className="flex items-start gap-4 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shrink-0">
                        <FaMapMarkerAlt size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-medium mb-1">Location</span>
                        <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                          {ladakhMotoData.addressline1}
                          {ladakhMotoData.addressline2 && `, ${ladakhMotoData.addressline2}`}
                        </p>
                      </div>
                    </div>
                  )}

                  {(ladakhMotoData.phone1 || ladakhMotoData.phone2) && (
                    <div className="flex items-start gap-4 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shrink-0">
                        <FaPhone size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-medium mb-1">Phone Call</span>
                        <div className="flex gap-4">
                          {ladakhMotoData.phone1 && (
                            <a href={`tel:${ladakhMotoData.phone1.replace(/\s+/g, '')}`} className="text-sm text-foreground hover:text-accent font-semibold transition-colors duration-200">
                              {ladakhMotoData.phone1}
                            </a>
                          )}
                          {ladakhMotoData.phone2 && (
                            <a href={`tel:${ladakhMotoData.phone2.replace(/\s+/g, '')}`} className="text-sm text-foreground hover:text-accent font-semibold transition-colors duration-200">
                              {ladakhMotoData.phone2}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {(ladakhMotoData.email1 || ladakhMotoData.email2) && (
                    <div className="flex items-start gap-4 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shrink-0">
                        <TbMail size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-medium mb-1">Email Inquiry</span>
                        <div className="flex flex-col gap-1 text-sm text-foreground font-semibold">
                          {ladakhMotoData.email1 && (
                            <EmailObfuscator email={ladakhMotoData.email1} className="hover:text-accent transition-colors duration-200" />
                          )}
                          {ladakhMotoData.email2 && (
                            <EmailObfuscator email={ladakhMotoData.email2} className="hover:text-accent transition-colors duration-200" />
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {ladakhMotoData.website && (
                    <div className="flex items-start gap-4 group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300 shrink-0">
                        <FaGlobeAmericas size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-medium mb-1">Website</span>
                        <a href={`https://${ladakhMotoData.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent font-semibold transition-colors duration-200 block">
                          {ladakhMotoData.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Social networks */}
                <div className="mt-10 pt-4 border-t border-border/50">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-medium mb-4">Connect With Us</span>
                  <div className="flex flex-wrap gap-3">
                    {ladakhMotoData.facebook && (
                      <a href={ladakhMotoData.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:scale-105 transition-all duration-300 shadow-sm">
                        <FaFacebookF size={16} />
                      </a>
                    )}
                    {ladakhMotoData.twitter && (
                      <a href={ladakhMotoData.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:scale-105 transition-all duration-300 shadow-sm">
                        <FaXTwitter size={16} />
                      </a>
                    )}
                    {ladakhMotoData.instagram && (
                      <a href={ladakhMotoData.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:scale-105 transition-all duration-300 shadow-sm">
                        <FaInstagram size={16} />
                      </a>
                    )}
                    {ladakhMotoData.youtube && (
                      <a href={ladakhMotoData.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:scale-105 transition-all duration-300 shadow-sm">
                        <FaYoutube size={16} />
                      </a>
                    )}
                    {ladakhMotoData.whatsapp && (
                      <a href={ladakhMotoData.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background text-muted-foreground hover:text-accent hover:border-accent hover:scale-105 transition-all duration-300 shadow-sm">
                        <FaWhatsapp size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7 bg-card border border-border/60 rounded-sm p-6 md:p-10 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold font-oswald block mb-3">Send Us A Message</span>
                <h3 className="text-xl font-oswald text-foreground uppercase tracking-wide font-semibold">Drop A Line</h3>
              </div>

              {isSubmitted && (
                <div 
                  id="contact-success-message" 
                  className="bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 px-4 py-3.5 rounded-xl mb-6 text-center text-sm font-medium"
                >
                  Thank you! Your message has been received. We will get back to you shortly.
                </div>
              )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onInvalid)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstname" className="block text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    {...register('firstname')}
                    type="text"
                    id="firstname"
                    className="w-full px-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 text-foreground placeholder:text-muted-foreground/60 placeholder:text-xs text-sm transition-all duration-300"
                    placeholder="Your First Name"
                  />
                  {errors.firstname && <p className="mt-1 text-xs text-error font-medium">{errors.firstname.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastname" className="block text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    {...register('lastname')}
                    type="text"
                    id="lastname"
                    className="w-full px-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 text-foreground placeholder:text-muted-foreground/60 placeholder:text-xs text-sm transition-all duration-300"
                    placeholder="Your Last Name"
                  />
                  {errors.lastname && <p className="mt-1 text-xs text-error font-medium">{errors.lastname.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 text-foreground placeholder:text-muted-foreground/60 placeholder:text-xs text-sm transition-all duration-300"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-error font-medium">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    type="text"
                    id="phone"
                    className="w-full px-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 text-foreground placeholder:text-muted-foreground/60 placeholder:text-xs text-sm transition-all duration-300"
                    placeholder="Your Phone Number"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-error font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 text-foreground placeholder:text-muted-foreground/60 placeholder:text-xs text-sm transition-all duration-300"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
                {errors.message && <p className="mt-1 text-xs text-error font-medium">{errors.message.message}</p>}
              </div>

              <div className="pt-2 flex justify-start">
                <ExploreLink
                  type="submit"
                  disabled={loading}
                  title={
                    loading ? (
                      <span className="flex items-center gap-2">
                        <Loader className="animate-spin h-3.5 w-3.5 text-accent" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      'Send Message'
                    )
                  }
                  className="pt-0! text-left!"
                />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      )}
    </div>
  )
}
