import { ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react"

import { EXPERIENCES_DATA } from "@/lib/data/experiences.data"
import Link from "@/components/common/link"

const LandingExperienceSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold lg:text-2xl">My Journey</h2>

        <Link
          href="/docs/lee-zong-han-resume.pdf"
          target="_blank"
          className="group w-fit text-sm font-medium transition-colors hover:text-primary">
          View Full Resume
          <ArrowUpRightIcon className="ml-1 inline-block size-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4">
        {EXPERIENCES_DATA.map((experience) => {
          return (
            <Link
              href={experience.url}
              key={experience.company}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-card">
              <div className="space-y-1 p-3 lg:space-y-2 lg:p-4">
                <h3 className="font-semibold lg:text-lg">
                  <span>
                    {experience.title} ⋅ {experience.company}
                  </span>
                  <ExternalLinkIcon className="ml-2 inline-block size-3 transition-all group-hover:text-primary lg:size-4" />
                </h3>

                <p className="text-sm text-muted-foreground">
                  {experience.date}
                </p>

                {experience.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default LandingExperienceSection
