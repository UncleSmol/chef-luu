import React, { useState } from 'react';
import './About.css';
import { FaHeart, FaComment, FaShare, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

// Import profile image and other images
import profileImage from '../../assets/images/profile-image.jpg';
import malvaPudding from '../../assets/images/IMG-20250129-WA0045.jpg';
import chakalakaVid from '../../assets/images/chakalaka.mp4';

// Import additional images for gallery and posts
import foodStyling from '../../assets/images/IMG-20250129-WA0046.jpg';
import cookingClass from '../../assets/images/IMG-20250129-WA0047.jpg';
import awardCeremony from '../../assets/images/IMG-20250129-WA0048.jpg';
import kitchenAction from '../../assets/images/VID-20250129-WA0005.mp4';
import foodFestival from '../../assets/images/IMG-20250129-WA0050.jpg';
import mediaInterview from '../../assets/images/IMG-20250129-WA0051.jpg';

/**
 * About component - Social media profile style page for Chef Luyanda
 * Features:
 * - Profile header with bio and stats
 * - Social media feed with example posts
 * - Interactive elements like likes and comments
 */
function About() {
  const [activeTab, setActiveTab] = useState('posts');
  const [expandedPost, setExpandedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  // Toggle like on a post
  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  // Toggle expanded post view
  const toggleExpandPost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  // Sample social media posts
  const socialPosts = [
    {
      id: 1,
      platform: 'instagram',
      date: '2 days ago',
      content: 'Just finished baking this masterpiece...Banana Bread covered in chocolate.',
      image: malvaPudding,
      likes: 842,
      comments: [
        { user: 'foodie_lover22', text: 'This looks absolutely divine! I need this recipe ASAP! 😍' },
        { user: 'chef_marcus', text: 'Beautiful plating as always, Luyanda! The gold dust is a perfect touch.' }
      ]
    },
    {
      id: 2,
      platform: 'tiktok',
      date: '1 week ago',
      content: 'How to make perfect Chakalaka in 09 seconds! This South African relish goes with EVERYTHING! #CookingTutorial #QuickRecipes #SouthAfricanFood',
      video: chakalakaVid,
      likes: 15600,
      comments: [
        { user: 'cooking_newbie', text: 'Just made this and it turned out amazing! Thanks for sharing your culture with us!' },
        { user: 'spice_queen', text: 'The way you chopped those veggies was so satisfying to watch 🔪✨' },
        { user: 'sa_foodie', text: 'My grandma makes it exactly like this! Authentic recipe 👌🏽' }
      ]
    },
    {
      id: 3,
      platform: 'twitter',
      date: '3 days ago',
      content: 'Day 45 of my culinary journey at Villa Roma Boutique Hotel! Today I got to lead the breakfast service for the first time. So grateful for this opportunity to grow as a chef! #CulinarySchool #ChefInTraining',
      likes: 327,
      comments: [
        { user: 'hotel_reviewer', text: 'I stayed at Villa Roma last month and the breakfast was exceptional!' },
        { user: 'chef_mentor', text: 'So proud of your progress, Luyanda! Keep shining ⭐' }
      ]
    },
    {
      id: 4,
      platform: 'instagram',
      date: '2 weeks ago',
      content: 'Behind the scenes at today\'s food styling workshop! Learning how to make every dish camera-ready. Did you know we use tweezers for perfect herb placement? #FoodStyling #CulinaryArts #BehindTheScenes',
      image: foodStyling,
      likes: 1203,
      comments: [
        { user: 'photo_enthusiast', text: 'The lighting in these shots is everything! What camera do you use?' },
        { user: 'aspiring_chef', text: 'I never knew food styling was so detailed! Thanks for sharing this insight!' }
      ]
    },
    {
      id: 5,
      platform: 'tiktok',
      date: '3 days ago',
      content: 'POV: When the head chef asks you to create a special for tonight\'s menu 😱 Watch how I turned the pressure into these scrumptious rolls #ChefLife #UnderPressure #CreateDontCrack',
      video: kitchenAction,
      likes: 23400,
      comments: [
        { user: 'food_critic', text: 'The way you handled that pressure was so impressive! A true professional 👏' },
        { user: 'seafood_lover', text: 'Those prawns look perfectly cooked! I can almost taste them through the screen 🍤' },
        { user: 'kitchen_nightmares', text: 'This is how you handle pressure in the kitchen! Taking notes 📝' }
      ]
    },
    {
      id: 6,
      platform: 'twitter',
      date: '1 month ago',
      content: 'Just got my first chef\'s knife set as a gift from my mentor! This feels like such a milestone moment. Ready to chop, dice and julienne my way to the top! 🔪✨ #ChefTools #CulinaryJourney',
      likes: 512,
      comments: [
        { user: 'knife_collector', text: 'Nothing beats the feeling of quality knives! What brand did you get?' },
        { user: 'culinary_student', text: 'Congrats! A chef is only as good as their tools!' }
      ]
    }
  ];

  // Render platform icon
  const renderPlatformIcon = (platform) => {
    switch (platform) {
      case 'instagram':
        return <FaInstagram className="platform-icon instagram" />;
      case 'tiktok':
        return <FaTiktok className="platform-icon tiktok" />;
      case 'twitter':
        return <FaTwitter className="platform-icon twitter" />;
      default:
        return null;
    }
  };

  return (
    <main className="about-page">
      <section className="profile-header">
        <div className="profile-cover">
          <div className="profile-avatar">
            <img src={profileImage} alt="Chef Luyanda" />
          </div>
        </div>
        
        <div className="profile-info-container">
          <div className="profile-info">
            <h1>Luyanda Ndhlovu</h1>
            <h2>Culinary Artist & Social Creator</h2>
            
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number">15.2K</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">843</span>
                <span className="stat-label">Following</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">127</span>
                <span className="stat-label">Posts</span>
              </div>
            </div>
            
            <div className="profile-bio">
              <p>👩‍🍳 Chef in Training at Villa Roma Boutique Hotel</p>
              <p>🇿🇦 Born in Nhlazatshi, South Africa</p>
              <p>✨ Blending culinary arts with fashion & creativity</p>
              <p>🌿 Garden enthusiast & content creator</p>
              <p>💫 "Food is my love language"</p>
            </div>
            
            <div className="social-handles">
              <a href="https://instagram.com/chef_luyanda" target="_blank" rel="noopener noreferrer" className="social-handle instagram">
                <FaInstagram /> @chef_luyanda
              </a>
              <a href="https://tiktok.com/@chef_luyanda" target="_blank" rel="noopener noreferrer" className="social-handle tiktok">
                <FaTiktok /> @chef_luyanda
              </a>
              <a href="https://twitter.com/chef_luyanda" target="_blank" rel="noopener noreferrer" className="social-handle twitter">
                <FaTwitter /> @chef_luyanda
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="content-tabs">
        <div className="container">
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
            <button 
              className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
            <button 
              className={`tab-btn ${activeTab === 'journey' ? 'active' : ''}`}
              onClick={() => setActiveTab('journey')}
            >
              My Journey
            </button>
          </div>
          
          {activeTab === 'posts' && (
            <div className="social-feed">
              {socialPosts.map(post => (
                <div className={`social-post ${post.platform}`} key={post.id}>
                  <div className="post-header">
                    {renderPlatformIcon(post.platform)}
                    <span className="post-date">{post.date}</span>
                  </div>
                  
                  <div className="post-content">
                    <p>{post.content}</p>
                    
                    {post.image && (
                      <div className="post-image">
                        <img src={post.image} alt="Post content" />
                      </div>
                    )}
                    
                    {post.video && (
                      <div className="post-video">
                        <video controls>
                          <source src={post.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                  
                  <div className="post-actions">
                    <button 
                      className={`action-btn like-btn ${likedPosts.includes(post.id) ? 'liked' : ''}`}
                      onClick={() => toggleLike(post.id)}
                    >
                      <FaHeart /> <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                    </button>
                    <button 
                      className="action-btn comment-btn"
                      onClick={() => toggleExpandPost(post.id)}
                    >
                      <FaComment /> <span>{post.comments.length}</span>
                    </button>
                    <button className="action-btn share-btn">
                      <FaShare /> <span>Share</span>
                    </button>
                  </div>
                  
                  {expandedPost === post.id && (
                    <div className="post-comments">
                      <h4>Comments</h4>
                      {post.comments.map((comment, idx) => (
                        <div className="comment" key={idx}>
                          <div className="comment-user">{comment.user}</div>
                          <div className="comment-text">{comment.text}</div>
                        </div>
                      ))}
                      <div className="add-comment">
                        <input type="text" placeholder="Add a comment..." />
                        <button>Post</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'about' && (
            <div className="about-content">
              <div className="about-section">
                <h2>Meet Chef Luyanda</h2>
                <p>
                  Hello! I'm Luyanda Ndhlovu, a passionate culinary artist born in the beautiful village of Nhlazatshi, South Africa. 
                  My journey with food began in my grandmother's kitchen, where I learned that cooking is not just about feeding the body, 
                  but nourishing the soul and creating memories.
                </p>
                <p>
                  Currently, I'm completing my hospitality qualification (NQF Level 4) at Villa Roma Boutique Hotel, 
                  where I'm honing my skills under the guidance of experienced chefs. Every day brings new challenges and 
                  learning opportunities that I love to share with my online community.
                </p>
                <p>
                  When I'm not in the kitchen, you'll find me exploring fashion trends, tending to my herb garden, 
                  or creating content that bridges my love for food with my passion for visual storytelling. 
                  I believe that a dish should be as beautiful as it is delicious!
                </p>
              </div>
              
              <div className="fun-facts">
                <h3>Fun Facts About Me</h3>
                <ul>
                  <li>I can name over 50 different herbs and spices blindfolded just by their smell</li>
                  <li>My first viral video was an accidental kitchen fail that turned into a new recipe</li>
                  <li>I collect vintage cooking utensils from around the world</li>
                  <li>I once cooked for a South African music celebrity (it was terrifying but amazing!)</li>
                  <li>My dream is to host a cooking show that explores the diverse cuisines of Africa</li>
                </ul>
              </div>
              
              <div className="q-and-a">
                <h3>Quick Q&A</h3>
                <div className="qa-item">
                  <div className="question">Favorite ingredient to work with?</div>
                  <div className="answer">Definitely peri-peri! It's versatile, adds heat, and reminds me of home.</div>
                </div>
                <div className="qa-item">
                  <div className="question">Kitchen tool you can't live without?</div>
                  <div className="answer">My chef's knife. It was a gift from my mentor and it's perfectly balanced for my hand.</div>
                </div>
                <div className="qa-item">
                  <div className="question">Go-to comfort food?</div>
                  <div className="answer">My grandmother's chakalaka with fresh pap. Simple but perfect!</div>
                </div>
                <div className="qa-item">
                  <div className="question">Dream culinary destination?</div>
                  <div className="answer">Japan! Their dedication to precision and respect for ingredients is inspiring.</div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'journey' && (
            <div className="journey-content">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">2018</div>
                  <div className="timeline-content">
                    <h3>The Beginning</h3>
                    <p>
                      Started documenting my home cooking experiments on Instagram. 
                      What began as a hobby quickly gained attention for my creative presentation and fusion of traditional South African flavors with modern techniques.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-date">2019</div>
                  <div className="timeline-content">
                    <h3>First Culinary Course</h3>
                    <p>
                      Enrolled in a basic culinary skills course at the local community center. 
                      This formal introduction to cooking techniques confirmed that I wanted to pursue a career in the culinary arts.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-date">2020</div>
                  <div className="timeline-content">
                    <h3>Social Media Growth</h3>
                    <p>
                      Joined TikTok and began creating short-form cooking videos. 
                      My "60-Second South African Classics" series went viral, growing my following from 500 to 5,000 in just two months.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-date">2021</div>
                  <div className="timeline-content">
                    <h3>First Collaboration</h3>
                    <p>
                      Partnered with a local spice brand to create content showcasing their products. 
                      This first brand collaboration opened doors to the world of food content creation as a potential career path.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-date">2022</div>
                  <div className="timeline-content">
                    <h3>Culinary School Acceptance</h3>
                    <p>
                      Accepted into the hospitality program with a culinary focus. 
                      Began formal training while continuing to grow my social media presence, documenting the journey from amateur to professional.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-date">2023</div>
                  <div className="timeline-content">
                    <h3>Practical Training</h3>
                    <p>
                      Started practical training at Villa Roma Boutique Hotel. 
                      Working in a professional kitchen has been challenging, rewarding, and has dramatically improved my skills and confidence.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-date">Present</div>
                  <div className="timeline-content">
                    <h3>Building My Brand</h3>
                    <p>
                      Currently balancing my training with content creation and developing my personal brand as Chef Luyanda. 
                      Excited for what the future holds as I continue to grow both in the kitchen and online!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="featured-gallery">
        <div className="container">
          <h2 className="section-title">Featured Moments</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={cookingClass} alt="Teaching a cooking class" />
            </div>
            <div className="gallery-item">
              <img src={awardCeremony} alt="Receiving a culinary award" />
            </div>
            <div className="gallery-item">
              <img src={kitchenAction} alt="Working in a professional kitchen" />
            </div>
            <div className="gallery-item">
              <img src={foodFestival} alt="At a food festival" />
            </div>
            <div className="gallery-item">
              <img src={mediaInterview} alt="Media interview" />
            </div>
            <div className="gallery-item">
              <img src={malvaPudding} alt="Traveling for culinary inspiration" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
