const API_URL = process.env.REACT_APP_API_URL || 'https://winchenqaz.com/api';

export const articlesAPI = {
    // Get all articles
    getAll: async () => {
        const response = await fetch(`${API_URL}/articles`);
        if (!response.ok) throw new Error('Failed to fetch articles');
        return response.json();
    },

    // Get single article by ID
    getById: async (id) => {
        const response = await fetch(`${API_URL}/articles/${id}`);
        if (!response.ok) throw new Error('Failed to fetch article');
        return response.json();
    },

    // Get article by slug
    getBySlug: async (slug) => {
        const response = await fetch(`${API_URL}/articles/slug/${slug}`);
        if (!response.ok) throw new Error('Failed to fetch article');
        return response.json();
    },

    // Create new article
    create: async (article) => {
        const response = await fetch(`${API_URL}/articles`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(article)
        });
        if (!response.ok) throw new Error('Failed to create article');
        return response.json();
    },

    // Update article
    update: async (id, article) => {
        const response = await fetch(`${API_URL}/articles/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(article)
        });
        if (!response.ok) throw new Error('Failed to update article');
        return response.json();
    },

    // Delete article
    delete: async (id) => {
        const response = await fetch(`${API_URL}/articles/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete article');
        return response.json();
    },

    // Upload image
    uploadImage: async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) throw new Error('Failed to upload image');
        return response.json();
    }
};
