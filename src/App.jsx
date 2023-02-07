import React from 'react';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="h-full w-full">
      <TopBar />
      <div className="sections">
        <Home />
        <About />
        <Work />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
