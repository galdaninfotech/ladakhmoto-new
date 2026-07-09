import * as React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const LMEmail: React.FC<IconProps> = (props) => (
  <svg
    fill="currentColor"
    width={24}
    height={24}
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      className="clr-i-outline clr-i-outline-path-1"
      d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30.46,28H5.66l7-7.24-1.44-1.39L4,26.84V9.52L16.43,21.89a2,2,0,0,0,2.82,0L32,9.21v17.5l-7.36-7.36-1.41,1.41ZM5.31,8H30.38L17.84,20.47Z"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
)

export default LMEmail
