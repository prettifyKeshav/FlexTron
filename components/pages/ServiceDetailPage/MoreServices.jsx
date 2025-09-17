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

const MORE_SERVICE = [
    {
        id: 1,
        title: "SMT PCB Assembly",
        description: "One of the most valuable services that an EMS can provide to a customer is engineering and design support.",
        image: "/assets/images/Services/Service-images/1.jpg",
        href: "#",
        alt: "asdf"
    },

    {
        id: 2,
        title: "SMT PCB Assembly",
        description: "One of the most valuable services that an EMS can provide to a customer is engineering and design support.",
        image: "/assets/images/Services/Service-images/2.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 3,
        title: "SMT PCB Assembly",
        description: "One of the most valuable services that an EMS can provide to a customer is engineering and design support.",
        image: "/assets/images/Services/Service-images/3.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 4,
        title: "SMT PCB Assembly",
        description: "One of the most valuable services that an EMS can provide to a customer is engineering and design support.",
        image: "/assets/images/Services/Service-images/4.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 5,
        title: "SMT PCB Assembly",
        description: "One of the most valuable services that an EMS can provide to a customer is engineering and design support.",
        image: "/assets/images/Services/Service-images/5.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 6,
        title: "SMT PCB Assembly",
        description: "One of the most valuable services that an EMS can provide to a customer is engineering and design support.",
        image: "/assets/images/Services/Service-images/6.jpg",
        href: "#",
        alt: "asdf"
    },
    {
        id: 7,
        title: "SMT PCB Assembly",
        description: "One of the most valuable services that an EMS can provide to a customer is engineering and design support.",
        image: "/assets/images/Services/Service-images/7.jpg",
        href: "#",
        alt: "asdf"
    },

]


const MoreServices = () => {
    const swiperRef = useRef(null);

    return (
        <>
            <section>
                <div className="service-detail-secD sec-pad" >
                    <div className="container">
                        <div className="heading">
                            <h2>More services</h2>
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
                                    slidesPerView: 2,
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
                            {MORE_SERVICE.map((service) => (
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
                                                    <span>Explore</span>
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

export default MoreServices
