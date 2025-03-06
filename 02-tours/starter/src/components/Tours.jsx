import React from "react";
import Tour from "./Tour";

// Component to display a list of tours
// Uses the Tour component (Tour.js) to render each tour's details
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>

        <div className="tours">
          {/* Map through the tours array and render a Tour component for each */}
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
