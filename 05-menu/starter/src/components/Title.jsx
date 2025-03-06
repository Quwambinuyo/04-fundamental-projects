import React from "react";

// Component to display the title section with an optional text prop
// Used in various components like Menu.js to display a dynamic title
const Title = ({ text }) => {
  return (
    <>
      <div className="title">
        <h2>{text || "Default Title"}</h2>{" "}
        {/* Fallback to "Default Title" if no text prop is passed */}
        <div className="title-underline"></div>
      </div>
    </>
  );
};

export default Title;
