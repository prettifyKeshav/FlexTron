import React from 'react'
import Link from 'next/link'

const Sections = () => {
    return (
        <>
            <div className="corporate-secB">
                <div className="container">
                    <div className="flex-box">
                        <div className="col" data-animate="zoom-in">
                            <div className="x-vector-icon">
                                <video playsInline autoPlay muted loop width="100%" height="100%">
                                    <source src="/assets/video/Holding-Earth.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col" data-animate="zoom-in">
                            <p>At Flextron Circuit Assembly, we promote responsible business practices at every level of the company and expect the same from our employees and everyone with whom we do business. We strive to conduct business ethically, honestly and in accordance with the law and our Business Ethics.</p>
                            <p>Our long-standing commitment to corporate responsibility is governed by policies and programs that include, but are not limited to, anti-bribery and corruption, charitable programs, environmental product compliance, fair labor principles and workplace safety.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="corporate-secC">
                <div className="container">
                    <div className="flex-box">
                        <div className="col" data-animate="zoom-in">
                            <h6>Conflict Mineral Policy</h6>
                            <p>Flextron Circuit Assembly (FCA) is committed to being a responsible corporate citizen and is opposed to human rights abuses.  As part of that commitment, FCA seeks to source products, components and materials from companies that share our values around human rights, ethics and environmental responsibility.</p>
                        </div>

                        <div className="col" data-animate="zoom-in">
                            <Link href="/assets/FCAConflictMineralsPolicy.pdf" target="_blank">
                                <span>Click to View Conflict Minerals Policy</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sections 