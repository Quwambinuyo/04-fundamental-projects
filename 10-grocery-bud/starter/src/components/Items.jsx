import React from "react";
import SingleItem from "./SingleItem"; // Importing the SingleItem component to display individual items

// Functional component that takes in 'items' (array) and 'removeItem' (function) as props
const Items = ({ items, removeItem }) => {
  return (
    <>
      <div className="items">
        {" "}
        {/* Container for the list of items */}
        {items.map((item) => {
          // Iterating over the 'items' array
          return (
            // For each 'item', render a SingleItem component, passing down the item data and the removeItem function
            <SingleItem key={item.id} item={item} removeItem={removeItem} />
          );
        })}
      </div>
    </>
  );
};

export default Items; // Exporting the Items component for use in other parts of the application
