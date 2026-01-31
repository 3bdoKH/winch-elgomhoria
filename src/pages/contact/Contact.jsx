import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';
import heroBackground from '../../media/hero-background.png';
import contactImage from '../../media/contact.jpg';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, PhoneCall } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        const message = `*رسالة جديدة من موقع الويب*\n\n` +
            `*الاسم:* ${formData.name}\n` +
            `*رقم الهاتف:* ${formData.phone}\n` +
            `*الموضوع:* ${formData.subject}\n` +
            `*الرسالة:* ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/+2${phoneNumbers[0]}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };

    const contactMethods = [
        {
            icon: <PhoneCall size={28} />,
            title: 'اتصل بنا',
            detail: phoneNumbers[0],
            link: `tel:+2${phoneNumbers[0]}`,
            color: 'var(--accent)'
        },
        {
            icon: <MessageSquare size={28} />,
            title: 'واتساب',
            detail: 'دردشة فورية',
            link: `https://wa.me/+2${phoneNumbers[0]}`,
            color: '#25D366'
        },
        {
            icon: <Mail size={28} />,
            title: 'البريد الإلكتروني',
            detail: 'info@winchel-gomhoria.com',
            link: 'mailto:info@winchel-gomhoria.com',
            color: '#4A90E2'
        }
    ];

    return (
        <div className="contact-v2">
            <Helmet>
                <title>تواصل معنا | ونش إنقاذ الجمهورية - نحن هنا لخدمتكم 24/7</title>
                <meta name="description" content="اتصل بنا الآن لطلب ونش إنقاذ سريع. نحن نعمل على مدار الساعة لتأمين سلامتك على الطريق في جميع محافظات مصر." />
            </Helmet>

            {/* Hero Section */}
            <section className="contact-hero-v2" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="hero-overlay-v2"></div>
                <div className="container-v2">
                    <div className="hero-content-v2">
                        <div className="breadcrumb-v2">
                            <a href="/">الرئيسية</a>
                            <span>/</span>
                            <span>تواصل معنا</span>
                        </div>
                        <h1 className="hero-title-v2">تواصل <span className="highlight">مباشر</span></h1>
                        <p className="hero-subtitle-v2">فريق الدعم الفني والإنقاذ جاهز للرد على استفساراتكم وطلباتكم على مدار الساعة</p>
                    </div>
                </div>
            </section>

            {/* Contact Methods Grid */}
            <section className="contact-methods-v2">
                <div className="container-v2">
                    <div className="methods-grid-v2">
                        {contactMethods.map((method, index) => (
                            <a href={method.link} key={index} className="method-card-v2" target={method.title === 'واتساب' ? '_blank' : '_self'} rel="noreferrer">
                                <div className="method-icon-v2" style={{ color: method.color }}>
                                    {method.icon}
                                </div>
                                <div className="method-info-v2">
                                    <h3>{method.title}</h3>
                                    <p>{method.detail}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main-v2">
                <div className="container-v2">
                    <div className="contact-grid-v2">
                        {/* Contact Form Container */}
                        <div className="contact-form-container-v2">
                            <div className="section-header">
                                <div className="header-meta">
                                    <span className="dot"></span>
                                    <h4 className="sub-title">راسلنا</h4>
                                </div>
                                <h2 className="main-title">أرسل <span className="highlight">استفسارك</span></h2>
                                <p className="section-description">يمكنك إرسال رسالتك عبر النموذج أدناه وسيقوم فريق المختصين لدينا بالتواصل معك فوراً</p>
                            </div>

                            <form className="modern-form-v2" onSubmit={handleSubmit}>
                                <div className="form-row-v2">
                                    <div className="form-group-v2">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="الاسم الكامل"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group-v2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="رقم الهاتف"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group-v2">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="الموضوع"
                                        required
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group-v2">
                                    <textarea
                                        name="message"
                                        placeholder="كيف يمكننا مساعدتك؟"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-submit-v2">
                                    إرسال عبر واتساب
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>

                        {/* Contact info Sidebar */}
                        <div className="contact-info-sidebar-v2">
                            <div className="info-visual-v2">
                                <img src={contactImage} alt="Rescue Operations" />
                                <div className="visual-badge-v2">
                                    <span>24/7</span>
                                    <p>جاهزون دائماً</p>
                                </div>
                            </div>

                            <div className="info-list-v2">
                                <div className="info-item-v2">
                                    <div className="item-icon-v2"><MapPin size={24} /></div>
                                    <div className="item-text-v2">
                                        <h4>المقر الرئيسي</h4>
                                        <p>القاهرة، جمهورية مصر العربية</p>
                                    </div>
                                </div>
                                <div className="info-item-v2">
                                    <div className="item-icon-v2"><Clock size={24} /></div>
                                    <div className="item-text-v2">
                                        <h4>ساعات العمل</h4>
                                        <p>نعمل على مدار الساعة (24/7)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="emergency-v2">
                <div className="container-v2">
                    <div className="emergency-card-v2">
                        <div className="emergency-content-v2">
                            <div className="emergency-badge-v2">حالة طوارئ؟</div>
                            <h2 className="emergency-title-v2">لا تتردد في الاتصال بنا <span className="highlight">الآن!</span></h2>
                            <p className="emergency-desc-v2">إذا كنت عالقاً في الطريق وتحتاج لإنقاذ فوري، فإن فريق أوتوبات هو خيارك الأسرع والأكثر أماناً.</p>
                            <a href={`tel:+2${phoneNumbers[0]}`} className="btn-emergency-call-v2">
                                {phoneNumbers[0]}
                                <PhoneCall size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

