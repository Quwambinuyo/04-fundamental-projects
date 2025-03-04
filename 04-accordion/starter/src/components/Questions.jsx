import React from "react";
import SingleQuestion from "./SingleQuestion"; // Importing SingleQuestion component

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <>
      <section className="container">
        <h1>Questions</h1>
        {/* Mapping through each question and passing props to SingleQuestion */}
        {questions.map((question) => {
          return (
            <SingleQuestion
              key={question.id}
              {...question} // Spreading question object properties as props
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </section>
    </>
  );
};

export default Questions;
