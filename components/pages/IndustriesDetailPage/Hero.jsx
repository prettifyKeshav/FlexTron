"use client"

import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="industries-detail-secA">
                <Banner
                    videoSrc={"/assets/video/industries-banner.mp4"}
                    h1tag={"Military Aerospace Industry"}
                    description={"Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines"}
                />
            </div>
        </>
    )
}

export default Hero 