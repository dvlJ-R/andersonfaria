import React, { useState, useEffect } from 'react';
import { navigationActions, navigationItems } from '../content/navigation';
import { profile } from '../content/profile';
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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <a href="#home">{profile.name}</a>
          </div>

          <div
            id="primary-navigation"
            className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}
          >
            {navigationItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}
                  aria-current={activeSection === sectionId ? 'location' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="nav-actions">
              {navigationActions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  className="nav-external-link"
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="primary-navigation"
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
