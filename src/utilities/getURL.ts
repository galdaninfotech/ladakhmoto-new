const DEFAULT_SITE_URL = 'http://localhost:3000'

const normalizeSiteURL = (value: string | undefined) => {
  if (!value) return DEFAULT_SITE_URL

  return /^https?:\/\//i.test(value) ? value : `https://${value}`
}

export const getSiteURL = () => {
  return normalizeSiteURL(process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SERVER_URL)
}

export const getSiteHostname = () => {
  try {
    return new URL(getSiteURL()).hostname
  } catch {
    return 'localhost'
  }
}

export const getServerSideURL = () => getSiteURL()

export const getClientSideURL = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin || getSiteURL()
  }

  return getSiteURL()
}
