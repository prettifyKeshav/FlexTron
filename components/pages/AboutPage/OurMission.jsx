"use client"

import React from 'react'
import Image from 'next/image'

const OurMission = () => {
    return (
        <>
            <section>
                <div className="about-secB">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <h2>Our Background, and Our Mission</h2>
                                <figure>
                                    <Image src="/assets/images/home/x-vector.png" width={363} height={299} alt='x-image'></Image>
                                </figure>
                            </div>
                            <div className="col">
                                <p>S & M Group Inc. dba FLEXTRON CIRCUIT ASSEMBLY was founded in 2005, launched with a passion for excellence in “Manufacturing with Quality & Service.” We strongly believe in this philosophy; our mission is to become our customers’ true manufacturing partner and to build strong, trusting, long-term relationships as robust and reliable as the PCB assemblies that leave our manufacturing floor. </p>
                                <p>We believe in supporting a low Total Cost of Ownership (TCO) model delivering high quality products right, he first time, using our technology, resources, and our team’s extensive technical knowledge. Our top management team has Electronics Engineering backgrounds, and this has helped Flextron flourish. For more than a decade we have excelled in technological expertise, developing and implementing innovative processes, and providing exceptional quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurMission