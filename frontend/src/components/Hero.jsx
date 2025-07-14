import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import '../styles/Hero.css'; // Assuming you have a CSS file for styling

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-text">
            <div className="hero-badge">
              <Star size={20} fill="currentColor" />
              <span>Premium Quality Plants</span>
            </div>
            <h1 className="hero-title">
              Transform Your Space with 
              <span className="hero-title-accent">Living Beauty</span>
            </h1>
            <p className="hero-description">
              Discover our carefully curated collection of premium plants, expert care guidance, and professional landscaping services to create your perfect green sanctuary.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                <span>Explore Plants</span>
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">
                Plant Care Guide
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Plant Varieties</div>
              </div>
              <div className="stat">
                <div className="stat-number">15k+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="hero-image-container">
            <img 
              src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Beautiful indoor plants" 
              className="hero-image"
            />
            <div className="hero-decoration hero-decoration-1"></div>
            <div className="hero-decoration hero-decoration-2"></div>
            <div className="hero-decoration hero-decoration-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;