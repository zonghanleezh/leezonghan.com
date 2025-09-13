import { cn } from "@/lib/cn"

import "./globals.css"

import dynamic from "next/dynamic"
import { Instrument_Sans } from "next/font/google"
import localFont from "next/font/local"
import config from "@/configs"
import { IS_PROD } from "@/configs/env.config"

import { JsonLdPerson } from "@/lib/structured-data/jsonld-person"
import { Toaster } from "@/components/ui/sonner"
import LayoutDefault from "@/components/layout/layout-default"
import PosthogProvider from "@/components/trackers/posthog/posthog-provider"

const ViewportIndicator = !IS_PROD
  ? dynamic(() => import("@/components/viewport-indicator"), { ssr: false })
  : () => null

// Fonts
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"]
})
const gambetta = localFont({
  src: "../../public/fonts/Gambetta-Variable.woff2",
  variable: "--font-gambetta",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "serif"]
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
        <body
          className={cn(
            instrumentSans.variable,
            gambetta.variable,
            "antialiased"
          )}>
          <MainContent>{children}</MainContent>
          <Toaster position="top-center" richColors />
        </body>
      </PosthogProvider>
    </html>
  )
}
