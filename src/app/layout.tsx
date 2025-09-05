import { cn } from "@/lib/cn"

import "./globals.css"

import dynamic from "next/dynamic"
import { Montserrat } from "next/font/google"
import config from "@/configs"
import { IS_PROD } from "@/configs/env.config"

import { JsonLdPerson } from "@/lib/structured-data/jsonld-person"
import LayoutDefault from "@/components/layout/layout-default"

const ViewportIndicator = !IS_PROD
  ? dynamic(() => import("@/components/viewport-indicator"), { ssr: false })
  : () => null

const montserrat = Montserrat({
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

      <body className={cn(montserrat.className, "antialiased")}>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  )
}
