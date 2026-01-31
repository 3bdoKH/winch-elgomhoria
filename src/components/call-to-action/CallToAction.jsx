import React, { useState } from 'react';
import { User, Phone, MessageSquare, Send, MapPin, Clock8, ShieldCheck } from 'lucide-react';
import './CallToAction.css';
import { phoneNumbers } from '../../data/phoneNumbers';

const CallToAction = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        serviceType: '',
        message: ''
    });

    const serviceTypes = [
        { value: 'rescue', label: 'إنقاذ السيارات' },
        { value: 'equipment', label: 'نقل المعدات' },
        { value: 'fuel', label: 'التزود بالوقود' },
        { value: 'battery', label: 'وصلة بطارية' },
        { value: 'tires', label: 'تغيير الاطارات' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedService = serviceTypes.find(service => service.value === formData.serviceType);
        const serviceName = selectedService ? selectedService.label : formData.serviceType;

        const message = `*طلب خدمة جديد*\n\n` +
            `*الاسم:* ${formData.name}\n` +
            `*رقم الهاتف:* ${formData.phoneNumber}\n` +
            `${formData.email ? `*البريد الإلكتروني:* ${formData.email}\n` : ''}` +
            `*نوع الخدمة:* ${serviceName}\n` +
            `*الرسالة:* ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/+2${phoneNumbers[0]}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-grid">
                    {/* Content Section */}
                    <div className="cta-info">
                        <div className="cta-tag">تواصل معنا الآن</div>
                        <h2 className="cta-main-title">
                            هل تواجه <span className="highlight">مشكلة</span> على الطريق؟
                        </h2>
                        <p className="cta-main-desc">
                            نحن هنا لمساعدتك على مدار الساعة. أفضل أسطول أوناش في مصر
                            جاهز للانتقال إليك فوراً أينما كنت.
                        </p>

                        <div className="cta-features-v2">
                            <div className="cta-feature-item">
                                <div className="feature-icon-v2">
                                    <MapPin size={22} />
                                </div>
                                <div className="feature-text-v2">
                                    <h4>تغطية شاملة</h4>
                                    <p>نخدم جميع محافظات وطرق جمهورية مصر العربية</p>
                                </div>
                            </div>
                            <div className="cta-feature-item">
                                <div className="feature-icon-v2">
                                    <Clock8 size={22} />
                                </div>
                                <div className="feature-text-v2">
                                    <h4>سرعة استجابة</h4>
                                    <p>فريقنا يتحرك فوراً لتصلك المساعدة في أقل من 20 دقيقة</p>
                                </div>
                            </div>
                            <div className="cta-feature-item">
                                <div className="feature-icon-v2">
                                    <ShieldCheck size={22} />
                                </div>
                                <div className="feature-text-v2">
                                    <h4>أمان وموثوقية</h4>
                                    <p>نقل آمن لسيارتك بأحدث المعدات وفريق محترف</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="cta-form-wrapper">
                        <div className="cta-form-card">
                            <div className="form-header">
                                <h3>اطلب ونش الآن</h3>
                                <p>املأ البيانات وسنتواصل معك فورا</p>
                            </div>

                            <form onSubmit={handleSubmit} className="modern-form">
                                <div className="form-group">
                                    <div className="input-with-icon">
                                        <User className="input-icon" size={18} />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="الاسم بالكامل"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-with-icon">
                                        <Phone className="input-icon" size={18} />
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            placeholder="رقم الهاتف"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-with-icon">
                                        <MessageSquare className="input-icon" size={18} />
                                        <select
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">اختر نوع الخدمة</option>
                                            {serviceTypes.map((service) => (
                                                <option key={service.value} value={service.value}>
                                                    {service.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="كيف يمكننا مساعدتك؟"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="3"
                                        required
                                    />
                                </div>

                                <button type="submit" className="form-submit-btn">
                                    <span>إرسال الطلب عبر واتساب</span>
                                    <Send size={18} />
                                </button>

                                <p className="form-footer-note">
                                    * سيتم الرد عليك في غضون دقيقتين بحد أقصى
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
