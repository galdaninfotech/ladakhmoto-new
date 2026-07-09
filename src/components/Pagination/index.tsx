'use client'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/utilities/ui'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

export const Pagination: React.FC<{
  className?: string
  page: number
  totalPages: number
}> = (props) => {
  const router = useRouter()
  const pathname = usePathname()

  const { className, page, totalPages } = props
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  const hasExtraPrevPages = page - 1 > 1
  const hasExtraNextPages = page + 1 < totalPages

  const itemStyle = { fontSize: '10px' }

  const getPageUrl = (num: number) => {
    if (pathname.includes('/page/')) {
      return pathname.replace(/\/page\/\d+/, `/page/${num}`)
    }
    const base = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
    return `${base}/page/${num}`
  }

  return (
    <div className={cn('my-12', className)}>
      <PaginationComponent>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              size="xs"
              style={itemStyle}
              className={hasPrevPage ? "cursor-pointer" : "cursor-not-allowed"}
              disabled={!hasPrevPage}
              onClick={() => {
                if (hasPrevPage) router.push(getPageUrl(page - 1))
              }}
            />
          </PaginationItem>

          {hasExtraPrevPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {hasPrevPage && (
            <PaginationItem>
              <PaginationLink
                size="xs"
                style={itemStyle}
                className="cursor-pointer"
                onClick={() => {
                  router.push(getPageUrl(page - 1))
                }}
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              size="xs"
              style={itemStyle}
              className="cursor-pointer"
              isActive
              onClick={() => {
                router.push(getPageUrl(page))
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>

          {hasNextPage && (
            <PaginationItem>
              <PaginationLink
                size="xs"
                style={itemStyle}
                className="cursor-pointer"
                onClick={() => {
                  router.push(getPageUrl(page + 1))
                }}
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {hasExtraNextPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              size="xs"
              style={itemStyle}
              className={hasNextPage ? "cursor-pointer" : "cursor-not-allowed"}
              disabled={!hasNextPage}
              onClick={() => {
                if (hasNextPage) router.push(getPageUrl(page + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationComponent>
    </div>
  )
}
