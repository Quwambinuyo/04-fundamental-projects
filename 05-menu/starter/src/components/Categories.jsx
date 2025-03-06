import React from "react";

// Component to display category filter buttons
// Each button triggers the filterItems function to filter menu items based on the selected category
const Categories = ({ categories, filterItems }) => {
  return (
    <>
      <div className="btn-container">
        {/* Map through the categories array and create a button for each category */}
        {categories.map((category) => {
          return (
            <button
              type="button"
              className="btn"
              key={category}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
