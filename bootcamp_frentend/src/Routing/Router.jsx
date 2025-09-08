import React from "react";
import { createBrowserRouter } from "react-router-dom";

import SignUp from "../Components/SingUp";
import Login from "../Components/Login";
import App from "../App";
import Users from "../Components/Users";
import Products from "../Components/Products";
import UserDetails from "../Components/UserDetails";
import ProductDetails from "../Components/ProductDetails";
import CreateCourse from "../Components/CreateCourse";
import UpdateCourse from "../Components/UpdateCourse";
import CreateBootcamp from "../Components/CreateBootcamp";
import UpdateBootcamp from "../Components/UpdateBootcamp";
import Bootcamps from "../Components/Bootcamps";
import Courses from "../Components/Courses";

// import Home from "../Components/Home";   // example page
// import About from "../Components/About"; // example page

let routes = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <SignUp /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/app",
    element: <App />,
    children: [
      { path: "user", element: <Users /> },
      { path: "user/:id", element: <UserDetails /> }, 
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "create-course", element: <CreateCourse /> },
      { path: "update-course", element: <UpdateCourse /> },
      { path: "create-bootcamp", element: <CreateBootcamp /> },
      { path: "update-bootcamp", element: <UpdateBootcamp /> }, 
      { path: "bootcamps", element: <Bootcamps /> }, 
      { path: "courses", element: <Courses /> }, 
    ],
  },
]);

export default routes;
