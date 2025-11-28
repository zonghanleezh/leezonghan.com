"use client"

import { ExternalLink } from "lucide-react"

import { Project } from "@/lib/data/projects.data"
import Badge from "@/components/common/badge"
import Link from "@/components/common/link"
import LandingProjectAccordion from "@/components/landing/projects/landing-project-accordion"
import LandingProjectImageCarousel from "@/components/landing/projects/landing-project-image-carousel"

const LandingProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border p-3 lg:p-4">
      <LandingProjectImageCarousel
        imageUrls={project.imageUrls}
        title={project.title}
        url={project.url}
      />

      <div className="flex flex-col gap-3 lg:gap-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold lg:text-lg">{project.title}</h3>
            {project.url && (
              <Link
                href={project.url}
                className="shrink-0 text-muted-foreground transition-colors hover:text-primary">
                <ExternalLink className="size-4" />
              </Link>
            )}
          </div>
          <p className="mt-2 text-sm">{project.description}</p>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden">
          <LandingProjectAccordion project={project} />
        </div>

        {/* Desktop: Always visible */}
        <div className="hidden flex-col gap-3 md:flex lg:gap-4">
          {project.challenge && (
            <div className="text-sm">
              <p className="font-semibold">Challenge:</p>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
          )}

          {project.solution && (
            <div className="text-sm">
              <p className="font-semibold">Solution:</p>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          )}

          {project.impact && project.impact.length > 0 && (
            <div className="text-sm">
              <p className="font-semibold">Impact:</p>
              <ul className="mt-1 list-inside list-disc space-y-1 text-muted-foreground">
                {project.impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.techHighlights && project.techHighlights.length > 0 && (
            <div className="text-sm">
              <p className="font-semibold">Technical Highlights:</p>
              <ul className="mt-1 list-inside list-disc space-y-1 text-muted-foreground">
                {project.techHighlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} text={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingProjectCard
