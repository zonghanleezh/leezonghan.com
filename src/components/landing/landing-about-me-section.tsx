import Link from "@/components/common/link"

const LandingAboutMeSection = () => {
  return (
    <div className="flex flex-col gap-3 text-sm lg:text-base">
      <h2 className="text-xl font-semibold lg:text-3xl">About Me</h2>
      <p>
        My journey into coding began in 2022 and has since grown into a career
        from building platforms and landing pages to API services and anything
        in between. I have experience in both the{" "}
        <Link
          href="/#my-journey"
          className="font-semibold transition-colors hover:text-zinc-500">
          fintech and startup space
        </Link>
        , where I&apos;ve contributed to key projects from conception to
        deployment.
      </p>
      <p>
        I was responsible for building the primary websites for{" "}
        <Link
          href="https://efgh.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-colors hover:text-zinc-500">
          EFGH
        </Link>
        , a firm dedicated to creating embedded financial infrastructure, and
        its flagship product,{" "}
        <Link
          href="https://smesure.global"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-colors hover:text-zinc-500">
          SMEsure™
        </Link>
        . My role extends beyond web development to include implementing
        conversational chatbots and workflow automations that enhance user
        engagement and improve operational efficiency.
      </p>
      <p>
        Outside of work, I enjoy running, exploring the outdoors, and diving
        into non-fiction books to continually expand my knowledge and
        perspective.
      </p>
      <p>
        I am also available for{" "}
        <Link
          href="/#how-i-can-help"
          className="font-semibold transition-colors hover:text-zinc-500">
          freelance projects
        </Link>
        . If you have an idea you&apos;d like to bring to life,{" "}
        <Link
          href="/#get-in-touch"
          className="font-semibold transition-colors hover:text-zinc-500">
          let&apos;s connect!
        </Link>
      </p>
    </div>
  )
}

export default LandingAboutMeSection
