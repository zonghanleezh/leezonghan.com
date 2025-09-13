interface Service {
  title: string
  description: string
  offerings: string[]
}

const SERVICES_DATA: Service[] = [
  {
    title: "Bespoke Web Applications",
    description:
      "For when off-the-shelf software isn't enough. I architect and build custom applications from the ground up to solve your unique business challenges and streamline operations.",
    offerings: [
      "Full-Stack Architecture",
      "Interactive Dashboards",
      "User Authentication & Roles"
    ]
  },
  {
    title: "Digital Presence & Marketing Sites",
    description:
      "I build fast, beautiful, and SEO-friendly websites that serve as the digital storefront for your brand, designed to convert visitors into loyal customers.",
    offerings: [
      "CMS Integration",
      "Performance Optimisation",
      "Analytics Tracking"
    ]
  },
  {
    title: "Appointment & Booking Systems",
    description:
      "Streamline your business with a custom booking platform. I develop intuitive scheduling experiences for your clients and a powerful admin dashboard for you to manage appointments and availability.",
    offerings: [
      "Interactive Calendars",
      "Admin Dashboard",
      "Email Notifications",
      "Payment Integration"
    ]
  },
  {
    title: "Application Modernisation & Support",
    description:
      "Is your existing website or application feeling slow, outdated, or difficult to manage? I help businesses modernise their tech, improve performance and security, and build a stable foundation for future growth.",
    offerings: [
      "Performance Audits",
      "Legacy Code Refactor",
      "Tech Stack Migration",
      "Feature Development"
    ]
  }
]

export default SERVICES_DATA
