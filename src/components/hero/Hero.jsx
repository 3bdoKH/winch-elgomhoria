import React from 'react';
import './Hero.css';
import heroBackground from '../../media/hero-background.png';
import { ClockCheck, PhoneCall, ShieldCheck, MapPin, ChevronLeft } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';

const Hero = () => {
    return (
        <section className="hero-v2">
            <div className="hero-bg-wrapper">
                <img src={heroBackground} alt="Emergency Towing Service" className="hero-main-img" />
                <div className="hero-v2-overlay"></div>
            </div>

            <div className="hero-v2-container">
                <div className="hero-v2-grid">
                    {/* Main Content */}
                    <div className="hero-v2-content">
                        <div className="hero-v2-tag">
                            <span className="pulse-dot"></span>
                            خدمة إنقاذ سريعة 24/7
                        </div>

                        <h1 className="hero-v2-title">
                            أسرع <span className="highlight-text">ونش إنقاذ</span><br />
                            في مصر يصلك الآن
                        </h1>

                        <p className="hero-v2-description">
                            نقدم خدمات سحب وإنقاذ احترافية بأسعار تنافسية. فريقنا مجهز
                            بأحدث المعدات لضمان سلامة سيارتك وتوصيلها بأمان.
                        </p>

                        <div className="hero-v2-actions">
                            <a href={`tel:${phoneNumbers[0]}`} className="hero-btn-primary">
                                <PhoneCall size={20} />
                                <span>اطلب مساعدة فورية</span>
                            </a>
                            <a href="/services" className="hero-btn-secondary">
                                <span>عرض خدماتنا</span>
                                <ChevronLeft size={20} />
                            </a>
                        </div>

                        <div className="hero-v2-stats">
                            <div className="stat-pill">
                                <ClockCheck size={18} className="stat-icon-hero" />
                                <span>20 دقيقة وصول</span>
                            </div>
                            <div className="stat-pill">
                                <MapPin size={18} className="stat-icon-hero" />
                                <span>تغطية جميع المحافظات</span>
                            </div>
                            <div className="stat-pill">
                                <ShieldCheck size={18} className="stat-icon-hero" />
                                <span>أمان تام لسيارتك</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Trust Card */}
                    <div className="hero-v2-visual">
                        <div className="trust-card">
                            <div className="trust-icon">
                                <ShieldCheck size={40} />
                            </div>
                            <div className="trust-info">
                                <h3>خدمة موثوقة</h3>
                                <p>أكثر من 10,000 عملية إنقاذ ناجحة في جميع أنحاء الجمهورية</p>
                            </div>
                            <div className="trust-badge-v2">
                                <span className="discount">50%</span>
                                <span className="label">خصم</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar / Ticker */}
            <div className="hero-bottom-ticker">
                <div className="ticker-content">
                    <span>• إنقاذ سيارات ملاكي</span>
                    <span>• نقل معدات ثقيلة</span>
                    <span>• تغيير إطارات</span>
                    <span>• وصلة بطارية</span>
                    <span>• توصيل وقود</span>
                    <span>• إنقاذ سيارات ملاكي</span>
                    <span>• نقل معدات ثقيلة</span>
                    <span>• تغيير إطارات</span>
                    <span>• وصلة بطارية</span>
                    <span>• توصيل وقود</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
