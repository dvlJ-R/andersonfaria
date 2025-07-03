import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anderson-faria-/',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: '#',
      icon: '💻'
    },
    {
      name: 'Email',
      url: 'mailto:junior96175@gmail.com',
      icon: '📧'
    }
  ];

  const quickLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Tecnologias', href: '#technologies' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contact' }
  ];

  const skills = [
    'Cypress',
    'Selenium',
    'Postman',
    'GitLab CI/CD',
    'Jira',
    'JavaScript',
    'Python',
    'Scrum/Kanban'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Anderson Faria</h3>
              <p className="footer-tagline">QA Engineer | Estratégico | Profissional</p>
              <p className="footer-description">
                Especialista em automação de testes e qualidade de software, 
                com foco em entregar excelência técnica e resultados de negócio.
              </p>
            </div>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tecnologias</h4>
            <div className="footer-skills">
              {skills.map((skill, index) => (
                <span key={index} className="footer-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:junior96175@gmail.com">junior96175@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+5535997171705">+55 35 99717-1705</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Anderson Faria. Todos os direitos reservados.
            </p>
            <div className="footer-quote">
              <p>
                "I am the way and the truth and the life. No one comes to the Father except through me" 
                <span className="quote-reference">(John 14:6)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

