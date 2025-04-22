import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateCategory from './components/CreateCategory';
import CreatePost from './components/CreatePost';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import PostPage from './components/PostPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-category" element={<CreateCategory />} />
      </Routes>
    </Router>
  );
}

export default App;