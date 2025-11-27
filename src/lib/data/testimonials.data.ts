import { StaticImageData } from "next/image"
import TheVowCarriageLogo from "@/assets/testimonials/the-vow-carriage-logo.webp"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  projectType: string
  serviceProvided: string[]
  companyUrl: string
  logo: StaticImageData
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote:
      "We approached Zong Han with a brief concept and he helped bring it to life. His attention to detail and understanding of our business needs resulted in a beautiful site that our customers love. With a CMS, we are able to easily update our blog. Zong Han was professional, communicative, and delivered on time. Highly recommended!",
    author: "Tan Xuan You",
    role: "Founder",
    company: "The Vow Carriage",
    projectType: "Wedding Car Rental Website",
    serviceProvided: ["Landing Pages", "Blog with CMS", "SEO Optimisation"],
    companyUrl: "https://thevowcarriage.com",
    logo: TheVowCarriageLogo
  }
]

export default TESTIMONIALS_DATA
