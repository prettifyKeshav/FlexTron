"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    id: 1,
    title: "Military / Aerospace Industry",
    description:
      "Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ITAR and RoHS compliance.",
    image: "/assets/images/industries/1.jpg",
    animationImg: "fade-right",
    animationText: "fade-left",
  },
  {
    id: 2,
    title: "Medical / Hospital Industry",
    description:
      "Whether you’re developing advanced medical devices or hospital-grade equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ISO 13485 standards, and full RoHS compliance.",
    image: "/assets/images/industries/2.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  },
  {
    id: 3,
    title: "Lighting Industry",
    description:
      "Whether you’re creating smart LED lighting systems or industrial illumination products, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, energy-efficiency standards, and RoHS compliance.",
    image: "/assets/images/industries/3.jpg",
    animationImg: "fade-right",
    animationText: "fade-left",
  },
  {
    id: 4,
    title: "Industrial Equipment",
    description:
      "Whether you’re manufacturing automation systems or heavy industrial equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ISO-certified processes, and RoHS compliance.",
    image: "/assets/images/industries/4.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  },
  {
    id: 5,
    title: "Telecommunication Industry",
    description:
      "Whether you’re building telecom infrastructure or next-gen communication devices, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ITU standards, and RoHS compliance.",
    image: "/assets/images/industries/5.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  },
  {
    id: 6,
    title: "Wireless and IoT Industry",
    description:
      "Whether you’re innovating in wireless technology or developing IoT devices, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines, ISO 9001 standards, and RoHS compliance.",
    image: "/assets/images/industries/6.jpg",
    animationImg: "fade-left",
    animationText: "fade-left",
  }
];

const Sections = () => {
  return (
    <section className="industries-secA">
      <div>
        {industries.map((industry) => (
          <div className="flex-box" key={industry.id}>
            <div className="flex-box-item" data-animate={industry.animationImg}>
              <figure>
                <Image
                  src={industry.image}
                  width={648}
                  height={546}
                  alt={`${industry.title} image`}
                />
              </figure>
            </div>
            <div className="flex-box-item" data-animate={industry.animationText}>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <span>
                <div className="btn2">
                  <Link href="/industries-detail">Read more</Link>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sections;
