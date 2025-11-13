"use client"

import { useEffect, useState } from "react"
import {
  ACTIVE_THEME,
  THEME_STORAGE_KEY,
  THEMES,
  type ThemeName
} from "@/configs/theme.config"
import { Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(ACTIVE_THEME)
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Read saved theme from localStorage
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName
    if (savedTheme && THEMES[savedTheme]) {
      setCurrentTheme(savedTheme)
    } else {
      // Fallback to reading from DOM
      const root = document.documentElement
      const theme = root.getAttribute("data-theme") as ThemeName
      if (theme) {
        setCurrentTheme(theme)
      } else {
        setCurrentTheme(ACTIVE_THEME)
      }
    }
  }, [])

  const handleThemeChange = (value: string) => {
    const newTheme = value as ThemeName
    setCurrentTheme(newTheme)

    // Dispatch custom event for ThemeProvider to handle
    const event = new CustomEvent("theme-change", { detail: newTheme })
    window.dispatchEvent(event)
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <>
        {/* Mobile: Just the icon button */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Loading theme"
          className="size-10 sm:hidden">
          <Palette className="!size-4" />
        </Button>

        {/* Desktop: Full select */}
        <Select disabled>
          <SelectTrigger className="hidden !h-10 w-[180px] border-none bg-background hover:bg-accent hover:text-accent-foreground sm:flex">
            <SelectValue placeholder="Loading..." />
          </SelectTrigger>
        </Select>
      </>
    )
  }

  return (
    <>
      {/* Mobile: Just the icon button */}
      <Select
        open={isOpen}
        onOpenChange={setIsOpen}
        value={currentTheme}
        onValueChange={handleThemeChange}>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(!isOpen)
          }}
          aria-label="Select theme"
          title={`Current: ${THEMES[currentTheme].displayName}`}
          className="size-10 sm:hidden">
          <Palette className="!size-4" />
        </Button>

        {/* Desktop: Full select */}
        <SelectTrigger className="hidden !h-10 w-[180px] border-none bg-background hover:bg-accent hover:text-accent-foreground sm:flex">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>

        <SelectContent>
          {Object.entries(THEMES).map(([key, theme]) => (
            <SelectItem key={key} value={key}>
              {theme.displayName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

export default ThemeSelector
