import * as React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const LMChevronRight: React.FC<IconProps> = (props) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.82031 3.58594L5.76562 4.66406L13.1016 12L5.76562 19.3359L6.82031 20.4141L15.2344 12L6.82031 3.58594ZM12.0703 3.58594L11.0156 4.66406L18.3516 12L11.0156 19.3359L12.0703 20.4141L20.4844 12L12.0703 3.58594Z"
      fill="currentColor"
    />
  </svg>
)

export default LMChevronRight
