import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'junior96175@gmail.com',
      link: 'mailto:junior96175@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/anderson-faria-',
      link: 'https://www.linkedin.com/in/anderson-faria-/'
    },
    {
      icon: '📱',
      label: 'Telefone',
      value: '+55 35 99717-1705',
      link: 'tel:+5535997171705'
    },
    {
      icon: '📍',
      label: 'Localização',
      value: 'Brasil',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title text-center">Entre em Contato</h2>
        <p className="section-subtitle text-center">
          Vamos conversar sobre oportunidades, projetos ou colaborações em QA
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p className="contact-description">
              Estou sempre aberto a novas oportunidades e conversas sobre qualidade de software. 
              Entre em contato através dos canais abaixo ou use o formulário ao lado.
            </p>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <h4>Disponibilidade</h4>
              <div className="availability-item">
                <span className="status-indicator available"></span>
                <span>Disponível para novas oportunidades</span>
              </div>
              <div className="availability-item">
                <span className="status-indicator"></span>
                <span>Resposta em até 24 horas</span>
              </div>
              <div className="availability-item">
                <span className="status-indicator"></span>
                <span>Consultorias e projetos freelance</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="oportunidade">Oportunidade de Trabalho</option>
                  <option value="consultoria">Consultoria em QA</option>
                  <option value="projeto">Projeto Freelance</option>
                  <option value="colaboracao">Colaboração</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Descreva sua proposta, projeto ou dúvida..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>

              {submitMessage && (
                <div className="submit-message success">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Pronto para Garantir Qualidade no Seu Projeto?</h3>
          <p>
            Com mais de 3 anos de experiência em QA e automação de testes, 
            posso ajudar sua equipe a implementar processos eficientes e garantir 
            a qualidade do seu software.
          </p>
          <div className="cta-stats">
            <div className="cta-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projetos Testados</span>
            </div>
            <div className="cta-stat">
              <span className="stat-number">90%</span>
              <span className="stat-label">Automação Alcançada</span>
            </div>
            <div className="cta-stat">
              <span className="stat-number">70%</span>
              <span className="stat-label">Redução de Tempo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

