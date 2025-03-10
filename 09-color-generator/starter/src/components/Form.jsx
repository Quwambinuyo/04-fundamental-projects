import React, { useState } from "react";

const Form = ({ addColor }) => {
  // State for storing user input color
  const [color, setColor] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color); // Pass color input to the parent component
  };

  return (
    <>
      <section className="container">
        <h4>Color Generator</h4>
        <form className="color-form" onSubmit={handleSubmit}>
          {/* Color Picker Input */}
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          {/* Text Input for Hex Code */}
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          />

          {/* Submit Button - Background updates based on color input */}
          <button type="submit" className="btn" style={{ background: color }}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
