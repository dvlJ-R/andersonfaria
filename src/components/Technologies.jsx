import React from 'react';
import { skillCategories } from '../content/skills';
import './Technologies.css';

const Technologies = () => {
  return (
    <section id="technologies" className="core-skills">
      <div className="container">
        <div className="core-skills-header">
          <p className="section-eyebrow">Core skills</p>
          <h2 className="section-title text-center">QA skills organized by how they create value</h2>
          <p className="section-subtitle text-center">
            A practical view of the tools, testing practices and collaboration habits I use to help teams make software more reliable.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article key={category.title} className="skill-category-card">
              <div className="skill-category-header">
                <div>
                  <h3>{category.title}</h3>
                  <span className="skill-level">{category.level}</span>
                </div>
              </div>

              <p className="skill-category-description">{category.description}</p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
