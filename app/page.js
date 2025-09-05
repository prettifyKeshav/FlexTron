"use client"
import Image from 'next/image';
import '@/styles/home/home.css'
// import Link from 'next/link';

export default function Home() {

  return (
    <>
      <main>
        <div className="banner home-banner">
          <div className="bg">
            <figure>
              <video playsInline autoPlay muted loop width="100%" height="100%">
                <source src="/assets/video/home-bg-banner.mp4" type="video/mp4" />
              </video>
              <div className="x-vector">
                <Image src="/assets/images/home/x-vector.png" width="204" height="25" alt="Flextron logo"></Image>
              </div>
            </figure>
            <div className="banner-wrapper">
              <div className="container">
                <div className="heading" data-animate="fade-up">
                  <h2>Where Electronic Circuits Meet</h2>
                  <h1>Fighter Jet Standards</h1>
                  <p>Built with unmatched precision, our electronic circuits are engineered to meet the rigorous demands of aerospace-grade performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
