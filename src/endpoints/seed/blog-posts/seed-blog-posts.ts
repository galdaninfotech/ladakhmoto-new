 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest } from 'payload'

import { blogPost1 } from './blog-post-1'
import { blogPost2 } from './blog-post-2'
import { blogPost3 } from './blog-post-3'
import { blogPost4 } from './blog-post-4'

export const seedBlogPosts = async ({
  payload,
  req,
  mediaMap,
  demoAuthor,
}: {
  payload: Payload
  req: PayloadRequest
  mediaMap: Record<string, any>
  demoAuthor: any
}) => {
  payload.logger.info(`— Seeding blog posts...`)

  await payload.create({
    collection: 'posts',
    depth: 0,
    draft: false,
    context: req.context,
    data: blogPost1({ mediaMap, author: demoAuthor }),
  })

  await payload.create({
    collection: 'posts',
    depth: 0,
    draft: false,
    context: req.context,
    data: blogPost2({ mediaMap, author: demoAuthor }),
  })

  await payload.create({
    collection: 'posts',
    depth: 0,
    draft: false,
    context: req.context,
    data: blogPost3({ mediaMap, author: demoAuthor }),
  })

  await payload.create({
    collection: 'posts',
    depth: 0,
    draft: false,
    context: req.context,
    data: blogPost4({ mediaMap, author: demoAuthor }),
  })
}
