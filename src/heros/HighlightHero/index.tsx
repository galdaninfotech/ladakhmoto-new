'use client'
import React from 'react'
import type { Highlight, Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import { HiOutlineHome } from 'react-icons/hi2'
import { usePathname } from 'next/navigation'
import { HeroBottomMask } from '@/components/HeroBottomMask'

export const HighlightHero: React.FC<{
  post: Highlight
}> = ({ post }) => {
  const pathname = usePathname()

  if (!post) return null

  const { title } = post

  // Fallback to second gallery image (skipping first), then first gallery image, then SEO meta image
  const defaultImage =
    post.gallery && post.gallery.length > 1 && typeof post.gallery[1].image === 'object'
      ? post.gallery[1].image
      : post.gallery && post.gallery.length > 0 && typeof post.gallery[0].image === 'object'
        ? post.gallery[0].image
        : post.meta?.image

  const [prevPost, setPrevPost] = React.useState(post)
  const [heroImage, setHeroImage] = React.useState<any>(defaultImage)

  if (post !== prevPost) {
    setPrevPost(post)
    setHeroImage(defaultImage)
  }

  React.useEffect(() => {
    if (post.gallery && post.gallery.length > 1) {
      // Skip the first image (index 0), randomize from index 1 to post.gallery.length - 1
      const randomIndex = Math.floor(Math.random() * (post.gallery.length - 1)) + 1
      const selected = post.gallery[randomIndex].image
      if (typeof selected === 'object') {
        setHeroImage(selected)
      }
    } else if (post.gallery && post.gallery.length > 0) {
      const selected = post.gallery[0].image
      if (typeof selected === 'object') {
        setHeroImage(selected)
      }
    } else {
      setHeroImage(post.meta?.image)
    }
  }, [post])

  const pathSegments = pathname.split('/').filter((segment) => segment !== '')

  let lastSegment = pathSegments[pathSegments.length - 1]
  if (lastSegment?.includes('introduction')) {
    lastSegment = 'introduction'
  }
  if (lastSegment?.includes('contact')) {
    lastSegment = 'contact'
  }

  return (
    <div className="relative -mt-[37.2rem] flex items-center justify-center">
      <div className="z-10 flex items-center justify-center 2xl:justify-end text-white pb-2">
        <div className="mt-[16.5rem] md:mt-[21.25rem]">
          <div className="">
            <div
              className="font-oswald uppercase text-primary text-[1.25rem] md:text-3xl tracking-wider mb-3 md:mb-4 text-center"
            >
              {title}
            </div>
            <p className="text-xs flex items-center justify-center flex-wrap font-sans">
              <HiOutlineHome className="mr-1 text-accent" />
              <Link href="/" className="text-white hover:underline hover:text-primary">
                Home
              </Link>
              {pathSegments.map((segment, index) => {
                const href = '/' + pathSegments.slice(0, index + 1).join('/')
                const isLast = index === pathSegments.length - 1
                const displaySegment = segment
                  .replace(/[-\_]/g, ' ')
                  .split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')

                return (
                  <React.Fragment key={href}>
                    <FaAngleRight className="mx-1 text-accent" />
                    {isLast ? (
                      <span className="text-accent">
                        {displaySegment.toLowerCase().includes('introduction')
                          ? 'Introduction'
                          : displaySegment.toLowerCase().includes('contact')
                            ? 'Contact'
                            : displaySegment}
                      </span>
                    ) : (
                      <Link href={href} className="text-white hover:underline hover:text-primary">
                        {displaySegment}
                      </Link>
                    )}
                  </React.Fragment>
                )
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[28rem] md:h-[36.25rem] select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            fetchPriority="high"
            quality={90}
            preferredSizes={['xlarge', 'large']}
            imgClassName="-z-10 object-cover"
            resource={heroImage}
          />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-black to-transparent" />
      </div>
      <HeroBottomMask />
    </div>
  )
}
