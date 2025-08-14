import { blogHeroContent } from "../../data/blog/blog-hero-data"

export default function BlogHeroSection() {
    return (
        <div className=" px-4 md:px-6 lg:px-12 py-8 lg:py-16">
            <div
                className="relative bg-cover bg-center bg-no-repeat py-10 lg:py-32"
                style={{ backgroundImage: `url(${blogHeroContent.backgroundImage.src})` }}
                role="img"
                aria-label={blogHeroContent.backgroundImage.alt}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-[#090909] opacity-75 h-full w-full top-0 z-10"></div>

                <div className="mx-auto px-4 sm:px-6 lg:px-32 relative z-20 text-white">
                    {/* Tag and Date */}
                    <div className="flex items-center space-x-4 mb-5 lg:mb-8">
                        <div className="bg-white plus-jakarta-sans-semibold font-semibold text-custom-black px-3 py-2 lg:px-5 lg:py-3 text-sm">{blogHeroContent.tag}</div>
                        <div className="text-white plus-jakarta-sans-medium text-sm font-medium">{blogHeroContent.date}</div>
                    </div>

                    {/* Title */}
                    <h1 className="plus-jakarta-sans-bold text-2xl sm:text-5xl lg:text-5xl font-bold mb-3 lg:mb-8">{blogHeroContent.title}</h1>

                    {/* Description */}
                    <p className="plus-jakarta-sans-medium text-sm sm:text-xl leading-relaxed">{blogHeroContent.description}</p>
                </div>
            </div>
        </div>

    )
}
