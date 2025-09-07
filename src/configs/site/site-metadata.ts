import { Metadata } from "next"
import { IS_PROD } from "@/configs/env.config"
import {
  METADATA_WEBSITE,
  WEBSITE_KEYWORDS,
  WEBSITE_NAME
} from "@/configs/site/metadata.config"

export const siteMetadata: Metadata = {
  metadataBase: new URL(METADATA_WEBSITE.url),
  title: {
    default: `${METADATA_WEBSITE.title}`,
    template: `%s | ${WEBSITE_NAME}`
  },
  description: METADATA_WEBSITE.description,
  alternates: {
    canonical: METADATA_WEBSITE.url
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
    url: METADATA_WEBSITE.url,
    title: METADATA_WEBSITE.title,
    description: METADATA_WEBSITE.description,
    images: [
      {
        url: METADATA_WEBSITE.ogImage.url,
        width: 1200,
        height: 630,
        alt: METADATA_WEBSITE.ogImage.alt
      }
    ]
  }
}
