import React from 'react';
import './Technologies.css';

const Technologies = () => {
  const technologies = [
    {
      name: 'Cypress',
      description: 'Framework moderno para testes end-to-end',
      category: 'Testing',
      icon: '🔧'
    },
    {
      name: 'Selenium',
      description: 'Automação de navegadores web',
      category: 'Testing',
      icon: '🌐'
    },
    {
      name: 'Postman',
      description: 'Testes e automação de APIs',
      category: 'API Testing',
      icon: '📡'
    },
    {
      name: 'GitLab CI/CD',
      description: 'Pipelines de integração contínua',
      category: 'DevOps',
      icon: '🚀'
    },
    {
      name: 'Jira',
      description: 'Gestão de projetos e rastreamento de issues',
      category: 'Management',
      icon: '📋'
    },
    {
      name: 'JavaScript',
      description: 'Linguagem para automação de testes',
      category: 'Programming',
      icon: '💻'
    },
    {
      name: 'Python',
      description: 'Scripts de automação e análise',
      category: 'Programming',
      icon: '🐍'
    },
    {
      name: 'Scrum/Kanban',
      description: 'Metodologias ágeis de desenvolvimento',
      category: 'Methodology',
      icon: '⚡'
    },
    {
      name: 'BDD',
      description: 'Desenvolvimento orientado por comportamento',
      category: 'Methodology',
      icon: '📝'
    }
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <h2 className="section-title text-center">Tecnologias e Ferramentas</h2>
        <p className="section-subtitle text-center">
          Ferramentas e tecnologias que domino para garantir qualidade de software
        </p>

        <div className="tech-categories">
          {categories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3 className="category-title">{category}</h3>
              <div className="tech-grid">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, techIndex) => (
                    <div key={techIndex} className="tech-card">
                      <div className="tech-icon">{tech.icon}</div>
                      <h4 className="tech-name">{tech.name}</h4>
                      <p className="tech-description">{tech.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="skill-item">
            <h4>Testes Automatizados</h4>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '95%'}}></div>
            </div>
            <span className="skill-percentage">95%</span>
          </div>
          
          <div className="skill-item">
            <h4>Testes de API</h4>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '90%'}}></div>
            </div>
            <span className="skill-percentage">90%</span>
          </div>
          
          <div className="skill-item">
            <h4>Metodologias Ágeis</h4>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '88%'}}></div>
            </div>
            <span className="skill-percentage">88%</span>
          </div>
          
          <div className="skill-item">
            <h4>CI/CD Pipelines</h4>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: '85%'}}></div>
            </div>
            <span className="skill-percentage">85%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

