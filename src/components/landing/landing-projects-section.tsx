import Image from "next/image"

import PROJECTS_DATA from "@/lib/data/projects.data"

const LandingProjectsSection = () => {
  return (
    <div id="projects" className="flex flex-col gap-2 font-medium lg:gap-4">
      <h2 className="text-lg font-semibold lg:text-2xl">Projects</h2>

      <div className="flex flex-col gap-2 lg:gap-4">
        {PROJECTS_DATA.map((project) => (
          <div className="flex flex-col gap-4 rounded-lg border p-4 lg:flex-row lg:gap-10 lg:p-5">
            <div className="flex items-center lg:w-1/3">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg border"
              />
            </div>

            <div
              key={project.title}
              className="flex flex-col gap-2 lg:w-2/3 lg:gap-4">
              <h3 className="font-semibold lg:text-lg">{project.title}</h3>

              <p className="text-xs lg:text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium lg:text-sm">
                    {tech}
                  </span>
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
