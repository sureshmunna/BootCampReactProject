import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    let data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    let result = await data.json();
    setProduct(result);
    console.log(result);
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {product ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {product.title}
          </h2>
          <img
            src={product?.images?.[0]}
            alt={product?.title}
            className="w-full max-w-md rounded-lg mb-4"
          />
          <p className="text-lg mb-2">
            <b>Price:</b> ${product?.price}
          </p>
          <p className="text-gray-700 mb-2">
            <b>Description:</b> {product?.description}
          </p>
          <p className="text-gray-700 mb-4">
            <b>Category:</b> {product?.category?.name}
          </p>

          <Link
            to="/app/products"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            ← Back to Products
          </Link>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
