import React from "react";

// Component to display individual person details
// This component is used in the List component (see List.js)
const Person = ({ image, name, age }) => {
  return (
    <>
      <article className="person">
        <img src={image} alt={name} className="img" />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    </>
  );
};

export default Person;
