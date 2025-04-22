// src/components/CreateCategory.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log(token)

    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/categories',
        { name, description },
      );
      alert('Category created successfully');
      setName('');
      setDescription('');
    } catch (err) {
      setError('Error creating category');
    }
  };

  return (
    <div>
      <h2>Create New Category</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default CreateCategory;