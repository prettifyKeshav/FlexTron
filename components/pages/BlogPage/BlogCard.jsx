"use client"

import '@/styles/components/component.css'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({ title, desc, src = "/assets/images/blogs/blog.jpg" }) {
    return (
        <Link href="/blog-details" className="item item-md blogCard">
            <figure>
                <Image src={src} width={382} height={318} alt='images' />
            </figure>
            <figcaption>
                <h6>{title}</h6>
                <p>{desc}</p>
            </figcaption>
        </Link>
    )
}