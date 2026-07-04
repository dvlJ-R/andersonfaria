import React from 'react';
import { aiAssistedWorkflow } from '../content/aiAssistedWorkflow';
import './Blog.css';

const Blog = () => {
  return (
    <section id="labs" className="ai-lab">
      <div className="container">
        <div className="ai-lab-header">
          <p className="section-eyebrow">Learning lab</p>
          <h2 className="section-title text-center">{aiAssistedWorkflow.title}</h2>
          <p className="section-subtitle text-center">{aiAssistedWorkflow.subtitle}</p>
        </div>

        <div className="ai-lab-layout">
          <article className="ai-lab-main">
            <span className="lab-status">Workflow case study</span>
            <p>{aiAssistedWorkflow.summary}</p>
            <p className="lab-disclaimer">{aiAssistedWorkflow.disclaimer}</p>
          </article>

          <aside className="ai-lab-artifacts" aria-label="Related artifacts">
            <h3>Traceable artifacts</h3>
            <ul>
              {aiAssistedWorkflow.artifacts.map((artifact) => (
                <li key={artifact.path}>
                  <span>{artifact.label}</span>
                  <code>{artifact.path}</code>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="ai-lab-grid">
          <div className="ai-lab-panel">
            <h3>How I use AI</h3>
            <ul>
              {aiAssistedWorkflow.methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </div>

          <div className="ai-lab-panel">
            <h3>Skills demonstrated</h3>
            <div className="lab-skill-tags">
              {aiAssistedWorkflow.demonstratedSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
