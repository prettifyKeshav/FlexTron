"use client"

import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="industries-detail-secA">
                <Banner
                    videoSrc={"/assets/video/capabilities-banner.mp4"}
                    h1tag={"Flexible & Rigid PCB Assembly"}
                    description={"Surface Mount Assembly (01005s, 0201s to Fine Pitch Devices including Micro BGAs)"}
                />
            </div>
        </>
    )
}

export default Hero 