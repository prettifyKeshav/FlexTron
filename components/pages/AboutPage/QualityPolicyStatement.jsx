'use client'
import React from 'react'
import Image from 'next/image'

const QualityPolicyStatement = () => {
    return (
        <>
            <section>
                <div className="about-secG">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col" data-animate="fade-up">
                                <figure>
                                    <Image src="/assets/images/home/x-vector.png" alt="x image" width={363} height={299}></Image>
                                </figure>
                            </div>
                            <div className="col" data-animate="fade-up">
                                <h2>Quality Policy Statement</h2>
                                <p>Quality is a process that is a result of planning, teamwork and commitment to excellence by everyone throughout the organisation. Flextron number 1 priority is providing excellent customer service from start to finish. Experience the Power of One-Stop PCB Solution today with our passionate and knowledgeable team members who really care about assisting you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QualityPolicyStatement