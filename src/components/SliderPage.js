// src/components/SliderPage.js
import React, { useState } from 'react';
import './SliderPage.css'; // Make sure styles are applied

const SliderPage = () => {
  const [sliderValue, setSliderValue] = useState(50); // Default value (middle)

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="slider-page">
      {/* Page Header */}
      <div className="page-header">
        <h2>Slider</h2>
      </div>

      {/* Slider Section */}
      <div className="slider-section">
        <input
          type="range"
          min="0"
          max="100"
          step="1" // Optional: for whole numbers only
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider-input"
        />
        <p className="current-value">Current Slider Value: {sliderValue}</p>
      </div>
    </div>
  );
};

export default SliderPage;