"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "SMT PCB Assembly",
    description:
      "We are adept at assembling SMT PCBs of all sizes and types, and all major classes of SMT assembly, i.e., Class II and Class III, from printing and dispensing adhesives and solder pastes to placement (mounting), reflow soldering, cleaning if needed, and inspection, and rework/repair.",
    image: "/assets/images/services/Service-images/1.jpg",
    animationImg: "fade-right",
    animationText: "fade-left",
  },
  {
    id: 2,
    title: "Design for Manufacturing",
    description:
      "Product manufacturing challenges are identified in each step of the way and recorded properly. DFM reports are communicated to every customer with detailed issues and possible solutions.",
    image: "/assets/images/services/Service-images/2.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  },
  {
    id: 3,
    title: "Engineering and Design",
    description:
      "One of the most valuable services that an EMS can provide to a customer is engineering and design support. We want your product to come off the assembly line ‘perfect’ in every way. Engineering support helps ensure that it will, so such planning and Design for Manufacturability (DFM) are a vital part of the Partnership between you and us.",
    image: "/assets/images/services/Service-images/3.jpg",
    animationImg: "fade-right",
    animationText: "fade-left",
  },
  {
    id: 4,
    title: "Quick Turn  Assembly Services",
    description:
      "At Flextron, our ability to turn around rapid prototypes and turn-key solutions for all sizes of production lots is second to none. Our dedicated manufacturing line is equipped with high-speed and flexible component handling pick and place (mounting) machines, stencil printers, fluids dispensers.",
    image: "/assets/images/services/Service-images/4.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  },
  {
    id: 5,
    title: "Mixed Technology Assembly",
    description:
      "Our Plated Through-Hole (PTH) assembly process accommodates the full spectrum of through-hole components, including axial, radial, odd-forms, those requiring lead forming and more. We apply unique manual insertion techniques for compound through-hole assembly challenges.",
    image: "/assets/images/services/Service-images/5.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  },
  {
    id: 6,
    title: "Assurance of Absolute Quality",
    description:
      "Flextron is an industry leader in PCB assembly; our products are built to the highest quality standards and technology, which are required for the Aerospace (AS9100) and Medical (ISO 13485) industries.",
    image: "/assets/images/services/Service-images/6.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  },
  {
    id: 7,
    title: "Your One-Stop Source for All Services",
    description:
      "If you like to complete all operations at one location, you’re not alone; that’s why Flextron is your single source in-house for additional services including component programming, conformal coating, dispensing, potting, box build, mechanical assembly, and more.",
    image: "/assets/images/services/Service-images/7.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  },
];

const Sections = () => {
  return (
    <section className="service-secA">
      <div>
        {services.map((service) => (
          <div className="flex-box" key={service.id}>
            <div className="container">
              <div className="flex-box-item" data-animate={service.animationImg}>
                <figure>
                  <Image
                    src={service.image}
                    width={582}
                    height={387}
                    alt="service image"
                  />
                </figure>
              </div>
              <div className="flex-box-item" data-animate={service.animationText}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span>
                  <div className="btn2">
                    <Link href="/service-detail">Explore</Link>
                  </div>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections;
