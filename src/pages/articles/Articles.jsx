import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Articles.css';
import heroBackground from '../../media/hero-background.png';
import { articlesAPI } from '../../services/api';
import { Car, Wrench, Zap, Truck, Book, FileText, Search, Calendar, Clock, ArrowRight, Eye, Tag } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchArticles = async () => {
            try {
                setLoading(true);
                const data = await articlesAPI.getAll();
                setArticles(data || []);
                setError(null);
            } catch (err) {
                setError('فشل في تحميل المقالات. يرجى المحاولة مرة أخرى.');
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    const categories = ['all', ...new Set(articles.map(article => article.category))];

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const getCategoryIcon = (category) => {
        const icons = {
            'خدمات الإنقاذ': <Car size={16} />,
            'صيانة السيارات': <Wrench size={16} />,
            'خدمات الطوارئ': <Zap size={16} />,
            'نقل المعدات': <Truck size={16} />,
            'دليل إرشادي': <Book size={16} />,
        };
        return icons[category] || <FileText size={16} />;
    };

    return (
        <div className="articles-v2">
            <Helmet>
                <title>مدونة الإنقاذ | ونش إنقاذ الجمهورية - نصائح وأخبار</title>
                <meta name="description" content="اقرأ أحدث النصائح والمقالات حول صيانة السيارات، وكيفية التصرف في حالات الطوارئ، وأخبار خدماتنا في كافة المحافظات." />
            </Helmet>

            {/* Hero Section */}
            <section className="articles-hero-v2" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="hero-overlay-v2"></div>
                <div className="container-v2">
                    <div className="hero-content-v2">
                        <div className="breadcrumb-v2">
                            <a href="/">الرئيسية</a>
                            <span>/</span>
                            <span>المدونة</span>
                        </div>
                        <h1 className="hero-title-v2">مركز <span className="highlight">المعرفة</span></h1>
                        <p className="hero-subtitle-v2">دليلك الكامل للأمان على الطريق وأحدث حلول إنقاذ السيارات في مصر</p>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="articles-layout-v2">
                <div className="container-v2">
                    <div className="layout-grid-v2">
                        {/* Sidebar/Filters */}
                        <aside className="articles-sidebar-v2">
                            <div className="sidebar-widget-v2">
                                <h3>البحث</h3>
                                <div className="search-wrap-v2">
                                    <input
                                        type="text"
                                        placeholder="عن ماذا تبحث؟"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Search size={20} className="s-icon-v2" />
                                </div>
                            </div>

                            <div className="sidebar-widget-v2">
                                <h3>التصنيفات</h3>
                                <div className="category-list-v2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            className={selectedCategory === cat ? 'active' : ''}
                                            onClick={() => setSelectedCategory(cat)}
                                        >
                                            {cat === 'all' ? 'جميع المقالات' : cat}
                                            <span>{cat === 'all' ? articles.length : articles.filter(a => a.category === cat).length}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="sidebar-widget-v2 emergency-widget-v2">
                                <h3>هل تحتاج مساعدة؟</h3>
                                <p>فريقنا متاح 24/7 للرد على اتصالاتكم وتقديم الدعم الفوري.</p>
                                <a href={`tel:+2${phoneNumbers[0]}`} className="btn-call-sidebar-v2">
                                    {phoneNumbers[0]}
                                    <Clock size={18} />
                                </a>
                            </div>
                        </aside>

                        {/* Main Stream */}
                        <main className="articles-main-v2">
                            {loading ? (
                                <div className="loader-v2">
                                    <div className="spinner"></div>
                                    <p>جاري تحميل المقالات...</p>
                                </div>
                            ) : error ? (
                                <div className="error-box-v2">{error}</div>
                            ) : filteredArticles.length > 0 ? (
                                <div className="articles-grid-v2">
                                    {filteredArticles.map(article => (
                                        <article key={article.id} className="article-card-v2">
                                            <a href={`/articles/${article.slug}`} className="card-image-v2">
                                                <img
                                                    src={article.image?.startsWith('/api/')
                                                        ? `https://winchenqaz.com${article.image}`
                                                        : article.image
                                                    }
                                                    alt={article.title}
                                                />
                                                <div className="category-tag-v2">
                                                    {getCategoryIcon(article.category)}
                                                    {article.category}
                                                </div>
                                            </a>
                                            <div className="card-body-v2">
                                                <div className="card-meta-v2">
                                                    <span><Calendar size={14} /> {formatDate(article.date)}</span>
                                                    <span><Eye size={14} /> {article.views} مشاهدة</span>
                                                </div>
                                                <h2 className="card-title-v2">
                                                    <a href={`/articles/${article.slug}`}>{article.title}</a>
                                                </h2>
                                                <p className="card-excerpt-v2">{article.excerpt}</p>
                                                <div className="card-footer-v2">
                                                    <a href={`/articles/${article.slug}`} className="btn-read-more-v2">
                                                        اقرأ المزيد
                                                        <ArrowRight size={16} />
                                                    </a>
                                                    <div className="card-tags-v2">
                                                        {article.tags.slice(0, 2).map(tag => (
                                                            <span key={tag}><Tag size={12} /> {tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-results-v2">
                                    <Search size={80} strokeWidth={1} />
                                    <h2>لا توجد نتائج!</h2>
                                    <p>لم نجد أي مقالات تطابق بحثك حالياً.</p>
                                    <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} className="btn-reset-v2">إظهار كافة المقالات</button>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <section className="blog-cta-v2">
                <div className="container-v2">
                    <div className="b-cta-card-v2">
                        <div className="b-cta-content-v2">
                            <h2>كن دائماً <span className="highlight">بأمان</span> على الطريق</h2>
                            <p>نحن لا نقدم خدمة إنقاذ فحسب، بل نهتم بسلامتك وتثقيفك مرورياً لتجنب المخاطر.</p>
                            <div className="b-cta-btns-v2">
                                <a href={`tel:+2${phoneNumbers[0]}`} className="primary-btn-v2">اتصل بنا الآن</a>
                                <a href="/services" className="secondary-btn-v2">استعرض خدماتنا</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticlesPage;
