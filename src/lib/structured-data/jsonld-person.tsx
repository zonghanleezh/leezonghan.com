import { WEBSITE_METADATA } from "@/configs/site/metadata.config"
import { Person, WithContext } from "schema-dts"

export const JsonLdPerson = () => {
  const jsonld: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lee Zong Han",
    jobTitle: "Software Engineer",
    url: WEBSITE_METADATA.url,
    image: `${WEBSITE_METADATA.url}/images/lee-zong-han-avatar.jpg`,
    sameAs: [
      "https://www.linkedin.com/in/lee-zong-han",
      "https://github.com/zonghanleezh"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonld)
      }}
    />
  )
}
