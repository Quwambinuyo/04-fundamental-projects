import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  const id = uuidv4();
  // console.log(id);

  return (
    <>
      {duties.map((duty, id) => (
        <div key={id} className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      ))}
    </>
  );
};

export default Duties;
