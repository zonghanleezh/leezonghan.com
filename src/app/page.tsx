import LandingAboutMeSection from "@/components/landing/landing-about-me-section"
import LandingContactSection from "@/components/landing/landing-contact-section"
import LandingExperienceSection from "@/components/landing/landing-experience-section"
import LandingProfileSection from "@/components/landing/landing-profile-section"
import LandingProjectsSection from "@/components/landing/landing-projects-section"
import LandingServicesSection from "@/components/landing/landing-services-section"
import Footer from "@/components/layout/footer"
import NavigationMenu from "@/components/navigation-menu"
import SocialButtons from "@/components/social-buttons"

const COMMON_CLASSES = "scroll-mt-20 lg:scroll-mt-32"

const IndexPage = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-5 pb-5 lg:flex-row lg:gap-12 lg:px-12 lg:pb-12">
      {/* Left side */}
      <div className="flex flex-col items-center gap-2 pt-5 lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)] lg:w-1/4 lg:items-start lg:gap-4">
        <LandingProfileSection />

        <SocialButtons type="sidebar" />
      </div>

      {/* Right side */}
      <div className="space-y-4 lg:w-3/4 lg:space-y-6">
        <div className="sticky top-0 z-50">
          <NavigationMenu />
        </div>

        <div className="flex flex-col gap-6 lg:gap-10">
          <div id="about-me" className={COMMON_CLASSES}>
            <LandingAboutMeSection />
          </div>
          <div id="services" className={COMMON_CLASSES}>
            <LandingServicesSection />
          </div>
          <div id="experience" className={COMMON_CLASSES}>
            <LandingExperienceSection />
          </div>
          <div id="projects" className={COMMON_CLASSES}>
            <LandingProjectsSection />
          </div>
          <div id="contact" className={COMMON_CLASSES}>
            <LandingContactSection />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
