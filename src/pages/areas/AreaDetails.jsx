import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AreaDetails.css';
import heroBackground from '../../media/hero-background.png';
import contactImage from '../../media/contact.jpg';
import { areas } from '../../data/areas';
import { Car, Wrench, MapPin, Phone, MessageCircle, PhoneCall, Clock, CheckCircle, AlertTriangle, HelpCircle, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';
const AreaDetails = () => {
    const { areaName } = useParams();
    const navigate = useNavigate();

    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Decode the URL parameter
    const decodedAreaName = decodeURIComponent(areaName);

    // Find the main area and subarea
    let mainArea = null;
    let subarea = null;
    let isMainArea = false;

    // Check if it's a main area
    const mainAreaObj = areas.find(a => a.name === decodedAreaName);
    if (mainAreaObj) {
        mainArea = mainAreaObj;
        isMainArea = true;
    } else {
        // It's a subarea, find which main area it belongs to
        for (let area of areas) {
            if (area.areas.includes(decodedAreaName)) {
                mainArea = area;
                subarea = decodedAreaName;
                break;
            }
        }
    }

    // If area not found, redirect to areas page
    if (!mainArea) {
        navigate('/areas');
        return null;
    }

    // Generate content based on area
    const generateContent = () => {
        const areaDisplayName = isMainArea ? mainArea.name : subarea;

        return {
            title: `أفضل ونش إنقاذ في ${areaDisplayName} | خصم 50%`,
            intro: `هل تعطلت سيارتك في ${areaDisplayName}؟ لا تقلق، نحن هنا لمساعدتك فوراً. نعدك بتجربة إنقاذ خالية من التوتر مع فريق محترف يعرف كل شارع في ${areaDisplayName}. خدماتنا متاحة 24 ساعة لضمان عودتك لطريقك بأمان وسرعة.اتصل بنا الآن ${phoneNumbers[0]} أو ${phoneNumbers[1]} ! `,
            whyUs: [
                {
                    icon: <Clock size={50} color='var(--accent)' />,
                    title: 'سرعة استجابة لا تُنافس',
                    desc: `لاننا نتمركز داخل ${areaDisplayName}، نضمن وصول الونش إليك في وقت قياسي (غالباً أقل من 20 دقيقة).`
                },
                {
                    icon: <Car size={50} color='var(--accent)' />,
                    title: 'أمان تام لسيارتك',
                    desc: `نستخدم ونشات هيدروليكية حديثة ومعدات تثبيت خاصة لضمان عدم تعرض سيارتك لأي خدش أثناء النقل.`
                },
                {
                    icon: <Wrench size={50} color='var(--accent)' />,
                    title: 'خبرة فنية واسعة',
                    desc: `سائقونا ليسوا مجرد سائقين، بل فنيين مدربين يمكنهم مساعدة في الأعطال البسيطة وتوجيهك لأقرب ورشة في ${areaDisplayName}.`
                }
            ],
            services: [
                {
                    title: 'سحب ونقل السيارات',
                    desc: `خدمة سحب آمنة لجميع أنواع السيارات (ملاكي، دفع رباعي، نقل) من أي مكان في ${areaDisplayName}.`
                },
                {
                    title: 'إنقاذ حوادث الطرق',
                    desc: `دعم طوارئ متخصص للتعامل مع حوادث الطرق ورفع السيارات المتضررة بعناية فائقة.`
                },
                {
                    title: 'خدمات المساعدة على الطريق',
                    desc: `تشمل شحن البطارية، تغيير الإطارات المثقوبة، وتوصيل الوقود أينما كنت في ${areaDisplayName}.`
                },
                {
                    title: 'نقل المعدات والآلات',
                    desc: `نمتلك ونشات مجهزة لنقل المعدات الخفيفة والمتوسطة، الكرفانات، والدرجات النارية.`
                },
                {
                    title: 'انتشال السيارات العالقة',
                    desc: `لدينا الخبرة والمعدات لانتشال السيارات العالقة في الرمال أو الأماكن الوعرة.`
                },
                {
                    title: 'نقل للمحافظات',
                    desc: `خدمة نقل السيارات من ${areaDisplayName} إلى أي محافظة أخرى في مصر بأسعار تنافسية.`
                }
            ],
            processSteps: [
                {
                    icon: <PhoneCall size={30} />,
                    title: 'اتصل بنا',
                    desc: 'اتصل برقم الطوارئ أو تواصل عبر واتساب.'
                },
                {
                    icon: <MapPin size={30} />,
                    title: 'شارك موقعك',
                    desc: 'أرسل موقعك وسنتحرك إليك فوراً.'
                },
                {
                    icon: <Clock size={30} />,
                    title: 'انتظر بأمان',
                    desc: 'سيصلك الونش خلال دقائق معدودة.'
                },
                {
                    icon: <CheckCircle size={30} />,
                    title: 'إتمام الخدمة',
                    desc: 'نقل سيارتك بأمان لأي وجهة تختارها.'
                }
            ],
            safetyTips: [
                "تأكد من ركن السيارة على جانب الطريق بعيداً عن حركة المرور قدر الإمكان.",
                "قم بتشغيل أضواء الانتظار (الفلشر) لتنبيه السائقين الآخرين.",
                "إذا كنت على طريق سريع، ابق داخل السيارة وأغلق الأبواب، أو قف خلف الحاجز الخرساني.",
                "لا تقبل مساعدة من سيارات غير معروفة وتأكد من هوية الونش عند وصوله."
            ],
            faqs: [
                {
                    q: `كم يستغرق وصول الونش في ${areaDisplayName}؟`,
                    a: `نظراً لانتشار ونشاتنا في ${areaDisplayName}، نصل إليك عادةً خلال 15 إلى 20 دقيقة حسب حركة المرور.`
                },
                {
                    q: `هل الخدمة متاحة طوال اليوم؟`,
                    a: `نعم، خدماتنا متاحة 24 ساعة يومياً، 7 أيام في الأسبوع، بما في ذلك العطلات الرسمية.`
                },
                {
                    q: `كم تكلفة خدمة الونش في ${areaDisplayName}؟`,
                    a: `تعتمد التكلفة على المسافة ونوع السيارة، لكننا نقدم أسعاراً تنافسية وشفافة. يمكنك الاتصال بنا للحصول على عرض سعر فوري.`
                },
                {
                    q: `هل تقدمون فاتورة ضريبية؟`,
                    a: `نعم، نحن شركة مرخصة ويمكننا تقديم فواتير رسمية للشركات والأفراد عند الطلب.`
                }
            ],
            coverage: isMainArea
                ? `نغطي ${mainArea.areas.length} منطقة في ${mainArea.name} وجميع الشوارع والطرق الرئيسية والفرعية.`
                : `نخدم ${subarea} كجزء من تغطيتنا الشاملة لمحافظة ${mainArea.name}.`,
            nearby: isMainArea
                ? mainArea.areas.slice(0, 8)
                : mainArea.areas.filter(a => a !== subarea).slice(0, 7)
        };
    };

    const content = generateContent();
    const displayName = isMainArea ? mainArea.name : subarea;

    return (
        <div className="area-details-page">
            {/* Hero Section */}
            <section className="area-details-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="area-details-hero-overlay"></div>
                <div className="area-details-hero-content">
                    <h1 className="area-details-hero-title">
                        ونش إنقاذ <span className="highlight">{displayName}</span>
                    </h1>
                    <div className="hero-rating">
                        <div className="stars">
                            <Star fill="#ffc107" color="#ffc107" size={20} />
                            <Star fill="#ffc107" color="#ffc107" size={20} />
                            <Star fill="#ffc107" color="#ffc107" size={20} />
                            <Star fill="#ffc107" color="#ffc107" size={20} />
                            <Star fill="#ffc107" color="#ffc107" size={20} />
                        </div>
                        <span className="rating-text">4.9 (1,250 تقييم)</span>
                    </div>
                    <p className="area-details-hero-subtitle">خدمة احترافية 24/7 في {displayName}</p>
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <a href="/areas">المناطق</a>
                        <span className="separator">/</span>
                        {!isMainArea && (
                            <>
                                <a href={`/areas/${mainArea.name}`}>{mainArea.name}</a>
                                <span className="separator">/</span>
                            </>
                        )}
                        <span>{displayName}</span>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="area-intro">
                <div className="intro-container">
                    <div className="intro-content">
                        <h2 className="intro-title">{content.title}</h2>
                        <p className="intro-text">{content.intro}</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="area-why-us">
                <div className="why-us-container">
                    <div className="why-us-header">
                        <h3 className="section-subtitle">مميزات الخدمة</h3>
                        <h2 className="section-title">
                            لماذا نحن الأفضل في <span className="highlight">{displayName}</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="why-us-grid">
                        {content.whyUs.map((item, index) => (
                            <div key={index} className="why-us-card">
                                <div className="why-us-icon">{item.icon}</div>
                                <h3 className="why-us-title">{item.title}</h3>
                                <p className="why-us-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Process */}
            <section className="service-process">
                <div className="process-container">
                    <h2 className="section-title center">كيف تطلب الونش؟</h2>
                    <p className="section-desc center">خطوات بسيطة تفصلك عن وصول المساعدة</p>
                    <div className="process-steps">
                        {content.processSteps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-icon-wrapper">
                                    {step.icon}
                                    <span className="step-number">{index + 1}</span>
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                                {index < content.processSteps.length - 1 && <div className="step-connector"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety Tips */}
            <section className="safety-section">
                <div className="safety-container">
                    <div className="safety-header">
                        <AlertTriangle className="safety-icon-large" size={40} />
                        <h2>نصائح لسلامتك أثناء الانتظار</h2>
                    </div>
                    <div className="safety-list">
                        {content.safetyTips.map((tip, index) => (
                            <div key={index} className="safety-item">
                                <CheckCircle className="check-icon" size={20} />
                                <p>{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="area-services">
                <div className="services-container">
                    <div className="services-header">
                        <h3 className="section-subtitle">ما نقدمه</h3>
                        <h2 className="section-title">
                            خدماتنا في <span className="highlight">{displayName}</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="services-grid">
                        {content.services.map((service, index) => (
                            <div key={index} className="service-item">
                                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Info */}
            <section className="coverage-info">
                <div className="coverage-container">
                    <div className="coverage-content">
                        <div className="coverage-text">
                            <h2 className="coverage-title">تغطية شاملة في {displayName}</h2>
                            <p className="coverage-description">{content.coverage}</p>
                            <p className="coverage-description">
                                نحن نفخر بكوننا الشركة الأكثر موثوقية في {displayName}، مع سجل حافل بآلاف
                                عمليات الإنقاذ الناجحة. فريقنا يعرف المنطقة جيداً ويمتلك الخبرة اللازمة للتعامل
                                مع جميع أنواع الحالات الطارئة.
                            </p>
                            <ul className="coverage-features">
                                <li>✓ خدمة 24 ساعة طوال أيام الأسبوع</li>
                                <li>✓ أسرع وقت استجابة في المنطقة</li>
                                <li>✓ أسعار تنافسية وشفافة</li>
                                <li>✓ فريق محترف ومدرب</li>
                                <li>✓ معدات حديثة وآمنة</li>
                                <li>✓ تأمين شامل على السيارات</li>
                            </ul>
                            <a href="/contact" className="coverage-cta">احجز الخدمة الآن</a>
                        </div>
                        <div className="coverage-image">
                            <img src={contactImage} alt={displayName} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Areas */}
            <section className="nearby-areas">
                <div className="nearby-container">
                    <h3 className="nearby-title">مناطق قريبة نخدمها أيضاً</h3>
                    <div className="nearby-grid">
                        {content.nearby.map((nearbyArea, index) => (
                            <a
                                key={index}
                                href={`/areas/${nearbyArea}`}
                                className="nearby-card"
                            >
                                <span className="nearby-icon"><MapPin color='var(--accent)'
                                    style={
                                        {
                                            marginBottom: '-6px'
                                        }
                                    }
                                /></span>
                                <span className="nearby-name">ونش انقاذ {nearbyArea}</span>
                            </a>
                        ))}
                    </div>
                    <a href="/areas" className="view-all-areas">عرض جميع المناطق ←</a>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="area-faq">
                <div className="area-faq-container">
                    <h2 className="section-title center">أسئلة شائعة</h2>
                    <div className="faq-grid">
                        {content.faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-card ${activeFaq === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="area-faq-header">
                                    <div className="faq-question">
                                        <HelpCircle className="faq-icon" size={24} />
                                        <h3>{faq.q}</h3>
                                    </div>
                                    <div className="faq-toggle">
                                        {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </div>
                                <div className={`faq-answer-wrapper ${activeFaq === index ? 'open' : ''}`}>
                                    <p className="area-faq-answer">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* SEO Content */}
            <section className="seo-content">
                <div className="seo-container">
                    <div className="seo-text">
                        <h2>لماذا نحن الخيار الأول لخدمات الونش في {displayName}؟</h2>
                        <p>
                            عندما تبحث عن خدمة ونش موثوقة في {displayName}، فإن اختيار الشركة المناسبة أمر
                            في غاية الأهمية. نحن نقدم خدمات إنقاذ السيارات الأكثر احترافية في {displayName}
                            مع ضمان الوصول السريع والخدمة الممتازة. مع أكثر من 15 عاماً من الخبرة في مجال
                            إنقاذ ونقل السيارات، أصبحنا الخيار الأول لآلاف العملاء في {displayName} وما حولها.
                        </p>

                        <h3>خدمات الونش المتكاملة في {displayName}</h3>
                        <p>
                            نحن نوفر مجموعة شاملة من خدمات الطوارئ للسيارات في {displayName}. سواء كنت بحاجة
                            إلى ونش لنقل سيارتك المعطلة، أو وصلة بطارية، أو تغيير إطار، أو توصيل وقود، فريقنا
                            في {displayName} جاهز دائماً لمساعدتك. نقدم خدمة إنقاذ السيارات على الطرق السريعة
                            والشوارع الداخلية والمناطق السكنية في {displayName}، مع ضمان الوصول إليك في أسرع
                            وقت ممكن بغض النظر عن موقعك داخل المنطقة.
                        </p>

                        <h3>أنواع السيارات التي نخدمها في {displayName}</h3>
                        <p>
                            نمتلك أسطول متنوع من الونشات في {displayName} لخدمة جميع أنواع المركبات. نقوم بنقل
                            السيارات الصغيرة (الملاكي) مثل تويوتا كورولا، نيسان صني، كيا سيراتو، هيونداي إلنترا،
                            والسيارات الأوروبية مثل مرسيدس، بي ام دبليو، أودي. كما نخدم السيارات الدفع الرباعي
                            (SUV) مثل تويوتا فورتشنر، نيسان باترول، جيب رانجلر، ميتسوبيشي باجيرو. بالإضافة إلى
                            ذلك، لدينا ونشات مخصصة لنقل السيارات النقل الخفيف، الميني باصات، الكرفانات، الدراجات
                            النارية، والمعدات الخفيفة في {displayName}.
                        </p>

                        <h3>حالات الطوارئ الشائعة التي نتعامل معها في {displayName}</h3>
                        <p>
                            <strong>تعطل المحرك:</strong> إذا توقف محرك سيارتك فجأة في {displayName}، سواء كان
                            ذلك بسبب ارتفاع درجة الحرارة، أو مشكلة في الوقود، أو عطل ميكانيكي، فإن فريقنا يصل
                            إليك فوراً لنقل سيارتك إلى أقرب ورشة موثوقة في {displayName}.
                        </p>
                        <p>
                            <strong>نفاد البطارية:</strong> البطارية الفارغة من أكثر المشاكل شيوعاً في {displayName}،
                            خاصة في الصباح الباكر. نوفر خدمة شحن البطارية السريعة في موقعك، أو نقوم بتوصيل
                            بطارية جديدة وتركيبها لك في {displayName}.
                        </p>
                        <p>
                            <strong>ثقب الإطار:</strong> إذا تعرض إطار سيارتك للثقب في أحد شوارع {displayName}،
                            نقوم بتغيير الإطار في الموقع إذا كان لديك إطار احتياطي جيد، أو ننقل سيارتك إلى أقرب
                            مركز خدمة الإطارات في {displayName}.
                        </p>
                        <p>
                            <strong>نفاد الوقود:</strong> نسيت تعبئة الوقود ووقفت سيارتك في {displayName}؟ نحن
                            نقدم خدمة توصيل الوقود السريعة إلى موقعك، حتى تتمكن من متابعة طريقك دون الحاجة إلى
                            نقل السيارة.
                        </p>
                        <p>
                            <strong>حوادث الطرق:</strong> في حالة تعرض سيارتك لحادث في {displayName}، نوفر خدمة
                            إنقاذ متخصصة للتعامل مع السيارات المتضررة، مع مراعاة جميع إجراءات السلامة ونقل السيارة
                            بعناية فائقة إلى الورشة أو موقع التأمين.
                        </p>
                        <p>
                            <strong>السيارات العالقة:</strong> إذا علقت سيارتك في الرمال، الطين، أو أي مكان وعر
                            في {displayName} أو ضواحيها، لدينا المعدات المتخصصة والخبرة لانتشال سيارتك بأمان.
                        </p>

                        <h3>خبرة محلية عميقة في {displayName}</h3>
                        <p>
                            فريقنا في {displayName} يمتلك معرفة عميقة بجميع الشوارع والطرق في المنطقة. نحن نعرف
                            كل زاوية في {displayName}، من الشوارع الرئيسية إلى الأزقة الضيقة والمناطق السكنية.
                            هذه المعرفة المحلية تمكننا من الوصول إليك بأسرع طريق ممكن، حتى في أوقات الذروة المرورية.
                            سائقونا يتابعون حركة المرور لحظياً ويستخدمون أفضل المسارات البديلة لتجنب الازدحام
                            والوصول إليك في {displayName} خلال 15-20 دقيقة فقط.
                        </p>

                        <h3>معدات حديثة وآمنة لحماية سيارتك في {displayName}</h3>
                        <p>
                            نستخدم أحدث الونشات الهيدروليكية الحديثة في {displayName}، المجهزة بأنظمة تثبيت
                            متطورة تضمن عدم تعرض سيارتك لأي خدش أو ضرر أثناء عملية الرفع والنقل. جميع ونشاتنا
                            خضعت للصيانة الدورية وتخضع لفحوصات أمان صارمة. نستخدم أحزمة تثبيت قوية ومعتمدة،
                            وسادات حماية للإطارات والهيكل، وأنظمة رفع هيدروليكية سلسة تحافظ على سيارتك في وضع
                            مثالي طوال فترة النقل داخل {displayName} أو خارجها.
                        </p>

                        <h3>فريق محترف ومدرب في {displayName}</h3>
                        <p>
                            جميع سائقي الونش في {displayName} حاصلون على تدريب احترافي معتمد في مجال إنقاذ
                            ونقل السيارات. بالإضافة إلى مهارات القيادة الماهرة، يمتلك فريقنا معرفة ميكانيكية
                            أساسية تمكنهم من تشخيص المشاكل البسيطة وتقديم المشورة الفنية. نحن نختار فريقنا بعناية
                            ونوفر لهم التدريب المستمر لضمان تقديم أفضل خدمة للعملاء في {displayName}. كما أن
                            جميع أفراد الفريق يتمتعون بأخلاقيات عمل عالية، احترافية في التعامل، والتزام تام
                            بالمواعيد.
                        </p>

                        <h3>أسعار تنافسية وشفافة في {displayName}</h3>
                        <p>
                            نحن نؤمن بالشفافية الكاملة في التعاملات المالية. عندما تتصل بنا من {displayName}،
                            نقدم لك عرض سعر واضح ومحدد قبل تحرك الونش، بناءً على موقعك ونوع السيارة والوجهة المطلوبة.
                            لا توجد رسوم خفية أو مفاجآت. أسعارنا تنافسية للغاية مقارنة بجودة الخدمة التي نقدمها
                            في {displayName}. نقدم أيضاً خصومات خاصة للعملاء الدائمين والشركات التي تتعاقد معنا
                            في {displayName}. في حالات الطوارئ الليلية أو العطلات الرسمية، قد تنطبق رسوم إضافية
                            بسيطة، لكننا نبلغك بها مسبقاً بكل شفافية.
                        </p>

                        <h3>خدمة 24 ساعة طوال أيام الأسبوع في {displayName}</h3>
                        <p>
                            الأعطال لا تحدث بموعد، لذلك نحن متواجدون دائماً لخدمتك في {displayName}. خدماتنا
                            متاحة 24 ساعة يومياً، 7 أيام في الأسبوع، بما في ذلك العطلات الرسمية والأعياد. سواء
                            كان ذلك في منتصف الليل، الفجر، أو أي وقت آخر، ستجد فريقنا جاهز للاستجابة لطلبك في
                            {displayName}. نحتفظ بعدة ونشات قيد الاستعداد في مواقع استراتيجية في {displayName}
                            لضمان أسرع وقت استجابة ممكن في جميع الأوقات.
                        </p>

                        <h3>تأمين شامل على جميع السيارات المنقولة من {displayName}</h3>
                        <p>
                            راحة بالك هي أولويتنا. جميع السيارات التي ننقلها من {displayName} مؤمنة بالكامل
                            ضد أي أضرار قد تحدث أثناء عملية النقل (رغم أن هذا نادر جداً بفضل خبرتنا ومعداتنا
                            الحديثة). نعمل مع شركات تأمين معتمدة لضمان حماية كاملة لسيارتك من لحظة رفعها في
                            {displayName} حتى إيصالها بأمان إلى الوجهة المطلوبة.
                        </p>

                        <h3>خدمة النقل بين المحافظات من {displayName}</h3>
                        <p>
                            إذا كنت بحاجة لنقل سيارتك من {displayName} إلى أي محافظة أخرى في مصر، نحن نقدم
                            خدمة النقل لمسافات طويلة بأسعار تنافسية. نقوم بنقل السيارات من {displayName} إلى
                            الإسكندرية، الساحل الشمالي، العين السخنة، شرم الشيخ، الغردقة، الأقصر، أسوان، وجميع
                            المحافظات المصرية. جميع عمليات النقل للمسافات الطويلة تتم بونشات مخصصة ومجهزة للرحلات
                            الطويلة، مع سائقين ذوي خبرة في السفر بالسيارات المحملة.
                        </p>

                        <h3>نقل السيارات الفارهة والكلاسيكية في {displayName}</h3>
                        <p>
                            نحن ندرك أن بعض السيارات تحتاج إلى عناية خاصة. إذا كنت تمتلك سيارة فارهة، كلاسيكية،
                            رياضية، أو نادرة في {displayName}، فإننا نقدم خدمة نقل متخصصة بمعدات خاصة وعناية
                            فائقة. نستخدم ونشات مسطحة (Flatbed) لنقل السيارات الفارهة دون أي ضغط على نظام التعليق
                            أو الإطارات، ونوفر أغطية واقية لحماية الطلاء أثناء النقل في {displayName}.
                        </p>

                        <h3>خدمات إضافية نقدمها في {displayName}</h3>
                        <p>
                            بالإضافة إلى خدمة الونش الأساسية، نقدم في {displayName} خدمات إضافية تشمل: فتح
                            السيارات المقفلة (في حالة نسيان المفاتيح داخل السيارة)، استخراج المفاتيح المكسورة
                            من القفل، توصيل قطع غيار طارئة، خدمة الميكانيكي المتنقل للإصلاحات البسيطة، فحص
                            السيارة قبل الشراء بالمعاينة الميكانيكية، وخدمة نقل السيارات الجديدة من المعارض
                            في {displayName}.
                        </p>

                        <h3>كيف نضمن سرعة الوصول إليك في {displayName}؟</h3>
                        <p>
                            نعتمد على استراتيجية التموضع الذكي في {displayName}. لدينا عدة نقاط انتظار استراتيجية
                            موزعة في {displayName} وحولها، بحيث يكون دائماً هناك ونش قريب منك. نستخدم نظام GPS
                            متطور لتتبع جميع ونشاتنا في الوقت الفعلي واختيار أقرب ونش متاح لموقعك في {displayName}.
                            كما نتعاون مع تطبيقات خرائط المرور لمعرفة أفضل المسارات وتجنب الازدحامات، مما يضمن
                            وصولنا إليك في {displayName} في أسرع وقت ممكن - عادة خلال 15-20 دقيقة.
                        </p>

                        <h3>ماذا تفعل أثناء انتظار الونش في {displayName}؟</h3>
                        <p>
                            عندما تتعطل سيارتك في {displayName}، من المهم اتباع بعض إرشادات السلامة. حاول ركن
                            السيارة على جانب الطريق بعيداً عن حركة المرور قدر الإمكان. قم بتشغيل أضواء الانتظار
                            (الفلشر) لتنبيه السائقين الآخرين. ضع مثلث التحذير على بعد 30 متر خلف السيارة إذا كنت
                            على طريق سريع. إذا كنت في مكان آمن، يمكنك البقاء داخل السيارة وإغلاق الأبواب. أما
                            إذا كنت على طريق سريع مزدحم في {displayName}، فمن الأفضل الخروج من السيارة والوقوف
                            خلف الحاجز الخرساني أو في مكان آمن بعيداً عن حركة المرور.
                        </p>

                        <h3>لماذا العملاء في {displayName} يثقون بنا؟</h3>
                        <ul className="seo-list">
                            <li><strong>السرعة الفائقة:</strong> نصل خلال 15-20 دقيقة فقط في {displayName}</li>
                            <li><strong>الأمان المطلق:</strong> معدات حديثة ومعتمدة لحماية سيارتك بالكامل</li>
                            <li><strong>الاحترافية العالية:</strong> فريق مدرب ومعتمد على أعلى مستوى</li>
                            <li><strong>الشفافية التامة:</strong> أسعار واضحة بدون أي رسوم خفية أو مفاجآت</li>
                            <li><strong>التوفر الدائم:</strong> خدمة 24/7 طوال أيام الأسبوع في {displayName}</li>
                            <li><strong>التأمين الشامل:</strong> جميع السيارات المنقولة مؤمنة بالكامل</li>
                            <li><strong>الخبرة الطويلة:</strong> أكثر من 15 عاماً في خدمة عملاء {displayName}</li>
                            <li><strong>المعرفة المحلية:</strong> معرفة تامة بجميع شوارع وطرق {displayName}</li>
                            <li><strong>خدمة العملاء:</strong> فريق دعم عملاء محترف ومتجاوب</li>
                            <li><strong>التقييمات الممتازة:</strong> أكثر من 1,250 تقييم إيجابي من عملاء {displayName}</li>
                        </ul>

                        <h3>طرق التواصل معنا في {displayName}</h3>
                        <p>
                            يمكنك التواصل معنا في {displayName} بعدة طرق سهلة: الاتصال الهاتفي المباشر على
                            أرقامنا المتاحة 24/7، إرسال رسالة واتساب (نستجيب فوراً)، أو من خلال موقعنا الإلكتروني.
                            عند الاتصال، سيطلب منك موظف خدمة العملاء بعض المعلومات البسيطة: موقعك الحالي في
                            {displayName} (يمكنك إرسال موقع GPS)، نوع المشكلة، نوع وموديل السيارة، والوجهة المطلوبة.
                            بعد ذلك، سنعطيك عرض سعر فوري وزمن الوصول المتوقع، وسيتحرك الونش إليك مباشرة في {displayName}.
                        </p>

                        <h3>التزامنا بجودة الخدمة في {displayName}</h3>
                        <p>
                            نحن لا نقدم مجرد خدمة نقل سيارات في {displayName}، بل نقدم تجربة إنقاذ متكاملة تراعي
                            راحتك وسلامتك. نلتزم بالوصول في الوقت المحدد، التعامل باحترافية مطلقة، الحفاظ على
                            سيارتك كأنها ملكنا، وتقديم الدعم والمشورة الفنية. رضا العملاء هو مقياس نجاحنا، ولذلك
                            نسعى دائماً لتحسين خدماتنا وتلبية توقعات عملائنا في {displayName} وتجاوزها.
                        </p>

                        <h3>شهادات العملاء من {displayName}</h3>
                        <p>
                            حصلنا على تقييمات ممتازة من آلاف العملاء في {displayName}. يشيد عملاؤنا بسرعة الاستجابة،
                            احترافية الفريق، أمان النقل، والأسعار المعقولة. كثير من عملائنا أصبحوا عملاء دائمين
                            يعتمدون علينا في كل مرة يحتاجون فيها لخدمة الونش في {displayName}. نحن فخورون بثقة
                            المجتمع في {displayName} بنا، ونعمل باستمرار على الحفاظ على هذه الثقة وتعزيزها.
                        </p>

                        <h3>نصائح للحفاظ على سيارتك وتجنب الأعطال في {displayName}</h3>
                        <p>
                            للتقليل من احتمالية احتياجك لخدمة الونش في {displayName}، ننصحك بإجراء صيانة دورية
                            لسيارتك، فحص البطارية بانتظام خاصة قبل الصيف والشتاء، التأكد من مستوى الزيت والسوائل،
                            فحص ضغط الإطارات وحالتها، عدم تجاهل أي أصوات أو إنذارات غير طبيعية، والاحتفاظ برقمنا
                            محفوظاً للطوارئ. مع ذلك، إذا حدث أي طارئ في {displayName}، نحن هنا دائماً لمساعدتك.
                        </p>

                        <h3>تغطية شاملة في {displayName} وما حولها</h3>
                        <p>
                            بالإضافة إلى {displayName}، نحن نخدم أيضاً جميع المناطق المحيطة في {mainArea.name}.
                            أينما كنت في المنطقة، يمكنك الاعتماد علينا للحصول على خدمة إنقاذ سريعة وموثوقة.
                            شبكة تغطيتنا واسعة ومتطورة، مما يضمن لك خدمة متميزة سواء كنت في قلب {displayName}
                            أو في المناطق المحيطة بها.
                        </p>

                        <h3>اتصل بنا الآن للحصول على خدمة ونش في {displayName}</h3>
                        <p>
                            لا تتردد في الاتصال بنا في أي وقت من اليوم أو الليل. خدمة الطوارئ الخاصة بنا
                            في {displayName} متاحة على مدار الساعة، وفريقنا جاهز دائماً للاستجابة لطلبك
                            بأسرع وقت ممكن. نحن على بعد مكالمة واحدة فقط، ومستعدون لمساعدتك في أي حالة طارئة
                            في {displayName}. اتصل الآن على {phoneNumbers[0]} أو {phoneNumbers[1]} أو راسلنا عبر
                            واتساب للحصول على مساعدة فورية!
                        </p>
                    </div>
                </div>
            </section>
            {/* Emergency Contact */}
            <section className="area-emergency">
                <div className="emergency-content">
                    <h2 className="emergency-title">
                        تحتاج ونش في {displayName} الآن؟
                    </h2>
                    <p className="emergency-description">
                        اتصل بنا فوراً وسيصل فريقنا إليك في {displayName} خلال دقائق!
                    </p>
                    <div className="emergency-buttons">
                        <a href={`tel:+2${phoneNumbers[0]}`} className="emergency-button primary">
                            <Phone color='black' style={
                                {
                                    marginBottom: '-6px'
                                }
                            } /> اتصل الآن
                        </a>
                        <a
                            href={`https://wa.me/+201553877630?text=${encodeURIComponent(`أحتاج خدمة ونش في ${displayName}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="emergency-button secondary"
                        >
                            <MessageCircle color='var(--accent)' style={
                                {
                                    marginBottom: '-6px'
                                }
                            } /> واتساب
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AreaDetails;

