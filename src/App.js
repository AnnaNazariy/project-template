import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Workspace from './components/Workspace';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Workspace />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
