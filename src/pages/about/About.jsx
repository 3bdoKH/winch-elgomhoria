import React from 'react';
import './About.css';
import heroBackground from '../../media/hero-background.png';
import counterImage from '../../media/counter.jpeg';
import towedCar from '../../media/towed-car.png';
import tools from '../../media/tools.png';
import fuel from '../../media/fuel.png';
import battery from '../../media/battery.png';
import { ArrowBigUpDash, ShieldBan, HandCoins, Target, Handshake, Rocket, MapPin, Trophy, ShieldCheck } from 'lucide-react';
import { Star } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';
const About = () => {
    const values = [
        {
            id: 1,
            icon: <ArrowBigUpDash size={70} />,
            title: "السرعة والكفاءة",
            description: 'نصل إليك في أسرع وقت ممكن مع فريق محترف وجاهز دائماً'
        },
        {
            id: 2,
            icon: <ShieldBan size={70} />,
            title: 'الأمان والجودة',
            description: 'نستخدم أحدث المعدات والتقنيات لضمان سلامة سيارتك'
        },
        {
            id: 3,
            icon: <HandCoins size={70} />,
            title: 'أسعار تنافسية',
            description: 'نقدم أفضل الأسعار في السوق بدون رسوم خفية'
        },
        {
            id: 4,
            icon: <Handshake size={70} />,
            title: 'خدمة عملاء ممتازة',
            description: 'فريق دعم متاح على مدار الساعة لخدمتك'
        }
    ];

    const stats = [
        { number: '10000+', label: 'عملية إنقاذ ناجحة' },
        { number: '5000+', label: 'عميل راضٍ' },
        { number: '50+', label: 'ونش وسيارة إنقاذ' },
        { number: '24/7', label: 'خدمة على مدار الساعة' }
    ];

    const features = [
        {
            icon: towedCar,
            title: 'أسطول حديث',
            description: 'نمتلك أحدث الونشات والمعدات المتطورة'
        },
        {
            icon: tools,
            title: 'فريق محترف',
            description: 'فنيون مدربون على أعلى مستوى'
        },
        {
            icon: fuel,
            title: 'تغطية شاملة',
            description: 'نخدم جميع محافظات مصر'
        },
        {
            icon: battery,
            title: 'استجابة سريعة',
            description: 'نصل خلال 20 دقيقة أو أقل'
        }
    ];

    const serviceAreas = [
        'اكتوبر',
        'الجيزه',
        'اسكندريه',
        'الحمام',
        'العلمين',
        'الساحل الشمالي',
        'مرسى مطروح',
    ];

    const workProcess = [
        {
            step: '01',
            title: 'اتصل بنا',
            description: 'اتصل على رقمنا الموحد أو أرسل رسالة واتساب مع تحديد موقعك'
        },
        {
            step: '02',
            title: 'تحديد الموقع',
            description: 'نحدد موقعك بدقة ونرسل أقرب ونش متاح إليك'
        },
        {
            step: '03',
            title: 'الوصول السريع',
            description: 'يصل فريقنا خلال 20 دقيقة مع جميع المعدات اللازمة'
        },
        {
            step: '04',
            title: 'تنفيذ الخدمة',
            description: 'نقدم الخدمة بكل احترافية وأمان تام لسيارتك'
        }
    ];

    const certifications = [
        {
            icon: <Trophy size={70} color='var(--accent)' />,
            title: 'معتمدون',
            description: 'حاصلون على جميع التراخيص والشهادات اللازمة من الجهات المختصة'
        },
        {
            icon: <ShieldCheck size={70} color='var(--accent)' />,
            title: 'مؤمنون',
            description: 'تأمين شامل على جميع السيارات والمعدات المنقولة'
        },
        {
            icon: <Star size={70} color='var(--accent)' />,
            title: 'معتمدون دولياً',
            description: 'نتبع المعايير الدولية في خدمات الإنقاذ والونش'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <h1 className="about-hero-title">من <span className="highlight">نحن</span></h1>
                    <p className="about-hero-subtitle">نقدم أفضل خدمات إنقاذ السيارات في مصر</p>
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <span>من نحن</span>
                    </div>
                </div>
            </section>

            {/* Company Introduction */}
            <section className="company-intro">
                <div className="intro-container">
                    <div className="intro-content">
                        <div className="intro-text">
                            <h3 className="section-subtitle">مرحباً بكم في شركتنا</h3>
                            <h2 className="section-title">
                                الرائدون في مجال <span className="highlight">خدمات الإنقاذ</span>
                            </h2>
                            <div className="title-divider">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                            <p className="intro-description">
                                نحن شركة رائدة في مجال خدمات إنقاذ السيارات والونش في مصر، نقدم خدماتنا على مدار الساعة
                                طوال أيام الأسبوع. تأسست شركتنا بهدف تقديم حلول سريعة واحترافية لجميع مشاكل السيارات
                                على الطرق المصرية.
                            </p>
                            <p className="intro-description">
                                نفخر بامتلاكنا أحدث أسطول من الونشات والمعدات المتطورة، بالإضافة إلى فريق من الفنيين
                                المدربين على أعلى مستوى. نغطي جميع محافظات مصر من الإسكندرية إلى أسوان، ومن القاهرة
                                إلى البحر الأحمر، لنكون دائماً في خدمتكم أينما كنتم.
                            </p>
                            <p className="intro-description">
                                التزامنا بالجودة والسرعة والأمان جعلنا الخيار الأول لآلاف العملاء في جميع أنحاء مصر.
                                نسعى دائماً لتحسين خدماتنا وتطوير أساليب عملنا لنظل في طليعة شركات الإنقاذ في المنطقة.
                            </p>
                        </div>
                        <div className="intro-image">
                            <img src={counterImage} alt="About Us" />
                            <div className="image-badge">
                                <div className="badge-content">
                                    <h3>10+</h3>
                                    <p>سنوات من الخبرة</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="mission-vision">
                <div className="mv-container">
                    <div className="mv-card">
                        <div className="mv-icon">
                            <Target size={70} color='var(--accent)' />
                        </div>
                        <h3 className="mv-title">رؤيتنا</h3>
                        <p className="mv-description">
                            أن نكون الشركة الرائدة والأكثر موثوقية في مجال خدمات إنقاذ السيارات في مصر والشرق الأوسط،
                            معروفين بالتميز والابتكار والتزامنا بسلامة وراحة عملائنا.
                        </p>
                    </div>
                    <div className="mv-card">
                        <div className="mv-icon">
                            <Rocket size={70} color='var(--accent)' />
                        </div>
                        <h3 className="mv-title">مهمتنا</h3>
                        <p className="mv-description">
                            تقديم خدمات إنقاذ سيارات عالية الجودة بأسرع وقت استجابة، مع الحفاظ على أعلى معايير
                            الأمان والاحترافية. نسعى لتحويل كل موقف طارئ إلى تجربة إيجابية لعملائنا.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="our-values">
                <div className="values-container">
                    <div className="values-header">
                        <h3 className="section-subtitle">ما يميزنا</h3>
                        <h2 className="section-title">
                            قيمنا <span className="highlight">ومبادئنا</span>
                        </h2>
                        <div className="about-title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="values-grid">
                        {values.map((value) => (
                            <div key={value.id} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats">
                <div className="about-stats-overlay"></div>
                <div className="about-stats-container">
                    <div className="about-stats-header">
                        <h2 className="about-stats-title">إنجازاتنا بالأرقام</h2>
                    </div>
                    <div className="about-stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="about-stat-item">
                                <h3 className="about-stat-number">{stat.number}</h3>
                                <p className="about-stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-us">
                <div className="wcu-container">
                    <div className="wcu-header">
                        <h3 className="section-subtitle">لماذا تختارنا؟</h3>
                        <h2 className="section-title">
                            ما يجعلنا <span className="highlight">الأفضل</span>
                        </h2>
                        <div className="about-title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <img src={feature.icon} alt={feature.title} />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Coverage */}
            <section className="service-coverage">
                <div className="coverage-container">
                    <div className="coverage-header">
                        <h3 className="section-subtitle">نخدمك في كل مكان</h3>
                        <h2 className="section-title">
                            مناطق <span className="highlight">تغطيتنا</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                        <p className="coverage-description">
                            نفخر بتقديم خدماتنا في جميع أنحاء جمهورية مصر العربية. أينما كنت، نحن في خدمتك
                            بأسرع وقت استجابة وأعلى مستوى من الاحترافية والأمان.
                        </p>
                    </div>
                    <div className="areas-grid">
                        {serviceAreas.map((area, index) => (
                            <div key={index} className="area-badge">
                                <span className="badge-icon">
                                    <MapPin color='var(--accent)' />
                                </span>
                                <span className="badge-text">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="how-we-work">
                <div className="work-container">
                    <div className="work-header">
                        <h3 className="section-subtitle">عملية بسيطة وسريعة</h3>
                        <h2 className="section-title">
                            كيف <span className="highlight">نعمل</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="process-steps">
                        {workProcess.map((process, index) => (
                            <div key={index} className="process-card">
                                <div className="process-number">{process.step}</div>
                                <h3 className="process-title">{process.title}</h3>
                                <p className="process-description">{process.description}</p>
                                {index < workProcess.length - 1 && (
                                    <div className="process-arrow">→</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="quality-assurance">
                <div className="qa-container">
                    <div className="qa-header">
                        <h3 className="section-subtitle">معايير الجودة</h3>
                        <h2 className="section-title">
                            الجودة <span className="highlight">والاعتماد</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card">
                                <div className="cert-icon">{cert.icon}</div>
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-description">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company History */}
            <section className="company-history">
                <div className="history-container">
                    <div className="history-content">
                        <div className="history-text">
                            <h3 className="section-subtitle">قصة نجاحنا</h3>
                            <h2 className="section-title">
                                تاريخنا <span className="highlight">وإنجازاتنا</span>
                            </h2>
                            <div className="title-divider">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-year">2013</div>
                                    <div className="timeline-content">
                                        <h4>التأسيس</h4>
                                        <p>بدأنا بـ 5 ونشات فقط في القاهرة بهدف تقديم خدمة إنقاذ احترافية</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-year">2016</div>
                                    <div className="timeline-content">
                                        <h4>التوسع</h4>
                                        <p>توسعنا لنغطي 10 محافظات مع زيادة أسطولنا إلى 20 ونش</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-year">2019</div>
                                    <div className="timeline-content">
                                        <h4>التطوير</h4>
                                        <p>أطلقنا خدمة 24/7 وأضفنا معدات حديثة ونظام GPS</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-year">2023</div>
                                    <div className="timeline-content">
                                        <h4>الريادة</h4>
                                        <p>أصبحنا الشركة الرائدة مع 50+ ونش وتغطية كاملة لمصر</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Quote */}
            <section className="testimonial-quote">
                <div className="quote-container">
                    <div className="quote-icon-large">"</div>
                    <p className="quote-text">
                        تعاملت مع العديد من شركات الونش، لكن هذه الشركة هي الأفضل على الإطلاق.
                        السرعة والاحترافية والأمان كلها في مكان واحد. أنصح الجميع بالتعامل معهم.
                    </p>
                    <div className="quote-author">
                        <h4>أحمد محمود</h4>
                        <p>رجل أعمال - القاهرة</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="cta-content">
                    <h2 className="cta-title">هل تحتاج إلى مساعدة؟</h2>
                    <p className="cta-description">
                        نحن هنا لخدمتك على مدار الساعة. اتصل بنا الآن وسنصل إليك في أسرع وقت ممكن.
                    </p>
                    <div className="cta-buttons">
                        <a href={`tel:+2${phoneNumbers[0]}`} className="cta-button primary">
                            اتصل بنا الآن
                        </a>
                        <a href="/contact" className="cta-button secondary">
                            أرسل رسالة
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

