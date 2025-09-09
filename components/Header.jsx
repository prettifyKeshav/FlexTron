"use client";
import Link from "next/link"
import Image from "next/image"
import '@/styles/header.css'
// import { useEffect } from "react"
// import Hamburger from "./Hamburger";
// import EnquirePop from "./EnquirePop";

export default function Header() {
    return(
       <>
        <header className="header-fixed">
            <div className="header-wrapper">
                <div className="colA">
                    <Link href="/" className="logo">
                        <Image src="/assets/logo.svg" width="204" height="25" alt="Flextron logo"></Image>
                    </Link>
                </div>
                <div className="colB">
                    <ul className="nav-a">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li className="hasDropdown">
                            <a href="/services" aria-haspopup="true" aria-expanded="false">Services</a>
                            <div className="dropdown-menu dropdown-menu-single" role="menu">
                                <ul>
                                    <li><Link href="/sector-details">Advanced SMT PCB Assembly</Link></li>
                                    <li><Link href="/sector-details">Design for Manufacturing</Link></li>
                                    <li><Link href="/sector-details">Engineering and Design</Link></li>
                                    <li><Link href="/sector-details">Quick Turn Assembly Services</Link></li>
                                    <li><Link href="/sector-details">Mixed Technology Assembly</Link></li>
                                    <li><Link href="/sector-details">Buildings – Architecture</Link></li>
                                    <li><Link href="/sector-details">Assurance of Absolute Quality</Link></li>
                                    <li><Link href="/sector-details">One-Stop Source for All Services</Link></li>
                                </ul>
                            </div>
                        </li>

                        <li className="hasDropdown">
                            <a href="#" aria-haspopup="true" aria-expanded="false">Industries</a>
                            <div className="dropdown-menu dropdown-menu-single" role="menu">
                                <ul>
                                    <li><Link href="/">Military / Aerospace Industry</Link></li>
                                    <li><Link href="/">Medical / Hospital Industry</Link></li>
                                    <li><Link href="/">Lighting Industry</Link></li>
                                    <li><Link href="/">Industrial / Commercial Equipment</Link></li>
                                    <li><Link href="/">Utility &amp; Telecommunication Industry</Link></li>
                                    <li><Link href="/">Wireless and IoT Industry</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link href="/capabilities">Capabilities</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="colC">
                    <ul className="nav-b">
                        {/* <li><Link href="#"><Image className="svg" alt="icon" width={25} height={25} src="/assets/icon/world.svg"/>16+ Countries</Link></li> */}
                        <li><Link href="telto:+6307661000"> (630) 766-1000</Link></li>
                        
                        <li>
                            <button type="button" onClick={() => {
                                document.querySelector('.ham-pop').classList.add('is-open')
                                document.querySelector('.overlay').classList.add('is-open')
                                document.querySelector('body').classList.add('overflow-hidden')
                            }} className="ham-btn" data-model=".ham-pop" aria-label="Open Mobile Menu">
                                <span></span>
                                <span></span>
                                <span></span>
                                </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        {/* <Hamburger /> */}
        {/* <EnquirePop /> */}
       </>
    )
}