
import React, { useState, useRef } from "react";
import "../styles/FilterBar.css";

const filterOptions = {
  "Frame Style": ["Full Rim", "Half Rim", "Rimless"],
  "Frame Shape": ["Round", "Rectangle", "Cat-Eye", "Square"],
  "Frame Color": ["Black", "Gold", "Silver", "Tortoise"],
  "Lens Color": ["Blue", "Green", "Grey", "Brown"],
  "Frame Material": ["Metal", "TR90", "Acetate", "Alloy"],
  Brands: ["Nazario", "Rayban", "Oakley", "Vincent Chase"],
  Gender: ["Men", "Women", "Unisex"],
  Collections: ["New Arrivals", "Best Sellers", "Premium"],
  Size: ["Small", "Medium", "Large"],
  Lens: ["Single Vision", "Progressive", "Readers"],
  Technology: ["Blue Cut", "Photochromic", "Polarized"],
  Prescription: ["Yes", "No"],
  Price: ["Under ₹1500", "₹1500–₹2500", "₹2500+"]
};

export default function FilterBar() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0 });
  const refs = useRef({});

  const handleMouseEnter = (category) => {
    const rect = refs.current[category]?.getBoundingClientRect();
    setDropdownPosition({ left: rect?.left || 0 });
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="filter-bar-wrapper" onMouseLeave={handleMouseLeave}>
      <div className="filter-bar-scroll">
        {Object.keys(filterOptions).map((category) => (
          <div
            key={category}
            ref={(el) => (refs.current[category] = el)}
            className="filter-category-title"
            onMouseEnter={() => handleMouseEnter(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {activeCategory && (
        <div
          className="filter-dropdown"
          style={{ left: dropdownPosition.left }}
        >
          <div className="filter-block">
            
            <div className="filter-block-options">
              {filterOptions[activeCategory].map((option) => (
                <label key={option} className="filter-option">
                  <input type="checkbox" /> {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
