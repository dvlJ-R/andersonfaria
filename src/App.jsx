import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technologies from './components/Technologies';
import MarketInsights from './components/MarketInsights';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Technologies />
          <MarketInsights />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}

export default App;

