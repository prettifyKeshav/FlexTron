"use client";

import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const WhyChoose = [
    {
        image: "/assets/images/aboutus/icon/1.svg",
        heading: "Long History",
        message: "18 years of experience – PCB manufacturing and PCB assembly, including prototype and production.",
    },
    {
        image: "/assets/images/aboutus/icon/2.svg",
        heading: "High Quality",
        message: "Our PCB & PCBA quality guarantee goes beyond a declaration on a piece of paper. It’s a functioning.",
    },
    {
        image: "/assets/images/aboutus/icon/3.svg",
        heading: "On Time Delivery",
        message: "Time to market represents how the company’s time-critical, On-time delivery is essential to our customer.",
    },
    {
        image: "/assets/images/aboutus/icon/4.svg",
        heading: "Wonderful Team",
        message: "Our professional engineer team to offer fast response and good service to the customers.",
    },
    {
        image: "/assets/images/aboutus/icon/5.svg",
        heading: "Certification",
        message: "ISO 13485, 9001 & AS9100 Certified. ITAR Registered. J-STD-001, IPC-A-610 Class II & Class III Compliant.",
    },
    {
        image: "/assets/images/aboutus/icon/6.svg",
        heading: "Analysis & Feedback",
        message: "Your circuit boards will be more manufacturable and cost effective after our engineers work with you.",
    },
    {
        image: "/assets/images/aboutus/icon/7.svg",
        heading: "Customer Service",
        message: "Good communication of our team with our customers is the key to winning business and good customer relationship.",
    },
    {
        image: "/assets/images/aboutus/icon/8.svg",
        heading: "One-stop Shop",
        message: "We are a one-stop shop for all your PCB Assembly & Printed Circuit Board/PCB Fabrication needs.",
    },
    {
        image: "/assets/images/aboutus/icon/9.svg",
        heading: "Total Cost of Ownership (TCO)",
        message: "Flextron is focused organization demonstrating low Total Cost of Ownership (TCO) model compared to traditional manufacturing model. Assemblies are built with great pride and built right at first time.",
    },
];


const WhyChooseCard = ({ WhyChoose }) => (
    <Link href="#">
        <div className="item-md">
            <figure>
                <Image
                    src={WhyChoose.image}
                    width={37}
                    height={37}
                    alt={`${WhyChoose.name} image`}
                />
            </figure>
            <h5>{WhyChoose.heading}</h5>
            <p>{WhyChoose.message}</p>
        </div>
    </Link>
);

const WhyChooseUs = () => {
    const swiperRef = useRef(null);

    return (
        <section>
            <div className="about-secD">
                <div className="container">
                    <div className="heaidng text-center">
                        <h2>Why Choose Us?</h2>
                    </div>

                    <div className="sucess-slider">
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={4}
                            speed={1000}
                            navigation={{
                                prevEl: ".sucess-prev",
                                nextEl: ".sucess-next",
                            }}
                            pagination={{
                                type: "progressbar",
                                el: ".swiper-pagination",
                                clickable: true,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1.2 },
                                540: { slidesPerView: 2.1 },
                                991: { slidesPerView: 2.2 },
                                1200: { slidesPerView: 4 },
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            {WhyChoose.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <WhyChooseCard WhyChoose={item} />
                                </SwiperSlide>
                            ))}

                            <div className="custom-pagination">
                                <div className="swiper-pagination"></div>
                                <div className="swiper-nav">
                                    <button className="sucess-prev">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="none"
                                                stroke="#000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="m14 7l-5 5l5 5"
                                            />
                                        </svg>
                                    </button>
                                    <button className="sucess-next">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="none"
                                                stroke="#000"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="m10 17l5-5l-5-5"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
