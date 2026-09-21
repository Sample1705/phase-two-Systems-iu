import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Shield, Heart, Zap, Sparkles } from 'lucide-react';
import LightCanvas from '../components/LightCanvas';

export default function About({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | I ≠ U App Solutions & Systems</title>
        <meta name="description" content="Learn about I ≠ U App Solutions & Systems - our product-first approach, philosophy, and dedicated team building scalable custom software." />
        <link rel="canonical" href="https://iu-systems.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iu-systems.com/about" />
        <meta property="og:title" content="About Us | I ≠ U App Solutions & Systems" />
        <meta property="og:description" content="Learn about I ≠ U App Solutions & Systems - our product-first approach, philosophy, and dedicated team building scalable custom software." />
        <meta property="og:image" content="https://iu-systems.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | I ≠ U App Solutions & Systems" />
        <meta name="twitter:description" content="Learn about I ≠ U App Solutions & Systems - our product-first approach, philosophy, and dedicated team building scalable custom software." />
        <meta name="twitter:image" content="https://iu-systems.com/assets/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://iu-systems.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://iu-systems.com/about"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Intro Header */}
      <section className="about-hero-section section-dark">
        <div className="container">
          <span className="section-subtitle">Our Story</span>
          <h1 className="about-hero-title">Who We Are</h1>
          <p className="about-hero-desc">
            A small technology-focused team of designers and engineers building software that solves real business challenges.
          </p>
        </div>
      </section>

      {/* Core Concept Details */}
      <section className="about-content-section section section-light">
        <LightCanvas />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2 details-intro-grid">
            <div className="text-col">
              <h2>Building with a Product-First Mindset</h2>
              <p className="lead-text">
                At I ≠ U, we don't just write code. We partner with you to discover, design, and deliver software that makes a tangible impact. 
              </p>
              <p className="body-text">
                We believe that software should be an asset, not a chore. We choose to maintain a small, highly focused team of expert practitioners rather than a large group of junior developers. This allows us to maintain direct communication lines, iterate quickly, and write clean, maintainable software architectures.
              </p>
            </div>
            <div className="highlight-card-col">
              <div className="premium-accent-box">
                <Sparkles className="box-icon" size={32} />
                <h3>Quality Over Volume</h3>
                <p>We purposefully limit the number of active projects we take on. This ensures your software receives our full cognitive bandwidth, attention to detail, and support.</p>
              </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Mission Details */}
          <div className="mission-intro">
            <span className="section-subtitle" style={{ textAlign: 'center', display: 'block' }}>Our Purpose</span>
            <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', color: 'var(--text-light-primary)' }}>Our Mission</h2>
            
            <div className="grid-3 mission-grid">
              <div className="glass-card-light mission-card">
                <div className="mission-icon-wrap"><Zap className="mission-icon" /></div>
                <h3>Build Scalable Apps</h3>
                <p>We build software designed for growth. Using modern tools like React and Flutter, we engineer fast user interfaces backed by robust cloud infrastructures.</p>
              </div>

              <div className="glass-card-light mission-card">
                <div className="mission-icon-wrap"><Target className="mission-icon" /></div>
                <h3>Connect Systems</h3>
                <p>We integrate separate softwares into unified neural pathways. By linking databases, custom webhooks, ERPNext, and n8n, we automate manual workflows.</p>
              </div>

              <div className="glass-card-light mission-card">
                <div className="mission-icon-wrap"><Shield className="mission-icon" /></div>
                <h3>Simplify Operations</h3>
                <p>Complexity slows growth. We design simple, easy-to-use admin consoles and data dashboards that let you understand and operate your systems quickly.</p>
              </div>
            </div>
          </div>

          {/* Core Values banner */}
          <div className="values-banner">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-num">01</span>
                <h4>Transparency</h4>
                <p>No sales jargon or hidden costs. We provide clear, weekly milestones and access to code repositories.</p>
              </div>
              <div className="value-item">
                <span className="value-num">02</span>
                <h4>Craftsmanship</h4>
                <p>We write clean, documented code and build cohesive design systems that make product modifications easy.</p>
              </div>
              <div className="value-item">
                <span className="value-num">03</span>
                <h4>Long-term Vision</h4>
                <p>We build systems that are easily maintainable, avoiding short-term hacks that cause technical debt later.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-hero-section {
          padding: 8rem 0 4rem 0;
          background: linear-gradient(180deg, #050a10 0%, var(--bg-dark-primary) 100%);
          text-align: center;
        }

        .about-hero-title {
          font-size: clamp(2.25rem, 6vw, 3.5rem);
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .about-hero-desc {
          font-size: 1.2rem;
          color: var(--text-dark-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Content Section */
        .details-intro-grid {
          margin-top: 4rem;
          align-items: center;
          gap: 4rem;
        }

        .text-col h2 {
          font-size: 2.25rem;
          color: var(--text-light-primary);
          margin-bottom: 1.5rem;
        }

        .lead-text {
          font-size: 1.2rem;
          color: var(--text-light-secondary);
          font-weight: 500;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .body-text {
          font-size: 1.05rem;
          color: var(--text-light-secondary);
          line-height: 1.7;
        }

        .premium-accent-box {
          background: linear-gradient(135deg, var(--bg-dark-secondary) 0%, var(--bg-dark-primary) 100%);
          color: #ffffff;
          padding: 3.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .box-icon {
          color: var(--accent-cyan);
          margin-bottom: 1.5rem;
        }

        .premium-accent-box h3 {
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }

        .premium-accent-box p {
          color: var(--text-dark-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .divider {
          border: 0;
          height: 1px;
          background: var(--border-light);
          margin: 6rem 0;
        }

        /* Mission Grid */
        .mission-grid {
          gap: 2rem;
        }

        .mission-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .mission-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: rgba(0, 141, 218, 0.05);
          border: 1px solid rgba(0, 141, 218, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .mission-icon {
          width: 24px;
          height: 24px;
        }

        .mission-card h3 {
          font-size: 1.35rem;
          color: var(--text-light-primary);
          margin-bottom: 1rem;
        }

        .mission-card p {
          color: var(--text-light-secondary);
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.6;
        }

        /* Values Banner */
        .values-banner {
          background-color: var(--bg-light-secondary);
          border: 1px solid var(--border-light);
          border-radius: 20px;
          padding: 4rem;
          margin-top: 6rem;
        }

        .values-banner h2 {
          font-size: 2rem;
          color: var(--text-light-primary);
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .value-item {
          display: flex;
          flex-direction: column;
        }

        .value-num {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 500;
          color: rgba(0, 141, 218, 0.15);
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .value-item h4 {
          font-size: 1.2rem;
          color: var(--text-light-primary);
          margin-bottom: 0.5rem;
        }

        .value-item p {
          color: var(--text-light-secondary);
          font-size: 0.95rem;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .details-intro-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .values-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .divider {
            margin: 3rem 0;
          }
        }

        @media (max-width: 576px) {
          .premium-accent-box {
            padding: 2rem 1.5rem;
          }
          .values-banner {
            padding: 2rem 1.25rem;
          }
          .mission-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
