"use client"

import { useEffect, useState } from "react"

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
    id: "about-me",
    name: "About Me"
  },
  {
    id: "how-i-can-help",
    name: "How I Can Help"
  },
  {
    id: "my-journey",
    name: "My Journey"
  },
  {
    id: "my-work",
    name: "My Work"
  },
  {
    id: "get-in-touch",
    name: "Get In Touch"
  }
]

const NavigationMenu = () => {
  const hash = useUrlHash()
  const [activeSection, setActiveSection] = useState(hash)

  useEffect(() => {
    if (hash) {
      setActiveSection(hash)
    } else {
      setActiveSection(NAVIGATION_BUTTONS[0].id)
    }
  }, [hash])

  return (
    <div className="flex flex-col bg-background">
      {/* Spacer */}
      <div className="h-5 lg:h-[68px]" />

      {/* Navigation buttons */}
      <div className="flex w-full gap-1 rounded-lg bg-zinc-800 p-1 md:justify-between md:gap-1.5 md:p-1.5 lg:gap-2 lg:p-2">
        {NAVIGATION_BUTTONS.map((button) => (
          <Button
            asChild
            key={button.id}
            variant="ghost"
            className={cn(
              "w-full px-1 hover:bg-zinc-600 hover:text-primary-foreground",
              activeSection === `${button.id}` &&
                "bg-zinc-600 text-primary-foreground"
            )}
            onClick={() => setActiveSection(`${button.id}`)}>
            <Link
              href={`/#${button.id}`}
              className="text-xs font-medium text-zinc-300 sm:text-sm lg:text-base">
              {button.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default NavigationMenu
