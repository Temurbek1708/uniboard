// src/components/CreateUser.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/users',
        { firstname, lastname, email, password, role },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert('User created successfully');
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setRole('STUDENT');
    } catch (err) {
      setError('Error creating user');
    }
  };

  return (
    <div>
      <h2>Create New User</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;