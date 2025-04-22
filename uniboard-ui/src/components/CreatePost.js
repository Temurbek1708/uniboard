import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [authorId, setAuthorId] = useState([]);
  const [error, setError] = useState('');
  
  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/categories/');
        setCategories(response.data);  // Assuming categories are returned as an array
      } catch (err) {
        setError('Error fetching categories');
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/posts',
        { title, content, categoryId, authorId },
      );
      alert('Post created successfully');
      setTitle('');
      setContent('');
      setCategoryId('');
      setAuthorId('');
    } catch (err) {
      setError('Error creating post');
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
              setAuthorId(localStorage.getItem('userId'))
            }}
            required
          />
        </div>
        <div>
          <label>Category</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;