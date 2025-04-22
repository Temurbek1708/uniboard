// src/components/PostPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostPage = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories on page load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/categories/');
        setCategories(response.data);
      } catch (err) {
        setError('Error fetching categories.');
      }
    };

    fetchCategories();
  }, []);

  // Fetch posts by category when a category is selected
  const fetchPostsByCategory = async (categoryId) => {
    setSelectedCategory(categoryId); // Save the selected category
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/posts/category/${categoryId}`);
      setPosts(response.data); // Set the posts to state
    } catch (err) {
      setError('Error fetching posts for the selected category.');
    }
  };

  return (
    <div>
      <h2>Post Page</h2>

      {/* Display Categories */}
      <div>
        <h3>Categories</h3>
        {categories.length > 0 ? (
          <ul>
            {categories.map((category) => (
              <li key={category.id} onClick={() => fetchPostsByCategory(category.id)}>
                {category.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No categories found.</p>
        )}
      </div>

      {/* Display Posts */}
      <div>
        <h3>Posts</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default PostPage;