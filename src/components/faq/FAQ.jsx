import React, { useState } from 'react';
import './FAQ.css';
import { faqs } from '../../data/FAQ';
import globeImage from '../../media/globe.png';

const FAQ = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                {/* Left Side - Map */}
                <div className="faq-left">
                    <div className="map-container">
                        <img src={globeImage} alt="Global Coverage" className="globe-image" />
                        <div className="map-overlay">
                            <p className="map-text">تغطية شاملة في جميع أنحاء مصر</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - FAQs */}
                <div className="faq-right">
                    <div className="faq-header">
                        <h3 className="faq-subtitle">إجابات على جميع استفساراتك</h3>
                        <h2 className="faq-title">
                            الأسئلة <span className="highlight">الشائعة</span>
                        </h2>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(faq.id)}
                                    aria-expanded={activeId === faq.id}
                                >
                                    <span className="faq-question-text">{faq.question}</span>
                                    <span className="faq-icon">
                                        {activeId === faq.id ? '−' : '+'}
                                    </span>
                                </button>
                                <div className={`faq-answer ${activeId === faq.id ? 'show' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

