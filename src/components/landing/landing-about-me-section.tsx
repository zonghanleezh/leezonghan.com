import Link from "@/components/common/link"

const LandingAboutMeSection = () => {
  return (
    <div className="flex flex-col gap-3 text-sm lg:text-base">
      <h2 className="text-xl font-semibold lg:text-2xl">About Me</h2>
      <p>
        I&apos;m a freelance web developer who helps businesses grow through
        strategic website development. I specialise in building landing pages
        that convert, blogs that engage, and e-commerce platforms that sell—all
        optimised for search engines and designed to drive results.
      </p>
      <p>
        From concept to launch, I handle everything: responsive design, CMS
        integration so you can manage content yourself, payment processing for
        online sales, and SEO optimisation to get found on Google. My clients
        get professional websites that work on all devices and actually
        contribute to their bottom line.
      </p>
      <p>
        I&apos;m currently a software engineer at{" "}
        <Link
          href="https://efgh.xyz/"
          target="_blank"
          className="font-semibold text-primary transition-colors hover:text-accent">
          EFGH
        </Link>{" "}
        developing full-stack tools and applications, and take on select
        freelance projects in the evenings and weekends. Recent work includes{" "}
        <Link
          href="https://thevowcarriage.com"
          target="_blank"
          className="font-semibold text-primary transition-colors hover:text-accent">
          The Vow Carriage
        </Link>
        , a conversion-focused wedding car rental site with Sanity CMS
        integration and comprehensive SEO implementation.
      </p>
      <p>
        Outside of coding, I&apos;m an avid runner and reader, always seeking
        new challenges and perspectives whether I&apos;m on the trail or in the
        pages of a book.
      </p>
      <div className="mt-2 rounded-lg border-l-4 border-accent bg-accent/5 p-4">
        <p className="text-sm lg:text-base">
          I&apos;m currently accepting new freelance projects. If you need a
          landing page that converts, a blog you can manage yourself, an online
          store, or SEO optimisation—
          <Link
            href="/#contact"
            className="font-semibold text-primary transition-colors hover:text-accent">
            I&apos;d love to hear from you.
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LandingAboutMeSection
