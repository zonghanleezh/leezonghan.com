import LandingContactForm from "@/components/landing/landing-contact-form"

const LandingContactSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <h2 className="text-xl font-semibold lg:text-3xl">Get In Touch</h2>

      <LandingContactForm />
    </div>
  )
}

export default LandingContactSection
