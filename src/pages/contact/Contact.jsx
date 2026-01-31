import React, { useState } from 'react';
import './Contact.css';
import heroBackground from '../../media/hero-background.png';
import contactImage from '../../media/contact.jpg';
import { MapPin, Phone, Mail, Clock, MessageCircle, Zap } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the WhatsApp message
        const message = `*رسالة جديدة من موقع الويب*\n\n` +
            `*الاسم:* ${formData.name}\n` +
            `*البريد الإلكتروني:* ${formData.email}\n` +
            `*رقم الهاتف:* ${formData.phone}\n` +
            `*الموضوع:* ${formData.subject}\n` +
            `*الرسالة:* ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappURL = `https://wa.me/+2${phoneNumbers[0]}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };

    const contactInfo = [
        {
            icon: <MapPin color='var(--accent)' style={{ marginBottom: '-6px' }} />,
            title: 'العنوان',
            details: ['القاهرة، مصر', 'نخدم جميع المحافظات']
        },
        {
            icon: <Phone color='var(--accent)' style={{ marginBottom: '-6px' }} />,
            title: 'الهاتف',
            details: [`${phoneNumbers[0]}`, '24/7 طوارئ'],
            link: `tel:+2${phoneNumbers[0]}`
        },
        {
            icon: <Mail color='var(--accent)' style={{ marginBottom: '-6px' }} />,
            title: 'البريد الإلكتروني',
            details: ['support@towing.com', 'info@towing.com'],
            link: 'mailto:support@towing.com'
        },
        {
            icon: <Clock color='var(--accent)' style={{ marginBottom: '-6px' }} />,
            title: 'ساعات العمل',
            details: ['24 ساعة يومياً', '7 أيام في الأسبوع']
        }
    ];

    const quickLinks = [
        { title: 'إنقاذ السيارات', link: '/services' },
        { title: 'وصلة بطارية', link: '/services' },
        { title: 'تغيير إطارات', link: '/services' },
        { title: 'توصيل وقود', link: '/services' },
        { title: 'نقل معدات', link: '/services' },
        { title: 'المناطق المخدومة', link: '/areas' }
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">تواصل <span className="highlight">معنا</span></h1>
                    <p className="contact-hero-subtitle">نحن هنا لخدمتك على مدار الساعة</p>
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <span>اتصل بنا</span>
                    </div>
                </div>
            </section>

            {/* Quick Contact Bar */}
            <section className="quick-contact">
                <div className="quick-contact-container">
                    {phoneNumbers.map((number, index) => (
                        <div className="quick-contact-item">
                            <span className="quick-icon"><Phone color='var(--accent)' style={{ marginBottom: '-6px' }} /></span>
                            <div className="quick-info">
                                <h4>اتصل الآن</h4>
                                <a href={`tel:+2${number}`}>{number}</a>
                            </div>
                        </div>
                    ))}
                    <div className="quick-contact-item">
                        <span className="quick-icon"><MessageCircle color='var(--accent)' style={{ marginBottom: '-6px' }} /></span>
                        <div className="quick-info">
                            <h4>واتساب</h4>
                            <a href="https://wa.me/2001055888893" target="_blank" rel="noopener noreferrer">أرسل رسالة</a>
                        </div>
                    </div>
                    <div className="quick-contact-item">
                        <span className="quick-icon"><Mail color='var(--accent)' style={{ marginBottom: '-6px' }} /></span>
                        <div className="quick-info">
                            <h4>البريد الإلكتروني</h4>
                            <a href="mailto:support@towing.com">support@towing.com</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main">
                <div className="contact-container">
                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <div className="form-header">
                            <h3 className="section-subtitle">أرسل رسالة</h3>
                            <h2 className="section-title">
                                نسعد <span className="highlight">بتواصلك</span>
                            </h2>
                            <div className="title-divider">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                            <p className="form-description">
                                املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                            </p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">الاسم الكامل *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="أدخل اسمك الكامل"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">البريد الإلكتروني *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="example@email.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">رقم الهاتف *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="01xxxxxxxxx"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">الموضوع *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="موضوع الرسالة"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">رسالتك *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    placeholder="اكتب رسالتك هنا..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="contact-sidebar">
                        <div className="contact-image">
                            <img src={contactImage} alt="Contact Us" />
                            <div className="image-overlay">
                                <h3>نحن هنا لمساعدتك</h3>
                            </div>
                        </div>

                        <div className="contact-info-cards">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="info-card">
                                    <div className="info-icon">{info.icon}</div>
                                    <div className="info-content">
                                        <h4>{info.title}</h4>
                                        {info.details.map((detail, idx) => (
                                            info.link && idx === 0 ? (
                                                <a key={idx} href={info.link}>{detail}</a>
                                            ) : (
                                                <p key={idx}>{detail}</p>
                                            )
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="quick-links-section">
                <div className="quick-links-container">
                    <h3 className="quick-links-title">خدمات سريعة</h3>
                    <div className="quick-links-grid">
                        {quickLinks.map((link, index) => (
                            <a key={index} href={link.link} className="quick-link-card">
                                <span className="link-icon"><Zap color='var(--accent)' style={{ marginBottom: '-6px' }} /></span>
                                <span className="link-text">{link.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="emergency-cta">
                <div className="emergency-content">
                    <div className="emergency-icon">🚨</div>
                    <h2 className="emergency-title">حالة طوارئ؟</h2>
                    <p className="emergency-description">
                        إذا كنت بحاجة إلى مساعدة فورية، اتصل بنا الآن! فريقنا متاح 24/7 للاستجابة لحالات الطوارئ.
                    </p>
                    <a href={`tel:+2${phoneNumbers[0]}`} className="emergency-button">
                        اتصل للطوارئ
                    </a>
                </div>
            </section>

            {/* FAQ Quick Access */}
            <section className="faq-quick">
                <div className="faq-quick-container">
                    <h3 className="faq-quick-title">أسئلة شائعة قد تهمك</h3>
                    <div className="faq-quick-grid">
                        <div className="faq-quick-item">
                            <h4>ما هو وقت الاستجابة؟</h4>
                            <p>نصل خلال 20 دقيقة أو أقل في معظم المناطق</p>
                        </div>
                        <div className="faq-quick-item">
                            <h4>هل الخدمة متاحة 24 ساعة؟</h4>
                            <p>نعم، نحن متاحون على مدار الساعة طوال أيام الأسبوع</p>
                        </div>
                        <div className="faq-quick-item">
                            <h4>ما هي المناطق المخدومة؟</h4>
                            <p>نخدم جميع محافظات مصر من القاهرة للإسكندرية</p>
                        </div>
                        <div className="faq-quick-item">
                            <h4>كيف أحصل على عرض سعر؟</h4>
                            <p>اتصل بنا أو املأ النموذج أعلاه وسنقدم لك عرض سعر فوري</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

