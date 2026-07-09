import { withPayload } from '@payloadcms/next/withPayload'
import withBundleAnalyzer from '@next/bundle-analyzer'

import redirects from './redirects.js'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const normalizeSiteURL = (value) => {
  if (!value) return 'http://localhost:3000'

  return /^https?:\/\//i.test(value) ? value : `https://${value}`
}

const SITE_URL = normalizeSiteURL(
  process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SERVER_URL,
)
const siteHostname = new URL(SITE_URL).hostname
const siteProtocol = new URL(SITE_URL).protocol.replace(':', '')

const getS3Details = (endpoint) => {
  if (!endpoint) return null
  try {
    const url = new URL(endpoint.startsWith('http') ? endpoint : `https://${endpoint}`)
    return {
      protocol: url.protocol.replace(':', ''),
      hostname: url.hostname,
    }
  } catch (e) {
    return null
  }
}
const s3Details = getS3Details(process.env.S3_ENDPOINT)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  productionBrowserSourceMaps: true,
  transpilePackages: ['framer-motion'],
  // Use Next's SWC-based minifier for JavaScript
  // swcMinify: true,
  // Enable Next's CSS optimization (experimental) to help reduce CSS size in production
  experimental: {
    // optimizeCss: true,
  },
  images: {
    qualities: [75, 85, 90],
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
    remotePatterns: [
      {
        protocol: siteProtocol,
        hostname: siteHostname,
      },
      {
        protocol: 'https',
        hostname: 'ladakhmototest.netlify.app',
      },
      {
        protocol: 'https',
        hostname: 'ladakhmoto.s3.ap-south-1.amazonaws.com',
      },
      ...(s3Details
        ? [
            {
              protocol: s3Details.protocol, 
              hostname: s3Details.hostname,
            },
          ]
        : []),
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Attribution-Reporting-Eligible',
            value: 'trigger',
          },
        ],
      },
      {
        source: '/api/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  poweredByHeader: false,
  redirects,
  trailingSlash: false,
}

export default withPayload(bundleAnalyzer(nextConfig), { devBundleServerPackages: false })
