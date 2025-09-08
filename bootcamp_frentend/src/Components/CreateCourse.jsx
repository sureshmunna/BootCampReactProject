import React from "react";

const CreateCourse = () => {
  return (
    <div className="flex items-center max-w-3xl mx-auto justify-center min-h-screen bg-gray-900">
      <form className="bg-black text-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4 border border-yellow-500">
        <h2 className="text-center text-lg font-bold">Create Course</h2>

        <input
          type="text"
          placeholder="Enter title here"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />
        <textarea
          placeholder="Write some description"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />
        <input
          type="text"
          placeholder="Course duration"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />
        <input
          type="number"
          placeholder="Price of this course"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />
        <input
          type="text"
          placeholder="Give the image URL"
          className="w-full px-3 py-2 rounded border border-gray-300 "
        />

        <select className="w-full px-3 py-2 rounded border border-gray-300 ">
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
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
