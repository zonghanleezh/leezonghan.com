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

export const WEBSITE_KEYWORDS = `Lee Zong Han, Zong Han, Software Engineer, Full Stack Developer, Web Developer, Programmer, Developer, Portfolio, Resume`

export const WEBSITE_METADATA: PageMetadata = {
  title: `${WEBSITE_NAME} | Software Engineer`,
  description: `Explore the portfolio of Lee Zong Han, a software engineer based in Singapore specialising in building modern and responsive full-stack web applications.`,
  url: `https://leezonghan.com`,
  ogImage: {
    url: `https://leezonghan.com/images/og-image-home.webp`,
    alt: `OG Image Home`
  }
}
