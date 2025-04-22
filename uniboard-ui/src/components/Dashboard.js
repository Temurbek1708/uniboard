import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const roles = JSON.parse(localStorage.getItem('roles')); // Get roles from localStorage

  const handleCreatePost = () => {
    navigate('/create-post');
  };

  const handleCreateUser = () => {
    navigate('/create-user');
  };

  const handleCreateCategory = () => {
    navigate('/create-category');
  };

  const handlePosts = () => {
    navigate('/posts');
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>Choose an action:</p>
      {roles && roles.includes('ROLE_ADMIN') && (
        <>
          <button onClick={handleCreatePost}>Create Post</button>
          <button onClick={handleCreateUser}>Create User</button>
          <button onClick={handleCreateCategory}>Create Category</button>
          <button onClick={handlePosts}>Get Posts</button>
        </>
      )}
      {!roles?.includes('ROLE_ADMIN') && <p>You do not have admin rights to create posts, users, or categories.</p>}
    </div>
  );
};

export default Dashboard;