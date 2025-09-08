import React from "react";

const UpdateCourse = () => {
  return (
    <div className="flex items-center max-w-3xl mx-auto justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4">
        <h2 className="text-center text-lg font-bold text-blue-600">
          Update Course
        </h2>

        <input
          type="text"
          placeholder="Java"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
        <textarea
          placeholder="Description..."
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="5 weeks"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="number"
          placeholder="23434"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="http://dummyimage.com"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />

        <select className="w-full px-3 py-2 rounded border border-gray-300">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <div className="flex items-center gap-3 text-sm">
          <label>Scholarship available</label>
          <label>
            <input type="radio" name="scholarship" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="scholarship" value="no" /> No
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 transition"
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
