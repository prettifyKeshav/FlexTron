"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";


const MoreServices = () => {
    const swiperRef = useRef(null);

    return (
        <>
            <section>
                <div className="industries-detail-secC sec-pad">
                    <div className="container">
                        <div className="heading">
                            <h2>More services</h2>
                        </div>
                    </div>
                    <div className="industries-slider">
                        <div className="swiper-nav industries-nav">
                            <button className="industries-prev"><Image src="/assets/icon/swiper-nav-left.svg" width={37} height={37} alt="swiper icon"></Image></button>
                            <button className="industries-next"><Image src="/assets/icon/swiper-nav-right.svg" width={37} height={37} alt="swiper icon"></Image></button>
                        </div>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={2.8}
                            speed={1000}
                            navigation={{
                                prevEl: ".industries-prev",
                                nextEl: ".industries-next"
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                },
                                540: {
                                    slidesPerView: 1.2,
                                },
                                991: {
                                    slidesPerView: 2.2,
                                },
                                1200: {

                                }
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            <SwiperSlide>
                                <div className="col">
                                    <figure>
                                        <img src="/assets/images/home/industries/2.jpg"></img>
                                        <figcaption>
                                            <div className="content">
                                                <h5>Military / Aerospace Industry</h5>
                                                <p>
                                                    Whether you’re designing product for military research,
                                                    or a complex Aerospace equipment, Flextron Circuit
                                                    Assembly delivers high performance PCB assemblies built
                                                    to IPC-A-610 guidelines, ITAR and RoHS compliance.
                                                </p>
                                                <Link href="#" className="bottom-btn">
                                                    <span>Read More</span>
                                                </Link>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="col">
                                    <figure>
                                        <img src="/assets/images/home/industries/3.jpg"></img>
                                        <figcaption>
                                            <div className="content">
                                                <h5>Military / Aerospace Industry</h5>
                                                <p>
                                                    Whether you’re designing product for military research,
                                                    or a complex Aerospace equipment, Flextron Circuit
                                                    Assembly delivers high performance PCB assemblies built
                                                    to IPC-A-610 guidelines, ITAR and RoHS compliance.
                                                </p>
                                                <Link href="#" className="bottom-btn">
                                                    <span>Read More</span>
                                                </Link>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="col">
                                    <figure>
                                        <img src="/assets/images/home/industries/4.jpg"></img>
                                        <figcaption>
                                            <div className="content">
                                                <h5>Military / Aerospace Industry</h5>
                                                <p>
                                                    Whether you’re designing product for military research,
                                                    or a complex Aerospace equipment, Flextron Circuit
                                                    Assembly delivers high performance PCB assemblies built
                                                    to IPC-A-610 guidelines, ITAR and RoHS compliance.
                                                </p>
                                                <Link href="#" className="bottom-btn">
                                                    <span>Read More</span>
                                                </Link>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="col">
                                    <figure>
                                        <img src="/assets/images/home/industries/5.jpg"></img>
                                        <figcaption>
                                            <div className="content">
                                                <h5>Military / Aerospace Industry</h5>
                                                <p>
                                                    Whether you’re designing product for military research,
                                                    or a complex Aerospace equipment, Flextron Circuit
                                                    Assembly delivers high performance PCB assemblies built
                                                    to IPC-A-610 guidelines, ITAR and RoHS compliance.
                                                </p>
                                                <Link href="#" className="bottom-btn">
                                                    <span>Read More</span>
                                                </Link>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="col">
                                    <figure>
                                        <img src="/assets/images/home/industries/6.jpg"></img>
                                        <figcaption>
                                            <div className="content">
                                                <h5>Military / Aerospace Industry</h5>
                                                <p>
                                                    Whether you’re designing product for military research,
                                                    or a complex Aerospace equipment, Flextron Circuit
                                                    Assembly delivers high performance PCB assemblies built
                                                    to IPC-A-610 guidelines, ITAR and RoHS compliance.
                                                </p>
                                                <Link href="#" className="bottom-btn">
                                                    <span>Read More</span>
                                                </Link>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoreServices
