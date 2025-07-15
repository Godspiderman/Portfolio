import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    closeMenu();
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header__gradient-bg"></div>
      
      <div className="header__container">
        <div className="header__brand">
          <h1 className="header__title">
            <span className="header__title-main">JEYASEELAN</span>
            <span className="header__title-dot">.</span>
            <span className="header__title-last">B</span>
          </h1>
          <p className="header__subtitle">Frontend Developer</p>
        </div>
        
        <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a 
                href="#home" 
                className={`header__nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                onClick={(e) => handleNavClick('home', e)}
              >
                <span>Home</span>
                <div className="header__nav-link-underline"></div>
              </a>
            </li>
            <li className="header__nav-item">
              <a 
                href="#about" 
                className={`header__nav-link ${activeSection === 'about' ? 'active' : ''}`} 
                onClick={(e) => handleNavClick('about', e)}
              >
                <span>About</span>
                <div className="header__nav-link-underline"></div>
              </a>
            </li>
            <li className="header__nav-item">
              <a 
                href="#skills" 
                className={`header__nav-link ${activeSection === 'skills' ? 'active' : ''}`} 
                onClick={(e) => handleNavClick('skills', e)}
              >
                <span>Skills</span>
                <div className="header__nav-link-underline"></div>
              </a>
            </li>
            <li className="header__nav-item">
              <a 
                href="#projects" 
                className={`header__nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
                onClick={(e) => handleNavClick('projects', e)}
              >
                <span>Projects</span>
                <div className="header__nav-link-underline"></div>
              </a>
            </li>
            <li className="header__nav-item">
              <a 
                href="#contact" 
                className={`header__nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                onClick={(e) => handleNavClick('contact', e)}
              >
                <span>Contact</span>
                <div className="header__nav-link-underline"></div>
              </a>
            </li>
          </ul>
        </nav>
        
        <button 
          className={`header__mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="header__mobile-menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;