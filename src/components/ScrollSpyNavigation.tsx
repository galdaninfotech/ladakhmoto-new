'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utilities/ui';
import { 
  FileText, 
  Map as MapIcon, 
  CalendarDays, 
  IndianRupee,
  LucideIcon 
} from 'lucide-react';

export interface ScrollSpyItem {
  id: string;
  label: string;
}

interface ScrollSpyNavProps {
  items: ScrollSpyItem[];
  rootMargin?: string;
  threshold?: number;
}

const iconMap: Record<string, LucideIcon> = {
  overview: FileText,
  itinerary: MapIcon,
  dates: CalendarDays,
  cost: IndianRupee,
};

export default function ScrollSpyNav({
  items,
  // Adjusted rootMargin to account for the 71px sticky header
  rootMargin = '-56px 0px -80% 0px',
  threshold = 0,
}: ScrollSpyNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const elements = items
      .map(item => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [items, rootMargin, threshold]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 105; // 71px header + scrollspy height + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className="bg-background/95 backdrop-blur-md border border-border/50 shadow-xl rounded-sm overflow-hidden" 
      aria-label="Tour Navigation"
    >
      <ul className="flex items-center justify-between m-0 list-none gap-1">
        {items.map(item => {
          const Icon = iconMap[item.id.toLowerCase()] || FileText;
          const isActive = activeId === item.id;
          
          return (
            <li key={item.id} className="relative flex-1">
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  "relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-1.5 py-2 lg:py-3 rounded-xs transition-colors duration-300 cursor-pointer",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isActive ? "animate-pulse" : "")} />
                <span className="font-oswald text-[9px] md:text-[11px] font-bold uppercase tracking-[0.15em]">
                  {item.label}
                </span>
              </button>
              
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-primary rounded-xs shadow-lg shadow-primary/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
