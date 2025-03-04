import { useState } from "react"; // Importing useState for state management
import people from "./data"; // Importing people data
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"; // Importing icons

const App = () => {
  // State to keep track of the current person index
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]; // Extracting details of the current person

  // Function to ensure the index stays within bounds
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0; // If index exceeds the last person, loop back to the first
    }
    if (number < 0) {
      return people.length - 1; // If index goes below 0, loop back to the last person
    }
    return number;
  };

  // Function to move to the next person
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  // Function to move to the previous person
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  // Function to select a random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    // Ensure a different person is selected
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber)); // Update index with a valid number
  };

  return (
    <>
      <main>
        <article className="review">
          {/* Image container with quote icon */}
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>

          {/* Display person details */}
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>

          {/* Navigation buttons */}
          <div className="btn-container">
            <button type="button" className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button type="button" className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>

          {/* Random selection button */}
          <button className="btn btn-hipster" onClick={randomPerson}>
            Surprise me!
          </button>
        </article>
      </main>
    </>
  );
};

export default App;
