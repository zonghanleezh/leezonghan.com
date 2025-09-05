import { StaticImageData } from "next/image"
import AiEmailClientImage from "@/assets/projects/ai-email-client.webp"
import InvestmentManagementPlatformImage from "@/assets/projects/investment-management-platform.webp"

interface Project {
  title: string
  description: string
  techStack: string[]
  imageUrl: StaticImageData
  url?: string
}

const PROJECTS_DATA: Project[] = [
  {
    title: "AI-Powered Email Client",
    description:
      "A SaaS email client featuring a RAG chatbot, full-text vector search and a command shortcut interface.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API"],
    imageUrl: AiEmailClientImage
  },
  {
    title: "Investment Management Platform",
    description:
      "A platform featuring asynchronous trade booking, self-service reporting, portfolio management, and role-based authorisation, enabling efficient workflows for operations and investment teams.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: InvestmentManagementPlatformImage
  }
]

export default PROJECTS_DATA
