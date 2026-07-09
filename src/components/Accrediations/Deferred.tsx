'use client'

import dynamic from 'next/dynamic'

const DeferredAccrediations = dynamic(() => import('./index'), { ssr: false })

export default DeferredAccrediations
