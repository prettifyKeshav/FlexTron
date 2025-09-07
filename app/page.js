"use client"
import Image from 'next/image';
import '@/styles/home/home.css'
import ServiceSlider from '@/components/ServiceSlider';
import CustomSlider from '@/components/CustomSlider';
import Banner from '@/components/Banner';
import Link from 'next/link';

export default function HomePage() {
  const CertificationsSlider = [
    {
      image: "/assets/images/home/certifications/1.png",
      alternate: "Certification One",
    },
    {
      image: "/assets/images/home/certifications/2.png",
      alternate: "Certification Two",
    },
    {
      image: "/assets/images/home/certifications/3.png",
      alternate: "Certification Three",
    },
    {
      image: "/assets/images/home/certifications/4.png",
      alternate: "Certification four",
    },
    {
      image: "/assets/images/home/certifications/5.png",
      alternate: "Certification five",
    },
    {
      image: "/assets/images/home/certifications/6.png",
      alternate: "Certification six",
    },

  ];

  const SuccessSlider = [
    {
      image: "/assets/images/home/service-slider/1.jpg",
      title: "Project One",
      description:
        "High precision electronics project with aerospace standards.",
      link: "/project-details/1",
      buttonText: "Read More",
    },
    {
      image: "/assets/images/home/service-slider/1.jpg",
      title: "Project Two",
      description:
        "Next-gen PCB assembly and testing for automotive industry.",
      link: "/project-details/2",
      buttonText: "Read More",
    },
    {
      image: "/assets/images/home/service-slider/1.jpg",
      title: "Project Three",
      description:
        "Robust design and testing services for defense applications.",
      link: "/project-details/3",
      buttonText: "Read More",
    },
  ];

  return (
    <>
      <main>
        <div className="banner home-banner">
          <div className="bg">
            <figure className='bg-video'>
              <video playsInline autoPlay muted loop width="100%" height="100%">
                <source src="/assets/video/home-bg-banner.mp4" type="video/mp4" />
              </video>
              <div className="x-vector-icon">
                <video playsInline autoPlay muted loop width="100%" height="100%">
                  <source src="/assets/video/vector-bg1.mp4" type="video/mp4" />
                </video>
                {/* <Image src="/assets/images/home/x-vector.png" width="204" height="25" alt="Flextron logo"></Image> */}
              </div>
            </figure>
            <div className="banner-wrapper">
              <div className="container">
                <div className="heading" data-animate="fade-up">
                  <h2>Where Electronic Circuits Meet</h2>
                  <h2>Where Electronic Circuits Meet</h2>
                  <h1>Fighter Jet Standards</h1>
                  <p>Built with unmatched precision, our electronic circuits are engineered to meet the rigorous demands of aerospace-grade performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="home-secA sec-pad">
            <div className="container">
              <div className="heading">
                <h2>services</h2>
              </div>
            </div>
            <ServiceSlider />
          </div>
        </section>

        <section>
          <div className="home-secB sec-pad">
            <div className="container">
              <div className="heading text-center">
                <h2>about us</h2>
              </div>
            </div>

            <Banner
              videoSrc="/assets/video/home-sec-b-banner.mp4"
              h3tag="Flextron Circuit Assembly"
              description="Are you building a product that requires a reliable, high quality electronic circuit assembly or box-build? If so, Flextron is your one-stop source for product realization, build, test, and ultimate success. We’re specialists in rigid and flexible Printed Circuit Board Assemblies (PCBAs) of all types and technologies"
              buttonText="Read More"
              buttonLink="/about"
            />

          </div>
        </section>

        <section>
          <div className="home-secC">
            <div className="heading text-center">
              <h2>Industries We Serve</h2>
            </div>
            <div className="grid-box">

              <div className="col">
                <figure>
                  <img src="/assets/images/home/industries/1.jpg"></img>
                  <figcaption>
                    <div className="content">
                      <h5>Military / Aerospace Industry</h5>
                      <p>Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines,  ITAR and RoHS compliance.</p>
                      <Link href="#" className='bottom-btn'><span>Read More</span></Link>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col">
                <figure>
                  <img src="/assets/images/home/industries/2.jpg"></img>
                  <figcaption>
                    <div className="content">
                      <h5>Medical / Hospital Industry</h5>
                      <p>Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines,  ITAR and RoHS compliance.</p>
                      <Link href="#" className='bottom-btn'><span>Read More</span></Link>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col">
                <figure>
                  <img src="/assets/images/home/industries/3.jpg"></img>
                  <figcaption>
                    <div className="content">
                      <h5>Lighting Industry</h5>
                      <p>Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines,  ITAR and RoHS compliance.</p>
                      <Link href="#" className='bottom-btn'><span>Read More</span></Link>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col">
                <figure>
                  <img src="/assets/images/home/industries/4.jpg"></img>
                  <figcaption>
                    <div className="content">
                      <h5>Industrial Equipment</h5>
                      <p>Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines,  ITAR and RoHS compliance.</p>
                      <Link href="#" className='bottom-btn'><span>Read More</span></Link>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col">
                <figure>
                  <img src="/assets/images/home/industries/5.jpg"></img>
                  <figcaption>
                    <div className="content">
                      <h5>Telecommunication Industry</h5>
                      <p>Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines,  ITAR and RoHS compliance.</p>
                      <Link href="#" className='bottom-btn'><span>Read More</span></Link>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="col">
                <figure>
                  <img src="/assets/images/home/industries/6.jpg"></img>
                  <figcaption>
                    <div className="content">
                      <h5>Wireless and IoT Industry</h5>
                      <p>Whether you’re designing product for military research, or a complex Aerospace equipment, Flextron Circuit Assembly delivers high performance PCB assemblies built to IPC-A-610 guidelines,  ITAR and RoHS compliance.</p>
                      <Link href="#" className='bottom-btn'><span>Read More</span></Link>
                    </div>
                  </figcaption>
                </figure>
              </div>

            </div>
          </div>
        </section>

        <section>
          <div className="home-secD">
            <div className="container">
              <div className="heading text-center">
                <h2>Certifications</h2>
              </div>

              <div className="content">
                <p>Flextron Circuit Assembly truly believes to build quality in product and right way to do it is; by the book. We have accredited certifications and qualified processes to prove superior quality of products built by Flextron. Working with companies that comply to international standards reduces the risk of errors and makes your own traceability easier.</p>
                <Link href="#" className='bottom-btn'>
                  <span>Read More</span>
                </Link>
              </div>

              <CustomSlider
                items={CertificationsSlider}
                slidesPerView={5}
                space={20}
                autoplay={true}
                loop={true}
                showContent={false}
                breakpoints={{
                  0: { slidesPerView: 3.1 },
                  540: { slidesPerView: 4 },
                  991: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 },
                }}
              />

            </div>
          </div>
        </section>

        <section>
          <div className="home-secE">
            <div className="heading"><h2>Success Stories</h2></div>
            <CustomSlider
              items={SuccessSlider}
              slidesPerView={3}
              space={20}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                540: { slidesPerView: 2.1 },
                991: { slidesPerView: 2.2 },
                1200: { slidesPerView: 3 },
              }}
            />
            <div className="sec-E-gird">

            </div>
          </div>
        </section>



      </main>
    </>
  );
}
