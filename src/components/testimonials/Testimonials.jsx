import React, { useState, useEffect, useCallback } from 'react';
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
        }, 5000);

        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section className="testimonials-section">
            <div className="testimonials-overlay"></div>
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h3 className="testimonials-subtitle">آراء عملائنا</h3>
                    <h2 className="testimonials-title">
                        ماذا يقول <span className="highlight">عملاؤنا</span>
                    </h2>
                    <div className="testimonials-divider">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>

                <div className="testimonials-slider">
                    <button className="custom-arrow arrow-prev" onClick={handlePrev}>
                        <span>{'<'}</span>
                    </button>

                    <div className="testimonial-wrapper">
                        <div className={`testimonial-item ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                            <div className="testimonial-content">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-text">
                                    {testimonials[currentIndex].review}
                                </p>
                                <div className="testimonial-author">
                                    <h4 className="author-name">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="author-role">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="custom-arrow arrow-next" onClick={handleNext}>
                        <span>{'>'}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

