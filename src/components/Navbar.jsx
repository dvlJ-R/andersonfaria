import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40% 0px',
      threshold: 0.2
    };

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#technologies', label: 'Tecnologias' },
    { href: '#insights', label: 'Insights' },
    { href: '#projects', label: 'Projetos' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <a href="#home">Anderson Faria</a>
          </div>

          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}
                  aria-current={activeSection === sectionId ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

