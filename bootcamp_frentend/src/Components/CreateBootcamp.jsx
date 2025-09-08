import React from "react";
import { useNavigate, Link } from "react-router-dom";
const CreateBootcamp = () => {
  return (
    <div className="flex items-center max-w-3xl mx-auto justify-center min-h-screen bg-gray-900">
      <form className="bg-black text-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4 border border-yellow-500">
        <h2 className="text-center text-lg font-bold">Create BootCamp</h2>

        <input
          type="text"
          placeholder="Enter name here"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />
        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />
        <textarea
          placeholder="Write some description"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />
        <input
          type="text"
          placeholder="Enter a website"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />

        <select className="w-full px-3 py-2 rounded border border-gray-300">
          <option>Web Development</option>
          <option>FullStack Development</option>
          <option>Data Science</option>
        </select>

        <input
          type="text"
          placeholder="Image URL"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />

        <button
          type="submit"
          className="w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 transition"
        >
          Create BootCamp
        </button>
      </form>
      
    </div>
    
  );
};

export default CreateBootcamp;
