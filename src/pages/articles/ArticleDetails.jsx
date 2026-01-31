import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ArticleDetails.css';
import { articlesAPI } from '../../services/api';
import { phoneNumbers } from '../../data/phoneNumbers';
import {
    Calendar, User, Clock, Share2, MessageCircle, Phone,
    ChevronLeft, ChevronRight, Tag, Bookmark, Facebook,
    Twitter, Link as LinkIcon, ArrowRight
} from 'lucide-react';

const ArticleDetails = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [allArticles, setAllArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [targetArticle, others] = await Promise.all([
                    articlesAPI.getBySlug(slug),
                    articlesAPI.getAll()
                ]);
                setArticle(targetArticle);
                setAllArticles(others.filter(a => a.id !== targetArticle?.id).slice(0, 5));
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        window.scrollTo(0, 0);
    }, [slug]);

    const shareUrl = window.location.href;

    if (loading) {
        return (
            <div className="article-loading-screen">
                <div className="loader"></div>
                <p>جاري تحميل المقال...</p>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="article-not-found">
                <h2>عذراً، لم يتم العثور على المقال</h2>
                <Link to="/articles" className="back-btn">العودة للمقالات</Link>
            </div>
        );
    }

    return (
        <div className="article-details-page">
            <Helmet>
                <title>{article.title} - ونش إنقاذ الجمهورية</title>
                <meta name="description" content={article.excerpt || article.content.substring(0, 160)} />
                <meta property="og:title" content={`${article.title} | ونش انقاذ`} />
                <meta property="og:description" content={article.excerpt} />
                <meta property="og:image" content={article.image} />
                <meta property="og:type" content="article" />
                <link rel="canonical" href={shareUrl} />
            </Helmet>

            {/* Article Hero */}
            <header className="article-hero" style={article.image ? { backgroundImage: `url(${article.image})` } : {}}>
                <div className="article-hero-overlay"></div>
                <div className="article-hero-container">
                    <div className="article-hero-content">
                        <div className="article-meta">
                            <span className="category-badge">نصائح وإرشادات</span>
                            <span className="meta-item"><Calendar size={16} /> {new Date().toLocaleDateString('ar-EG')}</span>
                            <span className="meta-item"><Clock size={16} /> 5 دقائق قراءة</span>
                        </div>
                        <h1 className="article-main-title">{article.title}</h1>
                        <nav className="article-breadcrumb">
                            <Link to="/">الرئيسية</Link>
                            <span className="separator">/</span>
                            <Link to="/articles">المقالات</Link>
                            <span className="separator">/</span>
                            <span>{article.title}</span>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="article-content-section">
                <div className="article-container">
                    <div className="article-grid">
                        <article className="article-body">
                            <div className="content-rich" dangerouslySetInnerHTML={{ __html: article.content }}></div>

                            <div className="article-share-footer">
                                <div className="share-box">
                                    <span>مشاركة المقال:</span>
                                    <div className="share-buttons">
                                        <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)} className="share-btn fb"><Facebook size={18} /></button>
                                        <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`)} className="share-btn tw"><Twitter size={18} /></button>
                                        <button onClick={() => { navigator.clipboard.writeText(shareUrl); alert('تم نسخ الرابط'); }} className="share-btn copy"><LinkIcon size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="article-sidebar">
                            <div className="sidebar-widget promo-widget">
                                <h3 className="widget-title">احتاج ونش الآن؟</h3>
                                <p>خدمة سريعة في أقل من 20 دقيقة وبأفضل الأسعار في جميع المحافظات.</p>
                                <a href={`tel:+2${phoneNumbers[0]}`} className="sidebar-call-btn">
                                    <Phone size={18} />
                                    {phoneNumbers[0]}
                                </a>
                                <div className="emergency-badge">متاح 24 ساعة</div>
                            </div>

                            <div className="sidebar-widget">
                                <h3 className="widget-title">مقالات قد تهمك</h3>
                                <div className="related-mini-list">
                                    {allArticles.map(item => (
                                        <Link key={item.id} to={`/articles/${item.slug}`} className="mini-card">
                                            <div className="mini-thumb">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className="mini-content">
                                                <h4>{item.title}</h4>
                                                <span className="mini-date"><Calendar size={12} /> {new Date().toLocaleDateString('ar-EG')}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="sidebar-widget tags-widget">
                                <h3 className="widget-title">كلمات دلالية</h3>
                                <div className="tags-cloud">
                                    <span className="tag">#ونش_انقاذ</span>
                                    <span className="tag">#انقاذ_سيارات</span>
                                    <span className="tag">#طوارئ_الطرق</span>
                                    <span className="tag">#نقل_سيارات</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            {/* Bottom Section */}
            <section className="more-articles">
                <div className="more-articles-container">
                    <div className="section-header">
                        <h2 className="section-title">إقرأ <span className="highlight">أيضاً</span></h2>
                        <Link to="/articles" className="view-all-link">المزيد من المقالات <ArrowRight size={18} /></Link>
                    </div>
                    <div className="bottom-articles-grid">
                        {allArticles.slice(0, 3).map(item => (
                            <Link key={item.id} to={`/articles/${item.slug}`} className="bottom-article-card">
                                <div className="card-media">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="card-details">
                                    <h3>{item.title}</h3>
                                    <p>{item.excerpt?.substring(0, 80)}...</p>
                                    <span className="read-more">اقرأ المزيد ←</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArticleDetails;
