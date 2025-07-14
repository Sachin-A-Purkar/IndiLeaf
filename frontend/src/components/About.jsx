import React from 'react';
import { Users, Award, Leaf, Heart } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Our certified horticulturists and plant specialists bring decades of experience to help you succeed."
    },
    {
      icon: <Award size={32} />,
      title: "Quality Guarantee",
      description: "Every plant is hand-selected and comes with our 30-day health guarantee for your peace of mind."
    },
    {
      icon: <Leaf size={32} />,
      title: "Sustainable Practices",
      description: "We're committed to eco-friendly growing methods and sustainable packaging materials."
    },
    {
      icon: <Heart size={32} />,
      title: "Passionate Care",
      description: "We don't just sell plants - we share our love for green living and help you create lasting connections."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          {/* Left Content */}
          <div className="about-text">
            <span className="section-badge">About GreenHaven</span>
            <h2 className="section-title">Growing Dreams Since 2003</h2>
            <p className="about-description">
              For over two decades, we've been more than just a nursery. We're passionate plant enthusiasts 
              dedicated to bringing the beauty and tranquility of nature into your everyday life.
            </p>
            <p className="about-subdescription">
              From humble beginnings as a small family operation, we've grown into a trusted destination 
              for plant lovers across the region. Our mission remains the same: to provide exceptional 
              plants, expert guidance, and personalized service that helps you create your perfect green space.
            </p>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary">Learn More About Us</button>
          </div>

          {/* Right Content - Images */}
          <div className="about-images">
            <div className="images-grid">
              <div className="images-column">
                <img 
                  src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Our greenhouse" 
                  className="about-image image-1"
                />
                <img 
                  src="https://images.pexels.com/photos/1458684/pexels-photo-1458684.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Plant care expert" 
                  className="about-image image-2"
                />
              </div>
              <div className="images-column offset">
                <img 
                  src="https://images.pexels.com/photos/6208097/pexels-photo-6208097.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Beautiful plants display" 
                  className="about-image image-3"
                />
                <img 
                  src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Garden center" 
                  className="about-image image-4"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="about-decoration about-decoration-1"></div>
            <div className="about-decoration about-decoration-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;