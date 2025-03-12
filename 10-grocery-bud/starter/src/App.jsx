import { useState } from "react"; // Import useState hook from React
import Form from "./components/Form"; // Import the Form component
import { nanoid } from "nanoid"; // Import nanoid for generating unique IDs
import Items from "./components/Items"; // Import the Items component

// Function to retrieve the items list from localStorage
const getLocalStorage = () => {
  // Attempt to get the 'list' from localStorage
  let list = localStorage.getItem("list");

  // If exists, parse the JSON string into an object
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    // If not found, return an empty array
    list = [];
  }

  return list; // Return the parsed list or an empty array
};

// defaultList can be passed to the items, setItems useState and still get the same functionality
// const defaultList = JSON.parse(localStorage.getItem("list") || '[]');

// Function to save the items list to localStorage
const setLocalStorage = (items) => {
  // Convert the items array to a JSON string and save it in localStorage
  localStorage.setItem("list", JSON.stringify(items));
};

// Main App component that manages the state of items and renders the form and items list
const App = () => {
  // State to hold an array of items, initialized from localStorage
  const [items, setItems] = useState(getLocalStorage());

  // Function to add a new item to the list
  const addItem = (itemName) => {
    // Create a new item object with a unique ID and default completed state
    const newItem = {
      name: itemName, // Name of the new item
      completed: false, // Initial status of the item is not completed
      id: nanoid(), // Generate a unique ID for the item using nanoid
    };

    // Create a new array with the existing items and the new item
    const newItems = [...items, newItem];

    setItems(newItems); // Update the state with the new items array
    setLocalStorage(newItems); // Save the updated items to localStorage
  };

  // Function to remove an item from the list based on its ID
  const removeItem = (itemId) => {
    // Filter out the item with the specified ID from the items array
    const newItems = items.filter((item) => item.id !== itemId);

    // Update the items state with the new array
    setItems(newItems);
    setLocalStorage(newItems); // Save the updated items to localStorage
  };

  return (
    <>
      <section className="section-center">
        {/* Centered section for the form and items */}
        <Form addItem={addItem} />{" "}
        {/* Render Form component and pass addItem function as a prop */}
        <Items items={items} removeItem={removeItem} />{" "}
        {/* Render Items component with items and removeItem function */}
      </section>
    </>
  );
};

export default App; // Export the App component for use in other files
