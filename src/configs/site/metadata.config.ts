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

export const WEBSITE_KEYWORDS = `Lee Zong Han, Zong Han, Freelance Web Developer Singapore, Landing Page Developer, E-commerce Website Developer, Sanity CMS Developer, Next.js Developer Singapore, SEO Optimisation Services, Small Business Website Developer, Wedding Website Developer, Blog with CMS, Payment Integration Developer, Custom Website Builder, Web Developer Singapore`

export const METADATA_WEBSITE: PageMetadata = {
  title: `${WEBSITE_NAME} - Freelance Web Developer | Landing Pages, Blogs, E-commerce & SEO`,
  description: `Freelance web developer in Singapore specialising in high-converting landing pages, blogs with CMS, e-commerce websites with payments, and SEO optimisation. View my work including The Vow Carriage wedding car rental platform.`,
  url: `https://leezonghan.com`,
  ogImage: {
    url: `https://leezonghan.com/images/og-image-home.webp`,
    alt: `OG Image Home`
  }
}
