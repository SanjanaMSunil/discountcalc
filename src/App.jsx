// App.js
import React, { useState } from 'react';
import './App.css';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const calculateDiscount = () => {
    const original = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (!isNaN(original) && !isNaN(discount)) {
      const discountAmount = (original * discount) / 100;
      const discounted = original - discountAmount;
      setDiscountedPrice(discounted.toFixed(2));
    } else {
      setDiscountedPrice(null);
    }
  };

  const resetValues = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
    setDiscountedPrice(null);
  };

  return (
    <div className="discount-calculator">
      <h1>Discount Calculator</h1>
      <div className="input-container">
        <label>Original Price:</label>
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Discount Percentage:</label>
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
      </div>
      <button onClick={calculateDiscount}>Calculate Discount</button>
      <button className="reset-button" onClick={resetValues}>
        Reset
      </button>
      {discountedPrice !== null && (
        <div className="result">
          <p>Discounted Price: {discountedPrice}</p>
        </div>
      )}
    </div>
  );
};

export default DiscountCalculator;
