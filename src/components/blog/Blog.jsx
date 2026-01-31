import React, { useState, useEffect } from 'react';
import './Blog.css';
import { articlesAPI } from '../../services/api';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const data = await articlesAPI.getAll();
            // Get only featured articles or first 3
            const featured = data.filter(article => article.featured).slice(0, 3);
            setArticles(featured.length >= 3 ? featured : data.slice(0, 3));
        } catch (error) {
            console.error('Error fetching articles:', error);
            setArticles([]);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ar-EG', options);
    };

    const getImageUrl = (image) => {
        if (!image) return '/placeholder-article.jpg';
        if (image.startsWith('/api/')) {
            return `https://winchenqaz.com${image}`;
        }
        return image;
    };

    if (loading || articles.length === 0) return null;

    return (
        <section className="blog-v2">
            <div className="blog-container">
                <div className="section-header centered">
                    <div className="header-meta">
                        <span className="dot"></span>
                        <h4 className="sub-title">آخر الأخبار</h4>
                    </div>
                    <h2 className="main-title">
                        مدونتنا <span className="highlight">الإخبارية</span>
                    </h2>
                    <p className="section-description">
                        نصائح وإرشادات هامة للحفاظ على سلامتك وسلامة سيارتك على الطريق
                    </p>
                </div>

                <div className="blog-grid-v2">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            to={`/articles/${article.slug}`}
                            className="blog-card-v2"
                        >
                            <div className="blog-img-wrapper">
                                <img
                                    src={getImageUrl(article.image)}
                                    alt={article.title}
                                    className="blog-img"
                                    onError={(e) => {
                                        e.target.src = '/placeholder-article.jpg';
                                    }}
                                />
                                <div className="blog-category">نصائح الطريق</div>
                            </div>

                            <div className="blog-info-v2">
                                <div className="blog-meta-v2">
                                    <div className="meta-item-v2">
                                        <Calendar size={14} />
                                        <span>{formatDate(article.date)}</span>
                                    </div>
                                    <div className="meta-item-v2">
                                        <User size={14} />
                                        <span>{article.author}</span>
                                    </div>
                                </div>
                                <h3 className="blog-card-title-v2">{article.title}</h3>
                                <p className="blog-card-excerpt-v2">{article.excerpt}</p>
                                <div className="blog-read-more">
                                    <span>اقرأ المزيد</span>
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="blog-footer">
                    <Link to="/articles" className="btn-all-posts">
                        تصفح جميع المقالات
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
