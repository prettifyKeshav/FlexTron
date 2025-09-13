"use client"

import BlogCard from './BlogCard'
import Image from 'next/image'
import "@/styles/blogs/blogs.css"

const BLOG_DATA = [
    {
        id: 1,
        title: "07 March, 2025",
        desc: "Flextron Announces Full Range of Advanced SMT, Mixed Assembly Services",
        src: "/assets/images/blogs/blog.jpg",
        href: "/blog/flextron-advanced-smt-services"
    },
    {
        id: 2,
        title: "06 March, 2025",
        desc: "New Infrastructure Developments in Eastern Industrial Corridor",
        src: "/assets/images/blogs/blog.jpg",
        href: "/blog/eastern-industrial-corridor-update"
    },
    {
        id: 3,
        title: "05 March, 2025",
        desc: "How AI is Transforming Modern Manufacturing Processes",
        src: "/assets/images/blogs/blog.jpg",
        href: "/blog/ai-in-manufacturing"
    },
    {
        id: 4,
        title: "04 March, 2025",
        desc: "Sustainable Practices in Electronics Manufacturing",
        src: "/assets/images/blogs/blog.jpg",
        href: "/blog/sustainable-electronics-manufacturing"
    },
    {
        id: 5,
        title: "03 March, 2025",
        desc: "The Future of Smart Infrastructure Investments",
        src: "/assets/images/blogs/blog.jpg",
        href: "/blog/future-smart-infrastructure"
    },
    {
        id: 6,
        title: "02 March, 2025",
        desc: "Supply Chain Optimization Strategies for 2025",
        src: "/assets/images/blogs/blog.jpg",
        href: "/blog/supply-chain-optimization-2025"
    },
];

const BlogPage = () => {

    return (
        <main>
            <section>
                <div className="blog-secA mt-hdrfix sec-pad">
                    <div className="container">
                        <div className="heading text-center">
                            <h1>Blogs</h1>
                            <p>Transforming Infrastructure, Powering Possibilities.</p>
                        </div>
                        <div className="blogs-container">
                            {BLOG_DATA.map(blog => (
                                <BlogCard
                                    key={blog.id}
                                    title={blog.title}
                                    desc={blog.desc}
                                    src={blog.src}
                                    href={blog.href}
                                />
                            ))}
                        </div>
                        <button className="loadBtn">
                            <Image
                                alt="infraplus"
                                width={20}
                                height={20}
                                src="/assets/images/home/x-vector.png"
                                aria-hidden="true"
                            />
                            <span>Load More...</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BlogPage