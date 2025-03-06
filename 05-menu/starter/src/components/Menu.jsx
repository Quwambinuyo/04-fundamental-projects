import React from "react";
import MenuItem from "./MenuItem";

// Component to display the list of menu items
// Works alongside Categories.js, which filters the items displayed here
const Menu = ({ items }) => {
  return (
    <>
      <div className="section-center">
        {/* Map through the items array and render a MenuItem component for each */}
        {items.map((menuItem) => {
          return <MenuItem key={menuItem.id} {...menuItem} />;
        })}
      </div>
    </>
  );
};

export default Menu;
