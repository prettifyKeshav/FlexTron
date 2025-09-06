'use client';
import Link from "next/link";

export default function Banner({
    videoSrc,
    h1tag,
    h2tag,
    h3tag,
    description,
    buttonText,
    buttonLink = '#',
}) {
    return (
        <div className="banner">
            <div className="bg">
                <figure>
                    <video playsInline autoPlay muted loop width="100%" height="100%">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </figure>

                <div className="banner-wrapper">
                    <div className="container">
                        <div className="heading" data-animate="fade-up">
                            {h1tag && <h1>{h1tag}</h1>}
                            {h2tag && <h2>{h2tag}</h2>}
                            {h3tag && <h3>{h3tag}</h3>}
                            {description && <p>{description}</p>}

                            {buttonText && (
                                <Link href={buttonLink} className="bottom-btn">
                                    {buttonText}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
