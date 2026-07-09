'use client'
import type { TourPolicy as TourPolicyType } from '@/payload-types'
import RichText from '@/components/RichText'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/utilities/ui'
import { handleAccordionScrollIntoView } from '@/utilities/handleAccordionScrollIntoView'

export const TourPolicies: React.FC<{ tourPoliciesData: TourPolicyType | undefined }> = ({
  tourPoliciesData,
}) => {
  // console.log(tourPoliciesData)
  const booking = tourPoliciesData?.bookingAndPayment
  const cancellation = tourPoliciesData?.cancellation
  const otherTerms = tourPoliciesData?.otherTermsAndPolicies
  const pleaseNote = tourPoliciesData?.pleaseNote

  return (
    <div
      className="container mx-auto col-span-4 md:col-span-8 lg:col-span-9 mb-6 mt-8"
    >

      <h2 className="mb-6 font-oswald uppercase text-foreground tracking-[2px] text-[1.2rem] font-normal leading-[1.5em] relative before:content-[''] before:bg-accent before:w-[80px] before:h-[3px] before:absolute before:-bottom-[9px] before:left-0 after:content-[''] after:bg-accent after:w-[134px] after:h-px after:absolute after:-bottom-[8px] after:left-0">
        Tour Policies
      </h2>

      <Accordion
        type="single"
        collapsible
        className="col-span-4 sm:col-span-8 lg:col-span-9 w-full space-y-1"
      >
        <AccordionItem value="inclusions" className="rounded-xs">
          <AccordionTrigger 
            id='accordion-trigger-booking-and-payment'
            className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
            onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-booking-and-payment`)}
          >
            Booking & Payments
          </AccordionTrigger>

          <AccordionContent className={contentAnimation}>
            {booking && (
              <div className="-mr-4 text-xs text-foreground/80 my-6 prose-strong:text-primary">
                <RichText data={booking} enableGutter={false} className='-ml-6 text-sm/6' />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>

        {/* Cancellation */}
        <AccordionItem value="exlusions" className="rounded-xs">
          <AccordionTrigger 
            id='accordion-trigger-cancellation'
            className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
            onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-cancellation`)}
          >
            Cancellation
          </AccordionTrigger>

          <AccordionContent className={contentAnimation}>
            {cancellation && (
              <div className="-mr-4 text-xs text-foreground/80 my-6 prose-strong:text-primary">
                <RichText data={cancellation} enableGutter={false} className='-ml-4 text-sm/6' />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>

        {/* otherTermsAndPolicies */}
        <AccordionItem value="otherTermsAndPolicies" className="rounded-xs">
          <AccordionTrigger 
            id='accordion-trigger-other'
            className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
            onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-other`)}
          >
            Other Terms & Policies
          </AccordionTrigger>

          <AccordionContent className={contentAnimation}>
            {otherTerms && (
              <div className="-mr-4 text-xs text-foreground/80 my-6 prose-strong:text-primary">
                <RichText data={otherTerms} enableGutter={false} className='-ml-6 text-sm/6' />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>

        {/* pleaseNote */}
        <AccordionItem value="pleaseNote" className="rounded-xs">
          <AccordionTrigger 
            id='accordion-trigger-note'
            className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
            onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-note`)}
          >
            Please Note
          </AccordionTrigger>

          <AccordionContent className={contentAnimation}>
            {pleaseNote && (
              <div className="-mr-4 text-xs text-foreground/80 my-6 prose-strong:text-primary">
                <RichText data={pleaseNote} enableGutter={false} className='-ml-6 text-sm/6' />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

const contentAnimation = cn(
  'px-4 pb-4 text-sm text-foreground/90 mt-2',
  'overflow-hidden',
  'data-[state=open]:animate-accordion-down',
  'data-[state=closed]:animate-accordion-up',
)
