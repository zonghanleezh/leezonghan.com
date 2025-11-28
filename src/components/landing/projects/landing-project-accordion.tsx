import { Project } from "@/lib/data/projects.data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

const LandingProjectAccordion = ({ project }: { project: Project }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="details" className="border-none">
        <AccordionTrigger className="bg-primary px-3 py-1 text-sm font-medium text-background hover:no-underline">
          View Details
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-3 pt-3">
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default LandingProjectAccordion
