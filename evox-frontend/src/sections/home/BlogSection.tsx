"use client"

import { StrapiImage } from "@/components/StrapiImage";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface BlogSectionProps {
  blogSectionData?: {
    preHeading: string;
    heading: string;
    featuredBlogPost: Array<{
      id: number;
      blogHighlight: string;
      published: string;
      excerpt: string;
      coverImage: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        url: string;
      };
      ctaText: {
        id: number;
        text: string;
        href: string;
        isExternal: boolean;
      };
    }>;
  } | null;
}

interface ProcessedBlogPost {
  id: number;
  blogHighlight: string;
  published: string;
  excerpt: string;
  image: string;
  alt: string;
  link: string;
  linkText: string;
  isExternal: boolean;
}

export default function BlogSection({ blogSectionData }: BlogSectionProps) {
  // All hooks must be called at the top, before any early returns
  const carouselInnerRef = useRef<HTMLDivElement>(null)
  const [visibleCardsCount, setVisibleCardsCount] = useState(3)
  const [currentSlide, setCurrentSlide] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Process blog posts data
  const processedBlogPosts: ProcessedBlogPost[] = blogSectionData
    ? blogSectionData.featuredBlogPost.map(post => ({
        id: post.id,
        blogHighlight: post.blogHighlight,
        published: post.published,
        excerpt: post.excerpt,
        image: post.coverImage.url,
        alt: post.coverImage.alternativeText || post.coverImage.name || "Blog Image",
        link: post.ctaText.href,
        linkText: post.ctaText.text,
        isExternal: post.ctaText.isExternal
      }))
    : [];

  const clonesAtEachEnd = visibleCardsCount

  const extendedBlogPosts = [
    ...processedBlogPosts.slice(-clonesAtEachEnd),
    ...processedBlogPosts,
    ...processedBlogPosts.slice(0, clonesAtEachEnd),
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCardsCount(1)
      } else {
        setVisibleCardsCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setCurrentSlide(visibleCardsCount)
  }, [visibleCardsCount])

  const totalRealSlides = Math.ceil(processedBlogPosts.length / visibleCardsCount)

  const goToSlide = useCallback(
    (index: number, smooth = true) => {
      if (isTransitioning && smooth) return

      if (carouselInnerRef.current) {
        carouselInnerRef.current.style.transition = smooth ? "transform 0.7s ease-in-out" : "none"
      }

      setCurrentSlide(index)
      setIsTransitioning(smooth)

      if (!smooth && carouselInnerRef.current) {
        void carouselInnerRef.current.offsetWidth
      }
    },
    [isTransitioning],
  )

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false)

    if (currentSlide >= processedBlogPosts.length + clonesAtEachEnd) {
      goToSlide(clonesAtEachEnd, false)
    } else if (currentSlide < clonesAtEachEnd) {
      goToSlide(processedBlogPosts.length + clonesAtEachEnd - 1, false)
    }
  }, [currentSlide, clonesAtEachEnd, processedBlogPosts.length, goToSlide])

  const nextSlide = () => {
    goToSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    goToSlide(currentSlide - 1)
  }

  const getTransformValue = () => {
    if (carouselInnerRef.current && carouselInnerRef.current.children.length > 0) {
      const firstCard = carouselInnerRef.current.children[0] as HTMLElement
      const cardWidth = firstCard.offsetWidth
      return `translateX(-${currentSlide * cardWidth}px)`
    }
    return "translateX(0px)"
  }

  // Early returns after all hooks
  if (!blogSectionData) {
    return null;
  }

  if (processedBlogPosts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white text-gray-900 py-16 lg:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header and Navigation */}
        <div className="flex justify-between items-center sm:items-start mb-12 lg:mb-20">
          {/* Navigation Arrows (Top Left) */}
          {totalRealSlides > 1 && (
            <div className="flex space-x-4 pt-2">
              <button
                onClick={prevSlide}
                className="text-custom-black opacity-50 hover:opacity-100 cursor-pointer transition-colors duration-200"
                aria-label="Previous blog post"
              >
                <i className="fas fa-arrow-left text-2xl"></i>
              </button>
              <button
                onClick={nextSlide}
                className="text-custom-black opacity-50 hover:opacity-100 cursor-pointer transition-colors duration-200"
                aria-label="Next blog post"
              >
                <i className="fas fa-arrow-right text-2xl"></i>
              </button>
            </div>
          )}
          {/* Headings (Top Right) */}
          <div className="text-right">
            <p className="text-[#331249] text-sm sm:text-3xl tracking-[7px] plus-jakarta-sans-medium font-medium">
              {blogSectionData.preHeading}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold plus-jakarta-sans-bold text-gray-900 leading-tight">
              {blogSectionData.heading}
            </h2>
          </div>
        </div>

        {/* Blog Posts Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselInnerRef}
              className="flex"
              style={{ transform: getTransformValue() }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedBlogPosts.map((post: ProcessedBlogPost, index: number) => (
                <div key={`${post.id}-${index}`} className="flex-shrink-0 pb-3 w-full md:w-1/3 sm:px-4">
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface BlogPostCardProps {
  post: ProcessedBlogPost
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="bg-[#F8F8F6] transition-all duration-500 cursor-pointer hover:shadow-lg overflow-hidden">
      <div className="relative h-100 w-full">
        <StrapiImage 
          src={post.image || "/placeholder.svg"} 
          alt={post.alt} 
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute bottom-0 translate-y-[50%] left-6 bg-custom-black text-white px-4 py-3 text-sm font-medium plus-jakarta-sans-medium">
          {post.blogHighlight}
        </div>
      </div>
      <div className="p-6 mt-4">
        <div className="flex items-center text-[#636363] opacity-50 text-sm mb-3">
          <i className="fas fa-clock mr-2"></i>
          <span>{post.published}</span>
        </div>
        <h3 className="text-2xl font-semibold plus-jakarta-sans-semibold text-custom-black mb-4 leading-tight">
          {post.excerpt}
        </h3>
        <Link
          href={post.link}
          target={post.isExternal ? "_blank" : "_self"}
          rel={post.isExternal ? "noopener noreferrer" : undefined}
          className="flex items-center text-[#636363] underline text-sm font-medium plus-jakarta-sans-medium hover:text-gray-600 transition-colors duration-200"
        >
          {post.linkText}
        </Link>
      </div>
    </div>
  )
}