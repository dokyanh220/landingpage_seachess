import { useState, useEffect } from 'react';
import '../styles/Header.css';
import logoImg from '../assets/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Features', target: 'features' },
    { label: 'About', target: 'about' },
    { label: 'Download', target: 'download' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-inner">
        <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src={logoImg} alt="SeaChess Logo" className="header-logo-img" />
          <span className="header-logo-text">SeaChess</span>
        </a>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="header-nav-link"
              onClick={(e) => handleNavClick(e, link.target)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`header-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`header-mobile-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="header-nav-link"
              onClick={(e) => handleNavClick(e, link.target)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
