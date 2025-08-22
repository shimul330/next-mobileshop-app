"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "../actions/getProducts";
import Link from "next/link";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // server action call
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
        >
          {/* Image */}
          <div className="w-full h-56 sm:h-60 md:h-64 lg:h-72 overflow-hidden rounded-xl">
            {product?.image ? (
              <img
                src={product.image}
                alt={product.itemName}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : null}
          </div>

          {/* Content */}
          <div className="mt-4 flex-1 flex flex-col">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-1">
              {product.itemName}
            </h2>
            <p className="text-sm text-gray-500">{product.company}</p>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {product.description}
            </p>
            <p className="mt-2 font-semibold text-gray-900">
              Price: <span className="text-green-600">${product.price}</span> |{" "}
              <span className="text-red-500">{product.discount}% Off</span>
            </p>
            <div className="mt-2">
              <Link href={`/products/${product._id}`}>
                <button className="w-full bg-blue-600 py-2 rounded-2xl font-medium text-white hover:bg-blue-500 ">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default ProductList;
