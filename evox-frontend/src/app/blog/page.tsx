import BlogGridSection from '@/sections/blog/BlogGridSection';
import BlogHeroSection from '@/sections/blog/BlogHeroSection';
import React from 'react';

const BlogPage: React.FC = () => {
    return (
        <main>
            <BlogHeroSection />
            <BlogGridSection />
            {/* Additional sections can be added here, such as blog posts list, etc. */}
        </main>
    );
};

export default BlogPage;