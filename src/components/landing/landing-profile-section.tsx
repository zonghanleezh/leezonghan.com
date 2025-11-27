import Image from "next/image"

import Link from "@/components/common/link"

const LandingProfileSection = () => {
  return (
    <div className="flex max-w-[340px] flex-col items-center gap-2 text-center lg:max-w-[400px] lg:items-start lg:gap-4 lg:text-left">
      <div className="relative aspect-square w-full max-w-40 md:max-w-64 lg:max-w-96">
        <Image
          src="/images/lee-zong-han-avatar.webp"
          alt="Lee Zong Han"
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 256px, 160px"
          className="rounded-xl object-cover"
        />
      </div>

      <div className="mt-2 lg:space-y-3">
        <h1 className="text-3xl font-semibold lg:text-4xl">Lee Zong Han</h1>
        <h2 className="text-lg lg:text-xl">Software Engineer</h2>
        <div className="my-2 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent lg:my-0 lg:text-sm">
          <span className="size-1.5 animate-pulse rounded-full bg-accent" />
          Available for new projects
        </div>
      </div>

      <p className="text-pretty text-sm lg:text-base">
        I partner with businesses and individuals to bring their digital ideas
        to life.
      </p>

      <p className="text-pretty text-sm lg:text-base">
        Whether you&apos;re launching a new venture or scaling an existing one,
        I can help.{" "}
        <Link
          href="/#contact"
          className="font-semibold text-primary transition-colors hover:text-accent">
          Let&apos;s discuss your project.
        </Link>
      </p>
    </div>
  )
}

export default LandingProfileSection
