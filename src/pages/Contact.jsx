import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Globe, MapPin, MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import LightCanvas from '../components/LightCanvas';

const Linkedin = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | Consultation & Project Inquiry - I ≠ U</title>
        <meta name="description" content="Get in touch with I ≠ U App Solutions & Systems for custom software development, ERPNext integrations, n8n workflow automation, or UI/UX consultation." />
        <link rel="canonical" href="https://iu-systems.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iu-systems.com/contact" />
        <meta property="og:title" content="Contact Us | Consultation & Project Inquiry - I ≠ U" />
        <meta property="og:description" content="Get in touch with I ≠ U App Solutions & Systems for custom software development, ERPNext integrations, n8n workflow automation, or UI/UX consultation." />
        <meta property="og:image" content="https://iu-systems.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Consultation & Project Inquiry - I ≠ U" />
        <meta name="twitter:description" content="Get in touch with I ≠ U App Solutions & Systems for custom software development, ERPNext integrations, n8n workflow automation, or UI/UX consultation." />
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
                "name": "Contact",
                "item": "https://iu-systems.com/contact"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Intro Header */}
      <section className="contact-hero-section section-dark">
        <div className="container">
          <span className="section-subtitle">Get in Touch</span>
          <h1 className="contact-hero-title">Let's Connect</h1>
          <p className="contact-hero-desc">
            Have a project in mind, need system automation, or want to consult on product design? Send us a message and we'll reply promptly.
          </p>
        </div>
      </section>

      {/* Main Details Panel */}
      <section className="contact-details-section section section-light">
        <LightCanvas />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2 contact-main-grid">
            <div className="contact-info-col">
              <h2>Contact Information</h2>
              <p className="contact-lead-text">
                We are a remote-first, globally distributed team ready to help you simplify and automate operations.
              </p>

              <div className="contact-methods">
                <div className="contact-method-item">
                  <div className="method-icon-wrap"><Mail size={20} /></div>
                  <div>
                    <h4>Direct Email</h4>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tejaswini@iu-systems.com" target="_blank" rel="noopener noreferrer" className="method-link">tejaswini@iu-systems.com</a>
                    <p className="method-subtext">We respond within 24 hours.</p>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon-wrap"><Linkedin size={20} /></div>
                  <div>
                    <h4>LinkedIn Profile</h4>
                    <a href="https://www.linkedin.com/company/125074039/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="method-link">linkedin.com/company/125074039</a>
                    <p className="method-subtext">Follow us for updates and concepts.</p>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon-wrap"><Globe size={20} /></div>
                  <div>
                    <h4>Location & Hours</h4>
                    <span className="method-link-static">Remote-First Model</span>
                    <p className="method-subtext">Operating globally, syncing with your timeline.</p>
                  </div>
                </div>
              </div>

              <div className="contact-quote-card">
                <MessageSquare className="quote-icon" size={24} />
                <p>"The best systems are the ones that save time silently, letting your team focus on core product value."</p>
                <span>— I ≠ U Engineering Principle</span>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="glass-card-light contact-page-form-container">
                <h3>Send an Inquiry</h3>
                <p>Fill out the form below, and we will route it to our design or engineering lead.</p>
                <ContactForm lightTheme={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero-section {
          padding: 8rem 0 4rem 0;
          background: linear-gradient(180deg, #050a10 0%, var(--bg-dark-primary) 100%);
          text-align: center;
        }

        .contact-hero-title {
          font-size: clamp(2.25rem, 6vw, 3.5rem);
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .contact-hero-desc {
          font-size: 1.2rem;
          color: var(--text-dark-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Grid info */
        .contact-main-grid {
          gap: 5rem;
          align-items: start;
        }

        .contact-info-col h2 {
          font-size: 2.25rem;
          color: var(--text-light-primary);
          margin-bottom: 1rem;
        }

        .contact-lead-text {
          font-size: 1.15rem;
          color: var(--text-light-secondary);
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .contact-method-item {
          display: flex;
          gap: 1.25rem;
        }

        .method-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0, 141, 218, 0.05);
          border: 1px solid rgba(0, 141, 218, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-method-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
          color: var(--text-light-primary);
        }

        .method-link {
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--accent-blue);
          transition: var(--transition-fast);
        }

        .method-link:hover {
          color: var(--accent-cyan);
        }

        .method-link-static {
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-light-primary);
        }

        .method-subtext {
          font-size: 0.85rem;
          color: var(--text-light-muted);
          margin: 0.15rem 0 0 0;
        }

        .contact-quote-card {
          background-color: var(--bg-light-secondary);
          border: 1px solid var(--border-light);
          padding: 2rem;
          border-radius: 12px;
          position: relative;
        }

        .quote-icon {
          color: var(--accent-cyan);
          margin-bottom: 1rem;
        }

        .contact-quote-card p {
          color: var(--text-light-secondary);
          font-size: 0.95rem;
          font-style: italic;
          margin: 0 0 1rem 0;
          line-height: 1.6;
        }

        .contact-quote-card span {
          font-family: var(--font-headings);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-light-primary);
        }

        /* Form wrap */
        .contact-page-form-container {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
        }

        .contact-page-form-container h3 {
          font-size: 1.5rem;
          color: var(--text-light-primary);
          margin-bottom: 0.5rem;
        }

        .contact-page-form-container p {
          color: var(--text-light-secondary);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 576px) {
          .contact-page-form-container {
            padding: 1.5rem;
            border-radius: 16px;
          }
          .contact-quote-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
