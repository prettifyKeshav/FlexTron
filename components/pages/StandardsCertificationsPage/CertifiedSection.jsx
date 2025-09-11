"use client";

import React, { useEffect, useRef } from "react";

const CertifiedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cols = Array.from(container.querySelectorAll(".col"));
    if (cols.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cols.indexOf(entry.target);

            // Mark current and all previous cols as active
            cols.forEach((col, i) => {
              if (i <= index) {
                col.classList.add("active");
              } else {
                col.classList.remove("active");
              }
            });
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin:"-60% 0px -40% 0px",
      }
    );

    cols.forEach((col) => observer.observe(col));

    return () => {
      cols.forEach((col) => observer.unobserve(col));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="standards-secB">
      <div className="container" ref={containerRef}>
        <div className="box">
          <div className="col">
            <h6>Certified: AS9100</h6>
            <p>
              AS9100 is the international Quality Management System standard for
              the Aviation, Space (aka Aerospace) and Defense (AS&D) industry
              required high performance and extreme demanding application.
              Simply it means, Flextron can build your PCBAs if you belongs to
              any of these industries!
            </p>
          </div>

          <div className="col">
            <h6>Certified: ISO 13485</h6>
            <p>
              ISO 13485 specifies requirements for a quality management system
              where an organization needs to demonstrate its ability to provide
              Medical devices and related services that consistently meet
              customer and applicable regulatory requirements. What can we say!
              Flextron can build your PCBAs for your Medical products!.
            </p>
          </div>

          <div className="col">
            <h6>Certified: ISO 9001</h6>
            <p>
              ISO 9001 is the quality management certification from the
              International Organization for Standardization. The standard can
              help companies meet their customers’ requirements for their
              product/service while fulfilling any regulatory requirements. Look
              no further, we have it!
            </p>
          </div>

          <div className="col">
            <h6>Certified: ITAR</h6>
            <p>
              ITAR means Flextron Circuit Assembly is registered with the DDTC
              (Directorate of Defense Trade Controls) in accordance with the
              International Traffic in Arms Regulations, and maintains an Export
              Compliance program allowing it to manufacture Defense Articles.
              We’ve got it!
            </p>
          </div>

          <div className="col">
            <h6>IPC-A-610, Class 2</h6>
            <p>
              IPC-A-610, Class 2 is our default assembly inspection standard and
              inspection for all Flextron Circuit’s assemblies. Assemblies are
              certified to Class II inspection ensures a consistent level of
              quality in manufacturing. Better!
            </p>
          </div>

          <div className="col">
            <h6>IPC-A-610, Class 3</h6>
            <p>
              IPC-A-610, Class 3 is assembly inspection standard, the best in
              class for electronic assemblies with very high degree of accuracy
              and very tight low tolerances-widely used in highly reliable,
              extremely accurate and performing applications. Best!
            </p>
          </div>

          <div className="col">
            <h6>JEDEC Standards</h6>
            <p>
              JEDEC Standards define appropriate guidelines for Thermal
              Characteristics, Moisture Sensitivity, Component
              Packages/Shapes definition, solderability and electrostatic
              Discharge, among other guidelines. Got to follow it!
            </p>
          </div>

          <div className="col">
            <h6>RoHS/Lead-Free</h6>
            <p>
              RoHS/Lead-Free is European Parliament & Council’s Reduction of
              Hazardous Substances (RoHS) Directive (2002/95/EC) to restrict all
              Hazardous Substances in electronics assemblies. Built millions and
              building more daily!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifiedSection;
