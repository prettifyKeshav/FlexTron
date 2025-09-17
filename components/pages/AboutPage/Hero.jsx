"use client"

import Banner from '@/components/Banner'
import React from 'react'
import "@/styles/aboutus/aboutus.css"


const Hero = () => {
    return (
        <>
            <div className="about-secA">
                <Banner
                    videoSrc={"/assets/video/home-sec-b-banner.mp4"}
                    h1tag={"Flextron Circuit Assembly"}
                    imageSrc={"/assets/icon/mouse-icon.svg"}
                />
            </div>
        </>
    )
}

export default Hero