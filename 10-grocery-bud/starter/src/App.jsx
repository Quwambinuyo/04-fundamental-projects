import { useState } from "react"; // Importing the useState hook for managing local state
import Form from "./components/Form"; // Importing the Form component for adding new items
import { nanoid } from "nanoid"; // Importing nanoid for generating unique IDs for items
import Items from "./components/Items"; // Importing the Items component for displaying the list of items

// Main App component that manages the state of items and renders the form and items list
const App = () => {
  // State to hold an array of items
  const [items, setItems] = useState([]);

  // Function to add a new item to the list
  const addItem = (itemName) => {
    // Create a new item object with a unique ID and default completed state
    const newItem = {
      name: itemName, // Name of the new item
      completed: false, // Initial status of the item is not completed
      id: nanoid(), // Generate a unique ID for the item
    };

    // Update the items state to include the new item
    setItems([...items, newItem]);
  };

  // Function to remove an item from the list based on its ID
  const removeItem = (itemId) => {
    // Filter out the item with the specified ID and create a new array of items
    const newItems = items.filter((item) => item.id !== itemId);
    // Update the items state with the new array
    setItems(newItems);
  };

  return (
    <>
      <section className="section-center">
        {" "}
        {/* Centered section for the form and items */}
        <Form addItem={addItem} />{" "}
        {/* Render Form component and pass addItem function as a prop */}
        <Items items={items} removeItem={removeItem} />{" "}
        {/* Render Items component with items and removeItem function */}
      </section>
    </>
  );
};

export default App; // Export the App component for use in
