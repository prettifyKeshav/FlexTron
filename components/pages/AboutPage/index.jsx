import React from 'react'
import "@/styles/aboutus/aboutus.css"
import Hero from './Hero'
import OurMission from './OurMission'
import OurHistory from './OurHistory'
import WhyChooseUs from './WhyChooseUs'
import StickySec from './StickySec'
import OurTeam from './OurTeam'
import QualityPolicyStatement from './QualityPolicyStatement'

const AboutPage = () => {
    return (
        <>
            <Hero />
            <OurMission />
            <OurHistory />
            <WhyChooseUs />
            <StickySec />
            <OurTeam />
            <QualityPolicyStatement />
        </>
    )
}

export default AboutPage    