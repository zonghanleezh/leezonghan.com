import Image from "next/image"

import Link from "@/components/common/link"

const LandingProfileSection = () => {
  return (
    <div className="flex max-w-[320px] flex-col items-center gap-2 text-center lg:max-w-[400px] lg:items-start lg:gap-3 lg:text-left">
      <div className="relative aspect-square w-full max-w-40 md:max-w-64 lg:max-w-96">
        <Image
          src="/images/lee-zong-han-avatar.webp"
          alt="Lee Zong Han"
          fill
          sizes="(min-width: 1024px) 384px, (min-width: 768px) 256px, 160px"
          className="rounded-xl object-cover"
        />
      </div>

      <div className="mt-2 lg:space-y-1">
        <h1 className="text-2xl font-semibold lg:text-4xl">Lee Zong Han</h1>
        <h2 className="text-base lg:text-xl">Software Engineer</h2>
      </div>

      <p className="text-pretty text-sm lg:text-base">
        I&apos;m a full-stack developer driven to build products. I translate
        complex requirements into robust solutions that solve user problems.
      </p>

      <p className="text-sm lg:text-base">
        <Link
          href="/#get-in-touch"
          className="font-semibold transition-colors hover:text-zinc-500">
          Let&apos;s connect
        </Link>{" "}
        and build something great together!
      </p>
    </div>
  )
}

export default LandingProfileSection
