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
          <div className="hero-copy">
            <p className="hero-eyebrow">Estratégia · Qualidade · Resultados</p>
            <h1 className="hero-title">Qualidade de Software com visão estratégica</h1>
            <p className="hero-tagline">
              Transformo qualidade em valor de negócio por meio de testes manuais, automação com Cypress e Playwright + TypeScript,
              validação de APIs, documentação clara, melhoria de processos e colaboração com times técnicos e de produto.
            </p>
            <p className="hero-description">
              QA Engineer estratégico com experiência em automação moderna, redução de incertezas e entrega de soluções confiáveis para projetos críticos.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Ver Portfólio
              </a>
              <a href="#contact" className="btn btn-accent">
                Falar Comigo
              </a>
            </div>

            <div className="hero-highlights">
              <div className="highlight-card">
                <span>Foco em risco e valor</span>
              </div>
              <div className="highlight-card">
                <span>Processos orientados a dados</span>
              </div>
              <div className="highlight-card">
                <span>Entregas com qualidade e confiança</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card panel-primary">
              <div className="panel-title">Visão geral de qualidade</div>
              <div className="panel-grid">
                <div className="panel-item">
                  <span>Testes planejados</span>
                  <strong>1248</strong>
                </div>
                <div className="panel-item">
                  <span>Defeitos encontrados</span>
                  <strong>32</strong>
                </div>
                <div className="panel-item">
                  <span>Indicadores de aprovação</span>
                  <strong>Modelo de processo</strong>
                </div>
                <div className="panel-item">
                  <span>Cobertura de testes</span>
                  <strong>Visão de qualidade</strong>
                </div>
              </div>
            </div>

            <div className="panel-card panel-secondary">
              <div className="panel-title">Pipeline de qualidade</div>
              <ul className="pipeline-list">
                <li>Planejamento de testes</li>
                <li>Execução</li>
                <li>Análise de resultados</li>
                <li>Relatórios e insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

