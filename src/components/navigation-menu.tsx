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
    id: "services",
    name: "Services"
  },
  {
    id: "experience",
    name: "Experience"
  },
  {
    id: "projects",
    name: "Projects"
  },
  {
    id: "contact",
    name: "Contact"
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
              "w-full hover:bg-zinc-600 hover:text-primary-foreground",
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
