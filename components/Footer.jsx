"use client"
import Link from "next/link"
import Image from "next/image"
// import FooterStrip from "./FooterStrip"


export default function Footer() {
    return(

       <>
         <footer>
            <div className="call-to-action flex">
                <div className="colA">
                    <div className="action">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><rect width={12.5} height={18.5} x={5.75} y={2.75} rx={3}></rect><path d="M11 17.75h2"></path></g></svg>
                        <div className="contact">
                            <h6>Mobile</h6>
                            <Link href="telto:+919810632693">+91- 98106 32693</Link>
                        </div>
                    </div>
                    <div className="action">
                         <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5"></path></svg>
                        <div className="contact">
                            <h6>Landline</h6>
                            <Link href="telto:+911244235627">+91 124 - 4235627</Link>
                        </div>
                    </div>
                    <div className="action">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#fff" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"></path></svg>
                        <div className="contact">
                            <h6>Email Us</h6>
                            <Link href="mailto:info@infraplus.co.in">info@infraplus.co.in</Link>
                        </div>
                    </div>
                </div>
                <div className="colB">
                    <button className="enquire-btn" onClick={() => {
                            document.querySelector('.enquire-pop').classList.add('is-open')
                            document.querySelector('.overlay').classList.add('is-open')
                            document.querySelector('body').classList.add('overflow-hidden')
                        }}>Enquire Now</button>
                    {/* <a href="/wa.link/o3wjjo" target="_blank" className="white-border">Whatsapp</a> */}
                    <a href="https://api.whatsapp.com/send?phone=919810632693&text=Hello%20Team%20Infraplus%20Consulting!%20I%20am%20interested%20in%20one%20of%20your%20projects.%20Please%20touch%20base%20with%20me." target="_blank" className="white-border">Whatsapp</a>
                </div>
            </div>
            <div className="main-footer">
                <div className="colA">
                    <Image src='/assets/logo-dark.svg' alt="logo" width={216} height={36} />
                </div>
                <div className="colB">
                    <div className="list">
                        <h6>Company</h6>
                        <ul>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                            <li><Link href="javascript:;">Terms & Conditions</Link></li>
                            <li><Link href="/privacy-policy">Policy of use</Link></li>
                        </ul>
                    </div>
                    <div className="list">
                        <h6>Sectors</h6>
                        <ul>
                            <li><Link href="/sector-details">Water & Sanitation</Link></li>
                            <li><Link href="/sector-details">Roads & Highways</Link></li>
                            <li><Link href="/sector-details">Rail & Metro</Link></li>
                            <li><Link href="/sector-details">Energy</Link></li>
                            <li><Link href="/sector-details">Industrial Parks/ SEZ</Link></li>
                        </ul>
                    </div>
                    <div className="list">
                        <h6>Connect with us</h6>
                        <ul>
                            <li><a href="https://maps.app.goo.gl/3bcDPJQuCRuUyCaF6" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#666" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path></g></svg>1065, 10th Floor, Tower B1, Spaze i-Tech Park, Sector 49, Sohna Road, Guragon 122018, Haryana, India,</a></li>
                        </ul>
                    </div>
                </div>
                <div className="colC">
                    <div className="social-icons">
                        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#20448B" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"></path></svg>
                        </a>
                        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#20448B" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                        </a>
                        <a href="javascript:;" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#20448B" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/infraplus-consulting-private-limited" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#20448B" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <p>©  Infraplus. All Right Reserved</p>
                <div className="pret">
                    <a href="prettifycreative.com">Made by passion <img src="/assets/icon/prettify.svg" alt="Prettify Creative Logo" /></a>
                </div>
            </div>
        </footer>
        {/* <FooterStrip /> */}
        <div className="overlay" onClick={() => {
            document.querySelector('.ham-pop').classList.remove('is-open')
            document.querySelector('.enquire-pop').classList.remove('is-open')
            document.querySelector('.overlay').classList.remove('is-open')
            document.querySelector('body').classList.remove('overflow-hidden')
        }}>
        </div>
       </>
    )
}