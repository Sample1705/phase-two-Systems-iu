import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layers, Monitor, GitBranch, ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';
import LightCanvas from '../components/LightCanvas';
import FloatingPixels from '../components/FloatingPixels';
import ContactForm from '../components/ContactForm';

function CardSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="card-slideshow">
      {images.map((imgSrc, idx) => (
        <div 
          key={imgSrc} 
          className={`card-slide ${idx === currentIndex ? 'active' : ''}`}
        >
          <img src={imgSrc} alt={`Automation visual ${idx + 1}`} className="card-img-preview" />
        </div>
      ))}
      <div className="card-slideshow-dots">
        {images.map((_, idx) => (
          <span 
            key={idx} 
            className={`card-slideshow-dot ${idx === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}


export default function Home({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>I ≠ U | App Solutions & Systems - Custom Software & ERP Integration</title>
        <meta name="description" content="We design, build, and automate scalable web applications, custom software, UI/UX designs, and ERPNext/n8n/Mautic integrations for high-growth businesses." />
        <link rel="canonical" href="https://iu-systems.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iu-systems.com/" />
        <meta property="og:title" content="I ≠ U | App Solutions & Systems - Custom Software & ERP Integration" />
        <meta property="og:description" content="We design, build, and automate scalable web applications, custom software, UI/UX designs, and ERPNext/n8n/Mautic integrations for high-growth businesses." />
        <meta property="og:image" content="https://iu-systems.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="I ≠ U | App Solutions & Systems - Custom Software & ERP Integration" />
        <meta name="twitter:description" content="We design, build, and automate scalable web applications, custom software, UI/UX designs, and ERPNext/n8n/Mautic integrations for high-growth businesses." />
        <meta name="twitter:image" content="https://iu-systems.com/assets/logo.png" />
      </Helmet>
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <FloatingPixels />
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge animate-pulse-slow">I ≠ U App Solutions & Systems</span>
            <h1 className="hero-title">
              Design. Develop. <br />
              <span className="text-gradient-blue">Scale.</span>
            </h1>
            <p className="hero-subtitle">
              Product-focused technology solution creating elite UI/UX designs, scalable applications, ERP systems, and automation workflows that help teams move faster and operate smarter.
            </p>
            <div className="hero-actions">
              <button onClick={() => handleNavClick('contact')} className="btn btn-primary">
                Start Your Project
                <ArrowRight size={18} />
              </button>
              <button onClick={() => handleNavClick('services')} className="btn btn-secondary">
                Explore Services
              </button>
            </div>
          </div>
        </div>
        <div className="hero-bg-overlay"></div>
      </section>

      {/* What We Do Section */}
      <section className="section section-dark" id="what-we-do">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Core Offerings</span>
            <h2 className="section-title">What We Do</h2>
            <p className="section-description">
              We bridge the gap between design and technology to deliver outstanding digital experiences.
            </p>
          </div>
          
          <div className="grid-3">
            <div className="glass-card what-we-do-card">
              <div className="card-img-preview-wrap">
                <img 
                  src="/assets/uiux-home.png" 
                  alt="UI/UX Design Showcase" 
                  loading="lazy"
                  className="card-img-preview"
                />
              </div>
              <div className="card-info-content">
                <div className="card-icon-wrap"><Layers className="card-icon" /></div>
                <h3>UI/UX Design</h3>
                <p>User-centered research, detailed wireframes, and gorgeous, pixel-perfect visual designs for mobile apps and web platforms.</p>
                <button onClick={() => handleNavClick('services')} className="card-link">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="glass-card what-we-do-card">
              <div className="card-img-preview-wrap">
                <img 
                  src="/assets/appdev-home.png" 
                  alt="Web & Mobile App Development Showcase" 
                  loading="lazy"
                  className="card-img-preview"
                />
              </div>
              <div className="card-info-content">
                <div className="card-icon-wrap"><Monitor className="card-icon" /></div>
                <h3>App Development</h3>
                <p>Engineering responsive web systems, cross-platform mobile apps, and robust SaaS architectures built for growth.</p>
                <button onClick={() => handleNavClick('services')} className="card-link">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="glass-card what-we-do-card">
              <div className="card-img-preview-wrap">
                <img 
                  src="/assets/integration-home.jpg" 
                  alt="ERPNext & n8n Automation Integrations Showcase" 
                  loading="lazy"
                  className="card-img-preview"
                />
              </div>
              <div className="card-info-content">
                <div className="card-icon-wrap"><GitBranch className="card-icon" /></div>
                <h3>Integrations & Automation</h3>
                <p>Automating workflows, connecting databases, and deploying ERPNext, n8n, and Mautic to simplify your operations.</p>
                <button onClick={() => handleNavClick('services')} className="card-link">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="section section-light" id="why-us">
        <LightCanvas />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2 why-grid">
            <div className="why-content">
              <span className="section-subtitle">Why work with us</span>
              <h2 className="section-title">Product-First Mindset</h2>
              <p className="why-lead text-light-secondary">
                Every design, feature, and workflow is built around user experience, business objectives, and long-term scalability <br />
                not just project requirements.
              </p>
              <ul className="why-list">
                <li>
                  <div className="why-list-icon"><Users size={20} /></div>
                  <div>
                    <h4>Small Technology-Focused Team</h4>
                    <p>Work directly with engineers and designers, not account managers. We maintain an elite core team to ensure project excellence.</p>
                  </div>
                </li>
                <li>
                  <div className="why-list-icon"><Zap size={20} /></div>
                  <div>
                    <h4>Strategic Product Partnership</h4>
                    <p>We question assumptions, simplify complexity, and help prioritize what truly matters—so your team invests time and budget in features that create real impact.</p>
                  </div>
                </li>
                <li>
                  <div className="why-list-icon"><ShieldCheck size={20} /></div>
                  <div>
                    <h4>Quality Over Volume</h4>
                    <p>We restrict our workload to only a few select projects concurrently. This guarantees your app gets our undivided focus.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="why-visual">
              <img 
                src="/assets/why-logo.png" 
                alt="I ≠ U Logo" 
                className="why-logo-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section section-dark" id="services-overview">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Expertise Catalog</span>
            <h2 className="section-title">Services Overview</h2>
            <p className="section-description">
              Discover our specific services and methodologies engineered to drive efficiency and product quality.
            </p>
          </div>
          
          <div className="grid-3 services-grid">
            <div className="service-ov-card">
              <h4>UI/UX & Concepts</h4>
              <ul className="service-ov-list">
                <li>Research & Insights</li>
                <li>Interactive Wireframes</li>
                <li>Product Design Systems</li>
                <li>Dashboard & Web UI</li>
              </ul>
              <button onClick={() => handleNavClick('services')} className="btn-text">
                Explore Design Services <ArrowRight size={14} />
              </button>
            </div>

            <div className="service-ov-card">
              <h4>Software & Apps</h4>
              <ul className="service-ov-list">
                <li>Custom SaaS Platforms</li>
                <li>Web Applications (React/Vite)</li>
                <li>Cross-Platform Mobile (Flutter)</li>
                <li>Enterprise Integrations</li>
              </ul>
              <button onClick={() => handleNavClick('services')} className="btn-text">
                Explore Engineering Services <ArrowRight size={14} />
              </button>
            </div>

            <div className="service-ov-card">
              <h4>Automation Systems</h4>
              <ul className="service-ov-list">
                <li>ERPNext Customization</li>
                <li>n8n Workflow Pipelines</li>
                <li>Mautic Marketing Engines</li>
                <li>REST & GraphQL APIs</li>
              </ul>
              <button onClick={() => handleNavClick('services')} className="btn-text">
                Explore Integrations <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section section-light tech-marquee-section">
        <LightCanvas />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="section-subtitle" style={{ color: 'var(--accent-blue)' }}>Expert Competence</span>
            <h2 className="section-title" style={{ color: 'var(--text-light-primary)' }}>Technologies We Use</h2>
          </div>
          
          <div className="tech-badge-container">
            {['Figma', 'React', 'Flutter', 'ERPNext', 'n8n', 'Mautic', 'APIs', 'Google Tag Manager'].map((tech) => (
              <div key={tech} className="tech-badge" onClick={() => handleNavClick('technologies')}>
                {tech}
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button onClick={() => handleNavClick('technologies')} className="btn btn-light-secondary">
              View Detailed Tech Stack
            </button>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="section section-dark contact-cta-section" id="contact-cta">
        <div className="blob blob-1 animate-pulse-slow"></div>
        <div className="container">
          <div className="grid-2 cta-form-grid">
            <div className="cta-info">
              <span className="section-subtitle">Let's Partner</span>
              <h2 className="section-title">Ready to build something amazing?</h2>
              <p className="cta-text">
                Connect with our engineering team to discuss your dashboard requirements, app workflows, or digital design systems. We're excited to learn more about your goals.
              </p>
              
              <div className="contact-info-cards">
                <div className="info-mini-card">
                  <h5>Direct Email</h5>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tejaswini@iu-systems.com" target="_blank" rel="noopener noreferrer">tejaswini@iu-systems.com</a>
                </div>
                <div className="info-mini-card">
                  <h5>LinkedIn Page</h5>
                  <a href="https://www.linkedin.com/company/125074039/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">I ≠ U Company Profile</a>
                </div>
              </div>
            </div>

            <div className="cta-form-container glass-card">
              <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>Send us a message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Styling */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(180deg, #050a10 0%, var(--bg-dark-primary) 100%);
          padding: calc(var(--header-height) + 2rem) 0 4rem 0;
          overflow: hidden;
        }

        .hero-container {
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-badge {
          display: inline-block;
          font-family: var(--font-headings);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--accent-cyan);
          background: rgba(65, 201, 226, 0.08);
          border: 1px solid rgba(65, 201, 226, 0.2);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-size: clamp(2.25rem, 8vw, 4.5rem);
          line-height: 1.1;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-dark-secondary);
          margin-bottom: 3rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 20%, rgba(0, 141, 218, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        /* What We Do Cards */
        .what-we-do-card {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          height: 100%;
          padding: 0;
          overflow: hidden;
        }

        .card-img-preview-wrap {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          overflow: hidden;
          background-color: var(--bg-dark-primary);
          border-bottom: 1px solid var(--border-dark);
        }

        .card-img-preview {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .what-we-do-card:hover .card-img-preview {
          transform: scale(1.05);
        }

        .card-slideshow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .card-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .card-slide.active {
          opacity: 1;
        }

        .card-slideshow-dots {
          position: absolute;
          bottom: 0.75rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.35rem;
          z-index: 5;
        }

        .card-slideshow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }

        .card-slideshow-dot.active {
          background: var(--accent-cyan);
          width: 15px;
          border-radius: 3px;
        }

        .card-info-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-grow: 1;
        }

        .card-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(0, 141, 218, 0.1);
          border: 1px solid rgba(0, 141, 218, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.75rem;
          color: var(--accent-cyan);
        }

        .card-icon {
          width: 26px;
          height: 26px;
        }

        .what-we-do-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .what-we-do-card p {
          color: var(--text-dark-secondary);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .card-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-cyan);
          font-family: var(--font-headings);
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition-fast);
        }

        .card-link:hover {
          color: var(--accent-blue);
          gap: 0.75rem;
        }

        /* Why Work With Us */
        .why-grid {
          align-items: center;
        }

        .why-lead {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          line-height: 1.5;
        }

        .why-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .why-list li {
          display: flex;
          gap: 1.5rem;
        }

        .why-list-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 141, 218, 0.08);
          border: 1px solid rgba(0, 141, 218, 0.2);
          color: var(--accent-blue);
        }

        .why-list h4 {
          font-size: 1.15rem;
          margin-bottom: 0.35rem;
          color: var(--text-light-primary);
        }

        .why-list p {
          color: var(--text-light-secondary);
          font-size: 0.95rem;
          margin: 0;
        }

        .why-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .why-logo-img {
          max-width: 280px;
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.08));
        }

        /* Services Overview Cards */
        .services-grid {
          margin-top: 2rem;
        }

        .service-ov-card {
          background: rgba(12, 24, 37, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 2.5rem;
          transition: all var(--transition-normal);
        }

        .service-ov-card:hover {
          border-color: rgba(0, 141, 218, 0.2);
          background: rgba(12, 24, 37, 0.8);
          transform: translateY(-3px);
        }

        .service-ov-card h4 {
          font-size: 1.35rem;
          color: #ffffff;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .service-ov-card h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background-color: var(--accent-cyan);
        }

        .service-ov-list {
          margin-bottom: 2.5rem;
        }

        .service-ov-list li {
          font-size: 0.95rem;
          color: var(--text-dark-secondary);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .service-ov-list li::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-blue);
        }

        .btn-text {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-headings);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--accent-cyan);
          transition: var(--transition-fast);
        }

        .btn-text:hover {
          color: #ffffff;
          gap: 0.75rem;
        }

        /* Tech Marquee / Badges */
        .tech-badge-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .tech-badge {
          padding: 0.85rem 2rem;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 50px;
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-light-primary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .tech-badge:hover {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 141, 218, 0.1);
        }

        /* Contact CTA */
        .contact-cta-section {
          background-color: var(--bg-dark-primary);
          position: relative;
        }

        .cta-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cta-text {
          font-size: 1.15rem;
          color: var(--text-dark-secondary);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .contact-info-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .info-mini-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1.5rem;
        }

        .info-mini-card h5 {
          font-size: 0.85rem;
          text-transform: uppercase;
          color: var(--text-dark-muted);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .info-mini-card a {
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 500;
          color: #ffffff;
        }

        .info-mini-card a:hover {
          color: var(--accent-cyan);
        }

        @media (max-width: 992px) {
          .cta-form-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 768px) {
          .hero-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions button {
            width: 100%;
          }
          .why-grid {
            grid-template-columns: 1fr;
          }
          .why-visual {
            margin-top: 3rem;
          }
          .contact-info-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
