import { Separator } from "@/components/ui/separator"
import SocialButtons from "@/components/social-buttons"

const Footer = () => {
  return (
    <div className="flex flex-col gap-2">
      <Separator className="my-1" />

      <div className="flex items-center justify-between">
        <span className="text-sm">
          Lee Zong Han © {new Date().getFullYear()}
        </span>

        <SocialButtons type="footer" />
      </div>
    </div>
  )
}

export default Footer
