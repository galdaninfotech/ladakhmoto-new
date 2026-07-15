import React from 'react'
import type { CompanyIntroBlock as CompanyIntroBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { ReadMore } from './ReadMore'

export const CompanyIntro: React.FC<CompanyIntroBlockProps> = (props) => {
  const { title, subTitle, content, readMore } = props

  return (
    <div className="comapny-intro-block">
      <div className="intro flex flex-col items-start">
        {title && <h1 className='font-oswald text-[16px] md:text-xl uppercase text-foreground mt-16'>{title}</h1>}
        <span className="mt-1.5 w-full h-px bg-gray-200 dark:bg-gray-800" />
        <span className="mt-4">
          {subTitle && <strong className='text-xs text-muted-foreground'><i>{subTitle}</i></strong>}
        </span>
      </div>

      {content && (
        <div className="text-muted-foreground my-4">
          <RichText data={content} enableGutter={false} />
          {readMore && <ReadMore readMore={readMore} />}
        </div>
      )}
    </div>
  )
}
