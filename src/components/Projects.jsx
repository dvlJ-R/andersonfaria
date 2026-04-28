import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const projects = [
    {
      title: 'Playwright + TypeScript — Automação E2E moderna',
      description:
        'Projeto de automação E2E com foco em arquitetura de testes e boa governança de QA.',
      summary:
        'Projeto de automação E2E desenvolvido para demonstrar uma estrutura profissional de testes com Playwright e TypeScript, aplicando boas práticas como Page Objects, organização por suítes, dados de teste, execução cross-browser, relatórios HTML e integração com GitHub Actions.',
      context:
        'O objetivo do projeto é simular uma estrutura real de automação utilizada em times de QA, com foco em clareza, manutenção, escalabilidade e integração contínua.',
      role:
        'Atuei na estruturação do projeto, definição da arquitetura dos testes, criação dos cenários E2E, organização dos Page Objects, configuração de execução cross-browser e preparação do fluxo para integração com GitHub Actions.',
      strategy:
        'A estratégia foi baseada em cenários críticos de negócio, priorizando fluxos de maior valor para o usuário. A estrutura busca reduzir duplicidade, facilitar manutenção e permitir evolução gradual da suíte de testes.',
      technologies: ['Playwright', 'TypeScript', 'Page Objects', 'Fixtures', 'GitHub Actions', 'CI/CD', 'HTML Report'],
      results: [
        'Estrutura inicial de automação E2E com Playwright e TypeScript',
        'Organização dos testes por contexto',
        'Aplicação de Page Objects para melhorar manutenção',
        'Configuração de relatório HTML para análises claras',
        'Preparação para execução em pipeline CI/CD'
      ],
      category: 'Automação',
      status: 'Em Andamento',
      image: '🧪',
      repoUrl: 'https://github.com/dvlJ-R/andersonfaria'
    },
    {
      title: 'GeoRadar - Ministério Público Federal',
      description:
        'Sistema de monitoramento geoespacial com foco em testes estratégicos e qualidade de processos.',
      summary:
        'Projeto de QA para sistema de monitoramento geoespacial, alinhado à necessidade de confiabilidade em operações federais.',
      context:
        'O projeto exigia validação de fluxos críticos de dados geoespaciais, com foco em estabilidade e cobertura de regressão.',
      role:
        'Atuei na definição da carteira de testes, implementação de automação e coordenação de validações de integração.',
      strategy:
        'A estratégia priorizou testes de ponta a ponta para fluxos essenciais, combinando automação UI e validação de dados para reduzir riscos de produção.',
      technologies: ['Cypress', 'Postman', 'GitLab CI/CD', 'ReactJS', 'Django'],
      results: [
        'Reestruturação de processos de QA',
        'Padronização de cenários de regressão',
        'Aprimoramento da consistência de testes em ambiente federal'
      ],
      category: 'Federal',
      status: 'Em Produção',
      image: '🌍',
      repoUrl: null
    },
    {
      title: 'Pactum - Sistema de Acordos MPF',
      description:
        'Plataforma de acordos para o MPF com foco em testes de segurança e fluxos regulatórios.',
      summary:
        'Implementação de QA para uma plataforma de acordos, com foco em confiabilidade e rastreabilidade dos testes.',
      context:
        'O sistema demandava testes robustos para garantir que fluxos de acordo e colaboração permanecessem íntegros em auditorias.',
      role:
        'Gestão da automação de cenários críticos, criação de testes de integração e suporte ao alinhamento com requisitos legais.',
      strategy:
        'A estratégia priorizou testes de regressão com cobertura de regras de negócio, além de validações integradas entre front-end e APIs.',
      technologies: ['Cypress', 'Selenium', 'Postman', 'Jira', 'Confluence'],
      results: [
        'Melhoria de cobertura em fluxos regulatórios',
        'Definição de testes mais confiáveis para auditoria',
        'Documentação de práticas de QA para equipes multidisciplinares'
      ],
      category: 'Federal',
      status: 'Em Produção',
      image: '⚖️',
      repoUrl: null
    },
    {
      title: 'GaussFleet - Telemetria Industrial',
      description:
        'Projeto de QA para plataforma de telemetria com foco em processos de dados e confiabilidade.',
      summary:
        'Estruturação de QA para plataforma industrial, garantindo que os dados de telemetria fossem testados com consistência.',
      context:
        'O desafio era validar pipelines de dados e garantir que alertas e relatórios permanecessem confiáveis em ambientes críticos.',
      role:
        'Desenvolvi a estratégia de testes, implementei automação e acompanhou a análise de resultados em ambientes de produção.',
      strategy:
        'A estratégia combinou testes de integração, validação de dados e regressão para manter a estabilidade da plataforma.',
      technologies: ['Cypress', 'Postman', 'JavaScript', 'Python', 'Scrum'],
      results: [
        'Implementação de processos de QA do zero',
        'Redução de riscos em entregas industriais',
        'Melhoria na rastreabilidade de falhas'
      ],
      category: 'Industrial',
      status: 'Concluído',
      image: '🚛',
      repoUrl: null
    },
    {
      title: 'Sistemas de Licenciamento Ambiental',
      description:
        'QA para sistemas de licenciamento estadual, com atenção à qualidade e governança de testes.',
      summary:
        'Projeto de QA para plataformas de licenciamento ambiental, com foco em processos controlados e validação de dados.',
      context:
        'O trabalho exigia garantir que processos críticos de licenciamento fossem testados com precisão em múltiplos estados.',
      role:
        'Fui responsável pela definição da estratégia de teste, criação de casos e suporte à automação de regressão.',
      strategy:
        'A estratégia valoriza a documentação de testes e a repetibilidade, alinhando verificações a requisitos regulatórios.',
      technologies: ['Cypress', 'Selenium', 'Postman', 'Jira', 'GitLab'],
      results: [
        'Padronização de processos de QA',
        'Documentação clara de cenários',
        'Melhoria na confiabilidade de validações'
      ],
      category: 'Ambiental',
      status: 'Concluído',
      image: '🌱',
      repoUrl: null
    }
  ];

  const categories = [...new Set(projects.map(project => project.category))];

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

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
                  <span className={`project-status ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.status}
                  </span>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-footer">
                <button className="project-btn" onClick={() => openModal(project)}>
                  Ver Detalhes
                </button>
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

      {activeProject && (
        <div className="project-modal-overlay" onClick={handleOverlayClick}>
          <div className="project-modal">
            <div className="modal-header">
              <div className="modal-title-group">
                <div className="modal-icon">{activeProject.image}</div>
                <div>
                  <h3 className="modal-title">{activeProject.title}</h3>
                  <div className="modal-tags">
                    <span className="modal-status">{activeProject.status}</span>
                    <span className="modal-category">{activeProject.category}</span>
                  </div>
                </div>
              </div>
              <button className="modal-close" onClick={closeModal} aria-label="Fechar modal">
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Resumo executivo</h4>
                <p>{activeProject.summary}</p>
              </div>

              <div className="modal-section">
                <h4>Contexto</h4>
                <p>{activeProject.context}</p>
              </div>

              <div className="modal-section">
                <h4>Minha atuação</h4>
                <p>{activeProject.role}</p>
              </div>

              <div className="modal-section">
                <h4>Tecnologias utilizadas</h4>
                <div className="modal-tech-tags">
                  {activeProject.technologies.map((tech, index) => (
                    <span key={index} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Estratégia de qualidade</h4>
                <p>{activeProject.strategy}</p>
              </div>

              <div className="modal-section">
                <h4>Resultados / Aprendizados</h4>
                <ul className="modal-results">
                  {activeProject.results.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-actions">
              {activeProject.repoUrl && (
                <a
                  href={activeProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-action-btn modal-action-primary"
                >
                  Ver repositório
                </a>
              )}
              <button className="modal-action-btn modal-action-secondary" type="button">
                Ver case completo
              </button>
              <button className="modal-action-text" type="button" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

