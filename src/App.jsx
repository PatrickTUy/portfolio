import React, { useState, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SinglePage from './SinglePage';
import Blogs from './pages/BlogsPage';
import BlogPage from './pages/BlogPage';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/single" element={<BlogPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
