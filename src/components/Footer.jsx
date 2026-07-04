import React from 'react';
import { navigationItems } from '../content/navigation';
import { profile } from '../content/profile';
import { footerSkills } from '../content/skills';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: profile.links.linkedin,
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: profile.links.github,
      icon: '💻'
    },
    {
      name: 'Email',
      url: profile.links.email,
      icon: '📧'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>{profile.name}</h3>
              <p className="footer-tagline">{profile.footer.tagline}</p>
              <p className="footer-description">{profile.footer.description}</p>
            </div>
            
            <div className="social-links">
              {socialLinks.map((link, index) => {
                const opensNewTab = link.url.startsWith('http');

                return (
                  <a
                    key={index}
                    href={link.url}
                    className="social-link"
                    target={opensNewTab ? '_blank' : undefined}
                    rel={opensNewTab ? 'noopener noreferrer' : undefined}
                    aria-label={link.name}
                  >
                    <span className="social-icon" aria-hidden="true">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {navigationItems.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Focus</h4>
            <div className="footer-skills">
              {footerSkills.map((skill) => (
                <span key={skill} className="footer-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">📧</span>
                <a href={profile.links.email}>{profile.links.emailLabel}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">📍</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <div className="footer-quote">
              <p>"{profile.footer.quote}"</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
