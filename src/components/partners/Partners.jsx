import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Partners.css';

// Import all partner logos
import audi from './partners/audi.jpeg';
import bmw from './partners/bmw.jpeg';
import byd from './partners/byd.jpeg';
import chevrolet from './partners/Chevrolet.jpeg';
import hyundai from './partners/Hyundai.jpeg';
import jeep from './partners/jeep.jpeg';
import kia from './partners/kia.jpeg';
import mazda from './partners/mazda.jpeg';
import mercedes from './partners/mercedes.jpeg';
import minicooper from './partners/minicooper.jpeg';
import nissan from './partners/Nissan.jpeg';
import peugeot from './partners/Peugeot.jpeg';
import skoda from './partners/skoda.jpeg';
import subaru from './partners/subaru.jpeg';
import toyota from './partners/toyota.jpeg';
import volkswagen from './partners/Volkswagen.jpeg';
import volvo from './partners/volvo.jpeg';

const Partners = () => {
    const partners = [
        { id: 1, name: 'Audi', logo: audi },
        { id: 2, name: 'BMW', logo: bmw },
        { id: 3, name: 'BYD', logo: byd },
        { id: 4, name: 'Chevrolet', logo: chevrolet },
        { id: 5, name: 'Hyundai', logo: hyundai },
        { id: 6, name: 'Jeep', logo: jeep },
        { id: 7, name: 'Kia', logo: kia },
        { id: 8, name: 'Mazda', logo: mazda },
        { id: 9, name: 'Mercedes', logo: mercedes },
        { id: 10, name: 'Mini Cooper', logo: minicooper },
        { id: 11, name: 'Nissan', logo: nissan },
        { id: 12, name: 'Peugeot', logo: peugeot },
        { id: 13, name: 'Skoda', logo: skoda },
        { id: 14, name: 'Subaru', logo: subaru },
        { id: 15, name: 'Toyota', logo: toyota },
        { id: 16, name: 'Volkswagen', logo: volkswagen },
        { id: 17, name: 'Volvo', logo: volvo }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        rtl: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <section className="partners-section">
            <div className="partners-container">
                <div className="partners-header">
                    <h3 className="partners-subtitle">نخدم جميع الماركات</h3>
                    <h2 className="partners-title">
                        شركاؤنا <span className="highlight">المميزون</span>
                    </h2>
                    <div className="partners-divider">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>

                <div className="partners-slider">
                    <Slider
                        {...settings}
                        breakpoints={[
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 5,
                                }
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 4,
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 2,
                                }
                            }
                        ]}
                    >
                        {partners.map((partner, idx) => (
                            <div key={idx} className="partner-item">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="partner-logo"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Partners;

