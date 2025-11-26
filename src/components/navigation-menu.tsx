"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/cn"
import { useUrlHash } from "@/hooks/useUrlHash"
import { Button } from "@/components/ui/button"
import Link from "@/components/common/link"

interface NavigationButton {
  id: string
  name: string
}

const NAVIGATION_BUTTONS: NavigationButton[] = [
  {
    id: "about",
    name: "About Me"
  },
  {
    id: "services",
    name: "How I Can Help"
  },
  {
    id: "experience",
    name: "My Journey"
  },
  {
    id: "projects",
    name: "My Work"
  },
  {
    id: "testimonials",
    name: "Testimonials"
  },
  {
    id: "contact",
    name: "Get In Touch"
  }
]

const NavigationMenu = () => {
  const hash = useUrlHash()
  const [activeSection, setActiveSection] = useState(hash)
  const [isOverflowing, setIsOverflowing] = useState({
    left: false,
    right: false
  })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hash) {
      setActiveSection(hash)
    } else {
      setActiveSection(NAVIGATION_BUTTONS[0].id)
    }
  }, [hash])

  const checkOverflow = () => {
    const container = scrollContainerRef.current
    if (container) {
      const hasOverflow = container.scrollWidth > container.clientWidth
      const scrollEndReached =
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth - 1

      setIsOverflowing({
        left: hasOverflow && container.scrollLeft > 0,
        right: hasOverflow && !scrollEndReached
      })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    checkOverflow()

    window.addEventListener("resize", checkOverflow)
    if (container) {
      container.addEventListener("scroll", checkOverflow)
    }

    return () => {
      window.removeEventListener("resize", checkOverflow)
      if (container) {
        container.removeEventListener("scroll", checkOverflow)
      }
    }
  }, [])

  const handleNavigationButtonClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    buttonId: string
  ) => {
    setActiveSection(buttonId)
    event.currentTarget.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    })
  }

  return (
    <div className="flex flex-col bg-background">
      {/* Spacer */}
      <div className="h-5 lg:h-[68px]" />

      {/* Navigation buttons */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full gap-1.5 overflow-x-auto rounded-lg bg-muted p-1.5 md:justify-between">
          {NAVIGATION_BUTTONS.map((button) => (
            <Button
              asChild
              key={button.id}
              variant="ghost"
              className={cn(
                "w-full px-2 transition-colors hover:bg-primary hover:text-primary-foreground",
                activeSection === `${button.id}` && "bg-primary"
              )}>
              <Link
                href={`/#${button.id}`}
                onClick={(e) => handleNavigationButtonClick(e, button.id)}
                className={cn(
                  "whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors",
                  activeSection === `${button.id}` && "text-primary-foreground"
                )}>
                {button.name}
              </Link>
            </Button>
          ))}
        </div>
        {/* Left fade */}
        <div
          className={cn(
            "pointer-events-none absolute left-0 top-0 h-full w-8 rounded-l-lg bg-gradient-to-r from-muted to-transparent transition-opacity duration-300",
            isOverflowing.left ? "opacity-100" : "opacity-0"
          )}
        />
        {/* Right fade */}
        <div
          className={cn(
            "pointer-events-none absolute right-0 top-0 h-full w-8 rounded-r-lg bg-gradient-to-l from-muted to-transparent transition-opacity duration-300",
            isOverflowing.right ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </div>
  )
}

export default NavigationMenu
