import Image from "next/image"

const LandingProfileSection = () => {
  return (
    <div className="flex max-w-[400px] flex-col items-center gap-2 text-center lg:items-start lg:gap-3 lg:text-left">
      <div className="relative aspect-square w-full max-w-40 md:max-w-64 lg:max-w-96">
        <Image
          src="/images/lee-zong-han-avatar.webp"
          alt="Lee Zong Han"
          fill
          className="rounded-xl object-cover"
        />
      </div>

      <div className="lg:space-y-1">
        <h1 className="text-2xl font-semibold lg:text-4xl">Lee Zong Han</h1>
        <p className="text-base lg:text-xl">Software Engineer</p>
      </div>

      <p className="text-sm lg:text-base">
        I&apos;m a developer driven by a passion to make a positive impact
        through technology.
      </p>

      <p className="text-sm lg:text-base">
        Let&apos;s connect and build something great together!
      </p>
    </div>
  )
}

export default LandingProfileSection
