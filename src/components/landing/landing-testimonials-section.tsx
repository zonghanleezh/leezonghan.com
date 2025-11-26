import { QuoteIcon } from "lucide-react"

import TESTIMONIALS_DATA from "@/lib/data/testimonials.data"
import Badge from "@/components/common/badge"
import Link from "@/components/common/link"

const LandingTestimonialsSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <h2 className="text-xl font-semibold lg:text-2xl">Client Testimonials</h2>

      <div className="flex flex-col gap-3 lg:gap-4">
        {TESTIMONIALS_DATA.map((testimonial, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-4 rounded-lg border bg-muted/20 p-4 lg:p-6">
            <QuoteIcon className="absolute right-4 top-4 size-8 text-muted-foreground/20 lg:size-10" />

            <div className="relative">
              <p className="text-sm italic leading-relaxed lg:text-base">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <p className="font-semibold">
                  {testimonial.author}
                  {testimonial.companyUrl ? (
                    <>
                      {" "}
                      •{" "}
                      <Link
                        href={testimonial.companyUrl}
                        className="font-normal text-muted-foreground transition-colors hover:text-primary">
                        {testimonial.company}
                      </Link>
                    </>
                  ) : (
                    <span className="font-normal text-muted-foreground">
                      {" "}
                      • {testimonial.company}
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.projectType}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {testimonial.serviceProvided.map((service) => (
                  <Badge key={service} text={service} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Want to share your experience?{" "}
        <Link
          href="/#contact"
          className="font-semibold transition-colors hover:text-primary">
          Get in touch
        </Link>{" "}
        to work together.
      </p>
    </div>
  )
}

export default LandingTestimonialsSection
