import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🧪',
      title: 'Testes Manuais',
      description:
        'Planejamento, criação e execução de cenários com foco em risco, usabilidade e experiência do usuário.'
    },
    {
      icon: '⚙️',
      title: 'Automação de Testes',
      description:
        'Desenvolvimento e manutenção de testes automatizados com Cypress, Playwright + TypeScript e Selenium, buscando estabilidade, clareza, reaproveitamento, organização do projeto e integração com pipelines CI/CD.'
    },
    {
      icon: '📊',
      title: 'Gestão de Qualidade',
      description:
        'Acompanhamento de indicadores, bugs, dashboards e tomadas de decisão baseadas em processo e valor de negócio.'
    },
    {
      icon: '🎯',
      title: 'Estratégia e Processos',
      description:
        'Desenho de estratégias de QA, melhoria contínua de processos, documentação clara e colaboração com times técnicos e de produto.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <p className="section-eyebrow">Serviços</p>
          <h2 className="section-title text-center">Áreas de atuação em qualidade de software</h2>
          <p className="section-subtitle text-center">
            Serviços estratégicos para testes manuais, automação e governança de qualidade em projetos complexos.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
