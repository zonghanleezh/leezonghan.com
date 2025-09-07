import { cn } from "@/lib/cn"

import "./globals.css"

import dynamic from "next/dynamic"
import { Outfit as Font } from "next/font/google"
import config from "@/configs"
import { IS_PROD } from "@/configs/env.config"

import { JsonLdPerson } from "@/lib/structured-data/jsonld-person"
import LayoutDefault from "@/components/layout/layout-default"
import PosthogProvider from "@/components/trackers/posthog/posthog-provider"

const ViewportIndicator = !IS_PROD
  ? dynamic(() => import("@/components/viewport-indicator"), { ssr: false })
  : () => null

const font = Font({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"]
})

// Settings
export const metadata = config.siteMetadata
export const viewport = config.siteViewport

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <>
    <LayoutDefault>{children}</LayoutDefault>

    {/* Debugging Tools */}
    <ViewportIndicator />
  </>
)

const SEOData = () => {
  return (
    <>
      <JsonLdPerson />
    </>
  )
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SEOData />
      </head>

      <PosthogProvider>
        <body className={cn(font.className, "antialiased")}>
          <MainContent>{children}</MainContent>
        </body>
      </PosthogProvider>
    </html>
  )
}
