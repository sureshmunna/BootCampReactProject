import React from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleOnchange=(e)=>{
    
  }
  const handleSignUp = (e) => {
    e.preventDefault();
    
    navigate("/login"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Sign Up
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="txtName"
            className="block text-gray-600 font-medium mb-2"
          >
            Enter Name
          </label>
          <input
            id="txtName"
            name="txtName"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="txtEmail"
            className="block text-gray-600 font-medium mb-2"
          >
            Email
          </label>
          <input
            id="txtEmail"
            name="txtEmail"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="userPassword"
            className="block text-gray-600 font-medium mb-2"
          >
            Password
          </label>
          <input
            id="userPassword"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label
            htmlFor="userRole"
            className="block text-gray-600 font-medium mb-2"
          >
            Select Role
          </label>
          <select
            id="userRole"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">-- Choose a Role --</option>
            <option value="role">Role</option>
            <option value="publisher">Publisher</option>
            {/* <option value="user">User</option> */}
          </select>
        </div>

        {/* Avatar */}
        <div className="mb-4">
          <label
            htmlFor="userAvatar"
            className="block text-gray-600 font-medium mb-2"
          >
            Avatar
          </label>
          <input
            type="file"
            id="userAvatar"
            accept="image/*"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>

        
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
