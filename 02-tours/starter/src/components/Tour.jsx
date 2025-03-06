import React from "react";
import { useState } from "react";

// Component to display details of a single tour
// Includes an image, name, price, and a toggleable description
const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false); // State to toggle full description

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} className="img" />
        <span className="tour-price">${price}</span>
        <div className="tour-info">
          <h5>{name}</h5>

          {/* Show either full info or a shortened version with a "read more" toggle */}
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="info-btn"
              type="button"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "read more"}
            </button>
          </p>

          {/* Button to remove the tour from the list */}
          <button
            type="button"
            className="btn btn-block"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </div>
      </article>
    </>
  );
};

export default Tour;
