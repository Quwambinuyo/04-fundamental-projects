import React from "react";
import Duties from "./Duties"; // Import the Duties component

const JobInfo = ({ jobs }) => {
  if (!jobs.length) return null; // Ensure jobs exist before destructuring

  const { company, dates, duties, title } = jobs[0];

  return (
    <>
      {" "}
      <div>
        <article className="job-info">
          <h3>{title}</h3>
          <span className="job-company">{company}</span>
          <p className="job-dates">{dates}</p>
          <Duties duties={duties} />
        </article>
      </div>
    </>
  );
};

export default JobInfo;
