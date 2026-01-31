import React from 'react';
import { Award, Clock, Wallet, ThumbsUp, Zap } from 'lucide-react';
import './WhatWeOffer.css';
import truckImage from '../../media/what-we-offer2.png';

const WhatWeOffer = () => {
    const features = [
        {
            id: 1,
            icon: <Award className="feature-icon" />,
            title: 'خبرة طويلة',
            description: 'أكثر من 30 عامًا من التميز والخبرة في مجال انقاذ السيارات'
        },
        {
            id: 2,
            icon: <Zap className="feature-icon" />,
            title: 'سرعة قياسية',
            description: 'نصل إليك في وقت قياسي (20 دقيقة أو أقل) أينما كنت'
        },
        {
            id: 3,
            icon: <Wallet className="feature-icon" />,
            title: 'أسعار عادلة',
            description: 'خدمة متميزة بأسعار تنافسية وبدون أي رسوم خفية'
        },
        {
            id: 4,
            icon: <ThumbsUp className="feature-icon" />,
            title: 'فريق محترف',
            description: 'طاقم عمل مدرب للتعامل باحترافية وود مع جميع العملاء'
        },
        {
            id: 5,
            icon: <Clock className="feature-icon" />,
            title: 'خدمة 24/7',
            description: 'متاحون لخدمتك طوال أيام الأسبوع وعلى مدار الساعة'
        }
    ];

    return (
        <section className="what-we-offer">
            <div className="offer-container">
                <div className="offer-image-wrapper">
                    <div className="image-decoration"></div>
                    <img src={truckImage} alt="ونش انقاذ" className="main-image" />
                    <div className="floating-badge">
                        <span className="badge-number">24/7</span>
                        <span className="badge-text">خدمة طوارئ</span>
                    </div>
                </div>

                <div className="offer-content">
                    <div className="section-header">
                        <h4 className="sub-title">لماذا نحن الأفضل؟</h4>
                        <h2 className="main-title">
                            نقدم خدمات <span className="highlight">استثنائية</span>
                        </h2>
                        <p className="main-description">
                            نحن نفهم قيمة وقتك وسلامة سيارتك. لذلك نقدم لك خدمة انقاذ
                            سريعة، موثوقة، وآمنة تمامًا.
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature) => (
                            <div key={feature.id} className="feature-card">
                                <div className="icon-wrapper">
                                    {feature.icon}
                                </div>
                                <div className="feature-details">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
