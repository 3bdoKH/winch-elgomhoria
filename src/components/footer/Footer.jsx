import React, { useState } from 'react';
import './Footer.css';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Clock } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';
const Footer = () => {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Add newsletter submission logic here
        console.log('Newsletter signup:', email);
        // You can integrate with an email service or WhatsApp
        alert('شكراً لاشتراكك في النشرة الإخبارية!');
        setEmail('');
    };

    return (
        <footer className="footer">
            {/* Newsletter Section */}
            <div className="newsletter-section">
                <div className="newsletter-container">
                    <div className="newsletter-content">
                        <h3 className="newsletter-title">
                            اشترك في <span className="highlight">نشرتنا الإخبارية</span>
                        </h3>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="أدخل بريدك الإلكتروني"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-button">
                                <span className="button-icon">
                                    <Mail color='#FDB913' />
                                </span>
                            </button>
                        </form>
                    </div>
                    <div className="newsletter-cta">
                        <p>احصل على آخر <strong>أخبار الشركة</strong></p>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="footer-container">
                    {/* Company Info */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <h2>خدمات <span className="highlight">الونش</span></h2>
                            <div className="logo-subtitle">خدمات الطوارئ 24/7</div>
                        </div>
                        <p className="footer-description">
                            نقدم أفضل خدمات إنقاذ السيارات والونش في جميع أنحاء مصر.
                            فريق محترف متاح على مدار الساعة لخدمتك بأسرع وقت استجابة وأفضل الأسعار.
                        </p>

                    </div>

                    {/* Useful Links */}
                    <div className="footer-column">
                        <h3 className="footer-heading">روابط مفيدة</h3>
                        <ul className="footer-links">
                            <li><a href="/">الرئيسية</a></li>
                            <li><a href="/about">من نحن</a></li>
                            <li><a href="/services">الخدمات</a></li>
                            <li><a href="/areas">المناطق</a></li>
                            <li><a href="/articles">المقالات</a></li>
                            <li><a href="/contact">اتصل بنا</a></li>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div className="footer-column">
                        <h3 className="footer-heading">تواصل معنا</h3>
                        <ul className="contact-info">
                            <li>
                                <span className="contact-icon">
                                    <MapPin />
                                </span>
                                <span>القاهرة، مصر - نخدم جميع المحافظات</span>
                            </li>
                            <li>
                                <span className="contact-icon">
                                    <Mail />
                                </span>
                                <a href="mailto:support@towing.com">support@towing.com</a>
                            </li>
                            {phoneNumbers.map((phoneNumber, index) => (
                                <li key={index}>
                                    <span className="contact-icon">
                                        <Phone />
                                    </span>
                                    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                                </li>
                            ))}
                            <li>
                                <span className="contact-icon">
                                    <Clock />
                                </span>
                                <span>24 ساعة يومياً، 7 أيام في الأسبوع</span>
                            </li>
                        </ul>
                    </div>

                    {/* Latest Updates */}
                    <div className="footer-column">
                        <h3 className="footer-heading">آخر التحديثات</h3>
                        <ul className="latest-updates">
                            <li>
                                <p>خدمة ونش سريعة متاحة الآن في جميع محافظات مصر</p>
                                <span className="update-time">منذ ساعتين</span>
                            </li>
                            <li>
                                <p>عروض خاصة على خدمات الإنقاذ للعملاء الجدد</p>
                                <span className="update-time">منذ 5 ساعات</span>
                            </li>
                            <li>
                                <p>تم إضافة أسطول جديد من الونشات الحديثة</p>
                                <span className="update-time">منذ يوم واحد</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <div className="footer-container">
                    <p className="copyright">
                        © {new Date().getFullYear()} خدمات الونش - جميع الحقوق محفوظة
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

