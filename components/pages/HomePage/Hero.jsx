"use client"
import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(0);
    const slidesData = [
        { heading: "Fighter Jet Standards", video: "/assets/video/vector-bg1.mp4" },
        { heading: "Heading 2", video: "/assets/video/home-bg-banner.mp4" },
        { heading: "Heading 3", video: "/videos/video3.mp4" },
        { heading: "Heading 4", video: "/videos/video4.mp4" },
        { heading: "Heading 5", video: "/videos/video5.mp4" },
        { heading: "Heading 6", video: "/videos/video6.mp4" },
    ];

    return (
        <div className="banner home-banner">
            <div className="bg">
                <figure className="bg-video">
                    <video playsInline autoPlay muted loop width="100%" height="100%">
                        <source
                            src="/assets/video/home-bg-banner.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="x-vector-icon">
                        <video
                            key={slidesData[activeIndex].video}
                            src={slidesData[activeIndex].video}
                            autoPlay
                            muted
                            loop
                            className="video-box"
                        />
                    </div>
                </figure>
                <div className="banner-wrapper">
                    <div className="container-fluid">
                        <div className="heading" data-animate="fade-up">
                            <h2>Where Electronic Circuits Meet</h2>
                            <h1>{slidesData[activeIndex].heading}</h1>
                            <p>
                                Built with unmatched precision, our electronic circuits are
                                engineered to meet the rigorous demands of aerospace-grade
                                performance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="mySwiper"
                autoplay
            >
                {slidesData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-box">&nbsp;</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Hero