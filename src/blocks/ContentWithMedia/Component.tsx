import React from 'react'
import type { ContentWithMediaBlock as ContentWithMediaBlockProps } from '@/payload-types'
import { Media } from '../../components/Media'
import RichText from '@/components/RichText'

type Props = ContentWithMediaBlockProps

export const ContentWithMedia: React.FC<Props> = (props) => {
  const { content, media } = props

  return (
    <div className="content-with-media-block">
      {typeof media === 'object' && media !== null && (
        <div className="content-media">
          <Media 
            resource={media} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>
      )}
      {content && (
        <div className="my-6 text-gray-700 prose-h1:text-sm prose-h1:md:text-xl prose-h1:uppercase prose-h1:font-normal prose-h1:text-primary prose-h1:font-oswald">
          <RichText data={content} enableGutter={false} />
        </div>
      )}
    </div>
  )
}