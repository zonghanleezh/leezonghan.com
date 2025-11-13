"use client"

import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

type LightDarkToggleButtonProps = {
  type: "footer" | "sidebar"
}

const LightDarkToggleButton = ({ type }: LightDarkToggleButtonProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant={type === "sidebar" ? "outline" : "ghost"}
        size="icon"
        aria-label="Loading theme"
        className="size-10">
        <SunIcon className="!size-4" />
      </Button>
    )
  }

  const toggleTheme = () => {
    // If currently in system mode, detect what's being used and switch to the opposite
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    } else {
      // Toggle between light and dark
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  // Determine which icon to show based on resolved theme
  const currentTheme = theme === "system" ? resolvedTheme : theme
  const Icon = currentTheme === "dark" ? MoonIcon : SunIcon

  return (
    <Button
      variant={type === "sidebar" ? "outline" : "ghost"}
      size="icon"
      onClick={toggleTheme}
      aria-label={
        currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={`Current: ${currentTheme}`}
      className="size-10">
      <Icon className="!size-4" />
    </Button>
  )
}

export default LightDarkToggleButton
