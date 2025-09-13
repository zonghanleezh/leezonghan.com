import SERVICES_DATA from "@/lib/data/services.data"
import Badge from "@/components/common/badge"
import Link from "@/components/common/link"

const LandingServicesSection = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <h2 className="text-xl font-semibold lg:text-2xl">How I Can Help</h2>
      <p className="text-sm lg:text-base">
        My services are designed to solve problems and create value. I partner
        with you to build robust, user-centric applications that drive growth
        and improve efficiency. Let&apos;s work together to{" "}
        <Link
          href="/#get-in-touch"
          className="font-semibold transition-colors hover:text-zinc-500">
          build a solution tailored to your goals.
        </Link>
      </p>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-2 rounded-lg border p-3 lg:p-4">
            <h3 className="font-semibold lg:text-lg">{service.title}</h3>
            <p className="text-sm">{service.description}</p>

            <div className="mt-auto flex flex-wrap gap-1.5">
              {service.offerings.map((offering) => (
                <Badge key={offering} text={offering} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LandingServicesSection
