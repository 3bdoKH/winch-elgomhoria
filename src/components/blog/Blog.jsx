import React, { useState, useEffect } from 'react';
import './Blog.css';
import { articlesAPI } from '../../services/api';
import { Link } from 'react-router-dom';

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

    // Function to format date to Arabic
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('ar-EG', options);
    };

    // Function to get image URL
    const getImageUrl = (image) => {
        if (!image) return '/placeholder-article.jpg';
        if (image.startsWith('/api/')) {
            return `https://winchenqaz.com${image}`;
        }
        return image;
    };

    if (loading) {
        return (
            <section className="blog-section">
                <div className="blog-container">
                    <div className="blog-loading">جاري تحميل المقالات...</div>
                </div>
            </section>
        );
    }

    if (articles.length === 0) {
        return null; // Don't show section if no articles
    }

    return (
        <section className="blog-section">
            <div className="blog-container">
                <div className="blog-header">
                    <h3 className="blog-subtitle">في أي مكان، في أي وقت</h3>
                    <h2 className="blog-title">
                        مدونتنا <span className="highlight">الإخبارية</span>
                    </h2>
                    <div className="blog-divider">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>

                <div className="blog-grid">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            to={`/articles/${article.slug}`}
                            className="blog-card"
                        >
                            <div className="blog-image-wrapper">
                                <img
                                    src={getImageUrl(article.image)}
                                    alt={article.title}
                                    className="blog-image"
                                    onError={(e) => {
                                        e.target.src = '/placeholder-article.jpg';
                                    }}
                                />
                                <div className="blog-image-overlay"></div>
                            </div>
                            <div className="blog-card-content">
                                <h3 className="blog-card-title">{article.title}</h3>
                                <p className="blog-card-excerpt">{article.excerpt}</p>
                                <div className="blog-card-footer">
                                    <span className="blog-date">{formatDate(article.date)}</span>
                                    <span className="blog-author">بواسطة {article.author}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="blog-button-container">
                    <Link to="/articles" className="blog-button">
                        عرض الكل
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;
