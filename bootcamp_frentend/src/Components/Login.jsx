import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate("/app/bootcamps"); 
  };

  return (
    <div className="flex item-center justify-center min-h-screen bg-red-100">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign In</h1>

        <div className="mb-4">
          <label htmlFor="txtEmail" className="block text-gray-600 font-medium mb-2">Email</label>
          <input type="email" id="txtEmail" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div className="mb-4">
          <label htmlFor="userPassword" className="block text-gray-600 font-medium mb-2">Password</label>
          <input type="password" id="userPassword" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
