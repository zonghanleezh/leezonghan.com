import { ElementType } from "react"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

import { cn } from "@/lib/cn"
import { Button } from "@/components/ui/button"
import Link from "@/components/link"

interface SocialLink {
  name: string
  Icon: ElementType
  url: string
}

interface SocialButtonsProps {
  type: "footer" | "sidebar"
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "linkedin",
    Icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/lee-zong-han"
  },
  {
    name: "github",
    Icon: GithubIcon,
    url: "https://github.com/zonghanleezh"
  },
  {
    name: "email",
    Icon: MailIcon,
    url: "mailto:zonghanleezh@gmail.com"
  }
]

const SocialButtons = ({ type }: SocialButtonsProps) => {
  return (
    <div className={cn("flex", type === "sidebar" && "gap-2")}>
      {SOCIAL_LINKS.map(({ name, Icon, url }) => (
        <Button
          asChild
          variant={type === "sidebar" ? "outline" : "ghost"}
          size="icon"
          className="size-10"
          key={name}>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            <Icon className="!size-4" />
          </Link>
        </Button>
      ))}
    </div>
  )
}

export default SocialButtons
