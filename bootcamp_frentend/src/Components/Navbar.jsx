import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="w-full bg-[#efefef] h-[60px] w-[90%] flex items-center justify-center">
        <nav className="flex w-full justify-around">
          <div className="">
            BootCamp Dashbord
          </div>
          <Link to="/" className="text-gray-800 hover:text-blue-600">
            Sign Up
          </Link>
          <Link to="/login" className="text-gray-800 hover:text-blue-600">
            Log In
          </Link>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
