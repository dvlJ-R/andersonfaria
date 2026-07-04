import React, { useEffect, useState } from 'react';
import { profile } from '../content/profile';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { hero } = profile;

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
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-tagline">{hero.tagline}</p>
            <p className="hero-description">{hero.description}</p>

            <div className="hero-actions">
              {hero.ctas.map((cta) => (
                <a key={cta.label} href={cta.href} className={`btn btn-${cta.variant}`}>
                  {cta.label}
                </a>
              ))}
            </div>

            <div className="hero-highlights">
              {hero.badges.map((badge) => (
                <div key={badge} className="highlight-card">
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card panel-primary">
              <div className="panel-title">Quality focus</div>
              <div className="panel-grid">
                {hero.qualityFocus.map((item) => (
                  <div key={item.label} className="panel-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-card panel-secondary">
              <div className="panel-title">How quality moves</div>
              <ul className="pipeline-list">
                {hero.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
