import * as React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const LMMobile: React.FC<IconProps> = (props) => (
  <svg
    fill="currentColor"
    width={24}
    height={24}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.004 0H5.996A1.996 1.996 0 0 0 4 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0 0 16 18.004V1.996A1.996 1.996 0 0 0 14.004 0zM10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1 1.25.447 1.25 1-.56 1-1.25 1zm4-3H6V2h8v14z" />
  </svg>
)
export default LMMobile
