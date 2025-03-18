import React from "react";
import { useGlobalContext } from "./context/GlobalContext";

const App = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();
  console.log(isSidebarOpen);

  return (
    <div>
      <h2>Strapi Starter</h2>
    </div>
  );
};

export default App;
