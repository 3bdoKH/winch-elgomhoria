import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { articlesAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editingArticle, setEditingArticle] = useState(null);
    const [uploading, setUploading] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        image: '',
        date: new Date().toISOString().split('T')[0],
        author: '',
        category: '',
        tags: '',
        readTime: '',
        featured: false
    });

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            setLoading(true);
            const data = await articlesAPI.getAll();
            setArticles(data);
            setError(null);
        } catch (err) {
            setError('فشل في تحميل المقالات');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setUploading(true);
            const result = await articlesAPI.uploadImage(file);
            setFormData(prev => ({ ...prev, image: result.url }));
        } catch (err) {
            alert('فشل في رفع الصورة');
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const articleData = {
                ...formData,
                tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
                slug: formData.slug || generateSlug(formData.title)
            };

            if (editingArticle) {
                await articlesAPI.update(editingArticle.id, articleData);
            } else {
                await articlesAPI.create(articleData);
                alert('تم إنشاء المقال بنجاح!');
            }

            resetForm();
            fetchArticles();
        } catch (err) {
            alert('فشل في حفظ المقال');
            console.error(err);
        }
    };

    const handleEdit = (article) => {
        setEditingArticle(article);
        setFormData({
            title: article.title,
            slug: article.slug,
            excerpt: article.excerpt,
            content: article.content,
            image: article.image,
            date: article.date,
            author: article.author,
            category: article.category,
            tags: Array.isArray(article.tags) ? article.tags.join(', ') : '',
            readTime: article.read_time || article.readTime,
            featured: article.featured
        });
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('هل أنت متأكد من حذف هذا المقال؟')) return;

        try {
            await articlesAPI.delete(id);
            alert('تم حذف المقال بنجاح!');
            fetchArticles();
        } catch (err) {
            alert('فشل في حذف المقال');
            console.error(err);
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            image: '',
            date: new Date().toISOString().split('T')[0],
            author: '',
            category: '',
            tags: '',
            readTime: '',
            featured: false
        });
        setEditingArticle(null);
        setShowForm(false);
    };

    if (loading) {
        return <div className="admin-loading">جاري التحميل...</div>;
    }

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h1>لوحة تحكم المقالات</h1>
                <div className="admin-header-buttons">
                    <button
                        className="btn-primary"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? 'إلغاء' : 'إضافة مقال جديد'}
                    </button>
                    <button
                        className="btn-logout"
                        onClick={() => {
                            logout();
                            navigate('/admin/login');
                        }}
                    >
                        تسجيل الخروج
                    </button>
                </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            {showForm && (
                <div className="article-form-container">
                    <h2>{editingArticle ? 'تعديل المقال' : 'مقال جديد'}</h2>
                    <form onSubmit={handleSubmit} className="article-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>العنوان *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="عنوان المقال"
                                />
                            </div>

                            <div className="form-group">
                                <label>الرابط (Slug)</label>
                                <input
                                    type="text"
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleInputChange}
                                    placeholder="article-slug (اتركه فارغاً للتوليد التلقائي)"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>المقتطف *</label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleInputChange}
                                required
                                rows="3"
                                placeholder="وصف مختصر للمقال"
                            />
                        </div>

                        <div className="form-group">
                            <label>المحتوى (HTML) *</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                required
                                rows="15"
                                placeholder="محتوى المقال بصيغة HTML"
                                className="content-editor"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>الصورة</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={uploading}
                                />
                                {uploading && <span className="uploading">جاري الرفع...</span>}
                                {formData.image && (
                                    <div className="image-preview">
                                        <img
                                            src={`https://winchenqaz.com${formData.image}`}
                                            alt="Preview"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>التاريخ *</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>الكاتب *</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="اسم الكاتب"
                                />
                            </div>

                            <div className="form-group">
                                <label>التصنيف *</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="التصنيف"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>الوسوم (مفصولة بفواصل)</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleInputChange}
                                    placeholder="وسم1, وسم2, وسم3"
                                />
                            </div>

                            <div className="form-group">
                                <label>وقت القراءة</label>
                                <input
                                    type="text"
                                    name="readTime"
                                    value={formData.readTime}
                                    onChange={handleInputChange}
                                    placeholder="5 دقائق"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="featured"
                                    checked={formData.featured}
                                    onChange={handleInputChange}
                                />
                                مقال مميز
                            </label>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="btn-primary">
                                {editingArticle ? 'تحديث المقال' : 'إنشاء المقال'}
                            </button>
                            <button type="button" className="btn-secondary" onClick={resetForm}>
                                إلغاء
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="articles-list">
                <h2>المقالات ({articles.length})</h2>
                <div className="articles-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>العنوان</th>
                                <th>الكاتب</th>
                                <th>التصنيف</th>
                                <th>التاريخ</th>
                                <th>المشاهدات</th>
                                <th>مميز</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map(article => (
                                <tr key={article.id}>
                                    <td>{article.id}</td>
                                    <td className="article-title-table">{article.title}</td>
                                    <td>{article.author}</td>
                                    <td>{article.category}</td>
                                    <td>{new Date(article.date).toLocaleDateString('ar-EG')}</td>
                                    <td>{article.views}</td>
                                    <td>{article.featured ? '⭐' : '-'}</td>
                                    <td className="actions">
                                        <button
                                            className="btn-edit"
                                            onClick={() => handleEdit(article)}
                                        >
                                            تعديل
                                        </button>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDelete(article.id)}
                                        >
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
