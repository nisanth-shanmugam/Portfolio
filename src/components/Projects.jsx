import { useState } from 'react';
import { FiExternalLink, FiLayout, FiX, FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';

const tagColor = { 
  'Full Stack': '#6366f1', 
  Frontend: '#f59e0b', 
  Backend: '#10b981', 
  Mobile: '#06b6d4' 
};

export default function Projects() {
  const projects = portfolioData.projects;
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');
  const revealRef = useScrollReveal();

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.tag === filter;
  });

  return (
    <section className="projects-section reveal-up" id="projects" ref={revealRef}>
      <div className="projects-container">
        <h2 className="projects-heading">
          <FiLayout className="heading-icon" /> Featured Projects
        </h2>

        {/* Project Filters */}
        <div className="projects-tabs">
          {['All', 'Full Stack', 'Frontend', 'Mobile'].map(category => (
            <button
              key={category}
              className={`projects-tab-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(({ title, tag, description, technologies, image, link, features }, index) => (
            <div 
              className="project-card" 
              key={title} 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="project-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                  <button className="project-link" onClick={() => setSelected({ title, tag, description, technologies, image, link, features })}>
                    <FiExternalLink /> View Project
                  </button>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{title}</h3>
                  <span className="project-tag" style={{ background: tagColor[tag] + '1a', color: tagColor[tag], border: `1px solid ${tagColor[tag]}33` }}>
                    {tag}
                  </span>
                </div>
                <p className="project-description">{description}</p>
                <div className="project-tech">
                  {technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {technologies.length > 4 && (
                    <span className="tech-badge tech-badge-more">+{technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}><FiX /></button>
            <div className="modal-image-container">
              <img src={selected.image} alt={selected.title} className="modal-image" />
              <div className="modal-image-overlay"></div>
            </div>
            <div className="modal-body">
              <div className="modal-header">
                <h3 className="modal-title">{selected.title}</h3>
                <span className="project-tag" style={{ background: tagColor[selected.tag] + '1a', color: tagColor[selected.tag], border: `1px solid ${tagColor[selected.tag]}33` }}>
                  {selected.tag}
                </span>
              </div>
              <p className="modal-description">{selected.description}</p>
              
              {selected.features && (
                <div className="modal-features-section">
                  <p className="modal-features-label">Key Features</p>
                  <ul className="modal-features">
                    {selected.features.map((f, i) => (
                      <li key={i}>
                        <FiCheckCircle className="feat-bullet-icon" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="modal-tech-section">
                <p className="modal-tech-label">Technologies</p>
                <div className="modal-tech">
                  {selected.technologies.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}