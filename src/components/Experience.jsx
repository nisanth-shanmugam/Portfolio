import { useState } from 'react';
import { FiBriefcase, FiAward, FiX } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';
import vdartCert from '../assets/vdart certificate.jpg';

const typeColor = {
  Internship: { bg: 'rgba(245,158,11,0.15)', color: '#f59e0b' },
  'Full Time': { bg: 'rgba(99,102,241,0.15)', color: '#818cf8' },
};

const certificates = { VDart: vdartCert };

export default function Experience() {
  const { experience } = portfolioData;
  const [certImg, setCertImg] = useState(null);

  return (
    <section className="exp-section" id="experience">
      <div className="exp-container">
        <h2 className="exp-heading">
          <FiBriefcase className="heading-icon" /> Work Experience
        </h2>

        <div className="timeline">
          {experience.map(({ role, company, duration, type, points }, i) => (
            <div className="timeline-item" key={i} style={{ animationDelay: `${0.2 * i}s` }}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <h3 className="exp-role">{role}</h3>
                    <span className="exp-company">{company}</span>
                  </div>
                  <div className="exp-badges">
                    <span className="exp-type" style={{ background: typeColor[type]?.bg, color: typeColor[type]?.color }}>
                      {type}
                    </span>
                    <span className="exp-duration">{duration}</span>
                    {certificates[company] && (
                      <button className="cert-btn" onClick={() => setCertImg(certificates[company])}>
                        <FiAward /> Certificate
                      </button>
                    )}
                  </div>
                </div>
                <ul className="exp-points">
                  {points.map((point, j) => (
                    <li key={j}>
                      <span className="exp-bullet">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {certImg && (
        <div className="modal-backdrop" onClick={() => setCertImg(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setCertImg(null)}><FiX /></button>
            <img src={certImg} alt="Certificate" className="cert-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
}
