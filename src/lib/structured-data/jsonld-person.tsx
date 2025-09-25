import { METADATA_WEBSITE } from "@/configs/site/metadata.config"
import { Person, WithContext } from "schema-dts"

export const JsonLdPerson = () => {
  const jsonld: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lee Zong Han",
    jobTitle: "Software Engineer",
    url: METADATA_WEBSITE.url,
    image: `${METADATA_WEBSITE.url}/images/lee-zong-han-avatar.webp`,
    sameAs: [
      "https://www.linkedin.com/in/lee-zong-han",
      "https://github.com/zonghanleezh"
    ],
    email: "mailto:zonghanleezh@gmail.com",
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
