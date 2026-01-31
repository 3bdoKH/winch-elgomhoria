import React, { useState } from 'react';
import './CallToAction.css';
import hookImage from '../../media/hook.png';
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

        // Find the service label from the selected value
        const selectedService = serviceTypes.find(service => service.value === formData.serviceType);
        const serviceName = selectedService ? selectedService.label : formData.serviceType;

        // Format the WhatsApp message
        const message = `*طلب خدمة جديد*\n\n` +
            `*الاسم:* ${formData.name}\n` +
            `*رقم الهاتف:* ${formData.phoneNumber}\n` +
            `${formData.email ? `*البريد الإلكتروني:* ${formData.email}\n` : ''}` +
            `*نوع الخدمة:* ${serviceName}\n` +
            `*الرسالة:* ${formData.message}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp with the pre-filled message
        const whatsappURL = `https://wa.me/+2${phoneNumbers[0]}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <section className="call-to-action-section">
            <div className="cta-container">
                {/* Right Side - Join Our Team */}
                <div className="cta-left">
                    <div className="cta-left-content">
                        <div className="hook-image">
                            <img src={hookImage} alt="Tow Hook" />
                        </div>
                        <h2 className="cta-heading">
                            خدماتنا في <span className="highlight-white">جميع أنحاء مصر</span>
                        </h2>
                        <p className="cta-subtitle">الأفضل والأسرع على الإطلاق</p>
                        <div className="divider-line"></div>
                        <p className="cta-description">
                            نفخر بتقديم خدمات إنقاذ السيارات الأكثر احترافية في جميع محافظات مصر.
                            من القاهرة إلى الإسكندرية، فريقنا المتميز
                            متواجد دائماً لخدمتك على مدار 24 ساعة طوال أيام الأسبوع. نمتلك أحدث
                            المعدات والونشات، وأسطول ضخم من السيارات المجهزة بأعلى المواصفات.
                            سرعة في الاستجابة، دقة في العمل، وأسعار منافسة. اختيارك الأول والأفضل
                            لإنقاذ سيارتك في أي وقت وأي مكان في مصر.
                        </p>
                    </div>
                </div>

                {/* Left Side - Contact Form */}
                <div className="cta-right">
                    <div className="cta-right-content">
                        <h2 className="cta-heading">
                            تواصل <span className="highlight">معنا</span>
                        </h2>
                        <p className="cta-subtitle">نقدم أفضل الخدمات</p>
                        <div className="divider-line"></div>

                        <form className="quote-form" onSubmit={handleSubmit}>
                            <div className="home-form-row">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="الاسم"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="رقم الهاتف"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="home-form-row">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="البريد الإلكتروني (اختياري)"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-input form-full"
                                />
                            </div>

                            <div className="home-form-row">
                                <select
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleInputChange}
                                    className="form-select form-full"
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

                            <div className="home-form-row">
                                <textarea
                                    name="message"
                                    placeholder="رسالتك"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="form-textarea"
                                    rows="4"
                                    required
                                />
                            </div>

                            <button type="submit" className="cta-button cta-button-submit">
                                إرسال الآن
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;

