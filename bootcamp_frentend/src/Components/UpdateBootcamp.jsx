import React from "react";

const UpdateBootcamp = () => {
  return (
    <div className="flex items-center max-w-3xl mx-auto justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4">
        <h2 className="text-center text-lg font-bold text-blue-600">
          Update BootCamp
        </h2>

        <input
          type="text"
          placeholder="Ganesh"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="email"
          placeholder="ganeshsm466@gmail.com"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
        <textarea
          placeholder="Description..."
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="https://react.dev/"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />

        <select className="w-full px-3 py-2 rounded border border-gray-300">
          <option>Web Development</option>
          <option>FullStack Development</option>
          <option>Data Science</option>
        </select>

        <input
          type="text"
          placeholder="https://dummyimage.com"
          className="w-full px-3 py-2 rounded border border-gray-300"
        />

        <button
          type="submit"
          className="w-full py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 transition"
        >
          Update BootCamp
        </button>
      </form>
    </div>
  );
};

export default UpdateBootcamp;
