import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaBriefcase, FaPalette, FaLightbulb } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { BsDatabase } from 'react-icons/bs';
import { FiArrowRight, FiDownload, FiCode, FiDatabase, FiCpu } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';
import profileImg from '../assets/profile.png';
import resume from '../assets/Nisanth resumee.pdf';

const techStack = [
  { icon: <FaHtml5  />, name: 'HTML & CSS',   color: '#e34f26' },
  { icon: <FaCss3Alt/>, name: 'CSS',           color: '#264de4' },
  { icon: <FaJs     />, name: 'JavaScript',    color: '#f7df1e' },
  { icon: <FaReact  />, name: 'React.js',      color: '#61dafb' },
  { icon: <FaPython />, name: 'Python',        color: '#3572A5' },
  { icon: <SiDjango />, name: 'Django',        color: '#44b78b' },
  { icon: <BsDatabase/>,name: 'SQL Databases', color: '#a855f7' },
  { icon: <FaNodeJs />, name: 'REST APIs',     color: '#3c873a' },
  { icon: <FaGitAlt />, name: 'Git & GitHub',  color: '#f1502f' },
  { icon: <FaBriefcase/>,name:'CRM Operations',color: '#6366f1' },
  { icon: <FaPalette/>, name: 'UI/UX Design',  color: '#FF6B6B' },
  { icon: <FaLightbulb/>,name:'Problem Solving',color:'#FFD93D' },
];

export default function Hero() {
  const { name, bio } = portfolioData.personal;
  
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <span className="hello-wave">👋 Hello, I'm</span>
        <h1 className="hero-title">
          {name}<br />
          <span className="highlight-wrapper">
            <span className="highlight">Full Stack Developer</span>
          </span>
        </h1>
        <p className="hero-desc">{bio}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work <FiArrowRight className="arrow-icon" />
          </a>
          <a href={resume} download="Nisanth_Resume.pdf" className="btn-secondary">
            <FiDownload /> Download CV
          </a>
        </div>

        <div className="tech-stack">
          <p className="tech-label">Tech Stack</p>
          <div className="tech-icons">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="tech-icon"
                title={tech.name}
                style={{ animationDelay: `${0.7 + i * 0.05}s`, color: tech.color }}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-container">
          <div className="profile-orbit-glow"></div>
          <div className="profile-border-neon"></div>
          <img src={profileImg} alt={name} className="profile-img" />
          
          <div className="float-badge top">
            <FiCode className="badge-icon" />
            <div className="badge-text">
              <span>React & JS</span>
            </div>
          </div>
          
          <div className="float-badge middle">
            <FiDatabase className="badge-icon" />
            <div className="badge-text">
              <span>Django & SQL</span>
            </div>
          </div>
          
          <div className="float-badge bottom">
            <FiCpu className="badge-icon" />
            <div className="badge-text">
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
