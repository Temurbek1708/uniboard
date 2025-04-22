import React, { use, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/signin', {
        email,
        password
      });
  
      const { accessToken, user } = response.data;
  
      // Extract role names from the user.roles array
      const roleNames = user.roles.map(role => role.name);
  
      // Save token and roles to localStorage (or sessionStorage)
      localStorage.setItem('token', accessToken);
      localStorage.setItem('userId', user.id);
      localStorage.setItem('roles', JSON.stringify(roleNames));
  
      // Redirect user based on their role
      if (roleNames.includes('ROLE_ADMIN')) {
        navigate('/dashboard');;
      } else {
        navigate('/posts');
      }
  
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;