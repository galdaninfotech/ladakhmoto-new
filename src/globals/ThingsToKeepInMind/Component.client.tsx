'use client'
import type { ThingsToKeepInMind as ThingsToKeepInMindType } from '@/payload-types'
import RichText from '@/components/RichText'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/utilities/ui'
import { handleAccordionScrollIntoView } from '@/utilities/handleAccordionScrollIntoView'

export const ThingsToKeepInMind: React.FC<{
  thingsToKeepInMindData: ThingsToKeepInMindType | undefined
}> = ({ thingsToKeepInMindData }) => {
  // console.log(thingsToKeepInMindData)

  return (
    <div className="container mx-auto col-span-4 md:col-span-8 lg:col-span-9 mb-6 mt-8">

      <h2 className="mb-2 font-oswald uppercase text-foreground tracking-[2px] text-[1.25rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
        Things To Keep In Mind
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-1 mb-8">
        {thingsToKeepInMindData?.preTourPreparation && (
          <AccordionItem value="preTourPreparation" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-pre-tour'
              className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-pre-tour`)}
            >
              Pre Tour Preparation
            </AccordionTrigger>
            <AccordionContent className={contentAnimation}>
              <div className="my-6 -ml-2 prose-strong:text-primary">
                <RichText
                  className="text-xs/6 text-foreground/80"
                  data={thingsToKeepInMindData?.preTourPreparation}
                  enableGutter={false}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {thingsToKeepInMindData?.groupRidingGuidelines && (
          <AccordionItem value="groupRidingGuidelines" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-group-riding'
              className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-group-riding`)}
            >
              Group Riding Guidelines
            </AccordionTrigger>
            <AccordionContent className={contentAnimation}>
              <div className="my-6 -ml-2 prose-strong:text-primary">
                <RichText
                  className="text-xs/6 text-foreground/80"
                  data={thingsToKeepInMindData?.groupRidingGuidelines}
                  enableGutter={false}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {thingsToKeepInMindData?.ontheRoad && (
          <AccordionItem value="ontheRoad" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-on-the-road'
              className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-on-the-road`)}
            >
              On the Road
            </AccordionTrigger>
            <AccordionContent className={contentAnimation}>
              <div className="my-6 -ml-2 prose-strong:text-primary">
                <RichText
                  className="text-xs/6 text-foreground/80"
                  data={thingsToKeepInMindData?.ontheRoad}
                  enableGutter={false}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {thingsToKeepInMindData?.altitudeAndHealth && (
          <AccordionItem value="altitudeAndHealth" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-altitude-and-health'
              className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-altitude-and-health`)}
            >
              Altitude And Health
            </AccordionTrigger>
            <AccordionContent className={contentAnimation}>
              <div className="my-6 -ml-2 prose-strong:text-primary">
                <RichText
                  className="text-xs/6 text-foreground/80"
                  data={thingsToKeepInMindData?.altitudeAndHealth}
                  enableGutter={false}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {thingsToKeepInMindData?.responsibilityTowardsTheEnvironment && (
          <AccordionItem value="responsibilityTowardsTheEnvironment" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-environment-responsibility'
              className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-environment-responsibility`)}
            >
              Responsibility Towards the Environment
            </AccordionTrigger>
            <AccordionContent className={contentAnimation}>
              <div className="my-6 -ml-2 prose-strong:text-primary">
                <RichText
                  className="text-xs/6 text-foreground/80"
                  data={thingsToKeepInMindData?.responsibilityTowardsTheEnvironment}
                  enableGutter={false}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {thingsToKeepInMindData?.emergencyProtocols && (
          <AccordionItem value="emergencyProtocols" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-emergency'
              className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-emergency`)}
            >
              Emergency Protocols
            </AccordionTrigger>
            <AccordionContent className={contentAnimation}>
              <div className="my-6 -ml-2 prose-strong:text-primary">
                <RichText
                  className="text-xs/6 text-foreground/80"
                  data={thingsToKeepInMindData?.emergencyProtocols}
                  enableGutter={false}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {thingsToKeepInMindData?.generalEtiquette && (
          <AccordionItem value="generalEtiquette" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-etiquette'
              className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-etiquette`)}
            >
              General Etiquette
            </AccordionTrigger>
            <AccordionContent className={contentAnimation}>
              <div className="my-6 -ml-2 prose-strong:text-primary">
                <RichText
                  className="text-xs/6 text-foreground/80"
                  data={thingsToKeepInMindData?.generalEtiquette}
                  enableGutter={false}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

      </Accordion>

      {thingsToKeepInMindData?.outro && (
        <div className="col-span-4 sm:col-span-8 lg:col-span-12">
          <div className="my-3">
            <RichText
              className="text-sm/7 text-foreground/80"
              data={thingsToKeepInMindData?.outro}
              enableGutter={false}
            />
          </div>
        </div>
      )}
    </div>
  )
}

const contentAnimation = cn(
  'pb-4 text-xs text-foreground/90 mt-2',
  'overflow-hidden',
  'data-[state=open]:animate-accordion-down',
  'data-[state=closed]:animate-accordion-up',
)
