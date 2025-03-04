import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"; // Importing icons

const SingleQuestion = ({ title, info, activeId, id, toggleQuestion }) => {
  // Check if this question is currently active
  const isActive = id === activeId;

  return (
    <>
      <article className="question">
        <header>
          <h5>{title}</h5>
          {/* Button to toggle question visibility */}
          <button
            type="button"
            className="question-btn"
            onClick={() => toggleQuestion(id)}
          >
            {/* Show minus icon if active, otherwise show plus icon */}
            {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {/* Display answer if the question is active */}
        {isActive && <p>{info}</p>}
      </article>
    </>
  );
};

export default SingleQuestion;
