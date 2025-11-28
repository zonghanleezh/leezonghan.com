"use client"

import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"

import { cn } from "@/lib/cn"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import Link from "@/components/common/link"

interface LandingProjectImageCarouselProps {
  imageUrls: StaticImageData[]
  title: string
  url?: string
}

const LandingProjectImageCarousel = ({
  imageUrls,
  title,
  url
}: LandingProjectImageCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Single image - no carousel
  if (imageUrls.length === 1) {
    const imageUrl = imageUrls[0]
    return url ? (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block">
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-lg border transition-opacity hover:opacity-80"
        />
      </Link>
    ) : (
      <Image src={imageUrl} alt={title} className="rounded-lg border" />
    )
  }

  // Multiple images - use carousel
  return (
    <div className="relative">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {imageUrls.map((imageUrl, index) => (
            <CarouselItem key={index}>
              {url ? (
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block">
                  <Image
                    src={imageUrl}
                    alt={`${title} - Image ${index + 1}`}
                    className="rounded-lg border transition-opacity hover:opacity-80"
                  />
                </Link>
              ) : (
                <Image
                  src={imageUrl}
                  alt={`${title} - Image ${index + 1}`}
                  className="rounded-lg border"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      {imageUrls.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {imageUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                current === index
                  ? "w-6 bg-black"
                  : "w-2 bg-black/50 hover:bg-black/75"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default LandingProjectImageCarousel
