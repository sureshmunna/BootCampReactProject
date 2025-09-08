import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    let data = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    let result = await data.json();
    setProduct(result);
    console.log(result);
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">{product?.name}</h2>
      <img src={product?.avatar} alt={product?.name} className="w-72 rounded-lg" />
      <p className="mt-3 text-lg">
        <b>Role:</b> {product?.role}
      </p>
    </div>
  );
};

export default UserDetails;
