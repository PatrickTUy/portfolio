import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="h-full w-[100%]">
      <TopBar />
      <div className="sections w-full">
        <Home />
        <About />
        <Work />
        <Blog />
        <Contact />
        <BlogPage />
      </div>
     
    </div>
  );
}

export default App;
