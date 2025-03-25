import React, { useState } from 'react';
import './Header.css';

/**
 * Header component for Chef Luu website
 * Contains logo and main navigation with hamburger menu for mobile
 */
function Header({ navigateTo, activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };
  return (
    <header className="header">
      <div className="header-container">
       
        <div className="logo" onClick={() => handleNavClick('home')}>
          <h1>Chef Luu</h1>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line hamburger-line-1"></span>
          <span className="hamburger-line hamburger-line-2"></span>
          <span className="hamburger-line hamburger-line-3"></span>
        </button>
        
        <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a 
                href="#home" 
                className={`nav-link ${activePage === 'home' ? 'active' : ''}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#about" 
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#work" 
                className={`nav-link ${activePage === 'work' ? 'active' : ''}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('work');
                }}
              >
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact" 
                className={`nav-link ${activePage === 'contact' ? 'active' : ''}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
