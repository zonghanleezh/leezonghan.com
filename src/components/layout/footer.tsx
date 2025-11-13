import { Separator } from "@/components/ui/separator"
import LightDarkToggleButton from "@/components/light-dark-toggle-button"
import SocialButtons from "@/components/social-buttons"
import ThemeSelector from "@/components/theme-selector"

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 bg-background pb-2">
      <Separator className="" />

      {/* Mobile: Stack vertically */}
      <div className="flex flex-col items-center justify-center sm:hidden">
        <div className="flex items-center gap-1">
          <SocialButtons />
          <LightDarkToggleButton />
          <ThemeSelector />
        </div>
        <span className="text-xs text-muted-foreground">
          Lee Zong Han © {new Date().getFullYear()}
        </span>
      </div>

      {/* Desktop: Original horizontal layout */}
      <div className="hidden items-center justify-between sm:flex">
        <span className="text-sm">
          Lee Zong Han © {new Date().getFullYear()}
        </span>

        <div className="flex">
          <SocialButtons />
          <LightDarkToggleButton />
          <ThemeSelector />
        </div>
      </div>
    </div>
  )
}

export default Footer
