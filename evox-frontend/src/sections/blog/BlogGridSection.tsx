"use client"

import { useState } from "react"
import Link from "next/link"
import { blogGridContent, blogGridPosts } from "../../data/blog/blog-grid-data"
import type { BlogGridPost } from "../../types/blog/blog-grid"

export default function BlogGridSection() {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 6

    // Separate featured and regular posts completely
    const featuredPost = blogGridPosts.find((post) => post.featured)
    const regularPosts = blogGridPosts.filter((post) => !post.featured)

    // Calculate pagination for regular posts only
    const totalPages = Math.ceil(regularPosts.length / postsPerPage)

    // Get posts for current page (only regular posts)
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const currentPagePosts = regularPosts.slice(startIndex, endIndex)

    return (
        <div className="bg-white px-4 md:px-6 lg:px-12 py-0 lg:py-10">
            <div className="mx-auto">
                {/* Section Heading */}
                <h2 className="plus-jakarta-sans-bold text-2xl sm:text-5xl lg:text-5xl font-bold text-custom-black mb-8 lg:mb-16">{blogGridContent.heading}</h2>

                {/* Featured Post Section - Always shown on first page, separate from pagination */}
                {currentPage === 1 && featuredPost && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-16">
                        {/* Featured Post - Large Image */}
                        <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                            <img
                                src={featuredPost.image || "/placeholder.svg"}
                                alt={featuredPost.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Featured Post Content */}
                        <div className="relative">
                            {/* Content Container */}
                            <div className="flex flex-col h-full justify-between lg:pt-6 lg:pb-12">
                                <div>
                                    {/* Category and Date */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="text-xs plus-jakarta-sans-bold font-bold text-custom-black uppercase tracking-wide">
                                            {featuredPost.category}
                                        </span>
                                        <span className="text-xs plus-jakarta-sans-medium font-medium text-[#999999]">{featuredPost.date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg lg:text-4xl font-medium plus-jakarta-sans-medium text-custom-black mb-3 lg:mb-6">
                                        {featuredPost.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-[#666666] plus-jakarta-sans-regular text-sm leading-relaxed mb-4 lg:mb-8">{featuredPost.excerpt}</p>
                                </div>

                                {/* Read More Link */}
                                <Link
                                    href={featuredPost.link}
                                    className="w-fit items-center text-custom-black text-sm lg:text-base plus-jakarta-sans-semibold font-semibold hover:text-gray-600 transition-colors duration-200 border-b-4 pb-1 border-[#090909] hover:border-gray-600"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Regular Posts Grid - Always shows 6 posts per page */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {currentPagePosts.map((post) => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>

                {/* No posts message */}
                {currentPagePosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No posts found for this page.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                )}
            </div>
        </div>
    )
}

interface BlogPostCardProps {
    post: BlogGridPost
}

function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <article className="bg-white">
            {/* Thumbnail Image */}
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img src={post.image || "/placeholder.svg"} alt={post.alt} className="w-full h-full object-cover" />
            </div>
            {/* Category and Date */}
            <div className="flex items-center space-x-2 mb-4">
                <span className="text-xs plus-jakarta-sans-bold font-bold text-custom-black uppercase tracking-wide">{post.category}</span>
                <span className="text-xs plus-jakarta-sans-medium font-medium text-[#999999]">{post.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg lg:text-2xl font-medium plus-jakarta-sans-medium text-custom-black mb-3 lg:mb-4 leading-tight">{post.title}</h3>

            {/* Excerpt */}
            <p className="text-[#666666] plus-jakarta-sans-regular text-sm leading-relaxed mb-4 lg:mb-6">{post.excerpt}</p>

            {/* Read More Link */}
            <Link
                href={post.link}
                className="w-fit items-center text-custom-black text-sm  lg:text-base plus-jakarta-sans-semibold font-semibold hover:text-gray-600 transition-colors duration-200 border-b-4 pb-1 border-[#090909] hover:border-gray-600"
            >
                Read More
            </Link>
        </article>
    )
}

interface BlogPaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

function BlogPagination({ currentPage, totalPages, onPageChange }: BlogPaginationProps) {
    // Generate visible page numbers
    const getVisiblePages = () => {
        const visiblePages: number[] = []
        const maxVisiblePages = 4

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is less than or equal to max visible
            for (let i = 1; i <= totalPages; i++) {
                visiblePages.push(i)
            }
        } else {
            // Show first 4 pages, or adjust based on current page
            if (currentPage <= 3) {
                visiblePages.push(1, 2, 3, 4)
            } else if (currentPage >= totalPages - 2) {
                visiblePages.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
            } else {
                visiblePages.push(currentPage - 1, currentPage, currentPage + 1, currentPage + 2)
            }
        }

        return visiblePages
    }

    const visiblePages = getVisiblePages()
    const showDots = totalPages > 4 && Math.max(...visiblePages) < totalPages

    return (
        <div className="py-12">
            <div className="flex items-center justify-start space-x-2">
                {/* Page Numbers */}
                {visiblePages.map((pageNum) => (
                    <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={`px-4 py-2 text-sm plus-jakarta-sans-medium cursor-pointer font-medium transition-colors duration-200 ${currentPage === pageNum
                                ? "bg-custom-black text-white hover:bg-gray-800"
                                : "bg-[rgba(9,9,9,0.1)] text-[#090909] hover:text-white hover:bg-[#090909]"
                            }`}
                        aria-label={`Go to page ${pageNum}`}
                        aria-current={currentPage === pageNum ? "page" : undefined}
                    >
                        {pageNum.toString().padStart(2, "0")}
                    </button>
                ))}

                {/* Dots indicator */}
                {showDots && (
                    <span className="px-2 py-2 text-gray-400 text-sm font-medium" aria-hidden="true">
                        ...
                    </span>
                )}
            </div>
        </div>
    )
}
