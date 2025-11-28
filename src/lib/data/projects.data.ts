import { StaticImageData } from "next/image"
import AiEmailClientImage1 from "@/assets/projects/ai-email-client-1.webp"
import InvestmentManagementPlatformImage1 from "@/assets/projects/investment-management-platform-1.webp"
import TheVowCarriageImage1 from "@/assets/projects/the-vow-carriage/the-vow-carriage-1.webp"
import TheVowCarriageImage2 from "@/assets/projects/the-vow-carriage/the-vow-carriage-2.webp"
import TheVowCarriageImage3 from "@/assets/projects/the-vow-carriage/the-vow-carriage-3.webp"

export interface Project {
  title: string
  description: string
  challenge?: string
  solution?: string
  impact?: string[]
  techHighlights?: string[]
  techStack: string[]
  imageUrls: StaticImageData[]
  url?: string
}

const PROJECTS_DATA: Project[] = [
  {
    title: "The Vow Carriage - Wedding Car Rental Platform",
    description:
      "A conversion-focused wedding car rental website featuring, dynamic pricing packages, blog integration with Sanity CMS, and comprehensive SEO implementation.",
    challenge:
      "Small Singapore-based family-run business needed online presence to compete with larger wedding car rental companies while staying within budget.",
    solution:
      "Built conversion-focused website with brand storytelling and integrated booking inquiries using Next.js and Sanity CMS.",
    impact: [
      "Enabled 24/7 online inquiries via WhatsApp integration and email notifications",
      "Client can independently manage blog content without technical knowledge"
    ],
    techHighlights: [
      "Sanity CMS for non-technical content updates",
      "Schema.org structured data for SEO (LocalBusiness, FAQPage, BlogPosting)"
    ],
    techStack: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    imageUrls: [
      TheVowCarriageImage1,
      TheVowCarriageImage2,
      TheVowCarriageImage3
    ],
    url: "https://thevowcarriage.com"
  },
  {
    title: "AI-Powered Email Client",
    description:
      "A SaaS email client featuring a RAG chatbot, full-text vector search and a command shortcut interface.",
    challenge:
      "Email overload and inefficient search in traditional clients made finding specific information time-consuming.",
    solution:
      "Built SaaS platform with RAG chatbot for natural language email search, enabling users to query their inbox conversationally.",
    techHighlights: [
      "Vector search implementation using OpenAI embeddings",
      "Full-text search with PostgreSQL for fast querying",
      "RAG (Retrieval-Augmented Generation) for contextual responses"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API"],
    imageUrls: [AiEmailClientImage1]
  },
  {
    title: "Investment Management Platform",
    description:
      "A platform featuring asynchronous trade booking, self-service reporting, portfolio management, and role-based authorisation, enabling efficient workflows for operations and investment teams.",
    challenge:
      "Manual trade booking and reporting created bottlenecks for investment teams, slowing down operations.",
    solution:
      "Full-stack platform with asynchronous workflows and self-service reporting to streamline operations.",
    impact: [
      "Eliminated manual trade booking delays with async processing",
      "Reduced reporting time from hours to minutes with real-time dashboards",
      "Enabled team scalability with role-based access controls"
    ],
    techHighlights: [
      "Express.js REST API architecture",
      "Role-based authorisation for secure access control"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrls: [InvestmentManagementPlatformImage1]
  }
]

export default PROJECTS_DATA
