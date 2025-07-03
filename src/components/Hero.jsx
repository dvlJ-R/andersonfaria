import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-animation"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h1 className="hero-title">
            Anderson Faria
          </h1>
          <h2 className="hero-subtitle">
            QA Engineer | Estratégico | Profissional
          </h2>
          <p className="hero-tagline">
            Delivering Quality Through Innovation
          </p>
          <p className="hero-description">
            Especialista em automação de testes com Cypress, testes de API com Postman, 
            e metodologias ágeis. Transformando qualidade de software em resultados de negócio.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Ver Projetos
            </a>
            <a href="#contact" className="btn btn-accent">
              Entre em Contato
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projetos Testados</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Ferramentas Dominadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

