import React from 'react';
import './Homepage.css';
import profileImage from '../../assets/images/profile-image.jpg';

/**
 * Homepage component for Chef Luu's portfolio
 * Features a hero section with chef's photo, name, title and brief introduction
 */
function Homepage({ navigateTo }) {
  return (
    <main className="homepage">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-name">Luyanda Ndhlovu</h1>
              <h2 className="hero-title">Culinary Artist & Chef in Training</h2>
              <p className="hero-intro">
                Welcome to my culinary journey. I blend my passion for cooking, fashion, 
                and artistic creativity to create exceptional dining experiences. 
                Currently completing my hospitality NQF L4 qualification at Villa Roma 
                Boutique Hotel, I bring my South African heritage and artistic vision 
                to every dish I create.
              </p>
              <div className="hero-cta">
                <button 
                  className="btn-primary" 
                  onClick={() => navigateTo('work')}
                >
                  View My Portfolio
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => navigateTo('contact')}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img 
                  src={profileImage} 
                  alt="Chef Luyanda Ndhlovu" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
          
          <div className="hero-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🍽️</div>
              <h3>Culinary Artistry</h3>
              <p>Exceptional dish presentation and flavor combinations</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🎨</div>
              <h3>Creative Vision</h3>
              <p>Blending fashion, art and culinary expertise</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🌿</div>
              <h3>Garden Enthusiast</h3>
              <p>Passion for fresh ingredients and natural beauty</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
