"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <div className="contact-secA">
        <div className="heading">
          <h1>Contact us</h1>
          <p>Connect With Us for Smarter Solutions.</p>
        </div>
        <div className="grid-box">
          <div className="col">
            <div className="head">
              <h6>Address</h6>
              <Image src="assets/images/contact-us/1.svg" height={34} width={34} alt="ico" ></Image>
            </div>
            <p>Flextron Circuit Assembly 300 Bauman Ct.   Wood Dale, IL 60191</p>
          </div>

          <div className="col">
            <div className="head">
              <h6>Phone</h6>
              <Image src="assets/images/contact-us/2.svg" height={34} width={34} alt="ico" ></Image>
            </div>
            <Link href="tel:6307661000"><span>Tel: (630) 766-1000</span></Link>
            <Link href="tel:6307661006"><span>Fax: (630) 766-1006</span></Link>
          </div>
          <div className="col">
            <div className="head">
              <h6>Email</h6>
              <Image src="assets/images/contact-us/3.svg" height={34} width={34} alt="ico" ></Image>
            </div>
            <Link href="mailto:sales@flextronassembly.com">sales@flextronassembly.com</Link>
            <Link href="mailto:info@flextronassembly.com">info@flextronassembly.com</Link>
          </div>
        </div>

        <div className="bottom-btn">
          <Link href="/">get in touch</Link>
        </div>
      </div>
    </>
  )
}

export default Hero 