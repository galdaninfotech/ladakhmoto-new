'use client'

import React, { useEffect, useState } from 'react'

interface EmailObfuscatorProps {
  email: string
  className?: string
  ariaLabel?: string
  title?: string
  children?: React.ReactNode
  showEmail?: boolean
}

export const EmailObfuscator: React.FC<EmailObfuscatorProps> = ({
  email,
  className = '',
  ariaLabel = 'Email',
  title = 'Email',
  children,
  showEmail = true,
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [decodedEmail, setDecodedEmail] = useState<string>('')
  
  // Encode at build/render time so it's not in plaintext in the JS bundle either if possible
  // but btoa is fine for now as it's better than plaintext.
  const encodedEmail = btoa(email)

  useEffect(() => {
    setIsMounted(true)
    setDecodedEmail(atob(encodedEmail))
  }, [encodedEmail])

  if (!isMounted) {
    return (
      <span className={className} title={title}>
        {children}
      </span>
    )
  }

  return (
    <a
      href={`mailto:${decodedEmail}`}
      className={className}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
      {showEmail && <span>{decodedEmail}</span>}
    </a>
  )
}
