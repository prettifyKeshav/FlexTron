"use client"
import React from 'react'
import Image from 'next/image'

const StickySec = () => {
    return (
        <>
            <section className='sticky'>
                <div className="service-detail-secB">
                    <Image src={"/assets/images/service-detail/sec-b-banner.jpg"} width={1280} height={650} alt='banner image'></Image>
                </div>
            </section>
        </>
    )
}

export default StickySec    