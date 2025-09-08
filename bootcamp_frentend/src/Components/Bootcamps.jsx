import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);

  const getBootcamps = async () => {
    
    const data = await fetch("https://api.escuelajs.co/api/v1/categories"); 
    const result = await data.json();
    setBootcamps(result);
  };

  useEffect(() => {
    getBootcamps();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Bootcamps</h2>
        <Link
          to="/app/create-bootcamp"
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
        >
          + Create Bootcamp
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bootcamps.map((bc) => (
          <div
            key={bc.id}
            className="border shadow rounded-lg p-4 bg-white flex flex-col items-center"
          >
            <img
              src={bc.image}
              alt={bc.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="font-semibold text-lg">{bc.name}</h3>
            <p className="text-gray-500">{bc.category || "Category"}</p>

            <Link
              to={`/app/update-bootcamp/${bc.id}`}
              className="mt-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Update
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bootcamps;
