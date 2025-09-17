"use client"

import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="industries-detail-secA">
                <Banner
                    videoSrc={"/assets/video/capabilities-banner.mp4"}
                    h1tag={"Capabilities"}
                    description={"Flextron, using state-of-the-art equipments and at fully ESD protected facility"}
                />
            </div>
        </>
    )
}

export default Hero 