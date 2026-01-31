import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Areas.css';
import heroBackground from '../../media/hero-background.png';
import contactImage from '../../media/contact.jpg';
import { areas } from '../../data/areas';
import { Rocket, Map, Zap, Phone, Search, Filter } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';

const Areas = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialFilter = queryParams.get('filter');

    const [selectedArea, setSelectedArea] = useState(initialFilter || 'All');
    const [searchQuery, setSearchQuery] = useState('');

    // Scroll to results if filter is present
    useEffect(() => {
        if (initialFilter) {
            const resultsSection = document.querySelector('.search-filter-section');
            if (resultsSection) {
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [initialFilter]);
    const getTotalSubareas = () => {
        return areas.reduce((total, area) => total + area.areas.length, 0);
    };

    // Filter Logic
    const filteredAreas = areas.map(governorate => {
        // 1. Filter by Governorate (Dropdown)
        if (selectedArea !== 'All' && governorate.name !== selectedArea) {
            return null;
        }

        // 2. Filter by Search Query
        const matchingSubareas = governorate.areas.filter(subarea =>
            subarea.includes(searchQuery) ||
            subarea.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (matchingSubareas.length === 0) {
            return null;
        }

        return {
            ...governorate,
            areas: matchingSubareas
        };
    }).filter(Boolean);

    return (
        <div className="areas-page">
            {/* Hero Section */}
            <section className="areas-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="areas-hero-overlay"></div>
                <div className="areas-hero-content">
                    <h1 className="areas-hero-title">مناطق <span className="highlight">خدمتنا</span></h1>
                    <p className="areas-hero-subtitle">نخدمك في جميع أنحاء مصر على مدار الساعة</p>
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <span>المناطق</span>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="areas-overview">
                <div className="overview-container">
                    <div className="overview-header">
                        <h3 className="section-subtitle">تغطية شاملة</h3>
                        <h2 className="section-title">
                            نخدم <span className="highlight">جميع المناطق</span>
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                        <p className="overview-description">
                            نفخر بتقديم خدماتنا في {getTotalSubareas()} منطقة عبر {areas.length} محافظات رئيسية.
                            أينما كنت في مصر، فريقنا جاهز للوصول إليك في أسرع وقت ممكن بأعلى مستوى من
                            الاحترافية والأمان.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="coverage-stats">
                        <div className="stat-box">
                            <div className="area-stat-number">{areas.length}</div>
                            <div className="area-stat-label">محافظات رئيسية</div>
                        </div>
                        <div className="stat-box">
                            <div className="area-stat-number">{getTotalSubareas()}+</div>
                            <div className="area-stat-label">منطقة مخدومة</div>
                        </div>
                        <div className="stat-box">
                            <div className="area-stat-number">24/7</div>
                            <div className="area-stat-label">خدمة متواصلة</div>
                        </div>
                        <div className="stat-box">
                            <div className="area-stat-number">20</div>
                            <div className="area-stat-label">دقيقة وقت وصول</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="search-filter-section">
                <div className="search-filter-container">
                    <div className="search-filter-wrapper">
                        {/* Search Bar */}
                        <div className="search-box">
                            <Search className="search-icon" size={20} />
                            <input
                                type="text"
                                placeholder="ابحث عن منطقتك..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        {/* Filter Dropdown */}
                        <div className="filter-box">
                            <Filter className="filter-icon" size={20} />
                            <select
                                value={selectedArea || 'All'}
                                onChange={(e) => setSelectedArea(e.target.value)}
                                className="filter-select"
                            >
                                <option value="All">كل المحافظات</option>
                                {areas.map((area, index) => (
                                    <option key={index} value={area.name}>
                                        {area.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Areas Display */}
            {filteredAreas.length > 0 ? (
                filteredAreas.map((mainArea, index) => (
                    <section
                        key={index}
                        className="area-section"
                        id={mainArea.name}
                    >
                        <div className="area-container">
                            <div className="area-header">
                                <a href={`/areas/${encodeURIComponent(mainArea.name)}`} className="area-header-content">
                                    <div className="area-header-text">
                                        <h2 className="area-title">{mainArea.name}</h2>
                                        <p className="area-count">{mainArea.areas.length} منطقة مخدومة</p>
                                    </div>
                                </a>
                            </div>

                            <div className="subareas-grid">
                                {mainArea.areas.map((subarea, subIndex) => (
                                    <a
                                        key={subIndex}
                                        href={`/areas/${encodeURIComponent(subarea)}`}
                                        className="subarea-card"
                                    >
                                        <div className="subarea-image" style={{ backgroundImage: `url(${contactImage})` }}>
                                            <div className="subarea-overlay">
                                                <div className="subarea-info">
                                                    <h3 className="subarea-text">اسرع وارخص ونش انقاذ في مصر</h3>
                                                    <p className="subarea-number">{phoneNumbers[0]}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="subarea-content">
                                            <h3 className="subarea-name">ونش انقاذ {subarea}</h3>
                                            <p className="subarea-info">خدمة متاحة 24/7</p>
                                            <div className="subarea-footer">
                                                <span className="subarea-badge">متاح الآن</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                ))
            ) : (
                <div className="no-results">
                    <p>لا توجد نتائج مطابقة لبحثك</p>
                </div>
            )}

            {/* Why Choose Us for These Areas */}
            <section className="why-areas">
                <div className="why-areas-container">
                    <div className="why-areas-header">
                        <h3 className="subtitle">تغطية محلية شاملة</h3>
                        <h2 className="section-title">
                            لماذا نغطي هذه المناطق
                        </h2>
                        <div className="title-divider">
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="why-areas-grid">
                        <div className="why-area-card">
                            <div className="why-area-icon"><Rocket size={70} color='var(--accent)' /></div>
                            <h3>استجابة سريعة</h3>
                            <p>وجودنا في هذه المناطق يضمن وصولنا إليك خلال 20 دقيقة أو أقل</p>
                        </div>
                        <div className="why-area-card">
                            <div className="why-area-icon"><Map size={70} color='var(--accent)' /></div>
                            <h3>معرفة محلية</h3>
                            <p>فريقنا يعرف كل شارع وزقاق في المناطق التي نخدمها</p>
                        </div>
                        <div className="why-area-card">
                            <div className="why-area-icon"><Zap size={70} color='var(--accent)' /></div>
                            <h3>توزيع استراتيجي</h3>
                            <p>ونشاتنا موزعة بشكل استراتيجي لتغطية جميع المناطق</p>
                        </div>
                        <div className="why-area-card">
                            <div className="why-area-icon"><Phone size={70} color='var(--accent)' /></div>
                            <h3>دعم محلي</h3>
                            <p>فريق دعم متخصص لكل منطقة يفهم احتياجاتك</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="areas-cta">
                <div className="cta-content">
                    <h2 className="cta-title">هل منطقتك غير موجودة؟</h2>
                    <p className="cta-description">
                        نحن نتوسع باستمرار لتغطية المزيد من المناطق. اتصل بنا الآن للتأكد من توفر الخدمة في منطقتك.
                    </p>
                    <div className="cta-buttons">
                        <a href={`tel:+2${phoneNumbers[0]}`} className="cta-button primary">
                            اتصل للاستفسار
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

export default Areas;

