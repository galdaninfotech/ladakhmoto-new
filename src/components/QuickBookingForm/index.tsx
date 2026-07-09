/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FieldErrors, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'

import {
  Button as RACButton,
  Group,
  Input as RACInput,
  Label,
  NumberField,
} from 'react-aria-components'
import { Loader, MinusIcon, PlusIcon } from 'lucide-react'

import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SheetClose } from '../ui/sheet'
import { useBooking } from '@/providers/BookingContext'

const formSchema = z.object({
  tourName: z.string().min(1, 'Please select at least one tour.'),
  tourDate: z.string().min(1, 'Please select at least one tour date.'),
  travelMode: z.string().min(1, 'Please select your travel mode.'),
  numberOfPerson: z.number(),
  name: z
    .string()
    .min(5, 'Name must be at least 5 characters.')
    .max(50, 'Name must be at most 50 characters.'),
  email: z
    .string()
    .min(5, 'Email must be at least 5 characters.')
    .max(50, 'Email must be at most 50 characters.'),
  phone: z
    .string()
    .min(10, 'phone must be at least 10 digits.')
    .max(10, 'phone must be at most 10 digits.'),
})

type FormData = z.infer<typeof formSchema>

const travelModeLabels: Record<string, string> = {
  'own-bike': 'Own Bike',
  'solo-rider': 'Solo Rider',
  'dual-ride': 'Dual Ride',
  'seat-in-backup-vehicle': 'Backup Vehicle',
  suv: 'SUV',
}

const vehicleLabels: Record<string, string> = {
  'own-bike': 'No vehicle provided',
  'himalayan-411-bs6': 'Himalayan 411 (BS6)',
  'isuzu-camper': 'Isuzu Camper',
  'innova-xylo': 'Innova / Xylo',
}

interface QuickBookingFormProps {
  docs?: {
    id: number
    title: string
    dates?:
      | {
          start?: string | null
          end?: string | null
          status?: 'open' | 'closing-soon' | 'closed' | null
          id?: string | null
        }[]
      | null
    cost?:
      | {
          travelMode?:
            | 'own-bike'
            | 'solo-rider'
            | 'dual-ride'
            | 'seat-in-backup-vehicle'
            | 'suv'
            | null
          vehicleProvided?: 'own-bike' | 'himalayan-411-bs6' | 'isuzu-camper' | 'innova-xylo' | null
          costPerPerson?: number | null
          id?: string | null
        }[]
      | null
  }[]
}

const QuickBookingFormContent: React.FC<QuickBookingFormProps> = (props) => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null)
  const [travelMode, setTravelMode] = useState<string | null>(null)
  const [costPerPerson, setCostPerPerson] = useState<number | null | undefined>(null)
  const [vehicleProvided, setVehicleProvided] = useState<string | null | undefined>(null)
  const [numberOfPerson, setNumberOfPerson] = useState<number | null>(1)
  const [tourCost, setTourCost] = useState<number | null>(0)

  const { executeRecaptcha } = useGoogleReCaptcha()
  const [loading, setLoading] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const { source } = useBooking()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tourName: '',
      travelMode: '',
      tourDate: '',
      numberOfPerson: 1,
      name: '',
      email: '',
      phone: '',
    },
  })

  useEffect(() => {
    setTravelMode(null)
    setCostPerPerson(null)
    form.setValue('travelMode', '')
  }, [selectedTour, form])

  useEffect(() => {
    if (costPerPerson != null && numberOfPerson != null) {
      setTourCost(costPerPerson * numberOfPerson)
    } else {
      setTourCost(0)
    }
  }, [costPerPerson, numberOfPerson])

  async function onSubmit(data: FormData) {
    setLoading(true)
    setIsSubmitted(false)
    try {
      if (!executeRecaptcha) {
        toast.error('reCAPTCHA not available.')
        setLoading(false)
        return
      }

      const token = await executeRecaptcha('booking_submit')
      if (!token) {
        toast.error('Failed to verify reCAPTCHA.')
        setLoading(false)
        return
      }

      const payload = { ...data, recaptchaToken: token }

      toast('Sending booking...', {
        position: 'top-right',
      })

      const response = await fetch('/api/form-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        toast.success('✅ Booking Reserved!!')
        setIsSubmitted(true)
        
        // Push to Google Tag Manager dataLayer
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          ;(window as any).dataLayer.push({
            event: 'booking_form_submit',
            form_id: 'booking',
            booking_form_submission_status: 'success',
            button_location: source,
          })
        }

        resetEverything()
      } else {
        const error = await response.json()
        toast.error('❌ Booking failed: ' + (error.message || 'Unknown error'))
      }
    } catch (error) {
      console.error('Submit error:', error)
      toast.error('❌ An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  const onInvalid = (errors: FieldErrors<FormData>) => {
    console.error('Form validation failed:', errors)
  }

  const handleTourChange = (newValue: string) => {
    setSelectedTour(newValue)
  }

  const calculateTourCost = (): number => {
    if (costPerPerson == null || numberOfPerson == null) {
      return 0
    }
    return costPerPerson * numberOfPerson
  }

  const resetEverything = () => {
    form.reset()
    form.setValue('tourName', '')
    form.setValue('tourDate', '')
    form.setValue('travelMode', '')
    form.setValue('numberOfPerson', 1)

    setSelectedTour(null)
    setTravelMode(null)
    setCostPerPerson(null)
    setNumberOfPerson(1)
    setTourCost(0)
  }

  return (
    <>
      {isSubmitted && (
        <div 
          id="booking-success-message" 
          className="bg-success/10 border border-success/20 text-success px-4 py-3 rounded-md mb-4 text-center text-sm font-medium"
        >
          Thank you! Your booking request has been sent successfully.
        </div>
      )}
      <form id="booking" onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
        <FieldGroup className="flex flex-col gap-y-0">
          <Controller
            name="tourName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field orientation="responsive" data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldLabel className="text-xs -mb-2" htmlFor="tour-name-select">
                    Tour Name
                  </FieldLabel>
                </FieldContent>

                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={(newValue: string) => {
                    field.onChange(newValue)
                    handleTourChange(newValue)
                  }}
                >
                  <SelectTrigger
                    id="tour-name-select"
                    aria-invalid={fieldState.invalid}
                    className="min-w-[120px] text-xs text-foreground/80 font-normal h-8.75 [&>svg]:text-accent [&>svg]:opacity-100"
                  >
                    <SelectValue placeholder="Select a tour" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover" position="popper">
                    <SelectSeparator />
                    {props.docs?.map((tour) => (
                      <SelectItem key={tour.id} value={tour.title}>
                        {tour.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {fieldState.invalid && (
                  <FieldError className="text-xs text-error -mt-2" errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="travelMode"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field orientation="responsive" data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldLabel className="text-xs -mb-2 mt-3" htmlFor="travel-mode-select">
                    Travel Mode
                  </FieldLabel>
                </FieldContent>
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={(newValue: string) => {
                    field.onChange(newValue)
                    setTravelMode(newValue)

                    const selectedItem = props.docs
                      ?.find((tour) => tour.title === selectedTour)
                      ?.cost?.find((item) => String(item.travelMode) === newValue)

                    if (selectedItem) {
                      setCostPerPerson(selectedItem.costPerPerson)
                      setVehicleProvided(selectedItem.vehicleProvided)
                    }
                    calculateTourCost()
                  }}
                >
                  <SelectTrigger
                    id="travel-mode-select"
                    aria-invalid={fieldState.invalid}
                    className="min-w-[120px] text-xs text-foreground/80 font-normal h-8.75 [&>svg]:text-accent [&>svg]:opacity-100"
                  >
                    <SelectValue placeholder="Select a travel mode" />
                  </SelectTrigger>

                  <SelectContent className="bg-popover" position="popper">
                    {props.docs?.map((tour) => {
                      if (tour.title !== selectedTour) return null
                      return (
                        <div key={tour.id}>
                          <h6 className="px-2 py-1 font-bold text-foreground">{tour.title}</h6>
                          {tour.cost?.map((item) => {
                            return (
                              <SelectItem key={item.id} value={String(item.travelMode)}>
                                <div className="flex flex-col gap-0.5 py-1">
                                  <div className="flex justify-between items-center gap-4">
                                    <span className="font-medium text-xs text-foreground">
                                      {travelModeLabels[item.travelMode as string] ||
                                        item.travelMode}
                                    </span>
                                    <span className="text-primary font-bold text-xs">
                                      {new Intl.NumberFormat('en-IN', {
                                        style: 'currency',
                                        currency: 'INR',
                                        maximumFractionDigits: 0,
                                      }).format(item.costPerPerson || 0)}
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                    Vehicle: {vehicleLabels[item.vehicleProvided as string] || item.vehicleProvided}
                                  </div>
                                </div>
                              </SelectItem>
                            )
                          })}
                        </div>
                      )
                    })}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError className="text-xs text-error -mt-2" errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="tourDate"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field orientation="responsive" data-invalid={fieldState.invalid}>
                <FieldContent>
                  <FieldLabel className="text-xs -mb-2 mt-3" htmlFor="tour-date-select">
                    Tour Date
                  </FieldLabel>
                </FieldContent>

                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={(newValue: string) => {
                    field.onChange(newValue)
                  }}
                >
                  <SelectTrigger
                    id="tour-date-select"
                    aria-invalid={fieldState.invalid}
                    className="min-w-[120px] text-xs text-foreground/80 font-normal h-8.75 [&>svg]:text-accent [&>svg]:opacity-100"
                  >
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>

                  <SelectContent className="bg-popover" position="popper">
                    {props.docs?.map((tour) => {
                      if (tour.title !== selectedTour) return null

                      const groupedDates = tour.dates?.reduce(
                        (acc, date) => {
                          if (!date.start) return acc
                          const monthKey = new Date(date.start).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                          })
                          if (!acc[monthKey]) acc[monthKey] = []
                          acc[monthKey].push(date)
                          return acc
                        },
                        {} as Record<string, any[]>,
                      )

                      return (
                        <div key={tour.id}>
                          <h3 className="px-2 py-1 font-bold text-foreground">{tour.title}</h3>
                          {Object.entries(groupedDates || {}).map(([monthName, dates]) => (
                            <div key={monthName}>
                              <div className="px-4 py-1 text-sm font-semibold text-muted-foreground">
                                {monthName}
                              </div>
                              {dates.map((date) => {
                                const dateString =
                                  date.start && date.end
                                    ? `${new Date(date.start).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} - ${new Date(date.end).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`
                                    : 'Invalid date'

                                return (
                                  <SelectItem key={date.id} value={dateString}>
                                    {dateString}
                                  </SelectItem>
                                )
                              })}
                            </div>
                          ))}
                        </div>
                      )
                    })}
                  </SelectContent>
                </Select>

                {fieldState.invalid && (
                  <FieldError className="text-xs text-error -mt-2" errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="numberOfPerson"
            control={form.control}
            render={({ field, fieldState }) => {
              const handleChange = (value: number) => {
                field.onChange(value)
                setNumberOfPerson(value)
                calculateTourCost()
              }

              return (
                <Field data-invalid={fieldState.invalid}>
                  <NumberField
                    value={field.value}
                    onChange={handleChange}
                    onBlur={field.onBlur}
                    minValue={1}
                    className="space-y-2"
                  >
                    <Label className="text-xs -mb-5 mt-3 text-foreground/80">Number Of Person</Label>
                    <Group className="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm shadow-xs transition-[color,box-shadow] data-focus-within:ring-[3px] data-disabled:opacity-50">
                      <RACButton
                        slot="decrement"
                        className="border-input bg-background text-muted-foreground hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <MinusIcon size={16} aria-hidden="true" className='text-accent' />
                      </RACButton>
                      <RACInput className="bg-background text-foreground w-full grow px-3 py-2 text-center text-xs tabular-nums outline-none" />
                      <RACButton
                        slot="increment"
                        className="border-input bg-background text-muted-foreground hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border text-sm transition-shadow disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <PlusIcon size={16} aria-hidden="true" className='text-accent' />
                      </RACButton>
                    </Group>
                  </NumberField>
                  {fieldState.invalid && (
                    <FieldError
                      className="text-xs text-error -mt-2"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )
            }}
          />

          <div className="tour-details font-oswald uppercase mt-4">
            <span>Tour Costing</span>
          </div>
          <div className="relative overflow-x-auto bg-muted/30 shadow-xs rounded-base border border-border mt-1 mb-4">
            <table className="w-full text-left rtl:text-right text-foreground text-xs">
              <thead className="text-sm bg-muted/50 border-b border-border">
                <tr className="border-b border-b-primary/50 shadow-sm">
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs text-foreground/70 font-medium font-oswald uppercase tracking-widest"
                  >
                    MODE
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs text-foreground/70 font-medium font-oswald uppercase tracking-widest"
                  >
                    VEHICLE
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-xs text-foreground/70 font-medium font-oswald uppercase tracking-widest"
                  >
                    COST
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border last:border-0">
                  <th scope="row" className="px-4 py-2 font-medium text-foreground whitespace-nowrap">
                    {travelModeLabels[travelMode as string] || travelMode}
                  </th>
                  <td className="px-4 py-2 text-muted-foreground">{vehicleLabels[vehicleProvided as string] || vehicleProvided}</td>
                  <td className="px-4 py-2 text-primary font-bold">
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                      maximumFractionDigits: 0,
                    }).format(costPerPerson || 0)}
                    {' PP'}
                  </td>
                </tr>
                <tr className="border-b border-border last:border-0 bg-muted/20">
                  <th
                    scope="row"
                    colSpan={2}
                    className="px-4 py-2 font-medium text-foreground whitespace-nowrap"
                  >
                    <strong>{`Total Cost  `}</strong>
                    <span className="text-xs font-normal text-muted-foreground ml-1">{`(${numberOfPerson} person)`}</span>
                  </th>
                  <td className="px-4 py-2 text-primary font-bold text-lg">
                    {new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                      maximumFractionDigits: 0,
                    }).format(tourCost || 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tour-details font-oswald uppercase mt-4">
            <span>Traveler Info</span>
          </div>

          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="mt-3 mb-3" data-invalid={fieldState.invalid}>
                <FieldLabel className="text-xs -mb-2 mt-1" htmlFor="form-input-name">
                  Your Full Name
                </FieldLabel>
                <Input
                  {...field}
                  id="form-input-name"
                  className="text-xs text-foreground/80 placeholder:text-muted-foreground/50 h-8.75"
                  aria-invalid={fieldState.invalid}
                  placeholder="Your full name"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError className="text-xs text-error -mt-2" errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="mb-3" data-invalid={fieldState.invalid}>
                <FieldLabel className="text-xs -mb-2 mt-1" htmlFor="form-input-email">
                  Your Email ID
                </FieldLabel>
                <Input
                  {...field}
                  id="form-input-email"
                  className="text-xs text-foreground/80 placeholder:text-muted-foreground/50 h-8.75"
                  aria-invalid={fieldState.invalid}
                  placeholder="Your email id"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError className="text-xs text-error -mt-2" errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field className="mb-3" data-invalid={fieldState.invalid}>
                <FieldLabel className="text-xs -mb-2 mt-1" htmlFor="form-input-phone">
                  Your Phone Number
                </FieldLabel>
                <Input
                  {...field}
                  id="form-input-phone"
                  className="text-xs text-foreground/80 placeholder:text-muted-foreground/50 h-8.75"
                  aria-invalid={fieldState.invalid}
                  placeholder="Your phone number"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError className="text-xs text-error -mt-2" errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex justify-between gap-x-2 mt-4">
          <Button
            className="text-xs font-oswald bg-background text-foreground uppercase tracking-widest h-7 w-1/2 border-primary hover:bg-accent/10 hover:text-accent cursor-pointer"
            type="button"
            variant="outline"
            onClick={resetEverything}
          >
            Reset
          </Button>
          <SheetClose className="h-6 w-1/2" asChild>
            <Button
              className="text-xs font-oswald bg-accent text-background uppercase tracking-widest h-7 border-border hover:bg-accent/10 hover:text-accent cursor-pointer"
              variant="outline"
            >
              Cancel
            </Button>
          </SheetClose>
        </div>

        <Button
          className={`${loading ? 'cursor-not-allowed' : 'cursor-pointer'} w-full bg-primary text-xs tracking-widest text-white font-oswald uppercase mt-4 hover:opacity-90 transition-opacity`}
          type="submit"
          disabled={loading}
        >
          {`${loading ? 'Sending' : 'Book Now'}`}
          <Loader className={`animate-spin ${loading ? 'inline-block' : 'hidden'}`} />
        </Button>
      </form>
    </>
  )
}

export const QuickBookingForm: React.FC<QuickBookingFormProps> = (props) => {
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

    window.addEventListener('mousemove', handleInteraction, { passive: true })
    window.addEventListener('scroll', handleInteraction, { passive: true })
    window.addEventListener('touchstart', handleInteraction, { passive: true })
    window.addEventListener('keydown', handleInteraction, { passive: true })

    return () => {
      removeEventListeners()
    }
  }, [])

  if (!shouldLoadRecaptcha) {
    return <QuickBookingFormContent {...props} />
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
      <QuickBookingFormContent {...props} />
    </GoogleReCaptchaProvider>
  )
}
