import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo" onClick={() => scrollToSection('hero')}>
          <div className="logo-icon">TS</div>
          <span>TechSolutions</span>
        </a>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a className="nav-link" onClick={() => scrollToSection('hero')}>Inicio</a>
          <a className="nav-link" onClick={() => scrollToSection('servicios')}>Servicios</a>
          <a className="nav-link" onClick={() => scrollToSection('productos')}>Productos</a>
          <a className="nav-link" onClick={() => scrollToSection('about')}>Nosotros</a>
          <a className="nav-link cta-button" onClick={() => scrollToSection('contacto')}>
            Contacto
          </a>
        </nav>

        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
