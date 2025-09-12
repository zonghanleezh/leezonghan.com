"use client"

import { useEffect, useState } from "react"

export const useUrlHash = () => {
  const [hash, setHash] = useState("")

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.substring(1))
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return hash
}
