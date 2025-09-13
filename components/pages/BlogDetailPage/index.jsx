import React from 'react'
import Hero from './Hero'
import MoreBlogs from './MoreBlogs'
import "@/styles/services/services.css";
import "@/styles/blogs/blogs.css"
import "@/styles/other/other.css"
import Content from './Content';

const BlogDetailPage = () => {
    return (
        <>
            <main>
                <Hero />
                <Content />
                <MoreBlogs />
            </main>
        </>
    )
}

export default BlogDetailPage