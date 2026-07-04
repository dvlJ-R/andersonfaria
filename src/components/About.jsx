import React from 'react';
import { experienceTimeline, quickFacts } from '../content/experience';
import { profile } from '../content/profile';
import './About.css';

const About = () => {
  const { about } = profile;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">{about.title}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="about-description">
                {paragraph}
              </p>
            ))}

            <div className="about-highlights">
              <h3>{about.highlightsTitle}</h3>
              <ul>
                {about.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="profile-circle">
                <span>{profile.initials}</span>
              </div>
            </div>
            <div className="about-facts-card">
              <h3>Quick facts</h3>
              <ul>
                {quickFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline">
          <h3 className="timeline-title">Experience Snapshot</h3>
          <div className="timeline-container">
            {experienceTimeline.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.period}</div>
                  <h4 className="timeline-job-title">{item.role}</h4>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
