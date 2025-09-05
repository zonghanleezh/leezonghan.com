import { MetadataRoute } from "next"
import { headers } from "next/headers"
import { IS_PROD } from "@/configs/env.config"
import { WEBSITE_METADATA } from "@/configs/site/metadata.config"

const robots = (): MetadataRoute.Robots => {
  const headersList = headers()
  const host = headersList.get("host") || ""
  const allowedDomain = new URL(WEBSITE_METADATA.url).host

  const isAllowed = allowedDomain === host

  if (IS_PROD && isAllowed) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/*.json$",
          "/*_buildManifest.js$",
          "/*_middlewareManifest.js$",
          "/*_ssgManifest.js$",
          "/*.js$"
        ]
      },
      sitemap: [`${WEBSITE_METADATA.url}/sitemap.xml`]
    }
  } else {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      }
    }
  }
}

export default robots
