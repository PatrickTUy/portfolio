import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Hamburger from './components/hamburger/Hamburger';
import './app.scss';
function App() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="app">
      <Topbar changeStateInParent={() => setIsTrue(!isTrue)} />
      <Hamburger statusBar={isTrue} />
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
