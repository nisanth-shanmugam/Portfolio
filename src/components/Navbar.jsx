import { FiMail } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const navLinks = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar({ activeNav, setActiveNav }) {
  const { name } = portfolioData.personal;
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-initials">{initials}</span>
          <span className="brand-name">{name}</span>
        </div>

        <div className="nav-links">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`nav-link ${activeNav === link ? 'active' : ''}`}
              onClick={() => setActiveNav(link)}
            >
              {link}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-contact">
          <FiMail /> Contact Me
        </a>
      </div>
    </nav>
  );
}
