import React from 'react';
import './About.css';

const About = () => {
  const timeline = [
    {
      year: '2021',
      title: 'QA Engineer Júnior',
      company: 'Fundação Fundecc',
      description: 'Iniciei minha jornada em QA, atuando em sistemas de licenciamento ambiental para estados brasileiros. Aprendi testes manuais e automatizados com Cypress e Selenium.'
    },
    {
      year: '2023',
      title: 'QA Engineer - Product Manager',
      company: 'GaussFleet',
      description: 'Evoluí para QA Pleno e assumi responsabilidades de Product Manager, trabalhando com grandes players da indústria como Gerdau, CSN e Usiminas.'
    },
    {
      year: '2024',
      title: 'QA Engineer Estratégico',
      company: 'Fundação Fundecc',
      description: 'Retornei como QA estratégico, liderando reestruturação de processos em projetos federais de alta complexidade como GeoRadar e Pactum do MPF.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Mim</h2>
            <p className="about-description">
              Sou um Engenheiro de Qualidade de Software com trajetória sólida em testes manuais e automatizados, 
              atuando desde QA Júnior até posições estratégicas em projetos federais de alto impacto.
            </p>
            <p className="about-description">
Especialista em automação com Cypress, Playwright + TypeScript e Selenium, testes de API com Postman,
            metodologias ágeis (Scrum/Kanban) e reestruturação de processos de QA do zero. Possuo experiência também como Product Manager,
            fortalecendo minha visão de produto, priorização e entrega de valor.
          </p>
          <p className="about-description">
            Possuo perfil analítico, comunicativo e orientado à excelência técnica. Tenho vivência internacional
            com imersão em inglês na Holanda, e busco constantemente alinhar qualidade de software aos objetivos
            reais do negócio.
          </p>

          <div className="about-highlights">
            <h3>Diferenciais Profissionais</h3>
            <ul>
              <li>Desenvolvimento atual de automações E2E com Playwright + TypeScript.</li>
              <li>Organização de projetos de teste com Page Objects, fixtures e suítes por contexto.</li>
              <li>Experiência prática com execução cross-browser e relatórios de testes.</li>
              <li>Foco em automação moderna com estabilidade, manutenção e valor para o time.</li>
            </ul>
          </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="profile-circle">
                <span>AF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          <h3 className="timeline-title">Trajetória Profissional</h3>
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-job-title">{item.title}</h4>
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

