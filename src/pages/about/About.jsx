import React from 'react';
import './About.css';
import heroBackground from '../../media/hero-background.png';
import counterImage from '../../media/counter.jpeg';
import towedCar from '../../media/towed-car.png';
import tools from '../../media/tools.png';
import fuel from '../../media/fuel.png';
import battery from '../../media/battery.png';
import {
    ShieldCheck,
    Zap,
    Award,
    Headset,
    Target,
    Rocket,
    MapPin,
    ChevronLeft,
    Clock,
    CheckCircle2
} from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';
import { Link } from 'react-router-dom';

const About = () => {
    const values = [
        {
            id: 1,
            icon: <Zap size={32} />,
            title: "سرعة استجابة فائقة",
            description: 'نلتزم بالوصول إليك في أسرع وقت ممكن (20 دقيقة أو أقل) لضمان عدم تعطل يومك.'
        },
        {
            id: 2,
            icon: <ShieldCheck size={32} />,
            title: 'أمان تام ومضمون',
            description: 'نستخدم أحدث التقنيات والمعدات لضمان سلامة سيارتك أثناء عملية الإنقاذ والسحب.'
        },
        {
            id: 3,
            icon: <Award size={32} />,
            title: 'خبرة عريقة',
            description: 'أكثر من 10 سنوات من الريادة في تقديم خدمات إنقاذ وطوارئ الطرق بجميع أنحاء مصر.'
        },
        {
            id: 4,
            icon: <Headset size={32} />,
            title: 'دعم فني 24/7',
            description: 'فريقنا متاح دائماً للرد على اتصالاتكم وتقديم المساعدة في أي وقت ومن أي مكان.'
        }
    ];

    const timeline = [
        { year: '2013', title: 'البداية الطموحة', desc: 'تأسيس الشركة بأسطول صغير يغطي مناطق القاهرة الكبرى.' },
        { year: '2016', title: 'التوسع الإقليمي', desc: 'توسيع نطاق الخدمة ليشمل 10 محافظات رئيسية في الجمهورية.' },
        { year: '2019', title: 'التطوير التقني', desc: 'إدخال أنظمة التتبع GPS وتحديث الأسطول بأحدث الأوناش الهيدروليكية.' },
        { year: '2023', title: 'الريادة والتميز', desc: 'أصبحنا الخيار الأول للمصريين بأكثر من 50 ونش منتشر في جميع أنحاء مصر.' }
    ];

    const whyFeatures = [
        { icon: towedCar, title: 'أسطول حديث ومتنوع' },
        { icon: tools, title: 'فنيون متخصصون' },
        { icon: fuel, title: 'تغطية لجميع المحافظات' },
        { icon: battery, title: 'خدمات طوارئ متكاملة' }
    ];

    return (
        <div className="about-v2">
            {/* Hero Section */}
            <section className="about-hero-v2" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="hero-overlay-v2"></div>
                <div className="hero-container-v2">
                    <div className="breadcrumb-v2">
                        <Link to="/">الرئيسية</Link>
                        <ChevronLeft size={16} />
                        <span>من نحن</span>
                    </div>
                    <h1 className="hero-title-v2">الريادة في <span className="highlight">إنقاذ السيارات</span></h1>
                    <p className="hero-subtitle-v2">نحن معك أينما كنت.. أمان وسرعة واحترافية</p>
                </div>
            </section>

            {/* Company Intro */}
            <section className="intro-v2">
                <div className="container-v2">
                    <div className="intro-grid-v2">
                        <div className="intro-visual-v2">
                            <div className="main-img-wrapper-v2">
                                <img src={counterImage} alt="ونش انقاذ" className="intro-main-img-v2" />
                                <div className="experience-badge-v2">
                                    <span className="exp-num">10+</span>
                                    <span className="exp-text">عاماً من<br />التميز</span>
                                </div>
                            </div>
                        </div>
                        <div className="intro-content-v2">
                            <div className="section-header">
                                <div className="header-meta">
                                    <span className="dot"></span>
                                    <h4 className="sub-title">تعرف علينا</h4>
                                </div>
                                <h2 className="main-title">
                                    عن <span className="highlight">شركة إنقاذ مصر</span>
                                </h2>
                            </div>
                            <p className="intro-desc-v2">
                                نحن شركة رائدة في خدمات سحب وإنقاذ السيارات على الطرق، نعتمد على أحدث التكنولوجيا وأفضل الكوادر البشرية لنقدم لك تجربة خدمة فريدة وآمنة.
                            </p>
                            <p className="intro-desc-v2">
                                هدفنا هو تقديم حلول فورية وموثوقة لجميع أعطال الطرق، ملتزمون بأعلى معايير الجودة العالمية في مجالات الونش والإنقاذ، لنكون شريكك الدائم في كل رحلة.
                            </p>
                            <div className="intro-features-v2">
                                <div className="i-feature-v2">
                                    <CheckCircle2 size={24} className="check-icon" />
                                    <span>أكثر من 50,000 عملية إنقاذ ناجحة</span>
                                </div>
                                <div className="i-feature-v2">
                                    <CheckCircle2 size={24} className="check-icon" />
                                    <span>فريق مدرب على التعامل مع كافة أنواع السيارات</span>
                                </div>
                                <div className="i-feature-v2">
                                    <CheckCircle2 size={24} className="check-icon" />
                                    <span>أسطول أوناش مجهز بأحدث أدوات الرفع والسحب</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision-v2">
                <div className="container-v2">
                    <div className="mv-grid-v2">
                        <div className="mv-card-v2">
                            <div className="mv-icon-v2">
                                <Target size={40} />
                            </div>
                            <h3 className="mv-title-v2">رؤيتنا</h3>
                            <p className="mv-desc-v2">
                                أن نصبح المرجع الأول والوحيد لخدمات طوارئ الطرق في مصر والشرق الأوسط من خلال التطوير المستمر لأسطولنا وتدريب كوادرنا.
                            </p>
                        </div>
                        <div className="mv-card-v2 featured">
                            <div className="mv-icon-v2">
                                <Rocket size={40} />
                            </div>
                            <h3 className="mv-title-v2">مهمتنا</h3>
                            <p className="mv-desc-v2">
                                توفير الحماية والراحة لقائدي السيارات في جميع أنحاء الجمهورية من خلال استجابة فورية وخدمات احترافية تضمن سلامتهم وسلامة ممتلكاتهم.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="values-v2">
                <div className="container-v2">
                    <div className="section-header centered">
                        <div className="header-meta">
                            <span className="dot"></span>
                            <h4 className="sub-title">قيمنا الجوهرية</h4>
                        </div>
                        <h2 className="main-title">سر تميزنا واختيار <span className="highlight">العملاء لنا</span></h2>
                    </div>
                    <div className="values-grid-v2">
                        {values.map((v) => (
                            <div key={v.id} className="value-card-v2">
                                <div className="value-icon-v2">{v.icon}</div>
                                <h3 className="value-title-v2">{v.title}</h3>
                                <p className="value-desc-v2">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline History */}
            <section className="history-v2">
                <div className="container-v2">
                    <div className="section-header centered">
                        <div className="header-meta">
                            <span className="dot"></span>
                            <h4 className="sub-title">تاريخنا الحافل</h4>
                        </div>
                        <h2 className="main-title">مسيرة النجاح <span className="highlight">والتطور</span></h2>
                    </div>
                    <div className="timeline-v2">
                        {timeline.map((item, idx) => (
                            <div key={idx} className="timeline-item-v2">
                                <div className="t-year-v2">{item.year}</div>
                                <div className="t-content-v2">
                                    <h4 className="t-title-v2">{item.title}</h4>
                                    <p className="t-desc-v2">{item.desc}</p>
                                </div>
                                <div className="t-dot-v2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Features Icons */}
            <section className="why-v2">
                <div className="container-v2">
                    <div className="why-grid-v2">
                        {whyFeatures.map((f, i) => (
                            <div key={i} className="why-item-v2">
                                <div className="why-img-box-v2">
                                    <img src={f.icon} alt={f.title} />
                                </div>
                                <h3 className="why-title-v2">{f.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Quote */}
            <section className="quote-v2">
                <div className="container-v2">
                    <div className="quote-box-v2">
                        <div className="quote-icon-v2">"</div>
                        <p className="quote-text-v2">
                            أهم ما يميزنا ليس جودة ونش الإنقاذ فحسب، بل الأمان النفسي الذي يشعر به العميل عندما يعلم أننا في طريقنا إليه.. نحن لا ننقذ سيارة، نحن ننقذ رحلة إنسان.
                        </p>
                        <div className="quote-author-v2">
                            <h4 className="author-name-v2">طاقم العمل</h4>
                            <p className="author-pos-v2">شركة إنقاذ مصر</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-v2">
                <div className="container-v2">
                    <div className="cta-card-v2">
                        <div className="cta-content-v1">
                            <h2 className="cta-title-v2">لا تدع الأعطال تعطل حياتك</h2>
                            <p className="cta-desc-v2">نحن في خدمتك أينما كنت وفي أي وقت.. اتصل بنا الآن وسنصلك فوراً</p>
                        </div>
                        <div className="cta-actions-v2">
                            <a href={`tel:+2${phoneNumbers[0]}`} className="btn-call-about">
                                <Clock size={20} />
                                اطلب النجدة الآن
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

