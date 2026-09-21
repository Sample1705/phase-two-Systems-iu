import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnalyticsTracker from './components/AnalyticsTracker';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';

function AppContent() {
  const [servicesTab, setServicesTab] = useState('ui-ux');
  const navigate = useNavigate();

  const setCurrentPage = (pageId) => {
    const path = pageId === 'home' ? '/' : `/${pageId}`;
    navigate(path);
  };

  return (
    <div className="app-container">
      <AnalyticsTracker />
      <Header setServicesTab={setServicesTab} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
          <Route path="/services" element={<Services activeTab={servicesTab} setActiveTab={setServicesTab} setCurrentPage={setCurrentPage} />} />
          <Route path="/about" element={<About setCurrentPage={setCurrentPage} />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home setCurrentPage={setCurrentPage} />} />
        </Routes>
      </main>

      <Footer />

      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-content {
          flex-grow: 1;
          padding-bottom: 6rem; /* Keep space between page content and the footer, never let them touch */
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

