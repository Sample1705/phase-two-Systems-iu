import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, Layout, Globe, Activity, Terminal, Code2, Database, BarChart3, ShieldCheck } from 'lucide-react';
import LightCanvas from '../components/LightCanvas';

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'design', label: 'Design' },
    { id: 'frontend', label: 'Client Engineering' },
    { id: 'backend', label: 'ERP & Automation' },
    { id: 'analytics', label: 'APIs & Analytics' }
  ];

  const techStack = [
    {
      name: 'Figma',
      category: 'design',
      role: 'UI/UX & Prototyping',
      description: 'Used for user flows, interactive wireframes, custom UI layouts, and cohesive product design systems.',
      expertise: 'Design Systems Handover',
      icon: <Layout size={24} />
    },
    {
      name: 'React',
      category: 'frontend',
      role: 'Web Application Development',
      description: 'We develop lightning-fast frontend interfaces, interactive dashboards, and SaaS panels using React + Vite.',
      expertise: 'SPA & State Architectures',
      icon: <Code2 size={24} />
    },
    {
      name: 'Flutter',
      category: 'frontend',
      role: 'Cross-Platform Mobile Apps',
      description: 'Building compiled, native-performance applications for iOS and Android using a unified Flutter codebase.',
      expertise: 'Native Bridge & Offline-First',
      icon: <Globe size={24} />
    },
    {
      name: 'ERPNext',
      category: 'backend',
      role: 'Enterprise Operations Hub',
      description: 'Customizing modules for sales, purchasing, inventory tracking, HR, and billing. We adapt ERPNext to fit your workflow.',
      expertise: 'Custom DocTypes & Scripting',
      icon: <Database size={24} />
    },
    {
      name: 'n8n',
      category: 'backend',
      role: 'Visual Workflow Pipelines',
      description: 'Orchestrating automation scripts that connect web services, trigger data pushes, and execute schedule updates.',
      expertise: 'Webhook & Data Parsing',
      icon: <Cpu size={24} />
    },
    {
      name: 'Mautic',
      category: 'analytics',
      role: 'Marketing Automation Engine',
      description: 'Self-hosted marketing operations for tracking website actions, sending automated newsletters, and scoring client leads.',
      expertise: 'Campaign Integrations',
      icon: <Activity size={24} />
    },
    {
      name: 'Custom APIs',
      category: 'analytics',
      role: 'System Communication Layers',
      description: 'Writing robust, secure REST and GraphQL endpoints that bridge React/Flutter frontends with relational databases.',
      expertise: 'OAuth & Middleware Security',
      icon: <Terminal size={24} />
    },
    {
      name: 'Google Tag Manager',
      category: 'analytics',
      role: 'Behavior Tracking & Analytics',
      description: 'Deploying tracking scripts without affecting code speed, establishing event tracking, and validating funnel flows.',
      expertise: 'Custom Events & DataLayers',
      icon: <BarChart3 size={24} />
    }
  ];

  const filteredTech = activeCategory === 'all'
    ? techStack
    : techStack.filter(t => t.category === activeCategory);

  return (
    <div className="technologies-page">
      <Helmet>
        <title>Technology Stack & Frameworks | I ≠ U App Solutions</title>
        <meta name="description" content="Explore the modern tech stack used at I ≠ U: React, Vite, Flutter, Python, PostgreSQL, Docker, ERPNext, n8n, Mautic, and cloud infrastructure." />
        <link rel="canonical" href="https://iu-systems.com/technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iu-systems.com/technologies" />
        <meta property="og:title" content="Technology Stack & Frameworks | I ≠ U App Solutions" />
        <meta property="og:description" content="Explore the modern tech stack used at I ≠ U: React, Vite, Flutter, Python, PostgreSQL, Docker, ERPNext, n8n, Mautic, and cloud infrastructure." />
        <meta property="og:image" content="https://iu-systems.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technology Stack & Frameworks | I ≠ U App Solutions" />
        <meta name="twitter:description" content="Explore the modern tech stack used at I ≠ U: React, Vite, Flutter, Python, PostgreSQL, Docker, ERPNext, n8n, Mautic, and cloud infrastructure." />
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
                "name": "Technologies",
                "item": "https://iu-systems.com/technologies"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Intro Header */}
      <section className="tech-hero-section section-dark">
        <div className="container">
          <span className="section-subtitle">Our Capabilities</span>
          <h1 className="tech-hero-title">Our Technical Stack</h1>
          <p className="tech-hero-desc">
            We hold expertise in modern libraries, mobile frameworks, cloud databases, and workflow pipelines. 
          </p>
        </div>
      </section>

      {/* Tech Content Grid */}
      <section className="tech-grid-section section section-light">
        <LightCanvas />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Categories Nav */}
          <div className="tech-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`tech-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid-2 tech-cards-grid">
            {filteredTech.map((tech, index) => (
              <div key={index} className="glass-card-light tech-stack-card animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="tech-card-header">
                  <div className="tech-icon-wrap">{tech.icon}</div>
                  <div>
                    <h3>{tech.name}</h3>
                    <span className="tech-role">{tech.role}</span>
                  </div>
                </div>
                
                <p className="tech-description">{tech.description}</p>
                
                <div className="tech-card-footer">
                  <ShieldCheck size={16} className="badge-icon" />
                  <span className="tech-expertise-label">Focused Skill:</span>
                  <span className="tech-expertise-value">{tech.expertise}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="tech-philosophy-banner">
            <h3>Why we select these tools</h3>
            <p>Our stack is chosen to balance high performance, flexibility, and maintainability. By relying on open-source leaders (like ERPNext, n8n, and Mautic) combined with advanced frameworks (React and Flutter), we create systems that do not lock you into expensive software subscriptions.</p>
          </div>
        </div>
      </section>

      <style>{`
        .tech-hero-section {
          padding: 8rem 0 4rem 0;
          background: linear-gradient(180deg, #050a10 0%, var(--bg-dark-primary) 100%);
          text-align: center;
        }

        .tech-hero-title {
          font-size: clamp(2.25rem, 6vw, 3.5rem);
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .tech-hero-desc {
          font-size: 1.2rem;
          color: var(--text-dark-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Filters */
        .tech-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          margin-top: 0;
          position: relative;
          z-index: 10;
          flex-wrap: wrap;
        }

        .tech-filter-btn {
          padding: 0.8rem 1.75rem;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 50px;
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-light-secondary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          transition: all var(--transition-normal);
        }

        .tech-filter-btn:hover {
          color: var(--text-light-primary);
          transform: translateY(-2px);
        }

        .tech-filter-btn.active {
          background: var(--bg-dark-secondary);
          border-color: var(--bg-dark-secondary);
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(0, 141, 218, 0.15);
        }

        /* Tech Cards */
        .tech-cards-grid {
          gap: 2.5rem;
          margin-bottom: 5rem;
        }

        .tech-stack-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .tech-card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .tech-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(0, 141, 218, 0.05);
          border: 1px solid rgba(0, 141, 218, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-card-header h3 {
          font-size: 1.5rem;
          color: var(--text-light-primary);
          margin-bottom: 0.2rem;
        }

        .tech-role {
          font-size: 0.85rem;
          color: var(--text-light-secondary);
          font-weight: 500;
        }

        .tech-description {
          color: var(--text-light-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .tech-card-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
          font-size: 0.85rem;
        }

        .badge-icon {
          color: var(--accent-cyan);
        }

        .tech-expertise-label {
          color: var(--text-light-muted);
          font-weight: 500;
        }

        .tech-expertise-value {
          color: var(--text-light-primary);
          font-weight: 600;
        }

        /* Banner */
        .tech-philosophy-banner {
          background-color: var(--bg-light-secondary);
          border: 1px solid var(--border-light);
          border-radius: 20px;
          padding: 4rem;
          text-align: center;
        }

        .tech-philosophy-banner h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: var(--text-light-primary);
        }

        .tech-philosophy-banner p {
          color: var(--text-light-secondary);
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        @media (max-width: 768px) {
          .tech-philosophy-banner {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .tech-stack-card {
            padding: 1.5rem;
          }
          .tech-philosophy-banner {
            padding: 2rem 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
