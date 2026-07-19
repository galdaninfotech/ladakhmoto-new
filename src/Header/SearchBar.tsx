'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export const SearchBar: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState('All')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Tours', value: 'bikingAdventures' },
    { label: 'Packages', value: 'holidayPackages' },
    { label: 'Destinations', value: 'destinations' },
    { label: 'Blog', value: 'posts' },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) {
      params.set('q', query.trim())
    }
    if (category !== 'All') {
      const catObj = categories.find((c) => c.label === category)
      if (catObj) {
        params.set('type', catObj.value)
      }
    }
    router.push(`/search?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-[550px] mx-auto bg-[#1b5d52] border border-[#1b5d52] rounded-[4px] overflow-hidden h-[34px] shadow-sm"
    >
      {/* Category Dropdown */}
      <div className="relative h-full flex items-center" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="h-full px-3.5 flex items-center gap-1 text-white hover:bg-black/10 transition-colors duration-200 font-sans text-[11px] font-bold tracking-wider select-none cursor-pointer border-r border-[#154a41]"
        >
          <span>{category}</span>
          <ChevronDown className="w-3 h-3 text-white/80 stroke-[2.5]" />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-[110%] left-0 mt-0.5 w-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded shadow-md py-1 z-50 text-left">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => {
                  setCategory(cat.label)
                  setIsDropdownOpen(false)
                }}
                className="w-full px-3 py-1.5 text-[11px] font-sans font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search here..."
        className="flex-1 h-full px-3 bg-white text-slate-800 placeholder-slate-400 text-[11px] font-sans focus:outline-none"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="h-full px-3.5 flex items-center justify-center text-white hover:bg-black/10 transition-colors duration-200 cursor-pointer"
      >
        <Search className="w-3.5 h-3.5 stroke-[2.5]" />
      </button>
    </form>
  )
}
