import React from "react";
import sublinks from "../data";

const NavLinks = () => {
  return (
    <>
      <div className="nav-links">
        {sublinks.map((item) => {
          const { page, pageId } = item;

          return (
            <button key={pageId} className="nav-link">
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default NavLinks;
