import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin, PhoneCall } from 'lucide-react';
import './FAQ.css';
import { faqs } from '../../data/FAQ';

const FAQ = () => {
    const [activeId, setActiveId] = useState(1);

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="faq-v2">
            <div className="faq-container">
                <div className="faq-grid">
                    {/* Left Side: Info & CTA */}
                    <div className="faq-info-panel">
                        <div className="header-meta">
                            <span className="dot"></span>
                            <h4 className="sub-title">إجابات سريعة</h4>
                        </div>
                        <h2 className="main-title">
                            لديك <span className="highlight">تساؤلات؟</span><br />
                            نحن هنا للإجابة
                        </h2>
                        <p className="faq-main-desc">
                            لقد جمعنا أكثر الأسئلة شيوعاً لمساعدتك في الحصول على المعلومات
                            التي تحتاجها بسرعة. إذا لم تجد إجابتك هنا، فلا تتردد في الاتصال بنا.
                        </p>

                        <div className="faq-cta-cards">
                            <div className="faq-cta-card">
                                <div className="cta-icon-wrapper">
                                    <MapPin size={24} />
                                </div>
                                <div className="cta-content">
                                    <h5>تغطية شاملة</h5>
                                    <p>نعمل في جميع المحافظات</p>
                                </div>
                            </div>
                            <div className="faq-cta-card">
                                <div className="cta-icon-wrapper">
                                    <PhoneCall size={24} />
                                </div>
                                <div className="cta-content">
                                    <h5>دعم مباشر</h5>
                                    <p>متواجدون 24 ساعة للرد</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="faq-accordion-v2">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`faq-item-v2 ${activeId === faq.id ? 'active' : ''}`}
                            >
                                <button
                                    className="faq-trigger"
                                    onClick={() => toggleFAQ(faq.id)}
                                >
                                    <div className="q-group">
                                        <HelpCircle className="q-icon" size={20} />
                                        <span className="q-text">{faq.question}</span>
                                    </div>
                                    <ChevronDown className="arrow-icon" size={20} />
                                </button>
                                <div className="faq-content-wrapper">
                                    <div className="faq-content">
                                        <p>{faq.answer}</p>
                                    </div>
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
