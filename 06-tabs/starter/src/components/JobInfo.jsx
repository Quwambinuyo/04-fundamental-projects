import React from "react";
import Duties from "./Duties"; // Import the Duties component to display job duties

const JobInfo = ({ jobs, currentItem }) => {
  if (!jobs.length) return null; // Ensure jobs exist before accessing the current item

  const { company, dates, duties, title } = jobs[currentItem]; // Destructure the job data for the selected item

  return (
    <>
      <div>
        <article className="job-info">
          <h3>{title}</h3> {/* Display the job title */}
          <span className="job-company">{company}</span>{" "}
          {/* Display the company name */}
          <p className="job-date">{dates}</p> {/* Display the job dates */}
          {/* Pass the duties to the Duties component to display each duty */}
          <Duties duties={duties} />
        </article>
      </div>
    </>
  );
};

export default JobInfo;
