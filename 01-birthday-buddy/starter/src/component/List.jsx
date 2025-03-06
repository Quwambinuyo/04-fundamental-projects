import React from "react";
import Person from "./Person";

// Component to render a list of people
const List = ({ people }) => {
  return (
    <>
      <section>
        {/* Map through the people array and render a Person component for each */}
        {people.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </section>
    </>
  );
};

export default List;
