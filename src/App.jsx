import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <MarketInsights />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

