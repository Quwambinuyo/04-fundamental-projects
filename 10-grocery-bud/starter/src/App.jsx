import React, { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to retrieve the list from local storage
const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : []; // Return parsed list or an empty array if nothing is stored
};

// Function to update local storage with the latest items
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  // State to manage the list of items
  const [items, setItems] = useState(getLocalStorage());

  // Function to add a new item to the list
  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() }; // Create a new item object
    const newItems = [...items, newItem]; // Add it to the existing list

    setItems(newItems); // Update state
    setLocalStorage(newItems); // Persist data in local storage

    // Display a success notification
    toast.success("Item added to the list", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // Function to remove an item from the list
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId); // Filter out the item by ID
    setItems(newItems); // Update state
    setLocalStorage(newItems); // Persist data in local storage

    // Display a success notification
    toast.success("Item successfully removed", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // Function to toggle an item's completed status
  const editItem = (itemId) => {
    const newEditItems = items.map((item) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );

    setItems(newEditItems); // Update state
    setLocalStorage(newEditItems); // Persist data in local storage
  };

  return (
    <section className="section-center">
      {/* Toast notification container */}
      <ToastContainer position="top-center" autoClose={2000} />

      {/* Form component for adding new items */}
      <Form addItem={addItem} />

      {/* Items component to display the list, along with remove and edit functionality */}
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
