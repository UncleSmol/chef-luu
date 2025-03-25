import React, { useState } from 'react';
import './Connect.css';
import { FaInstagram, FaTiktok, FaTwitter, FaEnvelope } from 'react-icons/fa';

/**
 * Connect component - Contact page for Chef Luyanda
 * Features:
 * - Social media links
 * - Contact form
 * - Booking information
 */
function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="connect-page">
      <section className="connect-hero">
        <div className="connect-hero-content">
          <h1>Let's Connect</h1>
          <p>I'd love to hear from you! Whether you're interested in a collaboration, have a question about my recipes, or just want to say hello.</p>
        </div>
      </section>
      
      <section className="social-section">
        <div className="container">
          <h2 className="section-title">Find Me Online</h2>
          <div className="social-links">
            <a href="https://instagram.com/chef_luyanda" className="social-link instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
              <div className="social-info">
                <h3>Instagram</h3>
                <p>@chef_luyanda</p>
                <span className="follow-text">Follow for daily food inspiration and behind-the-scenes content</span>
              </div>
            </a>
            
            <a href="https://tiktok.com/@chef_luyanda" className="social-link tiktok" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
              <div className="social-info">
                <h3>TikTok</h3>
                <p>@chef_luyanda</p>
                <span className="follow-text">Quick recipes and cooking tips in short-form videos</span>
              </div>
            </a>
            
            <a href="https://twitter.com/chef_luyanda" className="social-link twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
              <div className="social-info">
                <h3>Twitter</h3>
                <p>@chef_luyanda</p>
                <span className="follow-text">Food thoughts, industry news, and conversations</span>
              </div>
            </a>
            
            <a href="mailto:luyanda@chefluu.com" className="social-link email">
              <FaEnvelope className="social-icon" />
              <div className="social-info">
                <h3>Email</h3>
                <p>luyanda@chefluu.com</p>
                <span className="follow-text">For business inquiries and collaborations</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                I'm available for private events, cooking classes, menu consultations, 
                and content collaborations. Feel free to reach out with any questions 
                or opportunities.
              </p>
              
              <div className="booking-info">
                <h3>Booking Information</h3>
                <ul>
                  <li>
                    <strong>Private Dining:</strong> Available for intimate gatherings of 4-12 people
                  </li>
                  <li>
                    <strong>Cooking Classes:</strong> Group or one-on-one sessions available
                  </li>
                  <li>
                    <strong>Content Creation:</strong> Food photography, recipe development, and brand partnerships
                  </li>
                </ul>
              </div>
              
              <div className="availability">
                <h3>Current Availability</h3>
                <p>Now booking events for the upcoming season. Please inquire at least 3 weeks in advance for private events.</p>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send a Message</h2>
              
              {formStatus.submitted && (
                <div className="form-success-message">
                  {formStatus.message}
                </div>
              )}
              
              {formStatus.error && (
                <div className="form-error-message">
                  {formStatus.message}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do you offer virtual cooking classes?</h3>
              <p>Yes! I offer both in-person and virtual cooking classes. Virtual classes are a great option for team-building events or for individuals who prefer to learn from the comfort of their own kitchen.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can you accommodate dietary restrictions?</h3>
              <p>Absolutely. I'm experienced in creating menus for various dietary needs including vegetarian, vegan, gluten-free, and more. Please mention any restrictions when you reach out.</p>
            </div>
            
            <div className="faq-item">
              <h3>How far in advance should I book?</h3>
              <p>For private events, I recommend booking at least 3 weeks in advance. For larger events or during peak seasons, 4-6 weeks is preferable to ensure availability.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you travel for events?</h3>
              <p>Yes, I'm available for events within South Africa and occasionally for international opportunities. Travel fees may apply depending on the location.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Connect;