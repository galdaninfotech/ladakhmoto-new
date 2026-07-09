
Plan: Optimizing HTML Page Size                                                                                                          │
│                                                                                                                                          │
│ Objective                                                                                                                                │
│ Reduce the size of the generated HTML to improve page load speed and meet recommended performance standards (under 33 KB).               │
│                                                                                                                                          │
│ Investigation Strategy                                                                                                                   │
│  1. Analyze HTML Structure: Inspect the rendered HTML (if possible) or the layout structure to identify major contributors to page size  │
│     (e.g., large blocks, duplicated sections, excessive inline markup).                                                                  │
│  2. Identify Opportunities:                                                                                                              │
│      * Inline Assets: Check for excessive inline styles or scripts that should be external.                                              │
│      * Redundant Markup: Look for patterns of duplicated content or unnecessarily nested HTML components.                                │
│      * Compression: Verify if compression (Gzip/Brotli) is already enabled or needs to be configured (likely managed by the              │
│        hosting/server environment, but I will check for any configuration files).                                                        │
│      * External Files: Assess if components in src/app or src/blocks are unnecessarily large or can be loaded lazily.                    │
│      * Payload CMS Overhead: Check if the RichText blocks or other CMS-injected content are bloating the markup.                         │
│                                                                                                                                          │
│ Proposed Implementation Steps                                                                                                            │
│  1. Run Performance Audit: Use local development tools or curl to analyze the HTML size of a typical landing page.                       │
│  2. Minimize Inline Content: Refactor any identified inline CSS or JS blocks into external files.                                        │
│  3. Optimize Block Components: Review src/blocks to ensure components are lean and efficient.                                            │
│  4. Review Layouts: Audit src/app/layout.tsx and header/footer components for any markup that can be reduced or optimized.               │
│  5. Verify Gzip/Brotli: Check the application's response headers to ensure server-side compression is active.                            │
│                                                                                                                                          │
│ Verification                                                                                                                             │
│  - Compare HTML size before and after optimization using curl or browser DevTools.                                                       │
│  - Verify that the HSTS and CSP changes remain intact.                                                                                   │
│  - Run pnpm build to ensure all changes maintain production build integrity.      