import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  // Initialize colors list with different shades of default color
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  // Function to add a new color and generate its shades
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error("Not a valid hex input"); // Show error if input is invalid
    }
  };

  return (
    <>
      <main>
        <Form addColor={addColor} /> {/* Form component to input new color */}
        <ColorList colors={colors} /> {/* Display generated colors */}
        <ToastContainer position="top-center" /> {/* Toast notifications */}
      </main>
    </>
  );
};

export default App;
