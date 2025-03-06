import React, { useEffect, useState } from "react";
import { shortList, list, longList } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(longList); // Default list of people (could be short, long, etc.)
  const [currentPerson, setCurrentPerson] = useState(0); // State to track the current person being displayed in the carousel

  // Function to show the previous person in the carousel
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length; // Loop around if we're at the first person
      return result;
    });
  };

  // Function to show the next person in the carousel
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length; // Loop around if we're at the last person
      return result;
    });
  };

  useEffect(() => {
    // Auto-slide every 5 seconds
    let sliderId = setInterval(() => {
      nextSlide(); // Automatically go to the next slide
    }, 5000);

    // Cleanup interval when the component unmounts or currentPerson changes
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  // useEffect(() => {
  //   let sliderId = setInterval(() => {
  //     setCurrentPerson((prevPerson) => (prevPerson + 1) % people.length);
  //   }, 5000);

  //   return () => clearInterval(sliderId);
  // }, [currentPerson]);

  return (
    <>
      <section className="slider-container">
        {/* Map over the people array to display each person */}
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article
              className="slide"
              style={{
                transform: `translateX(${
                  100 * (personIndex - currentPerson)
                }%)`, // Translate each slide based on the current index
                opacity: personIndex === currentPerson ? 1 : 0, // Only show the current slide
                visibility:
                  personIndex === currentPerson ? "visible" : "hidden", // Hide other slides
              }}
              key={id}
            >
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text"> {quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        {/* Previous and next buttons to manually navigate slides */}
        <button type="button" className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button type="button" className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </>
  );
};

export default Carousel;
