import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  const id = uuidv4(); // Generates a unique ID for each render (not used in the map method)

  return (
    <>
      {/* Map through the duties array and render each duty with a job icon */}
      {duties.map((duty, id) => (
        <div key={id} className="job-desc">
          {/* Render each duty item with an icon and description */}
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      ))}
    </>
  );
};

export default Duties;
