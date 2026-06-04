import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaBriefcase, FaPalette, FaLightbulb } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';
import { FiTarget } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
  BsDatabase: <BsDatabase />,
  FaGitAlt: <FaGitAlt />,
  FaBriefcase: <FaBriefcase />,
  FaPalette: <FaPalette />,
  FaLightbulb: <FaLightbulb />,
};

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">
          <FiTarget className="heading-icon" /> My Skills
        </h2>
        
        <div className="skills-grid">
          {skills.map(({ name, level, icon, color }, index) => (
            <div className="skill-card" key={name} style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="skill-icon" style={{ color }}>
                {iconMap[icon]}
              </div>
              <div className="skill-name">{name}</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}, ${color}cc)` }} />
              </div>
              <div className="skill-level">{level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
