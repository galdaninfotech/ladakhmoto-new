import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Check both x-forwarded-host (from proxy) and standard host header
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')

  // Redirect www to non-www
  if (host && host.startsWith('www.')) {
    const searchParams = request.nextUrl.search || ''
    const pathname = request.nextUrl.pathname

    // Hardcode the target domain to be absolutely sure no internal port leaks
    const target = `https://ladakhmoto.com${pathname}${searchParams}`

    return NextResponse.redirect(target, 301)
  }

  const isProduction = process.env.NODE_ENV === 'production'

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://static.elfsight.com https://*.elfsight.com https://*.elfsightcdn.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google.com https://*.google.com https://www.gstatic.com https://*.gstatic.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.googleadservices.com https://*.googleadservices.com https://*.google.co.in https://*.googleapis.com https://*.firebaseapp.com https://www.google-analytics.com https://*.google-analytics.com https://ssl.google-analytics.com;
    script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' blob: https://static.elfsight.com https://*.elfsight.com https://*.elfsightcdn.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google.com https://*.google.com https://www.gstatic.com https://*.gstatic.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.googleadservices.com https://*.googleadservices.com https://*.google.co.in https://*.googleapis.com https://*.firebaseapp.com https://www.google-analytics.com https://*.google-analytics.com https://ssl.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://*.elfsight.com https://*.elfsightcdn.com https://fonts.googleapis.com https://*.googleapis.com;
    img-src 'self' data: blob: https://static.elfsight.com https://*.elfsight.com https://*.elfsightcdn.com https://*.googleusercontent.com https://*.amazonaws.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.google.com https://*.google.co.in https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.googleadservices.com https://*.googleadservices.com https://ladakhmoto.com;
    font-src 'self' data: https://*.elfsight.com https://*.elfsightcdn.com https://fonts.gstatic.com https://*.gstatic.com;
    frame-src 'self' https://static.elfsight.com https://*.elfsight.com https://*.elfsightcdn.com https://www.google.com https://*.google.com https://www.youtube.com https://*.youtube.com https://td.doubleclick.net https://*.doubleclick.net https://www.googletagmanager.com https://*.googletagmanager.com;
    connect-src 'self' https://static.elfsight.com https://*.elfsight.com https://*.elfsightcdn.com https://core.service.elfsight.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.googletagmanager.com https://www.google.com https://*.google.com https://*.g.doubleclick.net https://*.doubleclick.net https://*.google.co.in https://*.googleapis.com https://*.firebaseapp.com ws: wss:;
    object-src 'none';
    ${isProduction ? 'upgrade-insecure-requests;' : ''}
  `
    .replace(/\s{2,}/g, ' ')
    .trim()

  const response = NextResponse.next()

  // Clean existing and set new CSP
  response.headers.delete('Content-Security-Policy')
  response.headers.delete('X-Content-Security-Policy')
  response.headers.set('Content-Security-Policy', cspHeader)

  // Necessary for GA/GTM attribution
  response.headers.set('Attribution-Reporting-Eligible', 'trigger')

  // Set HSTS header for secure connections
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
