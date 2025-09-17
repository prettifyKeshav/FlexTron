"use client"

import React from 'react'
import EnquireForm from './EnquireForm'

const Experts = () => {
    return (
        <>
            <div className="industries-detail-secB">
                <div className="container">
                    <div className="flex-box">
                        <div className="col" data-animate="fade-up">
                            <ul>
                                <li>Flexible & Rigid PCB Assembly</li>
                                <li>Surface Mount Assembly (01005s, 0201s to Fine Pitch Devices including Micro BGAs)</li>
                                <li>Through Hole Assembly</li>
                                <li>Mixed Technology (SMT and Through Hole) Assembly</li>
                                <li>Quick Prototyping, Production and Turnkey Manufacturing</li>
                                <li>Box Build/Mechanical Assembly</li>
                                <li>Conformal Coating</li>
                                <li>In-circuit, functional, and Burn-in testing</li>
                                <li>Wire Harness and Cable Assembly</li>
                                <li>Component Pre-Programming</li>
                                <li>Lead-Free Assembly</li>
                                <li>Deliveries that are *Just in Time* every time</li>
                            </ul>
                            <p>We expert in quick prototype and High mix/low and medium volume assemblies. Our test capabilities include in-circuit or fully functional testing. We also offer full testing of all cable harness assemblies.</p>
                            <p>Flextron’s flexibility allows our customers to choose the level of service that best fits their needs: turnkey, consignment, combination turnkey/consignment or total product build. Providing customized solutions that fit our customers’ needs is the basis for Flextron’s success in the electronics contract manufacturing industry.</p>
                            <p>Flextron’s customers include America’s manufacturers of Medical Electronics, Computers, Process instrumentation, Electric Power, Security Products, Food and Drug, Games and Recreation, Telecommunications, and Industrial/Commercial applications Diagnostic & Test.</p>
                        </div>
                        <div className="col" data-animate="fade-up">
                            <div className="form-sec">
                                <h4>Talk to Our Experts</h4>
                                <EnquireForm
                                    className="contact-form "
                                    buttonType="solid-white"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experts  