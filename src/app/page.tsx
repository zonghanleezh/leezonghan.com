import LandingAboutMeSection from "@/components/landing/landing-about-me-section"
import LandingExperienceSection from "@/components/landing/landing-experience-section"
import LandingProfileSection from "@/components/landing/landing-profile-section"
import LandingProjectsSection from "@/components/landing/landing-projects-section"
import Footer from "@/components/layout/footer"
import NavigationMenu from "@/components/navigation-menu"
import SocialButtons from "@/components/social-buttons"

const IndexPage = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between gap-6 p-5 lg:flex-row lg:gap-10 lg:p-12">
      {/* Left side */}
      <div className="flex flex-col items-center gap-2 lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)] lg:w-1/3 lg:items-start lg:gap-4">
        <LandingProfileSection />

        <SocialButtons type="sidebar" />

        <NavigationMenu />
      </div>

      {/* Right side */}
      <div className="flex flex-col gap-6 lg:w-2/3 lg:gap-10">
        <LandingAboutMeSection />

        <LandingExperienceSection />

        <LandingProjectsSection />

        <Footer />
      </div>
    </div>
  )
}

export default IndexPage
