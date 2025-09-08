import React from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="flex bg-pink-500 h-[calc(100%-60px)]">
        <Sidebar />
        <Outlet />   {/* will render Home, About, etc. */}
      </section>
    </>
  );
};

export default App;
