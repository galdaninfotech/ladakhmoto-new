"use client"
import { Children, type ReactNode, createContext, useContext, useEffect, useRef, useState } from "react"
import { motion, type Transition, useMotionValue } from "framer-motion"
import { cn } from "@/utilities/ui"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type CarouselContextType = {
  index: number
  setIndex: (newIndex: number) => void
  itemsCount: number
  setItemsCount: (newItemsCount: number) => void
  disableDrag: boolean
  autoPlay: boolean
  autoPlayInterval: number
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within an CarouselProvider")
  }
  return context
}

export type CarouselProviderProps = {
  children: ReactNode
  initialIndex?: number
  onIndexChange?: (newIndex: number) => void
  disableDrag?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
}

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
  autoPlay = false,
  autoPlayInterval = 3000,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex)
  const [itemsCount, setItemsCount] = useState<number>(0)

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex)
    onIndexChange?.(newIndex)
  }

  useEffect(() => {
    setIndex(initialIndex)
  }, [initialIndex])

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
        autoPlay,
        autoPlayInterval,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

export type CarouselProps = {
  children: ReactNode
  className?: string
  initialIndex?: number
  index?: number
  onIndexChange?: (newIndex: number) => void
  disableDrag?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
}

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  autoPlay = false,
  autoPlayInterval = 3000,
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex)
  const [isHovered, setIsHovered] = useState(false)
  const isControlled = externalIndex !== undefined
  const currentIndex = isControlled ? externalIndex : internalIndex

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex)
    }
    onIndexChange?.(newIndex)
  }

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
      autoPlay={autoPlay}
      autoPlayInterval={autoPlayInterval}
    >
      <div
        className={cn("group/hover relative h-full", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden h-full">
          <AutoPlayController isHovered={isHovered} />
          {children}
        </div>
      </div>
    </CarouselProvider>
  )
}

function AutoPlayController({ isHovered }: { isHovered: boolean }) {
  const { index, setIndex, itemsCount, autoPlay, autoPlayInterval } = useCarousel()

  useEffect(() => {
    if (!autoPlay || isHovered || itemsCount === 0) return

    const interval = setInterval(() => {
      setIndex((index + 1) % itemsCount)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, itemsCount, setIndex, index])

  return null
}

export type CarouselNavigationProps = {
  className?: string
  classNameButton?: string
  alwaysShow?: boolean
}

function CarouselNavigation({ className, classNameButton, alwaysShow }: CarouselNavigationProps) {
  const { index, setIndex, itemsCount } = useCarousel()

  const goToPrevious = () => {
    if (index === 0) {
      setIndex(itemsCount - 1) // Loop to last item
    } else {
      setIndex(index - 1)
    }
  }

  const goToNext = () => {
    if (index === itemsCount - 1) {
      setIndex(0) // Loop to first item
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className={cn("absolute bottom-20 left-0 right-0 z-10 flex justify-start gap-3 px-4 container mx-auto pointer-events-none", className)}>
      <button
        type="button"
        aria-label="Previous slide"
        className={cn(
          "pointer-events-auto h-fit w-fit bg-primary backdrop-blur-sm p-3 transition-all duration-300 hover:bg-accent shadow-lg opacity-100",
          classNameButton,
        )}
        onClick={goToPrevious}
      >
        <ChevronLeft className="text-white stroke-white" size={20} />
      </button>
      <button
        type="button"
        className={cn(
          "pointer-events-auto h-fit w-fit bg-primary backdrop-blur-sm p-3 transition-all duration-300 hover:bg-accent shadow-lg opacity-100",
          classNameButton,
        )}
        aria-label="Next slide"
        onClick={goToNext}
      >
        <ChevronRight className="text-white stroke-white" size={20} />
      </button>
    </div>
  )
}

export type CarouselIndicatorProps = {
  className?: string
  classNameButton?: string
}

function CarouselIndicator({ className, classNameButton }: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex } = useCarousel()

  return (
    <div className={cn("absolute bottom-20 left-0 right-0 z-10 flex justify-end px-4 container mx-auto", className)}>
      <div className="flex space-x-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300 border border-border/10",
              index === i ? "bg-accent border-accent" : "bg-foreground/20 hover:bg-foreground/40",
              classNameButton,
            )}
          />
        ))}
      </div>
    </div>
  )
}

export type CarouselContentProps = {
  children: ReactNode
  className?: string
  transition?: Transition
}

function CarouselContent({ children, className, transition }: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag } = useCarousel()
  const [visibleItemsCount, setVisibleItemsCount] = useState(1)
  const dragX = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsLength = Children.count(children)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const options = {
      root: containerRef.current,
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter((entry) => entry.isIntersecting).length
      setVisibleItemsCount(visibleCount)
    }, options)

    const childNodes = containerRef.current.children
    Array.from(childNodes).forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [children, setItemsCount])

  useEffect(() => {
    if (!itemsLength) {
      return
    }

    setItemsCount(itemsLength)
  }, [itemsLength, setItemsCount])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -10) {
      if (index === itemsLength - 1) {
        setIndex(0) // Loop to first
      } else {
        setIndex(index + 1)
      }
    } else if (x >= 10) {
      if (index === 0) {
        setIndex(itemsLength - 1) // Loop to last
      } else {
        setIndex(index - 1)
      }
    }
  }

  return (
    <motion.div
      drag={disableDrag ? false : "x"}
      dragConstraints={
        disableDrag
          ? undefined
          : {
              left: 0,
              right: 0,
            }
      }
      dragMomentum={disableDrag ? undefined : false}
      style={{
        x: disableDrag ? undefined : dragX,
      }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={
        transition || {
          damping: 18,
          stiffness: 90,
          type: "spring",
          duration: 0.2,
        }
      }
      className={cn("flex items-center h-full", !disableDrag && "cursor-grab active:cursor-grabbing", className)}
      ref={containerRef}
    >
      {children}
    </motion.div>
  )
}

export type CarouselItemProps = {
  children: ReactNode
  className?: string
}

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div className={cn("w-full h-full min-w-0 shrink-0 grow-0 overflow-hidden", className)}>
      {children}
    </motion.div>
  )
}

export { Carousel, CarouselContent, CarouselNavigation, CarouselIndicator, CarouselItem, useCarousel }