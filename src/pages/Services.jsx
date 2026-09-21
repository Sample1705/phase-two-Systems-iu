import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layers, Database, Share2, Terminal, Code, Cpu, Smartphone, LayoutGrid, Heart, Search, Eye, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import LightCanvas from '../components/LightCanvas';

const Figma = ({ size = 24, className }) => (
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
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 18.5A3.5 3.5 0 0 1 8.5 15H12v3.5A3.5 3.5 0 1 1 5 18.5z" />
  </svg>
);

function ServiceVisual({ type }) {
  switch (type) {
    case 'ui-ux':
      return (
        <div className="service-visual-box uiux-box">
          <div className="wireframe-mobile">
            <div className="mobile-header">
              <span className="dot"></span>
              <span className="bar"></span>
            </div>
            <div className="mobile-body">
              <div className="skeleton-hero animate-pulse-slow"></div>
              <div className="skeleton-grid">
                <div className="skeleton-item animate-pulse-slow"></div>
                <div className="skeleton-item animate-pulse-slow"></div>
              </div>
              <div className="skeleton-text animate-pulse-slow"></div>
            </div>
          </div>
          <div className="wireframe-desktop">
            <div className="desktop-header">
              <span className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="url-bar"></span>
            </div>
            <div className="desktop-body">
              <div className="skeleton-sidebar">
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <div className="skeleton-content">
                <div className="skeleton-chart">
                  <svg viewBox="0 0 100 40" className="chart-svg">
                    <path d="M0,35 Q15,10 30,25 T60,5 T90,30 L100,40 L0,40 Z" fill="rgba(65, 201, 226, 0.1)" stroke="var(--accent-cyan)" strokeWidth="2" />
                    <circle cx="30" cy="25" r="3" fill="#ffffff" />
                    <circle cx="60" cy="5" r="3" fill="#ffffff" />
                  </svg>
                </div>
                <div className="skeleton-cards">
                  <div className="skeleton-card"></div>
                  <div className="skeleton-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'app-dev':
      return (
        <div className="service-visual-box code-box">
          <div className="editor-header">
            <span className="tab-file active">App.jsx</span>
            <span className="tab-file inactive">index.css</span>
          </div>
          <div className="editor-content font-mono">
            <pre>
              <code>
<span className="keyword">import</span> React, &#123; useState &#125; <span className="keyword">from</span> <span className="string">'react'</span>;<br/>
<span className="keyword">import</span> &#123; createRoot &#125; <span className="keyword">from</span> <span className="string">'react-dom/client'</span>;<br/><br/>

<span className="keyword">const</span> <span className="function">ScaleSystem</span> = (props) =&gt; &#123;<br/>
  <span className="keyword">const</span> [active, setActive] = <span className="function">useState</span>(<span className="boolean">true</span>);<br/><br/>
  
  <span className="keyword">return</span> (<br/>
    &lt;<span className="tag">div</span> <span className="attr">className</span>=<span className="string">"flex items-center"</span>&gt;<br/>
      &lt;<span className="tag">span</span>&gt;System Operational&lt;/<span className="tag">span</span>&gt;<br/>
      &lt;<span className="tag">StatusPulse</span> <span className="attr">state</span>=&#123;active&#125; /&gt;<br/>
    &lt;/<span className="tag">div</span>&gt;<br/>
  );<br/>
&#125;;<br/><br/>

<span className="keyword">export default</span> <span className="function">ScaleSystem</span>;
              </code>
            </pre>
          </div>
        </div>
      );
    case 'integrations':
      return (
        <div className="service-visual-box workflow-box">
          <div className="node-wrapper">
            <div className="workflow-node node-trigger">
              <div className="node-icon-wrap"><Smartphone size={20} /></div>
              <span>Webhook</span>
              <span className="badge trigger">Trigger</span>
            </div>
            <div className="connector-line">
              <div className="pulse-dot"></div>
            </div>
            <div className="workflow-node node-process">
              <div className="node-icon-wrap"><Cpu size={20} /></div>
              <span>n8n pipeline</span>
              <span className="badge process">Process</span>
            </div>
            <div className="connector-line">
              <div className="pulse-dot delay-1"></div>
            </div>
            <div className="workflow-node node-destination">
              <div className="node-icon-wrap"><Database size={20} /></div>
              <span>ERPNext</span>
              <span className="badge sync">Sync</span>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function ShowcaseSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="showcase-slideshow">
      {images.map((imgSrc, idx) => (
        <div 
          key={imgSrc} 
          className={`slideshow-slide ${idx === currentIndex ? 'active' : ''}`}
        >
          <img src={imgSrc} alt={`Integration visual ${idx + 1}`} className="slideshow-img" />
        </div>
      ))}
      
      <button className="slideshow-nav prev" onClick={handlePrev} aria-label="Previous slide">
        <ChevronLeft size={20} />
      </button>
      <button className="slideshow-nav next" onClick={handleNext} aria-label="Next slide">
        <ChevronRight size={20} />
      </button>

      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`slideshow-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


export default function Services({ activeTab, setActiveTab, setCurrentPage }) {

  const tabContent = {
    'ui-ux': {
      title: 'UI/UX Design & Product Strategy',
      subtitle: 'Design that speaks. Interfaces that convert.',
      desc: 'We place user behavior at the center of our creative process. Our designs do not just look stunning—they feel intuitive, simplify complex flows, and support your business goals.',
      items: [
        {
          icon: <Search className="service-icon" />,
          title: 'UX Research & Analysis',
          bullets: ['User persona mapping and journey audits', 'Competitor benchmarking and heatmapping', 'Usability testing & feedback analysis']
        },
        {
          icon: <Eye className="service-icon" />,
          title: 'Interactive Wireframes',
          bullets: ['Low and high-fidelity prototype flows', 'Architecture and hierarchy layouts', 'Quick validation loops prior to visual styling']
        },
        {
          icon: <Figma className="service-icon" />,
          title: 'Product Design Systems',
          bullets: ['Consistent component libraries in Figma', 'Design token alignment for developer handover', 'Design-to-code guidelines']
        },
        {
          icon: <Smartphone className="service-icon" />,
          title: 'Mobile App Design',
          bullets: ['iOS and Android native visual layouts', 'Gesture navigation mapping', 'Adaptive styling across screen shapes']
        },
        {
          icon: <LayoutGrid className="service-icon" />,
          title: 'Dashboard & Platform UI',
          bullets: ['Complex data charts visual mapping', 'Table layouts, filtering systems, and details panels', 'Enterprise SaaS interfaces custom layouts']
        }
      ]
    },
    'app-dev': {
      title: 'Full-Stack Software Development',
      subtitle: 'Performant architectures. Clean code.',
      desc: 'We engineer secure, scalable, and responsive applications tailored to your business. Our developers work side-by-side with our designers to ensure pixel-perfect fidelity.',
      items: [
        {
          icon: <Code className="service-icon" />,
          title: 'Web Applications',
          bullets: ['Interactive frontends in React & Vite', 'SEO-friendly, ultra-fast styling structures', 'Admin consoles and reporting panels']
        },
        {
          icon: <Smartphone className="service-icon" />,
          title: 'Mobile Applications',
          bullets: ['Cross-platform apps using Flutter & React Native', 'Offline caching and native hardware integrations', 'App Store & Play Store publication management']
        },
        {
          icon: <Cpu className="service-icon" />,
          title: 'SaaS Platforms',
          bullets: ['Multi-tenant databases and secure access management', 'Stripe & PayPal billing and subscription engines', 'Scalable cloud setups (AWS/Vercel)']
        },
        {
          icon: <Terminal className="service-icon" />,
          title: 'Custom Software Systems',
          bullets: ['High-throughput databases (PostgreSQL/Redis)', 'Secure user accounts and session systems', 'Background task queues and worker nodes']
        }
      ]
    },
    'integrations': {
      title: 'Integrations & Workflow Automation',
      subtitle: 'Connect systems. Eliminate manual labor.',
      desc: 'We bind isolated software programs into a cohesive neural network. By automating data pipelines and setting up centralized database engines, we save your team hundreds of manual hours.',
      items: [
        {
          icon: <Database className="service-icon" />,
          title: 'ERPNext Setup & Customization',
          bullets: ['Deploy and configure ERPNext modules', 'Custom DocTypes, custom print formats, and client scripts', 'Inventory, sales, procurement, and billing systems']
        },
        {
          icon: <Cpu className="service-icon" />,
          title: 'n8n Workflow Automation',
          bullets: ['Visual automated pipelines for data flow', 'Webhook triggers, conditional nodes, and data parsing', 'Error handling and automated slack/email notifications']
        },
        {
          icon: <Share2 className="service-icon" />,
          title: 'Custom API Integrations',
          bullets: ['Build secure REST and GraphQL API endpoints', 'Third-party integrations (CRM, payment, shipping)', 'Webhooks and real-time database synchronization']
        },
        {
          icon: <Layers className="service-icon" />,
          title: 'Mautic Marketing Systems',
          bullets: ['Self-hosted marketing automation server configs', 'Email campaigns, segment synchronization, and lead scoring', 'Website visitor tracking and forms integration']
        }
      ]
    }
  };

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="services-page">
      <Helmet>
        <title>Services | UI/UX Design, ERPNext & n8n Automation - I ≠ U</title>
        <meta name="description" content="Explore our core services: UI/UX design, full-stack web and mobile application development, ERPNext customization, n8n workflow automation, and custom API integration." />
        <link rel="canonical" href="https://iu-systems.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iu-systems.com/services" />
        <meta property="og:title" content="Services | UI/UX Design, ERPNext & n8n Automation - I ≠ U" />
        <meta property="og:description" content="Explore our core services: UI/UX design, full-stack web and mobile application development, ERPNext customization, n8n workflow automation, and custom API integration." />
        <meta property="og:image" content="https://iu-systems.com/assets/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | UI/UX Design, ERPNext & n8n Automation - I ≠ U" />
        <meta name="twitter:description" content="Explore our core services: UI/UX design, full-stack web and mobile application development, ERPNext customization, n8n workflow automation, and custom API integration." />
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
                "name": "Services",
                "item": "https://iu-systems.com/services"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Intro Header */}
      <section className="services-hero-section section-dark">
        <div className="container">
          <span className="section-subtitle">Our Capabilities</span>
          <h1 className="services-hero-title">Core Offerings & Expertise</h1>
          <p className="services-hero-desc">
            We specialize in translating digital concepts into highly functional solutions. Explore our core services.
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="services-tabs-section section section-light">
        <LightCanvas />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tabs-nav">
            <button 
              onClick={() => setActiveTab('ui-ux')} 
              className={`tab-btn ${activeTab === 'ui-ux' ? 'active' : ''}`}
            >
              <Figma size={18} />
              <span>UI/UX Design</span>
            </button>
            <button 
              onClick={() => setActiveTab('app-dev')} 
              className={`tab-btn ${activeTab === 'app-dev' ? 'active' : ''}`}
            >
              <Code size={18} />
              <span>App Development</span>
            </button>
            <button 
              onClick={() => setActiveTab('integrations')} 
              className={`tab-btn ${activeTab === 'integrations' ? 'active' : ''}`}
            >
              <Cpu size={18} />
              <span>Integrations & Automation</span>
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="tab-panel animate-float">
            <div className="grid-2 panel-intro-grid">
              <div className="panel-intro-text">
                <span className="panel-subtitle">{tabContent[activeTab].subtitle}</span>
                <h2>{tabContent[activeTab].title}</h2>
                <p className="panel-desc">{tabContent[activeTab].desc}</p>
              </div>
              <div className="panel-intro-image-container">
                {activeTab === 'integrations' ? (
                  <ShowcaseSlideshow 
                    images={[
                      '/assets/integration-handshake.jpg',
                      '/assets/integration-network.jpg',
                      '/assets/integration-automation.jpg'
                    ]} 
                  />
                ) : activeTab === 'app-dev' ? (
                  <ShowcaseSlideshow 
                    images={[
                      '/assets/appdev-chart.jpg',
                      '/assets/appdev-brain.jpg',
                      '/assets/appdev-dashboard.jpg'
                    ]} 
                  />
                ) : activeTab === 'ui-ux' ? (
                  <ShowcaseSlideshow 
                    images={[
                      '/assets/uiux-tactile.jpg',
                      '/assets/uiux-tablet.jpg',
                      '/assets/uiux-laptop.jpg'
                    ]} 
                  />
                ) : (
                  <ServiceVisual type={activeTab} />
                )}
              </div>
            </div>

            <div className="grid-2 services-detail-grid">
              {tabContent[activeTab].items.map((item, index) => (
                <div key={index} className="glass-card-light service-detail-card">
                  <div className="detail-card-header">
                    <div className="detail-icon-wrap">{item.icon}</div>
                    <h3>{item.title}</h3>
                  </div>
                  <ul className="bullet-list">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="bullet-check" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="services-cta-banner">
            <h3>Need a tailor-made combination of these services?</h3>
            <p>We routinely build apps that incorporate frontend interfaces (React), mobile dashboards (Flutter), and automated backend ERP connections (ERPNext/n8n).</p>
            <button onClick={() => handleNavClick('contact')} className="btn btn-primary">
              Discuss Your Strategy
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .services-hero-section {
          padding: 8rem 0 4rem 0;
          background: linear-gradient(180deg, #050a10 0%, var(--bg-dark-primary) 100%);
          text-align: center;
        }

        .services-hero-title {
          font-size: clamp(2.25rem, 6vw, 3.5rem);
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .services-hero-desc {
          font-size: 1.2rem;
          color: var(--text-dark-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Tabs Nav */
        .tabs-nav {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 4rem;
          margin-top: 0;
          position: relative;
          z-index: 10;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 50px;
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-light-secondary);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: all var(--transition-normal);
        }

        .tab-btn:hover {
          color: var(--text-light-primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        .tab-btn.active {
          background: var(--bg-dark-secondary);
          border-color: var(--bg-dark-secondary);
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(0, 141, 218, 0.15);
        }

        .tab-btn.active svg {
          color: var(--accent-cyan);
        }

        /* Tab Panel Styling */
        .tab-panel {
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: 24px;
          padding: 4rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.02);
          margin-bottom: 5rem;
          animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .panel-intro-grid {
          align-items: center;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .panel-intro-image-container {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--border-light);
        }

        /* Slideshow styles */
        .showcase-slideshow {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--bg-dark-primary);
        }

        .slideshow-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slideshow-slide.active {
          opacity: 1;
        }

        .slideshow-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slideshow-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease, background 0.3s ease, transform 0.2s ease;
          z-index: 5;
          outline: none;
        }

        .showcase-slideshow:hover .slideshow-nav {
          opacity: 1;
        }

        .slideshow-nav:hover {
          background: rgba(0, 141, 218, 0.6);
          transform: translateY(-50%) scale(1.1);
        }

        .slideshow-nav.prev {
          left: 1rem;
        }

        .slideshow-nav.next {
          right: 1rem;
        }

        .slideshow-dots {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 5;
        }

        .slideshow-dot {
          width: 8px;
          height: 8px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          outline: none;
        }

        .slideshow-dot:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        .slideshow-dot.active {
          background: var(--accent-cyan);
          width: 24px;
          border-radius: 4px;
        }

        /* Service Visual Containers */
        .service-visual-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--bg-dark-primary);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          color: #ffffff;
        }

        /* UIUX Wireframe Mockup Visual */
        .uiux-box {
          background: linear-gradient(135deg, #070e17 0%, #0c1825 100%);
          gap: 1.5rem;
        }

        .wireframe-mobile {
          width: 90px;
          height: 180px;
          border: 2px solid rgba(65, 201, 226, 0.4);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        .mobile-header {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .mobile-header .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(65, 201, 226, 0.4);
        }

        .mobile-header .bar {
          flex-grow: 1;
          height: 3px;
          border-radius: 2px;
          background: rgba(65, 201, 226, 0.2);
        }

        .mobile-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skeleton-hero {
          width: 100%;
          height: 45px;
          background: rgba(0, 141, 218, 0.15);
          border: 1px dashed rgba(0, 141, 218, 0.3);
          border-radius: 6px;
        }

        .skeleton-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .skeleton-item {
          height: 35px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .skeleton-text {
          width: 80%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          margin-top: auto;
        }

        .wireframe-desktop {
          flex-grow: 1;
          height: 180px;
          border: 2px solid rgba(0, 141, 218, 0.3);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          flex-direction: column;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }

        .desktop-header {
          height: 24px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          padding: 0 8px;
          gap: 12px;
        }

        .window-dots {
          display: flex;
          gap: 4px;
        }

        .window-dots span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }

        .url-bar {
          flex-grow: 0.6;
          height: 10px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 5px;
        }

        .desktop-body {
          flex-grow: 1;
          display: flex;
        }

        .skeleton-sidebar {
          width: 45px;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          padding: 10px 6px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar-item {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
        }

        .skeleton-content {
          flex-grow: 1;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skeleton-chart {
          flex-grow: 1;
          border: 1px dashed rgba(65, 201, 226, 0.2);
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }

        .chart-svg {
          width: 100%;
          height: 100%;
        }

        .skeleton-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .skeleton-card {
          height: 30px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 4px;
        }

        /* IDE Code Block Visual */
        .code-box {
          background: #050c14;
          border: 1px solid rgba(255, 255, 255, 0.05);
          flex-direction: column;
          align-items: stretch;
          padding: 0;
        }

        .editor-header {
          height: 36px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          padding: 0 16px;
          gap: 1rem;
        }

        .tab-file {
          font-family: var(--font-headings);
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0 4px;
          cursor: default;
        }

        .tab-file.active {
          color: var(--accent-cyan);
          border-bottom: 2px solid var(--accent-cyan);
          height: 100%;
          display: flex;
          align-items: center;
          margin-top: 2px;
        }

        .tab-file.inactive {
          color: var(--text-dark-muted);
        }

        .editor-content {
          padding: 1.5rem;
          overflow-x: auto;
          font-size: 0.85rem;
          line-height: 1.5;
          text-align: left;
        }

        .editor-content pre {
          margin: 0;
        }

        .keyword { color: #f43f5e; }
        .string { color: #10b981; }
        .function { color: #008DDA; }
        .boolean { color: #f59e0b; }
        .tag { color: #6366f1; }
        .attr { color: #41C9E2; }

        /* Workflow Integration Node Graph */
        .workflow-box {
          background: radial-gradient(circle at center, #0c1825 0%, #070e17 100%);
        }

        .node-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 420px;
          position: relative;
        }

        .workflow-node {
          width: 110px;
          padding: 12px 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          z-index: 2;
          position: relative;
        }

        .node-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 141, 218, 0.1);
          border: 1px solid rgba(0, 141, 218, 0.2);
          color: var(--accent-blue);
        }

        .node-trigger .node-icon-wrap {
          background: rgba(65, 201, 226, 0.1);
          border-color: rgba(65, 201, 226, 0.2);
          color: var(--accent-cyan);
        }

        .workflow-node span {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-dark-primary);
          text-align: center;
        }

        .workflow-node .badge {
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .badge.trigger {
          background: rgba(65, 201, 226, 0.15);
          color: var(--accent-cyan);
        }

        .badge.process {
          background: rgba(0, 141, 218, 0.15);
          color: var(--accent-blue);
        }

        .badge.sync {
          background: rgba(16, 115, 222, 0.15);
          color: #2563eb;
        }

        .connector-line {
          flex-grow: 1;
          height: 2px;
          background: linear-gradient(90deg, rgba(65, 201, 226, 0.4) 0%, rgba(0, 141, 218, 0.4) 100%);
          position: relative;
          z-index: 1;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          position: absolute;
          top: -2px;
          left: 0;
          animation: pulseMove 2.5s infinite linear;
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .pulse-dot.delay-1 {
          animation-delay: 1.25s;
          background: var(--accent-blue);
          box-shadow: 0 0 8px var(--accent-blue);
        }

        @keyframes pulseMove {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s infinite ease-in-out;
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        .panel-subtitle {
          font-family: var(--font-headings);
          font-size: 0.95rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-blue);
          margin-bottom: 0.5rem;
          display: block;
        }

        .panel-intro h2 {
          font-size: 2.5rem;
          color: var(--text-light-primary);
          margin-bottom: 1.25rem;
        }

        .panel-desc {
          font-size: 1.15rem;
          color: var(--text-light-secondary);
          line-height: 1.6;
        }

        .services-detail-grid {
          gap: 2.5rem;
        }

        .service-detail-card {
          padding: 2.5rem;
        }

        .detail-card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .detail-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(0, 141, 218, 0.05);
          border: 1px solid rgba(0, 141, 218, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          width: 22px;
          height: 22px;
        }

        .service-detail-card h3 {
          font-size: 1.35rem;
          color: var(--text-light-primary);
          margin: 0;
        }

        .bullet-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-light-secondary);
          font-size: 0.95rem;
        }

        .bullet-check {
          color: var(--accent-blue);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        /* Services CTA Banner */
        .services-cta-banner {
          background: linear-gradient(135deg, var(--bg-dark-secondary) 0%, var(--bg-dark-primary) 100%);
          border-radius: 20px;
          padding: 4rem;
          text-align: center;
          color: #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .services-cta-banner h3 {
          font-size: 1.85rem;
          margin-bottom: 1rem;
        }

        .services-cta-banner p {
          color: var(--text-dark-secondary);
          max-width: 650px;
          margin: 0 auto 2.5rem auto;
          font-size: 1.05rem;
        }

        @media (max-width: 992px) {
          .tab-panel {
            padding: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .panel-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          .tabs-nav {
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }
          .tab-btn {
            width: 100%;
            justify-content: center;
          }
          .panel-intro h2 {
            font-size: 2rem;
          }
          .services-cta-banner {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .tab-panel {
            padding: 1.5rem;
            border-radius: 16px;
          }
          .service-detail-card {
            padding: 1.5rem;
          }
          .services-cta-banner {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
