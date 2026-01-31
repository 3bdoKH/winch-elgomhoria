import React from 'react';
import './Services.css';
import heroBackground from '../../media/hero-background.png';
import tires from '../../media/tires.png';
import towedCar from '../../media/towed-car.png';
import tools from '../../media/tools.png';
import fuel from '../../media/fuel.png';
import battery from '../../media/battery.png';
import { Wrench, Car, Search, FileText } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';
const ServicesPage = () => {
    const mainServices = [
        {
            id: 'rescue',
            icon: towedCar,
            title: 'إنقاذ السيارات',
            shortDesc: 'خدمة ونش سريعة وآمنة',
            description: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق. نمتلك أسطولاً حديثاً من الونشات المجهزة بأحدث التقنيات لضمان نقل آمن لجميع أنواع السيارات.',
            features: [
                'ونش مسطح للسيارات الفاخرة والرياضية',
                'ونش هيدروليكي لجميع أنواع السيارات',
                'نقل السيارات المعطلة أو المتضررة',
                'خدمة 24 ساعة في جميع أنحاء مصر',
                'فريق محترف ومدرب على أعلى مستوى',
                'معدات حديثة وآمنة تحافظ على سيارتك'
            ]
        },
        {
            id: 'equipment',
            icon: tools,
            title: 'نقل المعدات',
            shortDesc: 'نقل المعدات والكرفانات الثقيلة',
            description: 'نقدم جميع خدمات نقل المعدات الثقيلة والكرفانات والماكينات بأمان تام. نمتلك مقطورات متخصصة ومعدات تثبيت متقدمة لضمان نقل آمن لجميع أنواع المعدات.',
            features: [
                'نقل الكرفانات بجميع أحجامها',
                'نقل معدات البناء والحفر',
                'نقل الجرارات والمعدات الزراعية',
                'نقل المولدات والماكينات الثقيلة',
                'نقل الحاويات والفشلات',
                'تأمين شامل على المعدات المنقولة'
            ]
        },
        {
            id: 'fuel',
            icon: fuel,
            title: 'التزود بالوقود',
            shortDesc: 'توصيل وقود سريع إلى موقعك',
            description: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق. فريق أوتوبات جاهز لتزويدكم بالوقود في أي مكان وأي وقت.',
            features: [
                'توصيل جميع أنواع الوقود (80، 92، 95، ديزل)',
                'خدمة سريعة تصل خلال 20 دقيقة',
                'معدات نقل وقود آمنة ومرخصة',
                'أسعار عادلة ومنافسة',
                'متاح على جميع الطرق والمناطق',
                'خدمة 24/7 بدون توقف'
            ]
        },
        {
            id: 'battery',
            icon: battery,
            title: 'وصلة بطارية',
            shortDesc: 'تشغيل سيارتك فوراً',
            description: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة. فريق ونش انقاذ أوتوبات جاهز وعلي أتم الاستعداد لمساعدتكم في أي مكان.',
            features: [
                'وصلة بطارية احترافية وآمنة',
                'فحص حالة البطارية مجاناً',
                'توفير بطاريات جديدة عند الحاجة',
                'نصائح للحفاظ على البطارية',
                'معدات حديثة تحافظ على النظام الكهربائي',
                'خدمة متنقلة في جميع المناطق'
            ]
        },
        {
            id: 'tires',
            icon: tires,
            title: 'تغيير الاطارات',
            shortDesc: 'إصلاح وتغيير إطارات فوري',
            description: 'اذا حصل ظرف طارئ في الطريق وقد احتجت الي تغيير او استبدال احدي اطارات سيارتك فنحن نقدم خدمة تغيير واستبدال الاطارات في الطريق بكل احترافية.',
            features: [
                'تغيير الإطار التالف بالاحتياطي',
                'إصلاح الثقوب الصغيرة في الموقع',
                'فحص ضغط الهواء في جميع الإطارات',
                'توفير إطارات جديدة عند الطلب',
                'خدمة سريعة وآمنة',
                'أدوات ومعدات احترافية'
            ]
        }
    ];

    const additionalServices = [
        {
            icon: <Wrench size={70} color='var(--accent)' />,
            title: 'فتح السيارات المغلقة',
            description: 'نساعدك في فتح سيارتك إذا نسيت المفتاح بالداخل'
        },
        {
            icon: <Car size={70} color='var(--accent)' />,
            title: 'سحب السيارات العالقة',
            description: 'إنقاذ السيارات العالقة في الرمال أو الطين'
        },
        {
            icon: <Search size={70} color='var(--accent)' />,
            title: 'فحص ما قبل النقل',
            description: 'فحص شامل للسيارة قبل النقل لضمان سلامتها'
        },
        {
            icon: <FileText size={70} color='var(--accent)' />,
            title: 'تقارير مفصلة',
            description: 'تقرير كامل عن حالة السيارة والخدمة المقدمة'
        }
    ];

    const pricingFeatures = [
        'أسعار شفافة وواضحة',
        'لا توجد رسوم خفية',
        'عروض خاصة للعملاء الدائمين',
        'أسعار تنافسية في السوق',
        'إمكانية الدفع نقداً أو إلكترونياً',
        'فاتورة رسمية لكل خدمة'
    ];

    return (
        <div className="page-services">
            {/* Hero Section */}
            <section className="page-services-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="page-services-hero-overlay"></div>
                <div className="page-services-hero-content">
                    <h1 className="page-services-hero-title">خدماتنا <span className="highlight">المتميزة</span></h1>
                    <p className="page-services-hero-subtitle">نقدم مجموعة شاملة من خدمات إنقاذ السيارات على مدار الساعة</p>
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <span>الخدمات</span>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="page-services-overview">
                <div className="overview-container">
                    <div className="overview-header">
                        <h3 className="section-subtitle">ما نقدمه لك</h3>
                        <h2 className="section-title">
                            خدمات <span className="highlight">متكاملة</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                        <p className="overview-description">
                            نحن نقدم مجموعة واسعة من خدمات إنقاذ السيارات والونش في جميع أنحاء مصر.
                            فريقنا المحترف متاح على مدار 24 ساعة لضمان راحتك وسلامتك على الطريق.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            {mainServices.map((service, index) => (
                <section
                    key={service.id}
                    className={`page-service-detail ${index % 2 === 0 ? 'even' : 'odd'}`}
                >
                    <div className="page-service-detail-container">
                        <div className="page-service-detail-content">
                            <div className="page-service-detail-icon">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <div className="page-service-detail-text">
                                <h2 className="page-service-detail-title">{service.title}</h2>
                                <p className="page-service-detail-short">{service.shortDesc}</p>
                                <p className="page-service-detail-description">{service.description}</p>
                                <ul className="page-service-features-list">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>

                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact" className="page-service-cta-button">
                                    احجز الخدمة الآن
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Additional Services */}
            <section className="additional-services">
                <div className="additional-container">
                    <div className="additional-header">
                        <h3 className="section-subtitle">خدمات إضافية</h3>
                        <h2 className="section-title">
                            المزيد من <span className="highlight">الخدمات</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="additional-grid">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="additional-card">
                                <div className="additional-icon">{service.icon}</div>
                                <h3 className="additional-title">{service.title}</h3>
                                <p className="additional-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Features */}
            <section className="pricing-section">
                <div className="pricing-container">
                    <div className="pricing-content">
                        <h3 className="section-subtitle">أسعار عادلة</h3>
                        <h2 className="section-title">
                            <span className="white-highlight">التسعير</span> والدفع
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                        <p className="pricing-description">
                            نحن نؤمن بالشفافية الكاملة في التسعير. جميع أسعارنا واضحة ومعلنة مسبقاً،
                            ولا نفرض أي رسوم خفية. نقدم أفضل قيمة مقابل المال مع الحفاظ على أعلى معايير الجودة.
                        </p>
                        <div className="pricing-features">
                            {pricingFeatures.map((feature, index) => (
                                <div key={index} className="pricing-feature">
                                    <span className="pricing-check">✓</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <a href="/contact" className="pricing-cta">
                            اطلب عرض سعر الآن
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services */}
            <section className="why-our-services">
                <div className="why-container">
                    <div className="why-header">
                        <h3 className="section-subtitle">التميز في الخدمة</h3>
                        <h2 className="section-title">
                            لماذا تختار <span className="highlight">خدماتنا</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-number">01</div>
                            <h3>استجابة فورية</h3>
                            <p>نصل إليك خلال 20 دقيقة أو أقل في معظم المناطق</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">02</div>
                            <h3>فريق محترف</h3>
                            <p>فنيون مدربون ومعتمدون بخبرة تزيد عن 10 سنوات</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">03</div>
                            <h3>معدات حديثة</h3>
                            <p>أحدث الونشات والمعدات المتطورة والآمنة</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">04</div>
                            <h3>تغطية شاملة</h3>
                            <p>نخدم جميع محافظات مصر بدون استثناء</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">05</div>
                            <h3>متاح 24/7</h3>
                            <p>خدمة على مدار الساعة طوال أيام الأسبوع</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">06</div>
                            <h3>أسعار منافسة</h3>
                            <p>أفضل الأسعار في السوق مع جودة لا تضاهى</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="page-services-cta">
                <div className="cta-content">
                    <h2 className="cta-title">هل تحتاج إلى مساعدة فورية؟</h2>
                    <p className="cta-description">
                        فريقنا جاهز للاستجابة لطلبك على مدار الساعة. اتصل بنا الآن أو احجز خدمتك عبر الإنترنت.
                    </p>
                    <div className="cta-buttons">
                        <a href={`tel:+2${phoneNumbers[0]}`} className="cta-button primary">
                            اتصل الآن
                        </a>
                        <a href="/contact" className="cta-button secondary">
                            احجز عبر الإنترنت
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;

