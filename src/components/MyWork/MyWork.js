import React, { useState, useEffect } from 'react';
import './MyWork.css';
import { culinaryWorks } from './culinaryData';

/**
 * MyWork component - Showcases Chef Luyanda's culinary creations
 * Features:
 * - Skills overview
 * - Category filtering
 * - Dynamic work cards with detailed information
 * - Interactive elements for recipe viewing
 */
function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [expandedRecipe, setExpandedRecipe] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Creations' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Beverages' },
    { id: 'appetizers', name: 'Appetizers' }
  ];

  // Skills with proficiency levels
  const skills = [
    { name: 'South African Cuisine', level: 95 },
    { name: 'French Techniques', level: 85 },
    { name: 'Pastry & Desserts', level: 90 },
    { name: 'Plating & Presentation', level: 98 },
    { name: 'Mixology', level: 80 },
    { name: 'Menu Development', level: 88 }
  ];

  // Filter works based on selected category
  useEffect(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const filtered = selectedCategory === 'all' 
        ? culinaryWorks 
        : culinaryWorks.filter(work => work.category === selectedCategory);
      
      setFilteredWorks(filtered);
      setIsAnimating(false);
    }, 300);
  }, [selectedCategory]);

  // Toggle recipe expansion
  const toggleRecipe = (id) => {
    setExpandedRecipe(expandedRecipe === id ? null : id);
  };

  return (
    <main className="my-work">
      <section className="work-hero">
        <div className="work-hero-content">
          <h1>My Culinary Creations</h1>
          <p>Explore my journey through flavors, techniques, and artistic presentation</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Culinary Expertise</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                    data-aos="width"
                    data-aos-delay={index * 100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section className="work-gallery">
        <div className="container">
          <h2 className="section-title">Featured Dishes</h2>
          
          {/* Category Filters */}
          <div className="category-filters">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Work Cards Grid */}
          <div className={`work-grid ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            {filteredWorks.map(work => (
              <div className="work-card" key={work.id}>
                <div className="work-card-image">
                  <img src={work.image} alt={work.name} />
                  <div className="work-card-overlay">
                    <span className="work-category">{work.categoryName}</span>
                    <button 
                      className="view-recipe-btn"
                      onClick={() => toggleRecipe(work.id)}
                    >
                      {expandedRecipe === work.id ? 'Hide Recipe' : 'View Recipe'}
                    </button>
                  </div>
                </div>
                
                <div className="work-card-content">
                  <h3 className="dish-name">{work.name}</h3>
                  <p className="dish-description">{work.description}</p>
                  
                  <div className="dish-meta">
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <span>{work.prepTime} prep</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">🔥</span>
                      <span>{work.cookTime} cook</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">🍽️</span>
                      <span>{work.difficulty}</span>
                    </div>
                  </div>
                  
                  {/* Ingredients & Recipe (Expandable) */}
                  <div className={`recipe-details ${expandedRecipe === work.id ? 'expanded' : ''}`}>
                    <div className="ingredients">
                      <h4>Ingredients</h4>
                      <ul>
                        {work.ingredients.map((ingredient, idx) => (
                          <li key={idx}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="recipe-steps">
                      <h4>Preparation</h4>
                      <ol>
                        {work.recipe.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="chef-notes">
                      <h4>Chef's Notes</h4>
                      <p>{work.chefNotes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Culinary Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2>My Culinary Philosophy</h2>
            <p>
              My approach to cooking blends my South African heritage with contemporary techniques.
              I believe in honoring ingredients, celebrating seasonality, and creating dishes that
              tell a story. Every plate is a canvas where flavors, textures, and colors come together
              in harmony.
            </p>
            <p>
              I draw inspiration from nature, my travels, and the rich cultural tapestry of South Africa.
              My goal is to create memorable dining experiences that engage all the senses and leave a
              lasting impression.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MyWork;