interface Service {
  title: string
  description: string
  offerings: string[]
}

const SERVICES_DATA: Service[] = [
  {
    title: "Custom Web Applications",
    description:
      "Turn manual processes into automated workflows. I build scalable web applications that reduce operational costs, eliminate bottlenecks, and give you real-time visibility into your business.",
    offerings: [
      "Process automation & workflow tools",
      "Real-time dashboards & reporting",
      "Role-based access & permissions",
      "API integrations with existing systems"
    ]
  },
  {
    title: "High-Converting Websites",
    description:
      "Get more leads and customers from your website. I design and build fast, mobile-optimised sites that rank well on search engines and turn visitors into revenue.",
    offerings: [
      "Conversion-focused design",
      "SEO optimisation & fast loading",
      "Content management systems",
      "Analytics & performance tracking"
    ]
  },
  {
    title: "Legacy System Modernisation",
    description:
      "Reduce maintenance costs and security risks. I modernise outdated applications to improve speed, reliability, and user experience while preserving your business logic.",
    offerings: [
      "Performance & security audits",
      "Modern tech stack migration",
      "Code refactoring & optimisation",
      "Incremental updates with zero downtime"
    ]
  },
  {
    title: "Technical Consulting & Strategy",
    description:
      "Make informed technology decisions. I provide expert guidance on architecture, scalability, and tech stack selection to ensure your projects are built on solid foundations.",
    offerings: [
      "Technical architecture reviews",
      "Stack selection & feasibility studies",
      "Performance & scalability planning",
      "Team augmentation & code reviews"
    ]
  }
]

export default SERVICES_DATA
