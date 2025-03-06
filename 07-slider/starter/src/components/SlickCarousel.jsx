import React from "react";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import Slider from "react-slick"; // Import the Slick Slider component
import { list } from "../data"; // Import data (list of people)
import { FaQuoteRight } from "react-icons/fa"; // Import icon for the quote

const SlickCarousel = () => {
  // Define slider settings for customization
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop for the carousel
    speed: 500, // Transition speed (in ms)
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll through 1 slide at a time
    fade: true, // Enable fading effect between slides
    autoplay: true, // Enable autoplay for the carousel
    autoplaySpeed: 3000, // Set autoplay speed (in ms)
    pauseOnHover: true, // Pause autoplay when hovering over the carousel
  };

  return (
    <>
      <section className="slick-container">
        {/* Apply the settings to the Slider component */}
        <Slider {...settings}>
          {list.map((person) => {
            const { id, image, name, title, quote } = person;
            return (
              <article className="" key={id}>
                <img src={image} alt={name} className="person-img" />
                <h5 className="name">{name}</h5>{" "}
                {/* Display the person's name */}
                <p className="title">{title}</p>{" "}
                {/* Display the person's title */}
                <p className="text"> {quote}</p> {/* Display the quote */}
                <FaQuoteRight className="icon" /> {/* Display the quote icon */}
              </article>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default SlickCarousel;
