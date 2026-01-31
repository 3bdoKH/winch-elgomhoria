import React, { useState, useEffect } from 'react';
import './Articles.css';
import heroBackground from '../../media/hero-background.png';
import { articlesAPI } from '../../services/api';
import { Car, Wrench, Zap, Truck, Book, FileText, Search, Calendar, Clock, Pen, Eye } from 'lucide-react';
import { phoneNumbers } from '../../data/phoneNumbers';

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch articles from API
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                const data = await articlesAPI.getAll();
                setArticles(data);
                setError(null);
            } catch (err) {
                setError('فشل في تحميل المقالات. يرجى المحاولة مرة أخرى.');
                console.error('Error fetching articles:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Get unique categories
    const categories = ['all', ...new Set(articles.map(article => article.category))];

    // Filter articles
    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Format date to Arabic
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ar-EG', options);
    };

    // Get category display name
    const getCategoryIcon = (category) => {
        const icons = {
            'خدمات الإنقاذ': <Car color='var(--accent)' style={{ marginBottom: '-6px' }} />,
            'صيانة السيارات': <Wrench color='var(--accent)' style={{ marginBottom: '-6px' }} />,
            'خدمات الطوارئ': <Zap color='var(--accent)' style={{ marginBottom: '-6px' }} />,
            'نقل المعدات': <Truck color='var(--accent)' style={{ marginBottom: '-6px' }} />,
            'دليل إرشادي': <Book color='var(--accent)' style={{ marginBottom: '-6px' }} />,
        };
        return icons[category] || <FileText color='var(--accent)' />;
    };

    return (
        <div className="articles-page">
            {/* Hero Section */}
            <section className="articles-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
                <div className="articles-hero-overlay"></div>
                <div className="articles-hero-content">
                    <h1 className="articles-hero-title">مدونتنا <span className="highlight">الإخبارية</span></h1>
                    <p className="articles-hero-subtitle">أحدث المقالات والنصائح حول خدمات إنقاذ السيارات</p>
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <span>المقالات</span>
                    </div>
                </div>
            </section>

            {/* Loading State */}
            {loading && (
                <div style={{ textAlign: 'center', padding: '3rem', fontSize: '1.5rem' }}>
                    جاري تحميل المقالات...
                </div>
            )}

            {/* Error State */}
            {error && (
                <div style={{
                    textAlign: 'center',
                    padding: '2rem',
                    color: '#c33',
                    background: '#fee',
                    margin: '2rem',
                    borderRadius: '8px'
                }}>
                    {error}
                </div>
            )}

            {/* Content - only show if not loading */}
            {!loading && !error && (
                <>

                    {/* Stats Section */}
                    <section className="articles-stats">
                        <div className="stats-container">
                            <div className="stat-item">
                                <div className="stat-number">{articles.length}</div>
                                <div className="stat-label">مقال منشور</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{categories.length - 1}</div>
                                <div className="stat-label">تصنيف</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">{articles.filter(a => a.featured).length}</div>
                                <div className="stat-label">مقال مميز</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">32K+</div>
                                <div className="stat-label">مشاهدة</div>
                            </div>
                        </div>
                    </section>

                    {/* Filter Section */}
                    <section className="articles-filter">
                        <div className="filter-container">
                            {/* Search Bar */}
                            <div className="search-box">
                                <input
                                    type="text"
                                    placeholder="ابحث عن مقال..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                />
                                <span className="search-icon"><Search color='var(--accent)' /></span>
                            </div>

                            {/* Category Filters */}
                            <div className="category-filters">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category === 'all' ? 'الكل' : category}
                                        {category !== 'all' && (
                                            <span className="category-count">
                                                ({articles.filter(a => a.category === category).length})
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Articles Grid */}
                    <section className="articles-grid-section">
                        <div className="articles-container">
                            {filteredArticles.length > 0 ? (
                                <div className="articles-grid">
                                    {filteredArticles.map((article) => (
                                        <a
                                            key={article.id}
                                            href={`/articles/${article.slug}`}
                                            className="article-card"
                                        >
                                            {article.featured && (
                                                <div className="featured-badge">مميز ⭐</div>
                                            )}
                                            <div className="article-image-wrapper">
                                                <img
                                                    src={article.image?.startsWith('/api/')
                                                        ? `https://winchenqaz.com${article.image}`
                                                        : article.image
                                                    }
                                                    alt={article.title}
                                                    className="article-image"
                                                />
                                                <div className="article-image-overlay"></div>
                                                <div className="article-category-badge">
                                                    <span className="category-icon">{getCategoryIcon(article.category)}</span>
                                                    <span>{article.category}</span>
                                                </div>
                                            </div>
                                            <div className="article-card-content">
                                                <div className="article-meta">
                                                    <span className="article-date"><Calendar color='var(--accent)' /> {formatDate(article.date)}</span>
                                                    <span className="article-read-time"><Clock color='var(--accent)' /> {article.readTime}</span>
                                                </div>
                                                <h3 className="article-card-title">{article.title}</h3>
                                                <p className="article-card-excerpt">{article.excerpt}</p>
                                                <div className="article-card-footer">
                                                    <div className="article-author">
                                                        <span className="author-icon"><Pen color='var(--accent)'
                                                            style={
                                                                {
                                                                    marginBottom: '-9px'
                                                                }
                                                            }
                                                        /></span>
                                                        <span>{article.author}</span>
                                                    </div>
                                                    <div className="article-views">
                                                        <span className="views-icon"><Eye color='var(--accent)'
                                                            style={
                                                                {
                                                                    marginBottom: '-6px'
                                                                }
                                                            }
                                                        /></span>
                                                        <span>{article.views}</span>
                                                    </div>
                                                </div>
                                                <div className="article-tags">
                                                    {article.tags.slice(0, 3).map((tag, index) => (
                                                        <span key={index} className="tag-badge">#{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <div className="no-results">
                                    <div className="no-results-icon"><Search color='var(--accent)' /></div>
                                    <h3>لم يتم العثور على نتائج</h3>
                                    <p>جرب تغيير كلمات البحث أو التصنيف</p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="articles-cta">
                        <div className="cta-content">
                            <h2 className="cta-title">هل لديك استفسار؟</h2>
                            <p className="cta-description">
                                تواصل معنا الآن وسنكون سعداء بالإجابة على جميع أسئلتك حول خدماتنا.
                            </p>
                            <div className="cta-buttons">
                                <a href={`tel:+2${phoneNumbers[0]}`} className="cta-button primary">
                                    اتصل بنا
                                </a>
                                <a href="/contact" className="cta-button secondary">
                                    أرسل رسالة
                                </a>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default ArticlesPage;
