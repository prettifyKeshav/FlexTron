
"use client"

import React from 'react'
import EnquireForm from '@/components/EnquireForm'

const Experts = () => {
    return (
        <>
            <div className="service-detail-secC">
                <div className="container">
                    <div className="flex-box">
                        <div className="col">
                            <p>We are adept at assembling SMT PCBs of all sizes and types, and all major classes of SMT assembly, i.e., Class II and Class III, from printing and dispensing adhesives and solder pastes to placement (mounting), reflow soldering, cleaning if needed, and inspection, and rework/repair. We can handle a wide range of SMT components from passive chip components (e.g., 01005, 0201, 0402) to active packages including Micro-BGA, LGA, QFN, QFP, CSP, Package on Package (PoP) and more with our automated state-of-the-art SMT assembly lines.</p>
                            <p>Our advanced SMT lines are capable of manufacturing complex assemblies with high-mix ratios, products with high thermal demand, HDI (High-Density Interconnect) and miniaturized assemblies. Our in-line 3D Solder Paste Inspection (SPI) and post-assembly AOI and 5-axis X-Ray equipment ensures an optimized process. We can clean or ‘no-clean’ as the process and product require, Selective Solder as required, dispense and cure adhesives and electronic materials (masks), and provide a lead-free (RoHS-compliant) assembly or leaded (Hi-Rel) as the customer requires. We are considered experts in Paste-in-Hole processes and Bonded Carrier assemblies with ¾” aluminum or copper core PCBs.</p>
                        </div>
                        <div className="col">
                            <div className="form-sec">
                                <h4>Talk to Our Experts</h4>
                                <EnquireForm
                                    className="contact-form"
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