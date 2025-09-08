import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const result = await data.json();
    setCourses(result);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses</h2>
        <Link
          to="/app/create-course"
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
        >
          + Create Course
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border shadow rounded-lg p-4 bg-white flex flex-col"
          >
            <img
              src={course.images?.[0]}
              alt={course.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="font-semibold text-lg">{course.title}</h3>
            <p className="text-gray-500">${course.price}</p>

            <Link
              to={`/app/update-course/${course.id}`}
              className="mt-3 px-3 py-1 bg-blue-500 text-white text-center rounded hover:bg-blue-600"
            >
              Update
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
