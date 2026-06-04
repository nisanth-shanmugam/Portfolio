import { useState } from 'react';
import { FiExternalLink, FiLayout, FiX } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

const tagColor = { 'Full Stack': '#6366f1', Frontend: '#f59e0b', Backend: '#10b981', Mobile: '#06b6d4' };

export default function Projects() {
  const projects = portfolioData.projects;
  const [selected, setSelected] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-heading">
          <FiLayout className="heading-icon" /> Featured Projects
        </h2>

        <div className="projects-grid">
          {projects.map(({ title, tag, description, technologies, image, link, features }, index) => (
            <div className="project-card" key={title} style={{ animationDelay: `${0.15 * index}s` }}>
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
                  <span className="project-tag" style={{ background: tagColor[tag] + '22', color: tagColor[tag] }}>
                    {tag}
                  </span>
                </div>
                <p className="project-description">{description}</p>
                <div className="project-tech">
                  {technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
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
            <img src={selected.image} alt={selected.title} className="modal-image" />
            <div className="modal-body">
              <div className="modal-header">
                <h3 className="modal-title">{selected.title}</h3>
                <span className="project-tag" style={{ background: tagColor[selected.tag] + '22', color: tagColor[selected.tag] }}>
                  {selected.tag}
                </span>
              </div>
              <p className="modal-description">{selected.description}</p>
              {selected.features && (
                <>
                  <p className="modal-features-label">Key Features</p>
                  <ul className="modal-features">
                    {selected.features.map((f, i) => (
                      <li key={i}><span className="feat-bullet">▹</span>{f}</li>
                    ))}
                  </ul>
                </>
              )}
              <div className="modal-tech">
                {selected.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}