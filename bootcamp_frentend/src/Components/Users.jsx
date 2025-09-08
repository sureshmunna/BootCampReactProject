import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [usersData, setUsersData] = useState();

  const getUsers = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/users");
    let result = await data.json();
    setUsersData(result);
    console.log(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 p-5">
      {usersData?.map((user) => {
        let { avatar, name, id } = user;
        return (
          <div
            key={id}
            className="w-[200px] mb-5 border-2 flex flex-col items-center overflow-hidden gap-2 p-3 rounded-lg shadow"
          >
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover block"
            />
            <Link
              to={`/app/user/${id}`}
              className="w-full h-10 flex items-center justify-center bg-gray-200 hover:bg-blue-200 transition"
            >
              User Details
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
