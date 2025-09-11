import Banner from '@/components/Banner'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="corporate-secA">
                <Banner
                    videoSrc={"/assets/video/CorporateResponsibility-banner.mp4"}
                    h1tag={"Corporate Responsibility"}
                />
            </div>
        </>
    )
}

export default Hero 