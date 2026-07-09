import React from 'react'
import LMHighestPeak from './Icons/LMHighestPeak'
import LMDistance from './Icons/LMDistance'
import LMDurationDay from './Icons/LMDurationDay'
import LMDurationHour from './Icons/LMDurationHour'
import LMAccommodation from './Icons/LMAccommodation'
import LMMeal from './Icons/LMMeal'

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
    <div className="tour-icons flex items-start justify-around w-full gap-2">
      {highestPeak && (
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="h-10 flex items-center justify-center mb-1">
            <LMHighestPeak />
          </div>
          <div className="text-[10px] md:text-xs text-center break-words w-full">
            {`${highestPeak} ft`}
          </div>
        </div>
      )}
      {distance && (
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="h-10 flex items-center justify-center mb-1">
            <LMDistance />
          </div>
          <div className="text-[10px] md:text-xs text-center break-words w-full">
            {`${distance} km`}
          </div>
        </div>
      )}
      {duration && (
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="h-10 flex items-center justify-center mb-1">
            {durationText.toLowerCase().includes('hr') ? <LMDurationHour /> : <LMDurationDay />}
          </div>
          <div className="text-[10px] md:text-xs text-center break-words w-full">
            {durationText}
          </div>
        </div>
      )}
      {accommodation && accommodation.length > 0 && (
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="h-10 flex items-center justify-center mb-1">
            <LMAccommodation />
          </div>
          <div className="text-[10px] md:text-xs text-center break-words w-full">
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
        <div className="flex flex-col items-center flex-1 min-w-0">
          <div className="h-10 flex items-center justify-center mb-1">
            <LMMeal />
          </div>
          <div className="text-[10px] md:text-xs text-center break-words w-full">
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
