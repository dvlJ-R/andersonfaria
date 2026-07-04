import React from 'react';
import { qualityApproach } from '../content/skills';
import './Services.css';

const Services = () => {
  return (
    <section id="quality-approach" className="quality-approach">
      <div className="container">
        <div className="quality-approach-header">
          <p className="section-eyebrow">{qualityApproach.eyebrow}</p>
          <h2 className="section-title text-center">{qualityApproach.title}</h2>
          <p className="section-subtitle text-center">{qualityApproach.subtitle}</p>
        </div>

        <div className="approach-grid">
          {qualityApproach.steps.map((step, index) => (
            <article key={step.title} className="approach-card">
              <span className="approach-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
