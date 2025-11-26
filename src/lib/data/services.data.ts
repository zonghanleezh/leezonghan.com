interface Service {
  title: string
  description: string[]
  offerings: string[]
}

const SERVICES_DATA: Service[] = [
  {
    title: "Landing Pages & Conversion-Focused Websites",
    description: [
      "Get more leads and customers from your website. I design and build fast, mobile-optimised landing pages and websites that convert visitors into paying customers through strategic design, compelling copy placement, and seamless user experiences.",
      "For The Vow Carriage, I built a conversion-focused wedding car rental website with WhatsApp integration, enabling 24/7 customer inquiries and professional brand presentation."
    ],
    offerings: [
      "Device-responsive",
      "Conversion optimisation",
      "Email notifications",
      "CRM integration",
      "Contact forms"
    ]
  },
  {
    title: "Blogs & Content Management Systems",
    description: [
      "Take control of your content without technical knowledge. I build user-friendly blogs and CMS solutions that let you publish, edit, and manage content yourself—no developer needed for updates.",
      "The Vow Carriage uses Sanity CMS for their blog, allowing them to publish wedding tips and company updates without any coding knowledge."
    ],
    offerings: [
      "Headless CMS integration",
      "Rich text editor",
      "Custom blog with categories and search",
      "SEO-friendly metadata management"
    ]
  },
  {
    title: "SEO & Performance Optimisation",
    description: [
      "Get found on Google and keep visitors engaged. I optimise websites for search engines and performance, improving your rankings, loading speed, and overall user experience to drive more organic traffic.",
      "The Vow Carriage's website was optimised for SEO and performance, resulting in faster load times and better search engine visibility."
    ],
    offerings: [
      "SEO audits and implementation",
      "Sitemap configuration",
      "Mobile-friendly and responsive design",
      "Google Business Profile integration"
    ]
  }
]

export default SERVICES_DATA
