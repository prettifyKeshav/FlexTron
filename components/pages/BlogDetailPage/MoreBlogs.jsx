"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../styles/components/serviceslider.css"
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const BLOG_DATA = [
    {
        id: 1,
        title: "Flextron Announces Full Range of Advanced SMT, Mixed Assembly Services",
        description: "One of the most valuable services that an EMS can provide to",
        image: "/assets/images/blogs/blog.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 2,
        title: "Flextron Announces Full Range of Advanced SMT, Mixed Assembly Services",
        description: "One of the most valuable services that an EMS can provide to",
        image: "/assets/images/blogs/blog.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 3,
        title: "Flextron Announces Full Range of Advanced SMT, Mixed Assembly Services",
        description: "One of the most valuable services that an EMS can provide to",
        image: "/assets/images/blogs/blog.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 4,
        title: "Flextron Announces Full Range of Advanced SMT, Mixed Assembly Services",
        description: "One of the most valuable services that an EMS can provide to",
        image: "/assets/images/blogs/blog.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 5,
        title: "Flextron Announces Full Range of Advanced SMT, Mixed Assembly Services",
        description: "One of the most valuable services that an EMS can provide to",
        image: "/assets/images/blogs/blog.jpg",
        href: "#",
        alt: "asdf"
    }
];


const MoreBlogs = () => {
    const swiperRef = useRef(null);

    return (
        <>
            <section>
                <div className="blog-detail-secC sec-pad">
                    <div className="container">
                        <div className="heading">
                            <h2>More Blogs</h2>
                        </div>
                    </div>
                    <div className="service-slider">
                        <div className="swiper-nav service-nav">
                            <button className="service-prev"><Image src="/assets/icon/swiper-nav-left.svg" width={37} height={37} alt="swiper icon"></Image></button>
                            <button className="service-next"><Image src="/assets/icon/swiper-nav-right.svg" width={37} height={37} alt="swiper icon"></Image></button>
                        </div>

                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={3}
                            speed={1000}
                            navigation={{
                                prevEl: ".service-prev",
                                nextEl: ".service-next"
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                },
                                540: {
                                    slidesPerView: 2.1,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                },
                                991: {
                                    slidesPerView: 2.2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                }
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {BLOG_DATA.map((service) => (
                                <SwiperSlide key={service.id}>
                                    <Link href={service.href} passHref>
                                        <div className="item-md">
                                            <figure>
                                                <Image
                                                    src={service.image}
                                                    alt={service.alt}
                                                    width={382}
                                                    height={318}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                    }}
                                                />
                                            </figure>
                                            <figcaption>
                                                <h5>{service.title}</h5>
                                                <p>{service.description}</p>
                                                <button aria-label={`Explore ${service.title}`}>
                                                    <span>Read More</span>
                                                </button>
                                            </figcaption>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoreBlogs
