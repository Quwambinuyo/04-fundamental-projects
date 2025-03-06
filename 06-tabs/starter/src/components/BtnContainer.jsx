import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <>
      <div className="btn-container">
        {/* Map through the jobs array and render a button for each job */}
        {/* Each button triggers the setCurrentItem function to set the selected job */}
        {jobs.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => setCurrentItem(index)} // Update the current selected job
              className={
                index === currentItem ? "job-btn active-btn" : "job-btn" // Add active class if it's the selected job
              }
            >
              {item.company} {/* Display the company name */}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default BtnContainer;
