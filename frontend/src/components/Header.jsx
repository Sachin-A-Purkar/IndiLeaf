import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, Leaf } from 'lucide-react';
import '../styles/Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <Leaf size={24} />
            </div>
            <div className="logo-text">
              <div className="logo-name">GreenHaven</div>
              <div className="logo-subtitle">Nursery</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#plants" className="nav-link">Plants</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            <button className="action-button">
              <Search size={20} />
            </button>
            <button className="action-button cart-button">
              <ShoppingCart size={20} />
              <span className="cart-badge">3</span>
            </button>
            <button className="shop-button">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#plants" className="nav-link" onClick={() => setIsMenuOpen(false)}>Plants</a>
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="shop-button mobile-shop-button">
                Shop Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;