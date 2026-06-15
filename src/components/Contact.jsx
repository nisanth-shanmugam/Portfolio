import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';
import useScrollReveal from '../hooks/useScrollReveal';

const SERVICE_ID  = 'service_jkln9sm';
const TEMPLATE_ID = 'template_t9jogww';
const PUBLIC_KEY  = 'zD9sgu6SnTS14yi_b';

export default function Contact() {
  const { email, social } = portfolioData.personal;
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const revealRef = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="contact-section reveal-up" id="contact" ref={revealRef}>
      <div className="contact-container">
        <h2 className="contact-heading">
          <FiSend className="heading-icon" /> Get In Touch
        </h2>
        <p className="contact-subtext">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <a href={`mailto:${email}`} className="contact-card" style={{ animationDelay: '0.1s' }}>
              <div className="contact-card-icon email-icon"><FiMail /></div>
              <div className="contact-card-text">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">{email}</span>
              </div>
            </a>

            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card" style={{ animationDelay: '0.2s' }}>
              <div className="contact-card-icon linkedin-icon"><FiLinkedin /></div>
              <div className="contact-card-text">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">nisanth-shanmugam</span>
              </div>
            </a>

            <a href={social.github} target="_blank" rel="noopener noreferrer" className="contact-card" style={{ animationDelay: '0.3s' }}>
              <div className="contact-card-icon github-icon"><FiGithub /></div>
              <div className="contact-card-text">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">nisanth-shanmugam</span>
              </div>
            </a>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <div className="input-wrapper">
                  <input name="from_name" type="text" placeholder="John Doe" required />
                  <span className="input-focus-line"></span>
                </div>
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <div className="input-wrapper">
                  <input name="from_email" type="email" placeholder="john@example.com" required />
                  <span className="input-focus-line"></span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <div className="input-wrapper">
                <input name="subject" type="text" placeholder="Project Inquiry" required />
                <span className="input-focus-line"></span>
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <div className="input-wrapper">
                <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
                <span className="input-focus-line"></span>
              </div>
            </div>

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'idle'    && <><FiSend /> Send Message</>}
              {status === 'sending' && <><span className="spinner" /> Sending...</>}
              {status === 'success' && <><FiCheck /> Message Sent!</>}
              {status === 'error'   && <><FiAlertCircle /> Failed. Try again.</>}
            </button>
          </form>
        </div>

        <div className="contact-footer">
          © Nisanth Shanmugam. All rights reserved.
        </div>
      </div>
    </section>
  );
}
