import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Playwright + TypeScript — Automação E2E moderna',
      description: 'Desenvolvimento de um projeto de automação E2E com Playwright e TypeScript, aplicando boas práticas como Page Objects, fixtures, organização por suítes, dados de teste, execução cross-browser, relatórios HTML e integração com GitHub Actions.',
      technologies: ['Playwright', 'TypeScript', 'Page Objects', 'GitHub Actions', 'CI/CD'],
      outcomes: [
        'Estruturação de automação E2E robusta',
        'Uso de fixtures e dados bem organizados',
        'Integração com pipeline de GitHub Actions'
      ],
      category: 'Automação',
      status: 'Em Andamento',
      image: '🧪'
    },
    {
      title: 'GeoRadar - Ministério Público Federal',
      description: 'Sistema federal de monitoramento geoespacial para combate ao desmatamento e crimes ambientais. Responsável pela reestruturação completa dos processos de QA.',
      technologies: ['Cypress', 'Postman', 'GitLab CI/CD', 'ReactJS', 'Django'],
      outcomes: [
        'Redução de 70% no tempo de testes',
        'Cobertura de testes de 95%',
        'Zero defeitos críticos em produção'
      ],
      category: 'Federal',
      status: 'Em Produção',
      image: '🌍'
    },
    {
      title: 'Pactum - Sistema de Acordos MPF',
      description: 'Plataforma para gestão de acordos de leniência e colaboração premiada do Ministério Público Federal. Implementação de testes estratégicos e automação completa.',
      technologies: ['Cypress', 'Selenium', 'Postman', 'Jira', 'Confluence'],
      outcomes: [
        'Automação de 90% dos casos de teste',
        'Redução de 60% no tempo de regressão',
        'Melhoria de 40% na detecção de bugs'
      ],
      category: 'Federal',
      status: 'Em Produção',
      image: '⚖️'
    },
    {
      title: 'GaussFleet - Telemetria Industrial',
      description: 'Sistema de telemetria e logística para grandes players da indústria nacional (Gerdau, CSN, Usiminas). Estruturação do setor de QA do zero.',
      technologies: ['Cypress', 'Postman', 'JavaScript', 'Python', 'Scrum'],
      outcomes: [
        'Implementação de QA do zero',
        'Redução de 80% em bugs de produção',
        'Melhoria de 50% na satisfação do cliente'
      ],
      category: 'Industrial',
      status: 'Concluído',
      image: '🚛'
    },
    {
      title: 'Sistemas de Licenciamento Ambiental',
      description: 'Sistemas utilizados por estados brasileiros (Amazonas, Mato Grosso do Sul, Espírito Santo, Amapá) para licenciamento ambiental. Evolução de QA Júnior para Pleno.',
      technologies: ['Cypress', 'Selenium', 'Postman', 'Jira', 'GitLab'],
      outcomes: [
        'Cobertura de testes de 85%',
        'Redução de 50% no tempo de validação',
        'Padronização de processos de QA'
      ],
      category: 'Ambiental',
      status: 'Concluído',
      image: '🌱'
    }
  ];

  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title text-center">Projetos em Destaque</h2>
        <p className="section-subtitle text-center">
          Projetos de alto impacto onde apliquei expertise em QA e automação de testes
        </p>

        <div className="projects-filter">
          <button className="filter-btn active" data-filter="all">
            Todos
          </button>
          {categories.map((category, index) => (
            <button key={index} className="filter-btn" data-filter={category.toLowerCase()}>
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.category.toLowerCase()}`}>
              <div className="project-header">
                <div className="project-image">
                  <span className="project-icon">{project.image}</span>
                </div>
                <div className="project-meta">
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  <h4>Tecnologias Utilizadas:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-outcomes">
                  <h4>Resultados Alcançados:</h4>
                  <ul className="outcomes-list">
                    {project.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-footer">
                <button className="project-btn">Ver Detalhes</button>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Projetos Principais</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Setores Diferentes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">90%</span>
              <span className="stat-label">Taxa de Automação</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">Redução de Tempo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

