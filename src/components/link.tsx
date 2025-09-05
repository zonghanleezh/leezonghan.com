"use client"

import { ComponentProps, Suspense } from "react"
import { Url } from "next/dist/shared/lib/router/router"
import NextLink from "next/link"
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams
} from "next/navigation"

// import { usePostHog } from "@/hooks/usePosthog"

const ignorePrefetch: string[] = []

const DEFAULT_PERSIST_PARAMS = [
  "source",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id"
]

const modifyHref = (
  href: Url,
  searchParams: ReadonlyURLSearchParams,
  pathname: string,
  persistParam?: boolean
) => {
  const hrefString = href.toString()

  const buildCleanHref = () => {
    if (hrefString.startsWith("#")) {
      return `${pathname}${hrefString}`
    }
    return hrefString
  }

  // Case 1: Explicitly opt-out of persistence
  if (persistParam === false) {
    return buildCleanHref()
  }

  if (searchParams.size === 0) {
    return hrefString
  }

  const paramsToPersist = new URLSearchParams()

  // Case 2: Explicitly opt-in to persist ALL params
  if (persistParam === true) {
    searchParams.forEach((value, key) => {
      paramsToPersist.set(key, value)
    })
  }
  // Case 3: Default behavior (persistParam is undefined)
  else {
    searchParams.forEach((value, key) => {
      if (DEFAULT_PERSIST_PARAMS.includes(key)) {
        paramsToPersist.set(key, value)
      }
    })
  }

  // If no params to persist, return a clean URL
  if (Array.from(paramsToPersist.keys()).length === 0) {
    return buildCleanHref()
  }

  const [urlWithoutHash, hashFragment] = hrefString.split("#")
  const [baseUrl, existingParams] =
    urlWithoutHash === "" ? [pathname, ""] : urlWithoutHash.split("?")
  const combinedParams = new URLSearchParams(existingParams)

  paramsToPersist.forEach((value, key) => {
    if (!combinedParams.has(key)) {
      combinedParams.set(key, value)
    }
  })

  const queryString = combinedParams.toString()
  const finalUrl = `${baseUrl}${queryString ? `?${queryString}` : ""}`

  return hashFragment ? `${finalUrl}#${hashFragment}` : finalUrl
}

interface Props extends ComponentProps<typeof NextLink> {
  persistParams?: boolean
}

const LinkComponent = (props: Props) => {
  const { href, persistParams, ...restProps } = props
  // const { event } = usePostHog()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const modifiedHref = modifyHref(href, searchParams, pathname, persistParams)

  return (
    <NextLink
      // onClick={() => event("link-click", { href: modifiedHref })}
      prefetch={!ignorePrefetch.includes(href.toString())}
      {...restProps}
      href={modifiedHref}
    />
  )
}

const Link = (props: Props) => (
  <Suspense fallback={<NextLink {...props} />}>
    <LinkComponent {...props} />
  </Suspense>
)

export default Link
