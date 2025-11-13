import { Separator } from "@/components/ui/separator"
import LightDarkToggleButton from "@/components/light-dark-toggle-button"
import SocialButtons from "@/components/social-buttons"
import ThemeSelector from "@/components/theme-selector"

const Footer = () => {
  return (
    <div className="flex flex-col gap-2">
      <Separator className="sm:my-1" />

      {/* Mobile: Stack vertically */}
      <div className="flex flex-col items-center justify-center sm:hidden">
        <div className="flex items-center gap-1">
          <SocialButtons type="footer" />
          <LightDarkToggleButton type="footer" />
          <ThemeSelector type="footer" />
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
          <SocialButtons type="footer" />
          <LightDarkToggleButton type="footer" />
          <ThemeSelector type="footer" />
        </div>
      </div>
    </div>
  )
}

export default Footer
