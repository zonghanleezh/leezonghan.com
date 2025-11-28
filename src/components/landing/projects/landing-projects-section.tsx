import PROJECTS_DATA from "@/lib/data/projects.data"
import LandingProjectCard from "@/components/landing/projects/landing-project-card"

const LandingProjectsSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <h2 className="text-xl font-semibold lg:text-2xl">My Work</h2>

      <div className="flex flex-col gap-3 lg:gap-4">
        {PROJECTS_DATA.map((project) => (
          <LandingProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

export default LandingProjectsSection
