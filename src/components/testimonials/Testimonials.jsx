import React, { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ChevronRight, ChevronLeft, User } from 'lucide-react';
import './Testimonials.css';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
            setTimeout(() => setIsAnimating(false), 500);
        }
    }, [isAnimating]);

    const handlePrev = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
            setTimeout(() => setIsAnimating(false), 500);
        }
    }, [isAnimating]);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section className="testimonials-v2">
            <div className="testimonials-bg-decoration"></div>
            <div className="testimonials-container">
                <div className="section-header centered">
                    <div className="header-meta">
                        <span className="dot"></span>
                        <h4 className="sub-title">ثقة عملائنا هي سر نجاحنا</h4>
                    </div>
                    <h2 className="main-title">
                        ماذا يقولون <span className="highlight">عن خدماتنا</span>
                    </h2>
                </div>

                <div className="testimonial-slider-v2">
                    <div className="slider-controls">
                        <button className="nav-btn prev" onClick={handlePrev} aria-label="Previous testimonial">
                            <ChevronRight size={24} />
                        </button>
                        <button className="nav-btn next" onClick={handleNext} aria-label="Next testimonial">
                            <ChevronLeft size={24} />
                        </button>
                    </div>

                    <div className="testimonial-track">
                        <div className={`testimonial-card-v2 ${isAnimating ? 'animating' : ''}`}>
                            <div className="card-top">
                                <div className="quote-icon-wrapper">
                                    <Quote size={40} className="quote-icon" />
                                </div>
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="var(--accent)" color="var(--accent)" />
                                    ))}
                                </div>
                            </div>

                            <p className="testimonial-review">
                                {testimonials[currentIndex].review}
                            </p>

                            <div className="card-bottom">
                                <div className="author-avatar">
                                    <User size={25} />
                                </div>
                                <div className="author-info">
                                    <h4>{testimonials[currentIndex].name}</h4>
                                    <span>{testimonials[currentIndex].role}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot-indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => {
                                    if (index !== currentIndex && !isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
