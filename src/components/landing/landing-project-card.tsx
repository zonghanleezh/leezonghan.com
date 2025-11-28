"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"

import { cn } from "@/lib/cn"
import { Project } from "@/lib/data/projects.data"
import Badge from "@/components/common/badge"
import Link from "@/components/common/link"
import LandingProjectImageCarousel from "@/components/landing/landing-project-image-carousel"

const LandingProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

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

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-fit items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 md:hidden">
          {isExpanded ? "Hide Details" : "View Details"}
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-300",
              isExpanded && "rotate-180"
            )}
          />
        </button>

        <div
          className={cn(
            "flex-col gap-3 lg:gap-4",
            isExpanded ? "flex" : "hidden md:flex"
          )}>
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
