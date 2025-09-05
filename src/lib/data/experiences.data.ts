interface Experience {
  title: string
  company: string
  date: string
  paragraphs: string[]
  url: string
  badges: string[]
}

export const EXPERIENCES_DATA: Experience[] = [
  {
    title: "Software Engineer",
    company: "Embed Financial Group Holdings (EFGH)",
    date: "Mar 2025 — Present",
    paragraphs: [
      "On a mission to support the underinsured and underprivileged."
    ],
    url: "https://efgh.xyz/",
    badges: ["Next.js", "Django", "AWS", "Anything that solves the problem"]
  },
  {
    title: "Software Engineer",
    company: "Capata",
    date: "Sep 2024 — Mar 2025",
    paragraphs: [
      "A strategic intiative wholly-owned by TransAsia Private Capital.",
      "Led the business requirements gathering to define the MVP scope. Collaborated with the CTO to shape the platform's technical architecture. Designed the NoSQL database to handle scalable, client relationship management and real-time supply chain financing data."
    ],
    url: "https://capata.sg/",
    badges: ["Next.js", "MongoDB", "Figma"]
  },
  {
    title: "Software Engineer",
    company: "TransAsia Private Capital",
    date: "May 2023 — Mar 2025",
    paragraphs: [
      "Designed, built and launched a full-stack private debt investment management platform. Implemented asynchronous trade booking for concurrent processing and developed real-time reporting features for bookkeeping and client relationship management."
    ],
    url: "https://taprivatecapital.com/",
    badges: ["React", "Express", "Node.js", "MongoDB", "Docker"]
  },
  {
    title: "Data Analyst",
    company: "Micron Technology",
    date: "Jul 2022 — Feb 2023",
    paragraphs: [
      "Developed python scripts to execute database queries, create reports and automate distribution to stakeholders."
    ],
    url: "https://micron.com/",
    badges: ["Python", "SQL"]
  }
]
