import React, { useCallback, useEffect, useState } from 'react';
import { caseStudies, caseStudiesIntro } from '../content/caseStudies';
import './Projects.css';

const getStatusClass = (status) =>
  status
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const closeModal = useCallback(() => {
    setActiveProject(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, closeModal]);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-eyebrow">{caseStudiesIntro.eyebrow}</span>
        <h2 className="section-title text-center">{caseStudiesIntro.title}</h2>
        <p className="section-subtitle text-center">{caseStudiesIntro.subtitle}</p>

        <div className="case-study-focus-list" aria-label="Case study focus areas">
          {caseStudiesIntro.focusTags.map((tag) => (
            <span key={tag} className="case-study-focus-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="projects-grid">
          {caseStudies.map((project) => (
            <article key={project.title} className={`project-card ${project.category.toLowerCase()}`}>
              <div className="project-header">
                <div className="project-image" aria-hidden="true">
                  <span className="project-icon">{project.visual}</span>
                </div>
                <div className="project-meta">
                  <span className={`project-status ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortSummary}</p>
                <div className="case-study-tools-preview" aria-label="Main tools">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <button className="project-btn" type="button" onClick={() => openModal(project)}>
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-summary">
          <div className="summary-stats">
            {caseStudiesIntro.pillars.map((pillar) => (
              <div key={pillar.value} className="stat-item">
                <span className="stat-number">{pillar.value}</span>
                <span className="stat-label">{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeProject && (
        <div className="project-modal-overlay" onClick={handleOverlayClick}>
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="modal-header">
              <div className="modal-title-group">
                <div className="modal-icon" aria-hidden="true">
                  {activeProject.visual}
                </div>
                <div>
                  <h3 id="project-modal-title" className="modal-title">
                    {activeProject.title}
                  </h3>
                  <div className="modal-tags">
                    <span className="modal-status">{activeProject.status}</span>
                    <span className="modal-category">{activeProject.category}</span>
                  </div>
                </div>
              </div>
              <button className="modal-close" type="button" onClick={closeModal} aria-label="Close case study modal">
                x
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Context</h4>
                <p>{activeProject.context}</p>
              </div>

              <div className="modal-section">
                <h4>Challenge</h4>
                <p>{activeProject.challenge}</p>
              </div>

              <div className="modal-section">
                <h4>My Role</h4>
                <p>{activeProject.role}</p>
              </div>

              <div className="modal-section">
                <h4>Testing Strategy</h4>
                <ul className="modal-list">
                  {activeProject.strategy.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Tools</h4>
                <div className="modal-tech-tags">
                  {activeProject.tools.map((tool) => (
                    <span key={tool} className="modal-tech-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>What I Delivered</h4>
                <ul className="modal-list">
                  {activeProject.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Impact / Learning</h4>
                <ul className="modal-list">
                  {activeProject.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {activeProject.confidentialityNote && (
                <div className="modal-section modal-confidentiality">
                  <h4>Confidentiality Note</h4>
                  <p>{activeProject.confidentialityNote}</p>
                </div>
              )}
            </div>

            <div className="modal-actions">
              {activeProject.repoUrl && (
                <a
                  href={activeProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-action-btn modal-action-primary"
                >
                  View repository
                </a>
              )}
              <button className="modal-action-text" type="button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
