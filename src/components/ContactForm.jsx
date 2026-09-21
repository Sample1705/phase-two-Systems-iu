import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm({ lightTheme = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  if (submitSuccess) {
    return (
      <div className={`success-card ${lightTheme ? 'light' : ''} animate-float`}>
        <div className="success-icon-wrap">
          <CheckCircle2 size={56} className="success-icon" />
        </div>
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for reaching out. A team member from I ≠ U will review your request and get back to you within 24 hours.</p>
        <button onClick={() => setSubmitSuccess(false)} className="btn btn-primary">
          Send Another Message
        </button>
        <style>{`
          .success-card {
            text-align: center;
            padding: 3rem;
            border-radius: 16px;
            background: rgba(12, 24, 37, 0.7);
            border: 1px solid rgba(0, 141, 218, 0.3);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          }
          .success-card.light {
            background: rgba(255, 255, 255, 0.95);
            border-color: rgba(0, 141, 218, 0.2);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
            color: var(--text-light-primary);
          }
          .success-icon-wrap {
            margin-bottom: 1.5rem;
            color: var(--accent-cyan);
            display: flex;
            justify-content: center;
          }
          .success-icon {
            animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          .success-card h3 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
            color: #ffffff;
          }
          .success-card.light h3 {
            color: var(--text-light-primary);
          }
          .success-card p {
            color: var(--text-dark-secondary);
            margin-bottom: 2rem;
            font-size: 1.05rem;
          }
          .success-card.light p {
            color: var(--text-light-secondary);
          }
          @keyframes scaleUp {
            from { transform: scale(0); }
            to { transform: scale(1); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`contact-form-el ${lightTheme ? 'form-light' : ''} form-wrap`}>
      <div className="grid-2-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? 'error' : ''}`}
            placeholder="John Doe"
          />
          {errors.name && <span className="error-msg"><AlertCircle size={14} /> {errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'error' : ''}`}
            placeholder="john@example.com"
          />
          {errors.email && <span className="error-msg"><AlertCircle size={14} /> {errors.email}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`form-control ${errors.subject ? 'error' : ''}`}
          placeholder="How can we help you?"
        />
        {errors.subject && <span className="error-msg"><AlertCircle size={14} /> {errors.subject}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={`form-control ${errors.message ? 'error' : ''}`}
          placeholder="Tell us about your project requirements, timeline, and goals..."
        />
        {errors.message && <span className="error-msg"><AlertCircle size={14} /> {errors.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary submit-btn">
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            Sending Message...
          </>
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>

      <style>{`
        .form-wrap {
          width: 100%;
        }
        .grid-2-form {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .form-control.error {
          border-color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }
        .error-msg {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          animation: slideDown 0.2s ease-out forwards;
        }
        .submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.05rem;
        }
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #ffffff;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 576px) {
          .grid-2-form {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </form>
  );
}
