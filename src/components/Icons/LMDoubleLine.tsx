import React from 'react'

export const LMDoubleLine = ({ className }: { className?: string }) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ shapeRendering: 'crispEdges' }}
    >
      <line
        x1="0"
        y1="4.5"
        x2="12"
        y2="4.5"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <line
        x1="0"
        y1="7.5"
        x2="12"
        y2="7.5"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  )
}
