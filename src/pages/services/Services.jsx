import React, { useEffect } from 'react';
import './Services.css';
import heroBackground from '../../media/hero-background.png';
import tires from '../../media/tires.png';
import towedCar from '../../media/towed-car.png';
import tools from '../../media/tools.png';
import fuel from '../../media/fuel.png';
import battery from '../../media/battery.png';
import { Wrench, Car, Search, FileText, Check, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mainServices = [
        {
            id: 'rescue',
            icon: towedCar,
            title: 'إنقاذ السيارات',
            shortDesc: 'خدمة ونش سريعة وآمنة على مدار الساعة',
            description: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق. نمتلك أسطولاً حديثاً من الونشات المجهزة بأحدث التقنيات لضمان نقل آمن لجميع أنواع السيارات.',
            features: [
                'ونش مسطح للسيارات الفاخرة والرياضية',
                'ونش هيدروليكي لجميع أنواع السيارات',
                'نقل السيارات المعطلة أو المتضررة',
                'خدمة 24 ساعة في جميع أنحاء مصر'
            ]
        },
        {
            id: 'equipment',
            icon: tools,
            title: 'نقل المعدات',
            shortDesc: 'نقل المعدات والكرفانات الثقيلة باحترافية',
            description: 'نقدم جميع خدمات نقل المعدات الثقيلة والكرفانات والماكينات بأمان تام. نمتلك مقطورات متخصصة ومعدات تثبيت متقدمة لضمان نقل آمن لجميع أنواع المعدات.',
            features: [
                'نقل الكرفانات بجميع أحجامها',
                'نقل معدات البناء والحفر',
                'تأمين شامل على المعدات المنقولة',
                'فريق متخصص للأحمال الثقيلة'
            ]
        },
        {
            id: 'fuel',
            icon: fuel,
            title: 'التزود بالوقود',
            shortDesc: 'توصيل الوقود إلى موقعك في أسرع وقت',
            description: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق. فريق أوتوبات جاهز لتزويدكم بالوقود في أي مكان وأي وقت.',
            features: [
                'توصيل جميع أنواع الوقود (80، 92، 95)',
                'خدمة سريعة تصل خلال 20 دقيقة',
                'معدات نقل وقود آمنة ومرخصة',
                'متاح على جميع الطرق السريعة'
            ]
        },
        {
            id: 'battery',
            icon: battery,
            title: 'وصلة بطارية',
            shortDesc: 'إعادة الحياة لسيارتك أينما كنت',
            description: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة. فريق ونش انقاذ أوتوبات جاهز وعلي أتم الاستعداد لمساعدتكم في أي مكان.',
            features: [
                'وصلة بطارية احترافية وآمنة',
                'فحص حالة البطارية مجاناً',
                'توفير بطاريات جديدة عند الحاجة',
                'نصائح للحفاظ على عمر البطارية'
            ]
        },
        {
            id: 'tires',
            icon: tires,
            title: 'تغيير الاطارات',
            shortDesc: 'إصلاح وتغيير الإطارات في موقعك',
            description: 'اذا حصل ظرف طارئ في الطريق وقد احتجت الي تغيير او استبدال احدي اطارات سيارتك فنحن نقدم خدمة تغيير واستبدال الاطارات في الطريق بكل احترافية.',
            features: [
                'تغيير الإطار التالف بالاحتياطي',
                'إصلاح الثقوب الصغيرة في الموقع',
                'فحص ضغط الهواء لجميع الإطارات',
                'أدوات ومعدات رفع احترافية'
            ]
        }
    ];

    const additionalServices = [
        {
            icon: <Wrench size={40} />,
            title: 'فتح السيارات المغلقة',
            description: 'نساعدك في فتح سيارتك إذا نسيت المفتاح بالداخل دون أي ضرر.'
        },
        {
            icon: <Car size={40} />,
            title: 'سحب السيارات العالقة',
            description: 'إنقاذ السيارات العالقة في الرمال أو الطين بأفضل المعدات.'
        },
        {
            icon: <Search size={40} />,
            title: 'فحص ما قبل النقل',
            description: 'فحص شامل للسيارة قبل النقل لضمان سلامتها التامة.'
        },
        {
            icon: <FileText size={40} />,
            title: 'تقارير فنية',
            description: 'تقرير كامل عن حالة السيارة والخدمة المقدمة لتوثيق الحالة.'
        }
    ];

    const whyData = [
        {
            num: '01',
            title: 'استجابة فورية',
            desc: 'نحن ندرك قيمة الوقت في حالات الطوارئ ونصل إليك بسرعة قصوى.'
        },
        {
            num: '02',
            title: 'فريق محترف',
            desc: 'فنيون مدربون على أعلى مستوى للتعامل مع كافة الحالات.'
        },
        {
            num: '03',
            title: 'معدات حديثة',
            desc: 'أحدث الونشات والمعدات المتطورة لضمان سلامة سيارتك.'
        }
    ];

    return (
        <div className="services-v2">

            {/* Hero Section */}
            <section className="services-hero-v2" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="hero-overlay-v2"></div>
                <div className="container-v2">
                    <div className="hero-content-v2">
                        <div className="breadcrumb-v2">
                            <a href="/">الرئيسية</a>
                            <span>/</span>
                            <span>الخدمات</span>
                        </div>
                        <h1 className="hero-title-v2">خدماتنا <span className="highlight">المتميزة</span></h1>
                        <p className="hero-subtitle-v2">حلول شاملة واحترافية لإنقاذ السيارات والمعدات على مدار الساعة في جميع أنحاء الجمهورية</p>
                    </div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="main-services-v2">
                <div className="container-v2">
                    <div className="">
                        <div className="header-meta">
                            <span className="dot"></span>
                            <h4 className="sub-title">تنوع وتميز</h4>
                        </div>
                        <h2 className="main-title">
                            خدمات <span className="highlight">احترافية</span>
                        </h2>
                        <p className="section-description">
                            نقدم باقة واسعة من الخدمات المصممة لتلبية كافة احتياجاتك على الطريق وبأعلى معايير الجودة العالمية
                        </p>
                    </div>

                    <div className="services-detail-grid-v2">
                        {mainServices.map((service, index) => (
                            <div key={service.id} className="service-detail-card-v2">
                                <div className="service-card-img-v2">
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <div className="service-card-info-v2">
                                    <h3 className="service-card-title-v2">{service.title}</h3>
                                    <p className="service-card-short-v2">{service.shortDesc}</p>
                                    <p className="service-card-desc-v2">{service.description}</p>
                                    <div className="service-features-v2">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="s-feature-v2">
                                                <Check size={16} className="check-icon" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <a href={`tel:+2${phoneNumbers[0]}`} className="service-btn-v2">
                                        اطلب الخدمة الآن
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="extra-services-v2">
                <div className="container-v2">
                    <div className="section-header centered">
                        <div className="header-meta">
                            <span className="dot"></span>
                            <h4 className="sub-title">حلول متكاملة</h4>
                        </div>
                        <h2 className="main-title">
                            نحن <span className="highlight">نهتم بكل التفاصيل</span>
                        </h2>
                    </div>

                    <div className="extra-grid-v2">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="extra-card-v2">
                                <div className="extra-icon-v2">{service.icon}</div>
                                <h3 className="extra-title-v2">{service.title}</h3>
                                <p className="extra-desc-v2">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Feature */}
            <section className="pricing-v2">
                <div className="container-v2">
                    <div className="pricing-box-v2">
                        <div className="pricing-content-v2">
                            <div className="header-meta">
                                <span className="dot"></span>
                                <h4 className="sub-title" style={{ color: 'white' }}>الشفافية هي شعارنا</h4>
                            </div>
                            <h2 className="pricing-title-v2">التسعير <span className="highlight">العادل</span> والشامل</h2>
                            <p className="pricing-desc-v2">
                                نحن نلتزم بتقديم أفضل قيمة مقابل السعر. لا توجد رسوم خفية أو مصاريف إضافية غير معلنة. يمكنك الاعتماد علينا في الحصول على خدمة متميزة بسعر مناسب.
                            </p>
                            <div className="pricing-list-v2">
                                <div className="p-item-v2">✓ لا توجد رسوم خفية</div>
                                <div className="p-item-v2">✓ أسعار تنافسية جداً</div>
                                <div className="p-item-v2">✓ فاتورة رسمية بالخدمة</div>
                                <div className="p-item-v2">✓ عروض للشركات والتعاقدات</div>
                            </div>
                            <div className="pricing-actions-v2">
                                <a href={`tel:+2${phoneNumbers[0]}`} className="btn-p-primary-v2">
                                    <Phone size={20} />
                                    اتصل للاستفسار
                                </a>
                                <a href="/contact" className="btn-p-outline-v2">
                                    <MessageSquare size={20} />
                                    احجز عبر الموقع
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section (Simplified version) */}
            <section className="why-services-v2">
                <div className="container-v2">
                    <div className="section-header centered">
                        <div className="header-meta">
                            <span className="dot"></span>
                            <h4 className="sub-title">لماذا نحن؟</h4>
                        </div>
                        <h2 className="main-title">سر تميز <span className="highlight">خدماتنا</span></h2>
                    </div>

                    <div className="why-grid-v2">
                        {whyData.map((item, index) => (
                            <div key={index} className="why-card-v2">
                                <span className="why-num-v2">{item.num}</span>
                                <h3 className="why-title-v2">{item.title}</h3>
                                <p className="why-desc-v2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta-v2">
                <div className="container-v2">
                    <div className="cta-card-v2">
                        <div className="cta-info-v2">
                            <h2 className="cta-title-v2">هل أنت عالق في الطريق؟</h2>
                            <p className="cta-desc-v2">خدمة الإنقاذ السريع متاحة الآن. ضغطة واحدة تفصلك عن وصول الونش إليك.</p>
                        </div>
                        <a href={`tel:+2${phoneNumbers[0]}`} className="btn-call-now-v2">
                            اتصل بنا الآن
                            <Phone size={24} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;

