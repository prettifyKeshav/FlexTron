'use client'

import React from 'react'
import Image from 'next/image'

const StickySec = () => {
    return (
        <section className='sticky'>
            <div className="about-secE">
                <Image src="/assets/images/aboutus/stickyimage.jpg" width={1280} height={660} alt="team image" ></Image>
            </div>
        </section>
    )
}

export default StickySec