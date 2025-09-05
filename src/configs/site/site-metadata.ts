import { Metadata } from "next"
import { IS_PROD } from "@/configs/env.config"
import {
  WEBSITE_KEYWORDS,
  WEBSITE_METADATA,
  WEBSITE_NAME
} from "@/configs/site/metadata.config"

export const siteMetadata: Metadata = {
  metadataBase: new URL(WEBSITE_METADATA.url),
  title: {
    default: `${WEBSITE_METADATA.title}`,
    template: `%s | ${WEBSITE_NAME}`
  },
  description: WEBSITE_METADATA.description,
  alternates: {
    canonical: WEBSITE_METADATA.url
  },
  keywords: WEBSITE_KEYWORDS,
  authors: [],
  creator: WEBSITE_NAME,
  ...(!IS_PROD && {
    robots: "noindex, nofollow"
  }),
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: WEBSITE_METADATA.url,
    title: WEBSITE_METADATA.title,
    description: WEBSITE_METADATA.description,
    images: [
      {
        url: WEBSITE_METADATA.ogImage.url,
        width: 1200,
        height: 630,
        alt: WEBSITE_METADATA.ogImage.alt
      }
    ]
  }
}
