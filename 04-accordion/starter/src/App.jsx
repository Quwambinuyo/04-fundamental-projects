import { useState } from "react";
import data from "./data"; // Importing questions data
import Questions from "./components/Questions"; // Importing Questions component

const App = () => {
  // State to store the list of questions
  const [questions, setQuestions] = useState(data);

  // State to track the currently active question ID
  const [activeId, setActiveId] = useState(null);

  // Function to toggle the active question
  const toggleQuestion = (id) => {
    // If the clicked question is already active, close it; otherwise, set it as active
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      {/* Passing questions data and toggle function to Questions component */}
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};

export default App;
