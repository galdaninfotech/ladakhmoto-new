'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from '..'
import { themeLocalStorageKey, type Theme } from './types'
import { Sun, Moon, Monitor, Check } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/utilities/ui'

export const ThemeSelector: React.FC = () => {
  const { setTheme, theme } = useTheme()
  const [value, setValue] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setValue(preference ?? 'auto')
  }, [])

  const onThemeChange = (themeToSet: Theme | 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      setValue('auto')
    } else {
      setTheme(themeToSet)
      setValue(themeToSet)
    }
    setOpen(false)
  }

  const themes = [
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon },
    { name: 'Auto', value: 'auto', icon: Monitor },
  ]

  // Determine which icon to show on the trigger based on the active theme
  // We use the active 'theme' from context to show what's currently rendered
  const CurrentIcon = theme === 'dark' ? Moon : Sun

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          aria-label="Select a theme"
          className="relative flex items-center justify-center w-9 h-9 transition-colors duration-200 borderz border-white/10z outline-none focus-visible:ring-2 focus-visible:ring-accent group cursor-pointer"
        >
          <CurrentIcon className="w-[1.1rem] h-[1.1rem] text-current transition-all duration-300 group-hover:scale-110" />
          <span className="sr-only">Switch Theme</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-40 p-1.5 bg-card border-border shadow-xl rounded-sm">
        <div className="flex flex-col gap-1">
          {themes.map((t) => {
            const Icon = t.icon
            const isActive = value === t.value
            return (
              <button
                key={t.value}
                onClick={() => onThemeChange(t.value as any)}
                className={cn(
                  "flex items-center justify-between w-full px-3 pb-2 pt-3 my-2 text-xs font-medium rounded-sm transition-all duration-200 outline-none",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-foreground hover:bg-accent/10 hover:text-accent"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={cn("w-4 h-4", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                  <span>{t.name}</span>
                </div>
                {isActive && <Check className="w-3.5 h-3.5" />}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
