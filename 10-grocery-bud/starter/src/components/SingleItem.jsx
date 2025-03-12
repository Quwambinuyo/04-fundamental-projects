import React from "react"; // Import React library
import { useState } from "react"; // Import useState hook for managing local state

// Functional component that represents a single item, taking 'item' and 'removeItem' as props
const SingleItem = ({ item, removeItem }) => {
  // State to track whether the item is checked (completed)
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="single-item">
        {" "}
        {/* Container for the individual item */}
        <input
          type="checkbox" // Checkbox to allow marking the item as completed
          checked={isChecked} // Sets the checkbox state based on isChecked
          onChange={() => setIsChecked(!isChecked)} // Toggles isChecked state on change
        />
        <p
          style={{
            textTransform: "capitalize", // Capitalizes the first letter of each word in the item name
            textDecoration: isChecked && "line-through", // Applies line-through text decoration if item is checked
          }}
        >
          {item.name} {/* Displays the name of the item */}
        </p>
        <button
          type="button" // Button for removing the item
          className="btn remove-btn"
          onClick={() => removeItem(item.id)} // Calls removeItem with the item's id on click
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default SingleItem; // Exporting the SingleItem component for use in other parts of the application
