import { useState } from 'react';
import { FiBriefcase, FiAward, FiX } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';
import vdartCert from '../assets/vdart certificate.jpg';
import octanetCert from '../assets/octanet certificate.png';

const typeColor = {
  Internship: { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' },
  'Full Time': { bg: 'rgba(99, 102, 241, 0.1)', border: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' },
};

const certificates = {
  VDart: vdartCert,
  'OctaNet Pvt Ltd': octanetCert,
};

export default function Experience() {
  const { experience } = portfolioData;
  const [openCert, setOpenCert] = useState(null);
  const revealRef = useScrollReveal();

  return (
    <section className="exp-section reveal-up" id="experience" ref={revealRef}>
      <div className="exp-container">
        <h2 className="exp-heading">
          <FiBriefcase className="heading-icon" /> Work Experience
        </h2>

        <div className="timeline">
          {experience.map(({ role, company, duration, type, points }, i) => (
            <div className="timeline-item" key={i} style={{ animationDelay: `${0.15 * i}s` }}>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
                <div className="timeline-dot-pulse" />
              </div>
              <div className="timeline-card">
                <div className="timeline-top">
                  <div className="exp-info-left">
                    <h3 className="exp-role">{role}</h3>
                    <span className="exp-company">{company}</span>
                  </div>
                  <div className="exp-badges">
                    <span className="exp-type" style={{ background: typeColor[type]?.bg, border: `1px solid ${typeColor[type]?.border}`, color: typeColor[type]?.color }}>
                      {type}
                    </span>
                    <span className="exp-duration">{duration}</span>
                    {certificates[company] && (
                      <button className="cert-btn" onClick={() => setOpenCert(company)}>
                        <FiAward /> Certificate
                      </button>
                    )}
                  </div>
                </div>
                <ul className="exp-points">
                  {points.map((point, j) => (
                    <li key={j}>
                      <span className="exp-bullet">▹</span>
                      <span className="exp-point-text">{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>

      {openCert && (
        <div className="cert-popup-backdrop" onClick={() => setOpenCert(null)}>
          <div className="cert-popup" onClick={e => e.stopPropagation()}>
            <div className="cert-popup-header">
              <span className="cert-popup-title"><FiAward /> {openCert} Certificate</span>
              <button className="cert-popup-close" onClick={() => setOpenCert(null)}><FiX /></button>
            </div>
            <div className="cert-popup-body">
              <img src={certificates[openCert]} alt={`${openCert} certificate`} className="cert-popup-img" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
