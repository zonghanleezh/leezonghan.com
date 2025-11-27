import { ArrowRightIcon } from "lucide-react"

import Link from "@/components/common/link"

const LandingProfileBadge = () => {
  return (
    <Link
      href="/#contact"
      className="group relative my-2 inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-accent/10 py-1.5 pl-6 pr-3 text-xs font-medium text-accent transition-colors lg:my-0 lg:text-sm">
      <span className="absolute left-3 size-1.5 animate-pulse rounded-full bg-accent group-hover:animate-none" />
      <span className="absolute left-0 top-0 h-full w-1.5 origin-left rounded-full bg-accent opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100" />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
        Available for new projects
      </span>
      <ArrowRightIcon className="relative z-10 size-0 text-primary-foreground opacity-0 transition-all duration-300 group-hover:size-3.5 group-hover:opacity-100" />
    </Link>
  )
}

export default LandingProfileBadge
