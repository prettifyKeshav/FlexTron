"use client"

import React from 'react'
import Banner from '@/components/Banner'

const Hero = () => {
    return (
        <>
            <Banner
                videoSrc={"/assets/video/home-sec-b-banner.mp4"}
                h1tag={"Smart Assembly for Smarter Electronics."}
                description={"Flextron specializes in high-density PCB assembly at a fully ESD-protected facility, offering flexible or rigid boards from 0201 to BGA, micro BGA, and flip chips, along with through-hole and mixed assemblies."}
            />
        </>
    )
}

export default Hero 