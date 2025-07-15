import React from 'react';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;