"use client"

import { useEffect, useState } from "react"
import {
  ACTIVE_THEME,
  THEME_STORAGE_KEY,
  THEMES,
  type ThemeName
} from "@/configs/theme.config"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

const applyCSSVariables = (themeName: ThemeName, isDark: boolean) => {
  const theme = THEMES[themeName]
  const colors = isDark ? theme.dark : theme.light
  const root = document.documentElement

  // Apply all CSS variables from theme config
  Object.entries(colors).forEach(([key, value]) => {
    // Convert camelCase to kebab-case (e.g., cardForeground -> card-foreground)
    const cssVarName = key.replace(/([A-Z])/g, "-$1").toLowerCase()
    root.style.setProperty(`--${cssVarName}`, value)
  })

  // Set the data-theme attribute for any remaining CSS selectors
  root.setAttribute("data-theme", themeName)
}

const ThemeApplicator = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(ACTIVE_THEME)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName
    if (savedTheme && THEMES[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  // Apply theme on mount and when theme/dark mode changes
  useEffect(() => {
    applyCSSVariables(currentTheme, isDark)
  }, [currentTheme, isDark])

  // Listen for custom theme change events and persist to localStorage
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<ThemeName>) => {
      const newTheme = event.detail
      setCurrentTheme(newTheme)
      localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    }

    window.addEventListener(
      "theme-change" as any,
      handleThemeChange as EventListener
    )

    return () => {
      window.removeEventListener(
        "theme-change" as any,
        handleThemeChange as EventListener
      )
    }
  }, [])

  return <>{children}</>
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}>
      <ThemeApplicator>{children}</ThemeApplicator>
    </NextThemesProvider>
  )
}

export default ThemeProvider
