import React, { useContext } from "react";
import { useGlobalCotext } from "../context/Context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModal } = useGlobalCotext();

  return (
    <>
      <main>
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
        <button onClick={openModal} className="btn">
          Show Modal
        </button>
      </main>
    </>
  );
};

export default Home;
