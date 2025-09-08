import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  let [products, setProducts] = useState([]);

  let getProducts = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/products");
    let result = await data.json();
    setProducts(result);
    console.log(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {products?.map((product) => {
        let { id, title, images } = product;
        return (
          <div
            key={id}
            className="w-[220px] bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition"
          >
            <img
              src={images[0]}
              alt={title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {title}
              </h3>
              <Link
                to={`/app/products/${id}`}
                className="w-full text-center py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
