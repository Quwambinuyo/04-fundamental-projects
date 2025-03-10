import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  // Destructure hex value and weight from the color object
  const { hex, weight } = color;

  // Function to copy the color hex code to clipboard
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard"); // Success message
      } catch (error) {
        toast.error("Failed to copy to clipboard"); // Error message
      }
    } else {
      toast.error("Clipboard not available");
    }
  };

  return (
    <>
      <article
        onClick={saveToClipboard} // Copy color on click
        className={index > 10 ? "color color-light" : "color"} // Light color class for better contrast
        style={{ background: `#${hex}` }}
      >
        <p className="percent-value">{weight}%</p>{" "}
        {/* Show weight of the color */}
        <p className="color-value">#{hex}</p> {/* Show hex code */}
      </article>
    </>
  );
};

export default SingleColor;
