import React from 'react'
import { MountainSnow, Route, Clock, CalendarDays, Bed, Utensils } from 'lucide-react'

type IconsDataType = {
  isOverview: boolean
  duration?: string | number | null | undefined
  distance?: string | number | null | undefined
  highestPeak?: string | number | null | undefined
  accommodation?: string[] | null | undefined
  meal?: string[] | null | undefined
}

function capitalizeHyphenatedString(str: string | null | undefined) {
  if (str) {
    return str
      .replace(/-/g, ' ')
      .split(' ')
      .map((word) => {
        if (word === 'bs6' || word === 'gh') {
          return (
            word.charAt(0).toUpperCase() +
            word.charAt(1).toUpperCase() +
            word.slice(2).toLowerCase()
          )
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
      })
      .join(' ')
  }
}

const TourIcons: React.FC<IconsDataType> = (props) => {
  const { isOverview, duration, distance, highestPeak, accommodation, meal } = props
  const durationText = duration ? (isOverview ? `${duration}` : `${duration} hr`) : ''

  return (
    <div className="tour-icons flex items-start justify-around w-full gap-1 py-1">
      {highestPeak && (
        <div className="flex flex-col items-center flex-1 min-w-0 group">
          <div className="h-10 rounded-full  text-gray-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:text-black shadow-xs">
            <MountainSnow className="w-5 h-5" strokeWidth={1.8} />
          </div>
          <div className="text-[10px] md:text-xs text-center wrap-break-word w-full font-medium tracking-wide text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            {`${highestPeak} ft`}
          </div>
        </div>
      )}
      {distance && (
        <div className="flex flex-col items-center flex-1 min-w-0 group">
          <div className="h-10 rounded-full text-gray-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:text-black shadow-xs">
            <Route className="w-5 h-5" strokeWidth={1.8} />
          </div>
          <div className="text-[10px] md:text-xs text-center wrap-break-word w-full font-medium tracking-wide text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            {`${distance} km`}
          </div>
        </div>
      )}
      {duration && (
        <div className="flex flex-col items-center flex-1 min-w-0 group">
          <div className="h-10 rounded-full text-gray-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:text-black shadow-xs">
            {durationText.toLowerCase().includes('hr') ? (
              <Clock className="w-5 h-5" strokeWidth={1.8} />
            ) : (
              <CalendarDays className="w-5 h-5" strokeWidth={1.8} />
            )}
          </div>
          <div className="text-[10px] md:text-xs text-center wrap-break-word w-full font-medium tracking-wide text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            {durationText}
          </div>
        </div>
      )}
      {accommodation && accommodation.length > 0 && (
        <div className="flex flex-col items-center flex-1 min-w-0 group">
          <div className="h-10 rounded-full text-gray-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:text-black shadow-xs">
            {/* <Bed className="w-5 h-5" strokeWidth={1.8} /> */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
              <path d="M3 20v-9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9" />
              <path d="M7 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
              <path d="M3 15h18" />
            </svg>
          </div>
          <div className="text-[10px] md:text-xs text-center wrap-break-word w-full font-medium tracking-wide text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            <ul className="inline">
              {accommodation.map((item, index) => (
                <li className="inline capitalize" key={item}>
                  {capitalizeHyphenatedString(item)}
                  {index < accommodation.length - 1 && ' / '}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {meal && meal.length > 0 && (
        <div className="flex flex-col items-center flex-1 min-w-0 group">
          <div className="h-10 rounded-full text-gray-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:text-black shadow-xs">
            <Utensils className="w-5 h-5" strokeWidth={1.8} />
          </div>
          <div className="text-[10px] md:text-xs text-center wrap-break-word w-full font-medium tracking-wide text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            <ul className="inline">
              {meal.map((item, index) => (
                <li className="inline capitalize" key={item}>
                  {item}
                  {index < meal.length - 1 && ' / '}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default TourIcons
