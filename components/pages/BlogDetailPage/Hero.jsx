"use client"

import React from 'react'
import Banner from '@/components/Banner'

const Hero = () => {
    return (
        <>
            <div className="blog-detail-secA">
                <Banner
                    videoSrc={"/assets/video/home-bg-banner.mp4"}
                    h1tag={"Flextron Announces Full Range of Advanced SMT, Mixed Assembly Services"}
                    description={"We are adept at assembling SMT PCBs of all sizes and types, and all major classes of SMT assembly, i.e., Class II and Class III, from printing and dispensing adhesives and solder pastes to placement (mounting), reflow soldering, cleaning if needed, and inspection, and rework/repair."}
                />
            </div>
        </>
    )
}

export default Hero