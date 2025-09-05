import { Button } from "@/components/ui/button"
import Link from "@/components/link"

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
    id: "experience",
    name: "Experience"
  },
  {
    id: "projects",
    name: "Projects"
  }
]

const NavigationMenu = () => {
  return (
    <div className="flex gap-1 lg:flex-col lg:gap-2">
      {NAVIGATION_BUTTONS.map((button) => (
        <Button
          key={button.id}
          variant="ghost"
          className="w-fit hover:bg-none hover:underline">
          <Link href={`/#${button.id}`}>{button.name}</Link>
        </Button>
      ))}
    </div>
  )
}

export default NavigationMenu
