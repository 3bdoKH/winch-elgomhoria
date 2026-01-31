import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArticleDetails.css';
import { articlesAPI } from '../../services/api';

const ArticleDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [article, setArticle] = useState(null);
    const [allArticles, setAllArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch article by slug
    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true);
                const data = await articlesAPI.getBySlug(slug);
                setArticle(data);
                setError(null);
            } catch (err) {
                setError('فشل في تحميل المقال');
                console.error('Error fetching article:', err);
                // Redirect to articles page after 2 seconds if article not found
                setTimeout(() => navigate('/articles'), 2000);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug, navigate]);

    // Fetch all articles for sidebar and related articles
    useEffect(() => {
        const fetchAllArticles = async () => {
            try {
                const data = await articlesAPI.getAll();
                setAllArticles(data);
            } catch (err) {
                console.error('Error fetching all articles:', err);
            }
        };

        fetchAllArticles();
    }, []);

    // Get related articles (same category, excluding current)
    const relatedArticles = article && allArticles.length > 0
        ? allArticles
            .filter(a => a.category === article.category && a.id !== article.id)
            .slice(0, 3)
        : [];

    // Format date to Arabic
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ar-EG', options);
    };

    // Loading state
    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '5rem', fontSize: '1.5rem' }}>
                جاري تحميل المقال...
            </div>
        );
    }

    // Error state
    if (error || !article) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#c33',
                background: '#fee',
                margin: '2rem',
                borderRadius: '8px'
            }}>
                {error || 'المقال غير موجود'}
                <p>جاري التحويل إلى صفحة المقالات...</p>
            </div>
        );
    }

    return (
        <div className="article-details-page">
            {/* Article Header */}
            <section className="article-header">
                <div className="article-header-container">
                    <div className="breadcrumb">
                        <a href="/">الرئيسية</a>
                        <span className="separator">/</span>
                        <a href="/articles">المقالات</a>
                        <span className="separator">/</span>
                        <span>{article.category}</span>
                    </div>
                    <h1 className="article-title">{article.title}</h1>
                    <div className="article-meta-bar">
                        <div className="meta-item">
                            <span className="meta-icon">👤</span>
                            <span>{article.author}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">📅</span>
                            <span>{formatDate(article.date)}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">⏱️</span>
                            <span>{article.readTime}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">👁️</span>
                            <span>{article.views} مشاهدة</span>
                        </div>
                        <div className="meta-item category-badge">
                            <span className="meta-icon">📁</span>
                            <span>{article.category}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="article-image-section">
                <div className="article-image-container">
                    <img
                        src={article.image?.startsWith('/api/')
                            ? `https://winchenqaz.com${article.image}`
                            : article.image
                        }
                        alt={article.title}
                        className="article-featured-image"
                    />
                    {article.featured && (
                        <div className="featured-overlay">
                            <span className="featured-badge">⭐ مقال مميز</span>
                        </div>
                    )}
                </div>
            </section>

            {/* Article Content */}
            <section className="article-content-section">
                <div className="article-content-container">
                    <div className="article-main">
                        {/* Excerpt */}
                        <div className="article-excerpt">
                            <p>{article.excerpt}</p>
                        </div>

                        {/* Article Content */}
                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Tags */}
                        <div className="article-tags-section">
                            <h4 className="tags-title">الكلمات المفتاحية:</h4>
                            <div className="article-tags">
                                {article.tags.map((tag, index) => (
                                    <span key={index} className="tag-item">#{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Share Section */}
                        <div className="article-share">
                            <h4 className="share-title">شارك المقال:</h4>
                            <div className="share-buttons">
                                <a
                                    href={`https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-button whatsapp"
                                >
                                    💬 واتساب
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-button facebook"
                                >
                                    f فيسبوك
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="share-button twitter"
                                >
                                    𝕏 تويتر
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="article-sidebar">
                        {/* Author Card */}
                        <div className="author-card">
                            <div className="author-icon">✍️</div>
                            <h4 className="author-name">{article.author}</h4>
                            <p className="author-bio">كاتب متخصص في مجال خدمات السيارات والإنقاذ</p>
                        </div>

                        {/* Quick Contact */}
                        <div className="sidebar-contact">
                            <h4 className="sidebar-title">هل تحتاج مساعدة؟</h4>
                            <p className="sidebar-description">اتصل بنا الآن للحصول على خدمة فورية</p>
                            <a href="tel:+2001055888893" className="sidebar-button">
                                📱 اتصل الآن
                            </a>
                        </div>

                        {/* Categories */}
                        <div className="sidebar-categories">
                            <h4 className="sidebar-title">التصنيفات</h4>
                            <div className="categories-list">
                                {[...new Set(allArticles.map(a => a.category))].map((cat, index) => (
                                    <div key={index} className="category-item">
                                        <span>{cat}</span>
                                        <span className="cat-count">
                                            ({allArticles.filter(a => a.category === cat).length})
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Popular Tags */}
                        <div className="sidebar-tags">
                            <h4 className="sidebar-title">الكلمات الشائعة</h4>
                            <div className="popular-tags">
                                {[...new Set(allArticles.flatMap(a => a.tags))].slice(0, 10).map((tag, index) => (
                                    <span key={index} className="popular-tag">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="related-articles">
                    <div className="related-container">
                        <h3 className="related-title">مقالات ذات صلة</h3>
                        <div className="related-grid">
                            {relatedArticles.map((relatedArticle) => (
                                <a
                                    key={relatedArticle.id}
                                    href={`/articles/${relatedArticle.slug}`}
                                    className="related-card"
                                >
                                    <div className="related-image">
                                        <img
                                            src={relatedArticle.image?.startsWith('/uploads/')
                                                ? `https://winchenqaz.com${relatedArticle.image}`
                                                : relatedArticle.image
                                            }
                                            alt={relatedArticle.title}
                                        />
                                    </div>
                                    <div className="related-content">
                                        <h4 className="related-card-title">{relatedArticle.title}</h4>
                                        <p className="related-excerpt">{relatedArticle.excerpt}</p>
                                        <div className="related-meta">
                                            <span>📅 {formatDate(relatedArticle.date)}</span>
                                            <span>⏱️ {relatedArticle.readTime}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <a href="/articles" className="view-all-articles">عرض جميع المقالات ←</a>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="article-cta">
                <div className="cta-content">
                    <h2 className="cta-title">هل استفدت من هذا المقال؟</h2>
                    <p className="cta-description">
                        تواصل معنا الآن إذا كنت بحاجة إلى أي من خدماتنا. نحن متاحون 24/7 لخدمتك.
                    </p>
                    <div className="cta-buttons">
                        <a href="tel:+2001055888893" className="cta-button primary">
                            اتصل بنا: 01055888893
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

export default ArticleDetails;

