interface PageMetadata {
  title: string
  description: string
  url: string
  ogImage: {
    url: string
    alt: string
  }
}

export const WEBSITE_NAME = `Lee Zong Han`

export const WEBSITE_KEYWORDS = `Lee Zong Han, Zong Han, Software Engineer, Full Stack Developer, Web Developer, Programmer, Developer, Portfolio, Resume, Singapore Software Engineer, Next.js Developer, React Developer, Freelance Web Developer, Landing Page Developer, E-commerce Website Developer, Custom Website Builder`

export const METADATA_WEBSITE: PageMetadata = {
  title: `${WEBSITE_NAME} | Software Engineer`,
  description: `Lee Zong Han is a software engineer and freelance web developer in Singapore, offering custom websites, landing pages, and e-commerce solutions.`,
  url: `https://leezonghan.com`,
  ogImage: {
    url: `https://leezonghan.com/images/og-image-home.webp`,
    alt: `OG Image Home`
  }
}
