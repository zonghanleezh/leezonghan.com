import { ArrowUpRightIcon, ExternalLinkIcon } from "lucide-react"

import { EXPERIENCES_DATA } from "@/lib/data/experiences.data"
import Link from "@/components/link"

const LandingExperienceSection = () => {
  return (
    <div id="experience" className="flex flex-col gap-2 font-medium lg:gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold lg:text-2xl">Experience</h2>

        <Link
          href="/resume"
          target="_blank"
          className="group w-fit text-sm font-semibold transition-colors hover:text-red-500">
          View Full Resume
          <ArrowUpRightIcon className="ml-1 inline-block size-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-105" />
        </Link>
      </div>

      <div className="flex flex-col gap-2 lg:gap-4">
        {EXPERIENCES_DATA.map((experience) => {
          return (
            <Link
              href={experience.url}
              key={experience.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-zinc-100">
              <div className="space-y-1 p-4 lg:space-y-2 lg:p-5">
                <h3 className="font-semibold lg:text-lg">
                  <span>
                    {experience.title} ⋅ {experience.company}
                  </span>
                  <ExternalLinkIcon className="ml-2 inline-block size-3 transition-all group-hover:scale-105 group-hover:text-red-500 lg:size-4" />
                </h3>

                <p className="text-xs text-muted-foreground lg:text-sm">
                  {experience.date}
                </p>

                {experience.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-xs font-medium lg:text-sm">
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
