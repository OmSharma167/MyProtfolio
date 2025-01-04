import React, { useState } from 'react';

const BlogPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    fullContent: '',
    readTime: '',
    tags: [],
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData(prev => ({
      ...prev,
      tags
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        if (key === 'tags') {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      images.forEach(image => {
        formDataToSend.append('images', image);
      });

      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to create blog post');
      }

      setSuccess(true);
      setFormData({
        title: '',
        excerpt: '',
        fullContent: '',
        readTime: '',
        tags: [],
      });
      setImages([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Create New Blog Post</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Title
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                required
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Excerpt
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                rows="3"
                required
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Full Content
              <textarea
                name="fullContent"
                value={formData.fullContent}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                rows="6"
                required
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Read Time (minutes)
              <input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                required
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Tags (comma-separated)
              <input
                type="text"
                value={formData.tags.join(', ')}
                onChange={handleTagChange}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
                placeholder="e.g. JavaScript, React, Web Development"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Images
              <input
                type="file"
                onChange={handleImageChange}
                multiple
                accept="image/*"
                className="mt-1 block w-full p-2"
              />
            </label>
            <p className="text-sm text-gray-500 mt-1">First image will be used as cover image</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 text-green-700 p-3 rounded">
              Blog post created successfully!
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white rounded py-2 px-4 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Creating Post...' : 'Create Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPostForm;