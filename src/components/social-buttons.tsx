import { ElementType } from "react"
import { GithubIcon, LinkedinIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "@/components/common/link"

interface SocialLink {
  name: string
  Icon: ElementType
  url: string
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
  }
]

const SocialButtons = () => {
  return (
    <div className="flex">
      {SOCIAL_LINKS.map(({ name, Icon, url }) => (
        <Button
          asChild
          variant="ghost"
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
