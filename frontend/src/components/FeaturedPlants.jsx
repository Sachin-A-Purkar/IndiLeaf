import React, { useState } from 'react';
import { Heart, ShoppingCart, Search, Filter } from 'lucide-react';
import '../styles/FeaturedPlants.css';

const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor",
    price: 45.99,
    originalPrice: 59.99,
    image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Large, glossy leaves with natural splits",
    care: "Low to medium light",
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    category: "Indoor",
    price: 89.99,
    image: "https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Statement plant with large violin-shaped leaves",
    care: "Bright, indirect light",
    rating: 4.6,
    inStock: true
  },
  {
    id: 3,
    name: "Snake Plant",
    category: "Indoor",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.pexels.com/photos/7081609/pexels-photo-7081609.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Hardy plant with upright, sword-like leaves",
    care: "Low light tolerant",
    rating: 4.9,
    inStock: true
  },
  {
    id: 4,
    name: "Peace Lily",
    category: "Indoor",
    price: 34.99,
    image: "https://images.pexels.com/photos/4503821/pexels-photo-4503821.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Elegant white blooms and glossy green foliage",
    care: "Medium to low light",
    rating: 4.7,
    inStock: false
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Indoor",
    price: 52.99,
    image: "https://images.pexels.com/photos/6208092/pexels-photo-6208092.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Glossy, burgundy-tinged leaves",
    care: "Bright, indirect light",
    rating: 4.5,
    inStock: true
  },
  {
    id: 6,
    name: "Boston Fern",
    category: "Indoor",
    price: 24.99,
    image: "https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Lush, feathery fronds perfect for hanging baskets",
    care: "High humidity, indirect light",
    rating: 4.4,
    inStock: true
  }
];

const categories = ["All", "Indoor", "Outdoor", "Succulents", "Flowering"];

const FeaturedPlants = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === "All" || plant.category === selectedCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="plants" className="featured-plants">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Featured Plants</h2>
          <p className="section-description">
            Discover our handpicked selection of premium plants, each chosen for their beauty, 
            health, and ability to transform your living space.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="search-filter-container">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-container">
            <Filter size={20} />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Plants Grid */}
        <div className="plants-grid">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="plant-card">
              {/* Image Container */}
              <div className="plant-image-container">
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="plant-image"
                />
                {!plant.inStock && (
                  <div className="out-of-stock-overlay">
                    <span className="out-of-stock-badge">Out of Stock</span>
                  </div>
                )}
                {plant.originalPrice && (
                  <div className="sale-badge">Sale</div>
                )}
                <button className="heart-button">
                  <Heart size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="plant-content">
                <div className="plant-header">
                  <span className="plant-category">{plant.category}</span>
                  <div className="plant-rating">
                    <span className="star">★</span>
                    <span className="rating-value">{plant.rating}</span>
                  </div>
                </div>
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-description">{plant.description}</p>
                <p className="plant-care">{plant.care}</p>

                <div className="plant-footer">
                  <div className="price-container">
                    <span className="current-price">${plant.price}</span>
                    {plant.originalPrice && (
                      <span className="original-price">${plant.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    disabled={!plant.inStock}
                    className={`cart-button ${plant.inStock ? 'available' : 'unavailable'}`}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all-container">
          <button className="btn-primary">View All Plants</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;