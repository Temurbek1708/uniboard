import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Fetch posts from the backend
const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/posts'); // API to fetch posts
    return response.data;
  } catch (err) {
    console.error('Error fetching posts', err);
    return [];
  }
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  // Check for authentication and roles on page load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const loadData = async () => {
      const allPosts = await fetchPosts();
      setPosts(allPosts);

      const uniqueCategories = [...new Set(allPosts.map(post => post.category))];
      setCategories(uniqueCategories);
    };

    loadData();
  }, [navigate]);

  // Filter posts based on selected category
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <div>
      <h1>University Blog</h1>

      {/* Category filter */}
      <div>
        <h3>Filter by Category:</h3>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display posts */}
      <div>
        {filteredPosts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p><strong>Category:</strong> {post.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;