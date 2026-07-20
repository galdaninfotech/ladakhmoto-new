'use client'
import type { InclusionExclusionUltimateAdventure as InclusionExclusionUltimateAdventureType } from '@/payload-types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { cn } from '@/utilities/ui';
import { TbXboxX } from "react-icons/tb";
import LMDoneSqaure from '@/components/Icons/LMDoneSqaure';
import { handleAccordionScrollIntoView } from '@/utilities/handleAccordionScrollIntoView';

export const InclusionExclusionUltimateAdventure: React.FC<{ inclusionExclusionUltimateAdventureData: InclusionExclusionUltimateAdventureType | undefined }> = ({ inclusionExclusionUltimateAdventureData }) => {
// console.log(inclusionExclusionUltimateAdventureData)

  return (
    <div className="container mx-auto col-span-4 md:col-span-8 lg:col-span-9 mb-6 mt-8"> 

      <h2 className="mb-2 font-oswald uppercase text-foreground tracking-[2px] text-[1.25rem] font-normal leading-[1.5em] relative left-2.5 before:content-[''] before:bg-accent before:w-[5px] before:h-[18px] before:absolute before:bottom-[7px] before:-left-2.5">
        Inclusion & Exclusion
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-1">
          <AccordionItem value="inclusions" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-inclusion'
              className="p-2 md:p-4 text-left text-base font-oswald text-foreground/80 cursor-pointer hover:text-success hover:no-underline bg-muted/50"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-inclusion`)}
            >
              Inclusions
            </AccordionTrigger>

            <AccordionContent className={contentAnimation}>
              <ul className='space-y-4 mt-4 text-foreground/90'>
                {inclusionExclusionUltimateAdventureData?.inclusions && inclusionExclusionUltimateAdventureData?.inclusions.map((inclusions, index) => (
                  <li key={index} className='text-xs flex items-start gap-x-2'>
                    <span className="mt-1 shrink-0">
                      <LMDoneSqaure className='text-success size-3.5 -mt-1' />
                    </span>
                    <span>{inclusions.inclusion}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Exlusions */}
          <AccordionItem value="exlusions" className="rounded-xs">
            <AccordionTrigger 
              id='accordion-trigger-exclusion'
              className="p-2 md:p-4 text-left text-base font-oswald text-foreground/80 cursor-pointer hover:text-error hover:no-underline bg-muted/50"
              onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-exclusion`)}
            >
              Exlusions
            </AccordionTrigger>

            <AccordionContent className={contentAnimation}>
              <ul className='space-y-4 mt-4 text-foreground/90'>
                {inclusionExclusionUltimateAdventureData?.exclusions && inclusionExclusionUltimateAdventureData?.exclusions.map((exclusions, index) => (
                  <li key={index} className='text-xs flex items-start gap-x-2'>
                    <span className="mt-1 shrink-0">
                      <TbXboxX className='text-error size-4 -mt-1' />
                    </span>
                    <span>{exclusions.exclusion}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        
      </Accordion>
    </div>
  );
};

const contentAnimation = cn(
  'px-4 pb-4 text-sm text-foreground/90 mt-2',
  'overflow-hidden',
  'data-[state=open]:animate-accordion-down',
  'data-[state=closed]:animate-accordion-up',
)
