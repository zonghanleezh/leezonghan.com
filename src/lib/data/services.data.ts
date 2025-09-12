interface Service {
  title: string
  description: string
  offerings: string[]
}

const SERVICES_DATA: Service[] = [
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages to capture your audience's attention.",
    offerings: [
      "Custom Design",
      "SEO Optimisation",
      "Responsive Design",
      "Contact Forms"
    ]
  },
  {
    title: "E-commerce Shops",
    description: "Complete e-commerce solutions to sell your products online.",
    offerings: [
      "Shopping Cart Integration",
      "Payment Gateway Setup",
      "Product Management",
      "Secure Checkout"
    ]
  },
  {
    title: "Business Websites",
    description:
      "Professional websites to showcase your business and services.",
    offerings: [
      "Multi-page Layouts",
      "Blogs & Articles",
      "Content Management Systems (CMS)",
      "Analytics Setup"
    ]
  },
  {
    title: "Custom Web Applications",
    description: "Bespoke web applications tailored to your specific needs.",
    offerings: [
      "Booking Systems",
      "Internal Dashboards",
      "API Integration",
      "Database Design"
    ]
  }
]

export default SERVICES_DATA
