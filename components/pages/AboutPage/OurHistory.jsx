"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const slideData = [
    {
        img: '/assets/images/aboutus/history/1.jpg',
        year: '2005',
        title: '2005: Flextron was born Lead-Free!',
        content: 'Flextron came to life with 7,000 sq-ft of rented facility and with one Mydata SMT line. Goal was to cater to high-tech PCB assemblies designed with 0402 and BGAs. RoHS and Lead-Free were pretty much newer learned words. OMG… 0402 parts were not stocked by many distributors! Lots of cold calling to our beloved customers.'
    },
    {
        img: '/assets/images/aboutus/history/2.jpg',
        year: '2006',
        title: '2006: Recognition to challenges!',
        content: 'Flextron became ISO 9001 certified company. We have received our first production volume job with 0402, excellent quality, excellent work! We were becoming popular among customers who are looking for the help with new set of eyes for the problems they were facing in technology manufacturing. We were right there to support them, be with them! Flextron has created innovative processes which is been recognized by BP Solar and Flextron has entered in agreement with BP Solar to produce their proto and production volumes in USA.'
    },
    {
        img: '/assets/images/aboutus/history/3.jpg',
        year: '2007',
        title: '2007: Flextron is exporting!',
        content: 'Customer base was growing, Flextron was becoming a supplier of choice to many customers who were seeking help to solve their issues. Flextron was considering to expand operation and looking to add SMT line. More & more RoHS assemblies are produced and shipped. Flextron is already placing thousands of BGAs. Flextron has acquired industry leading, 01005, 0201 capable AOI inspection system from Yestech. Flextron added 10-zone reflow oven to support growing RoHS demands. BP Solar and Flextron has entered in agreement to supply assemblies to BP Solar overseas divisions.'
    },
    {
        img: '/assets/images/aboutus/history/4.jpg',
        year: '2008',
        title: '2008: Flextron has moved to own state-of-art larger facility!',
        content: 'Flextron acquired 16K sq-ft industrial building and converted to clean, state-of-the-art ESD safe manufacturing facility. We have added additional Mydata SMT line capable of placing 22K placements per hour to support growing demands. Flextron’s capability grew to place 0201. Total SMT placement capacity is at 52K per hour! We recognize AOI is future and we have AOI with 01005 inspection capability! We have selective solder to expedite smaller builds! We were getting renowned in EMS industry for complex builds, faster deliveries for Proto and Production.'
    },
    {
        img: '/assets/images/aboutus/history/5.jpg',
        year: '2009',
        title: '2009: Economy is slowing Flextron is growing! Added high-speed SMT line!',
        content: 'Things are going well at new facility, Flextron has been entrusted more and more by our beloved customers! More challenges are on the way and we are manufacturing assemblies in shorter time. Flextron doubles SMT placement capacity with addition of DEK & Panasonic high-speed 55K CPH SMT line. Confromal coating capability is in place with PVA coating machine. Customers have to look no further! We are constantly investing to demonstrate our commitment!'
    },
    {
        img: '/assets/images/aboutus/history/6.jpg',
        year: '2010',
        title: '2010: Flextron is still growing in slower economic times! Added super-speed SMT line!',
        content: 'We are at test of manufacturing assemblies faster and faster, Customers are requesting to replenish their inventory. We are up to our commitment! We doubled our SMT placement capacity by adding a staggering 90K CPH Panasonic SMT line! Flextron is at 180K CPH which is one of highest placement capacity among large EMS in Midwest area! We are ICT capable with top-of-line Agilent tester. We are not letting our customers down! We are there with them when they need us most!'
    },
    {
        img: '/assets/images/aboutus/history/7.jpg',
        year: '2011',
        title: '2011: Volume production in expedited mode!',
        content: 'Flextron has massive SMT placements capacity and we are using them to our Customer’s benefit! We have been shipping larger volume in shorter time-frame. We have been working diligently with on-going challenges of manufacturing without kindizing delivery schedules. Our team is growing, thanks to all members of our team contributing to success of our customers! We are producing and we are performing!'
    },
    {
        img: '/assets/images/aboutus/history/8.jpg',
        year: '2012',
        title: '2012: X-ray year with plan of expansion in place! Medical Customer!',
        content: 'Flextron have been shipping hundreds of thousands of assemblies annually and building tens of thousands of BGAs and QFNs with no issue. Team Flextron has voiced to acquire very high-end X-ray machine to add a decent capability beyond just a traditional x-ray capability machine. Flextron is now equipped with Nikon 5-Axis, 160KV tube penetrating 3/4″ aluminum! Flextron is recognized by team of large publicly traded Medical Customer, seeds of getting ISO 13485 certification are planted. We are now looking to expand operation and looking for another facility!'
    },
    {
        img: '/assets/images/aboutus/history/9.jpg',
        year: '2013',
        title: '2013: Acquisition of another business, facility and saving USA jobs!',
        content: 'Flextron has entered in agreement to acquire assets with 16K sq-ft facility of another local EMS who has been in business more than 20 years. With added space, we are efficient and lean! We are manufacturing medical product with extreme yield, our team is strengthening our ISO compatibility to ISO 13485. We are already ISO 13485 compliant! Team has more responsibility at hand with two facilities! We have saved all jobs! Domestic manufacturer demonstrating strength of saving USA jobs!'
    },
    {
        img: '/assets/images/aboutus/history/10.jpg',
        year: '2014',
        title: '2014: Exporting Medical assemblies! Upgrading equipment!',
        content: 'Flextron is shipping tens of thousands of Medical assemblies and exporting them out of USA! Our facility and efforts are well recognized by customers for our commitments, our quality is top-notch, yield is best, Customer satisfaction is very high! We recognized the need to consolidate operations of two facilities and had acquired a large 55K sq-ft facility with large land parcel for future expansion in Wood Dale, IL (Greater O’Hare area).'
    },
    {
        img: '/assets/images/aboutus/history/11.jpg',
        year: '2015',
        title: '2015: Adding more capabilities and Facility renovation is under way!',
        content: 'Flextron continues to add more equipment in PTH and SMT line! We have upgraded our Lead-Free PTH line with an addition of JUKI wave solder and an upgraded SMT line with BTU reflow. Wood Dale, IL facility is under renovation as our future and permanent home! Flextron Team is working towards implementing Aerospace AS9100 practice along with ISO 13485!'
    },
    {
        img: '/assets/images/aboutus/history/12.jpg',
        year: '2016',
        title: '2016: Thank God(and, God\'s fellows)!, Finally moved to our current home, and with more capability!',
        content: 'Finally the wait came to an end! We have moved to our current location at 300 Bauman Ct., Wood Dale, IL 60191! Beautiful location with nature around us! Forest preserve and Salt Creek is next to us! We have deer in our parking lot eating our lawn grass! Just love the scene! Our team has demonstrated a strength of commitment and perseverance in moving entire facility in two days and we were operational on third day! From bottom of our hearts, we thank all members of our team who stood up and extended a helping hand in critical time of move! We are thankful to all of our suppliers and partners who worked with through our challenges! Lines are up!, we are inspecting our Solder paste in 3D with Koh Young 3D SPI.'
    },
    {
        img: '/assets/images/aboutus/history/13.jpg',
        year: '2017',
        title: '2017: Year of AS9100 and ISO 13485 certification! Enjoying spacious facility! Customer visits!',
        content: 'We are excited at our new and current location, we are appreciating more space, ample parking and large training room! With top priority, well focused to get certification in AS9100 and ISO 13485, we have invited NSF to audit us, and we passed with flying colors! Once again, our team, focused group of people, has proved that we are sustaining, and gets things done no matter what challenges are! We are building Medical and Aerospace products with ease. Toughest jobs are done with best yield, history has shaped us who we are and we are here to serve customers! Customer teams are visiting us and complimenting us for our commitment to quality, service and deliveries! Customers are liking what they are experiencing!'
    },
    {
        img: '/assets/images/aboutus/history/14.jpg',
        year: '2018',
        title: '2018: Adding automation and upgrading to latest AS9100 and ISO13485 standards!',
        content: 'Flextron team is working relentless with continuous improvements! We are automating our stock room and our processes! More extreme-ended internal process capabilities are developed and are in place which puts us at top! We have upgraded our AS9100 and ISO 13485 certifications to latest! We were following best quality practice for years so upgrading to latest standards was easier! We are inviting you to visit us, give us an opportunity to work with you!'
    },
    {
        img: '/assets/images/aboutus/history/15.jpg',
        year: '2019',
        title: '2019: Launch of new Website!',
        content: 'While we stayed focused on growth and serving customers, we have realized that website is outdated and required attention to upgrade. We have upgraded it!. We will continue to work at it! You can call us at 630-766-1000 or send us an email with your requirement at sales@flextronassembly.com and we are more than happy to serve you. We promise that we will make your life much easier! We are continuously working to enhance our capabilities, expanding our team, automating our processes and more… We like to grow with you and love to have a long term, healthy and trustworthy relations! We are your partner! We thank you from bottom of our hearts! Please stay tuned for 2019 achievements!'
    },
    {
        img: '/assets/images/aboutus/history/16.jpg',
        year: '2020',
        title: '2020: Covid-19 Coping up and Introduction of 3D AOI !',
        content: 'What a year for entire mankind to learn to new ways of living! We have taken cautionary measures to fight Covid, and helped customer with continuous supply chain. Thanks to our staff members who followed Covid guidelines and demonstrated a true team spirit to keep everyone safe. Thanks to all customer who appreciated our efforts and been there for us in such tough times of economical and social challenges. We have our 3D AOI performing well, and are able to let us dive deeper into latest technologies of 3D inspections. As promised earlier year, we are continuously working to enhance our capabilities, expanding our team, automating our processes, and more… We had stayed together with customers, and enhanced our relationship in such strange unknown times! Will see you in 2021!'
    },
    {
        img: '/assets/images/aboutus/history/17.jpg',
        year: '2021',
        title: '2021: Covid-19 Recovery, Component Challenges!',
        content: 'Covid-19 is winding down with big push in vaccination and more lives are being saved this year. Feeling better than 2020! We have faced significant challenges with shortages on material supplies, and material prices are lot higher than anticipated. We believe that this trend will continue through 2023 or may be up to 2024! Additional resources are added to locate parts and plans are in place to educate customers to plan for present and future. Received a boat load of recognitions from customers for our efforts of building product with severe shortages in component market. Adding and upgrading more equipment to accommodate advance manufacturing features. Waiting for 2022!'
    },
    {
        img: '/assets/images/aboutus/history/18.jpg',
        year: '2022',
        title: '2022: Welcome 2022...',
        content: 'Welcome 2022….'
    }
];

const OurHistory = () => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="about-secC">

            <div className="heading text-center">
                <h2>Our History</h2>
                <p>Flextron was founded in 2005 to specialize in the small-volume PCB assembly jobs that large electronic contract manufacturers won’t fulfill without a commitment to big-volume production. Our company to provide fast, flexible prototype and small volume electronic assembly direct to engineers, with instant online quoting and ordering.</p>
            </div>

            <div className="year-swiper-grid">

                <div className="year-timeline">
                    <div className="container">
                        <div className="years-container">
                            <div className="year-dots">
                                {slideData.map((item, index) => (
                                    <span
                                        key={index}
                                        className={`year-dot ${index === activeIndex ? 'active' : ''} ${index <= activeIndex ? 'fill' : ''}`}
                                        onClick={() => swiperRef.current?.slideToLoop(index)}
                                    >
                                        {item.year}
                                    </span>
                                ))}
                            </div>
                            <div className="timeline-line-left"></div>
                            <div className="timeline-line-right"></div>
                        </div>
                    </div>
                </div>

                <div className="swiper-parent">
                    <div className="container">
                        <div className="swiper-wrap">
                            <Swiper
                                modules={[Navigation]}
                                // loop={true}
                                navigation={{
                                    prevEl: '.specialization-prev',
                                    nextEl: '.specialization-next',
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                        speed: 500,
                                    },
                                    540: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                        speed: 700,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                        speed: 700,
                                    },
                                    991: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                        speed: 700,
                                    },
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onSlideChange={(swiper) => {
                                    setActiveIndex(swiper.realIndex);
                                }}
                                className="specialization-slider"
                            >
                                {slideData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiper-card">
                                            <div className="card-body">
                                                <figure>
                                                    <img src={item.img} alt={item.title} />
                                                </figure>

                                                <div className="card-content">
                                                    <h5>{item.title}</h5>
                                                    <p>{item.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="swiper-nav swiper-group">
                                <button type="button" className="specialization-prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 14l-5-5l-5 5" strokeWidth="1" />
                                    </svg>
                                </button>
                                <button type="button" className="specialization-next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 14l-5-5l-5 5" strokeWidth="1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurHistory