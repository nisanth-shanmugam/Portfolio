import { useState, useEffect } from 'react';
import { FiMail, FiMenu, FiX } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const navLinks = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar({ activeNav, setActiveNav }) {
  const { name } = portfolioData.personal;
  const initials = name.split(' ').map(n => n[0]).join('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveNav(link);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-brand" onClick={() => handleLinkClick('Home')}>
          <span className="brand-badge">{initials}</span>
          <span className="brand-name">{name}</span>
        </a>

        <div className="nav-links">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nav-link ${activeNav === link ? 'active' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-contact" onClick={() => handleLinkClick('Contact')}>
          <FiMail /> <span>Contact Me</span>
        </a>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`mobile-link ${activeNav === link ? 'active' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="mobile-link-contact" onClick={() => handleLinkClick('Contact')}>
            <FiMail /> Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
