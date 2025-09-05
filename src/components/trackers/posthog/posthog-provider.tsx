"use client"

import { isBrowser } from "@/configs/app.config"
import { IS_PROD } from "@/configs/env.config"
import { POSTHOG_HOST, POSTHOG_KEY } from "@/configs/posthog.config"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

// Check that PostHog is client-side (used to handle Next.js SSR)
if (isBrowser()) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "always",
    capture_pageleave: true,

    loaded: (posthog) => {
      if (!IS_PROD) posthog.debug()
    }
  })
}

const PosthogProvider = ({ children }: { children: React.ReactNode }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export default PosthogProvider
