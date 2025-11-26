import { ExternalLink } from "lucide-react"

import PROJECTS_DATA from "@/lib/data/projects.data"
import Badge from "@/components/common/badge"
import Link from "@/components/common/link"
import LandingProjectCard from "@/components/landing/landing-project-card"

const LandingProjectsSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <h2 className="text-xl font-semibold lg:text-2xl">My Work</h2>

      <div className="flex flex-col gap-3 lg:gap-4">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-4 rounded-lg border p-3 lg:p-4">
            <LandingProjectCard
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

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} text={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LandingProjectsSection
