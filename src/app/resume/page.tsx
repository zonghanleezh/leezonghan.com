import { Metadata } from "next"
import { RESUME_METADATA } from "@/configs/site/metadata.config"

export const metadata: Metadata = {
  title: RESUME_METADATA.title,
  description: RESUME_METADATA.description,
  alternates: {
    canonical: RESUME_METADATA.url
  },
  openGraph: {
    title: RESUME_METADATA.title,
    description: RESUME_METADATA.description,
    url: RESUME_METADATA.url,
    type: "website",
    images: [
      {
        url: RESUME_METADATA.ogImage.url,
        width: 1200,
        height: 630,
        alt: RESUME_METADATA.ogImage.alt
      }
    ]
  }
}

const ResumePage = () => {
  return (
    <>
      <h2 className="hidden">Lee Zong Han&apos;s Resume</h2>
      <iframe
        src="/lee-zong-han-resume.pdf"
        className="h-screen w-full"
        title="Lee Zong Han's Resume"
      />
    </>
  )
}

export default ResumePage
