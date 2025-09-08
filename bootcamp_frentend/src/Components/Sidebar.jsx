import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkStyle = ({ isActive }) =>
    `w-full h-10 flex items-center px-3 mb-1 no-underline ${
      isActive ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }`;

  return (
    <nav className="min-w-[200px] bg-black flex flex-col">
      {/* <NavLink to="/app/user" className={navLinkStyle}>
        Users
      </NavLink>
      <NavLink to="/app/products" className={navLinkStyle}>
        Products
      </NavLink> */}
      <NavLink to="/app/bootcamps" className={navLinkStyle}>
        All Bootcamps
      </NavLink>
      <NavLink to="/app/courses" className={navLinkStyle}>
        All Courses
      </NavLink>
      {/* <NavLink to="/app/create-course" className={navLinkStyle}>
        Create Course
      </NavLink>
      <NavLink to="/app/create-bootcamp" className={navLinkStyle}>
        Create Bootcamp
      </NavLink>
      <NavLink to="/app/update-course" className={navLinkStyle}>
        Update Course
      </NavLink>
      <NavLink to="/app/update-bootcamp" className={navLinkStyle}>
        Update Bootcamp
      </NavLink> */}
    </nav>
  );
};

export default Sidebar;
