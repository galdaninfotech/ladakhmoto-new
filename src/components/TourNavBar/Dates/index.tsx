'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion'
import { handleAccordionScrollIntoView } from '@/utilities/handleAccordionScrollIntoView';
import { cn } from '@/utilities/ui';
type TourDate = {
  start?: string | null;
  end?: string | null;
  status?: "open" | "closing-soon" | "closed" | null;
  id?: string | null;
};

const groupDatesByMonth = (dates: TourDate[] | null | undefined) => {
  if (!dates) return {};
  return dates.reduce((acc, date) => {
    if (!date?.start) return acc;
    const d = new Date(date.start);
    const monthKey = d.toLocaleString("default", {
      month: "long",
      year: "numeric",
    }); // e.g. "April 2026"
    if (!acc[monthKey]) acc[monthKey] = [];
    acc[monthKey].push(date);
    return acc;
  }, {} as Record<string, TourDate[]>);
};

export const Dates: React.FC<{
  dates: TourDate[] | null | undefined;
}> = (props) => {
  const { dates } = props;
  const grouped = groupDatesByMonth(dates);

  const currentMonthKey = new Date().toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const entries = Object.entries(grouped);
  const currentMonthIndex = entries.findIndex(([month]) => month === currentMonthKey);
  const defaultOpenItem = currentMonthIndex !== -1 ? `item-${currentMonthIndex}` : undefined;

  return (
    <section id="dates" className="pt-6 mb-8">
      <h2 className="mb-6 font-oswald uppercase text-foreground tracking-[2px] text-[1.2rem] font-normal leading-[1.5em] relative before:content-[''] before:bg-accent before:w-[95px] before:h-[3px] before:absolute before:-bottom-[9px] before:left-0 after:content-[''] after:bg-accent after:w-[166px] after:h-px after:absolute after:-bottom-[8px] after:left-0">
        Tour Departures
      </h2>

      <Accordion type="single" collapsible defaultValue={defaultOpenItem} className="w-full">
        <div className="space-y-1">
          {Object.entries(grouped).map(([month, monthDates], index) => (
            
            <div key={month} className="border border-border">
              <AccordionItem key={month} value={`item-${index}`} className="rounded-xs" >
                <AccordionTrigger 
                  id={`accordion-trigger-${month}`}
                  className="p-3 md:p-4 text-left text-sm font-oswald text-foreground/80 bg-muted/50 cursor-pointer hover:text-accent hover:no-underline"
                  onClick={(event) => handleAccordionScrollIntoView(event, `accordion-trigger-${month}`)}
                >
                  {month}
                </AccordionTrigger>
                <AccordionContent className={contentAnimation}>
                  {/* Table header */}
                  <div className="grid grid-cols-[40px_1fr_120px] bg-muted border-t border-border px-4 py-2 text-xs text-primary font-semibold uppercase">
                    <span>Tour</span>
                    <span>Date</span>
                    <span className="text-right">Status</span>
                  </div>

                  {/* Rows */}
                  <div>
                    {monthDates.map((date, idx) => {
                      if (!date.start || !date.end) return null;
                      const start = new Date(date.start);
                      const end = new Date(date.end);
                      const startStr = start.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                      });
                      const endStr = end.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                      });

                      return (
                        <div
                          key={date.id ?? idx}
                          className={`grid grid-cols-[40px_1fr_120px] px-4 py-3 text-sm border-t border-border ${
                            idx % 2 === 1 ? "bg-muted/20" : "bg-card"
                          }`}
                        >
                          {/* Tour number */}
                          <span className="tabular-nums text-muted-foreground">0{idx + 1}</span>

                          {/* Date range */}
                          <span className="text-foreground">
                            {startStr} - {endStr}
                          </span>

                          {/* Status */}
                          <span className="flex justify-end">
                            {date.status === "open" && (
                              <span className="border border-success/50 text-success text-[10px] px-2 py-0.5 rounded-xs uppercase">
                                Open
                              </span>
                            )}
                            {date.status === "closing-soon" && (
                              <span className="border border-warning/50 text-warning text-[10px] px-2 py-0.5 rounded-xs uppercase">
                                {Math.floor(Math.random() * (12 - 5 + 1)) + 5} Seats Left
                              </span>
                            )}
                            {date.status === "closed" && (
                              <span className="border border-error/50 text-error text-[10px] px-2 py-0.5 rounded-xs uppercase">
                                Closed
                              </span>
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Optional note row */}
                  <div className="px-4 py-3 text-xs text-muted-foreground border-t border-border flex gap-2 items-start">
                    <span className="text-lg leading-none text-accent">👉</span>
                    <ul className="note-list list-disc ml-5 space-y-1">
                      <li>Closing soon. Grab your seat with special discount</li>
                      <li>If you are more than 7 person, we can arrange new slot.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem> 
              
            </div>
          ))}
        </div>

      </Accordion>
    </section>
  );
};

const contentAnimation = cn(
  'pb-4 text-sm text-muted-foreground mt-2',
  'overflow-hidden',
  'data-[state=open]:animate-accordion-down',
  'data-[state=closed]:animate-accordion-up',
)