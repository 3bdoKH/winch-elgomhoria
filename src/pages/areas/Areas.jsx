import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Areas.css';
import heroBackground from '../../media/hero-background.png';
import contactImage from '../../media/contact.jpg';
import { areas } from '../../data/areas';
import { MapPin, Search, Filter, Phone, ArrowRight, ShieldCheck, Zap, Navigation } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';

const Areas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialFilter = queryParams.get('filter');

    const [selectedGov, setSelectedGov] = useState(initialFilter || 'All');
    const [searchQuery, setSearchQuery] = useState('');

    const getTotalSubareas = () => {
        return areas.reduce((total, gov) => total + gov.areas.length, 0);
    };

    const filteredAreas = areas.map(gov => {
        if (selectedGov !== 'All' && gov.name !== selectedGov) return null;

        const matchingSubareas = gov.areas.filter(subarea =>
            subarea.includes(searchQuery) ||
            subarea.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (matchingSubareas.length === 0) return null;

        return { ...gov, areas: matchingSubareas };
    }).filter(Boolean);

    const whyData = [
        { icon: <Zap size={40} />, title: 'تغطية فورية', desc: 'توزيع استراتيجي للونشات يضمن الوصول السريع لكافة المناطق' },
        { icon: <Navigation size={40} />, title: 'معرفة تامة', desc: 'فريقنا ملم بكافة الطرق والمحاور الرئيسية والفرعية' },
        { icon: <ShieldCheck size={40} />, title: 'أمان كامل', desc: 'نلتزم بأعلى معايير السلامة في نقل سيارتك مهما كان موقعك' }
    ];

    return (
        <div className="areas-v2">
            <Helmet>
                <title>تغطيتنا | ونش إنقاذ الجمهورية - نصل إليك في كل مكان</title>
                <meta name="description" content="تغطية شاملة لجميع محافظات مصر: القاهرة، الجيزة، أكتوبر، الإسكندرية، وكافة الطرق السريعة. أسرع ونش إنقاذ نصلك خلال دقائق." />
            </Helmet>

            {/* Hero Section */}
            <section className="areas-hero-v2" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="hero-overlay-v2"></div>
                <div className="container-v2">
                    <div className="hero-content-v2">
                        <div className="breadcrumb-v2">
                            <a href="/">الرئيسية</a>
                            <span>/</span>
                            <span>مناطق التغطية</span>
                        </div>
                        <h1 className="hero-title-v2">نصل <span className="highlight">إليك</span> أينما كنت</h1>
                        <p className="hero-subtitle-v2">تغطية شاملة واحترافية لكافة مناطق ومحافظات الجمهورية على مدار 24 ساعة</p>
                    </div>
                </div>
            </section>

            {/* Coverage Overview */}
            <section className="coverage-overview-v2">
                <div className="container-v2">
                    <div className="section-header centered">
                        <div className="header-meta">
                            <span className="dot"></span>
                            <h4 className="sub-title">تغطية وطنية</h4>
                        </div>
                        <h2 className="main-title">شبكة إنقاذ <span className="highlight">على مستوى الجمهورية</span></h2>
                        <p className="section-description">
                            نمتلك أكبر أسطول ونشات موزعة جغرافياً لضمان الوصول لأي منطقة في أسرع وقت ممكن
                        </p>
                    </div>

                    <div className="coverage-stats-v2">
                        <div className="c-stat-card-v2">
                            <span className="c-num-v2">{areas.length}</span>
                            <p>محافظة</p>
                        </div>
                        <div className="c-stat-card-v2 highlight">
                            <span className="c-num-v2">{getTotalSubareas()}</span>
                            <p>منطقة مخدومة</p>
                        </div>
                        <div className="c-stat-card-v2">
                            <span className="c-num-v2">20</span>
                            <p>دقيقة كحد أقصى</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search & Selector */}
            <section className="area-controls-v2">
                <div className="container-v2">
                    <div className="controls-box-v2">
                        <div className="search-wrap-v2">
                            <Search size={22} className="s-icon-v2" />
                            <input
                                type="text"
                                placeholder="ابحث عن منطقتك (مثال: المعادي، أكتوبر...)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="filter-wrap-v2">
                            <Filter size={22} className="f-icon-v2" />
                            <select value={selectedGov} onChange={(e) => setSelectedGov(e.target.value)}>
                                <option value="All">كل المحافظات</option>
                                {areas.map(gov => <option key={gov.name} value={gov.name}>{gov.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Listing */}
            <section className="governorates-v2">
                <div className="container-v2">
                    {filteredAreas.length > 0 ? (
                        filteredAreas.map(gov => (
                            <div key={gov.name} className="gov-block-v2">
                                <div className="gov-header-v3">
                                    <div className="gov-info-v3">
                                        <MapPin size={24} className="pin-v3" />
                                        <h2>{gov.name}</h2>
                                        <span className="gov-count-v3">{gov.areas.length} منطقة</span>
                                    </div>
                                    <a href={`/areas/${encodeURIComponent(gov.name)}`} className="gov-link-v3">
                                        عرض التفاصيل
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                                <div className="subareas-grid-v2">
                                    {gov.areas.map(subarea => (
                                        <a href={`/areas/${encodeURIComponent(subarea)}`} key={subarea} className="subarea-btn-v2">
                                            <span>ونش انقاذ {subarea}</span>
                                            <ArrowRight size={14} className="arr-v2" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-areas-v2">
                            <Search size={60} strokeWidth={1} />
                            <h3>عذراً، لم نجد نتائج لـ "{searchQuery}"</h3>
                            <p>حاول البحث بكلمات أخرى أو اختر محافظة من القائمة</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Why Local Support */}
            <section className="local-support-v2">
                <div className="container-v2">
                    <div className="support-box-v2">
                        <div className="support-header-v2">
                            <div className="header-meta">
                                <span className="dot"></span>
                                <h4 className="sub-title">دعم محلي</h4>
                            </div>
                            <h2 className="main-title">لماذا التغطية <span className="highlight">المحلية؟</span></h2>
                        </div>
                        <div className="support-grid-v2">
                            {whyData.map((item, idx) => (
                                <div key={idx} className="support-card-v2">
                                    <div className="s-card-icon-v2">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="areas-footer-cta-v2">
                <div className="container-v2">
                    <div className="a-cta-box-v2">
                        <div className="a-cta-info-v2">
                            <h2>خارج نطاق التغطية؟</h2>
                            <p>إذا كنت في منطقة غير موجودة بالقائمة، اتصل بنا وسنقوم بترتيب إنقاذك عبر شبكة شركائنا الموثوقين.</p>
                        </div>
                        <a href={`tel:+2${phoneNumbers[0]}`} className="btn-a-call-v2">
                            <Phone size={24} />
                            اطلب مساعدة فورية
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Areas;

