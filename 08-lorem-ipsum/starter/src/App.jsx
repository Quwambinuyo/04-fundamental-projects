import { useState } from "react";
import data from "./data"; // Importing the data array containing text
import { nanoid } from "nanoid"; // Importing nanoid to generate unique keys

const App = () => {
  // State to track the number of paragraphs to generate
  const [count, setCount] = useState(1);

  // State to store the generated text
  const [text, setText] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh

    let amount = parseInt(count); // Convert input value to a number
    setText(data.slice(0, amount)); // Slice the data array to get the required number of paragraphs
  };

  return (
    <>
      <section className="section-center">
        <h4>tired of boring lorem ipsum?</h4>

        {/* Form to get user input for the number of paragraphs */}
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>

          <input
            type="number"
            name="amount"
            id="amount"
            min="1"
            max="8"
            step="1"
            value={count}
            onChange={(e) => setCount(e.target.value)} // Update state when user changes input
          />

          <button type="submit" className="btn">
            generate
          </button>
        </form>

        {/* Display generated text */}
        <article className="lorem-text">
          {text.map((item) => {
            return <p key={nanoid()}>{item}</p>; // Display each paragraph with a unique key
          })}
        </article>
      </section>
    </>
  );
};

export default App;
