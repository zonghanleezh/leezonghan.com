import Link from "@/components/common/link"

const LandingAboutMeSection = () => {
  return (
    <div className="flex flex-col gap-3 text-sm lg:text-base">
      <h2 className="text-xl font-semibold lg:text-2xl">About Me</h2>
      <p>
        I&apos;m a software developer who builds impactful digital solutions for
        fintechs and startups. My expertise lies in taking projects from concept
        to deployment, creating platforms that not only function flawlessly but
        also drive business goals.
      </p>
      <p>
        At{" "}
        <Link
          href="https://efgh.xyz/"
          className="font-semibold transition-colors hover:text-primary">
          EFGH
        </Link>
        , I built the primary web presence for the company and am part of the
        team building its flagship product,{" "}
        <Link
          href="https://smesure.global"
          className="font-semibold transition-colors hover:text-primary">
          SMEsure™
        </Link>
        . My work there went beyond development to include implementing workflow
        automations and chatbots that significantly improved operational
        efficiency and user engagement.
      </p>
      <p>
        Outside of work, I&apos;m an avid runner and reader, always seeking new
        challenges and perspectives whether I&apos;m on the trail or in the
        pages of a book.
      </p>
      <p>
        I&apos;m currently seeking new freelance opportunities to help
        businesses thrive. If you&apos;re looking for a dedicated developer to
        build your next project,{" "}
        <Link
          href="/#get-in-touch"
          className="font-semibold transition-colors hover:text-primary">
          I&apos;d love to hear from you.
        </Link>
      </p>
    </div>
  )
}

export default LandingAboutMeSection
