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
      "Zong Han built our wedding car rental website from concept to launch. His attention to detail and understanding of our business needs resulted in a beautiful, conversion-focused site that our customers love. The CMS integration means we can easily update our blog without any coding knowledge.",
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
