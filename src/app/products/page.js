"use client";

import { useGetProductsQuery } from "../../redux/services/productApi";

export default function ProductsPage() {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log("productsData", data);
  if (isLoading)
    return <div className="text-center mt-20">Loading...</div>;

  if (error)
    return <div className="text-center text-red-500 mt-20">Error</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* PAGE HEADER */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Our Products</h1>
        <p className="text-gray-500">
          Discover unique personalized gifts 🎁
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.data?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group"
          >
            {/* IMAGE */}
            <div className="h-48 bg-gradient-to-r from-pink-100 to-red-100 flex items-center justify-center text-5xl">
              🎁
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-semibold text-lg group-hover:text-red-500 transition">
                {product.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-red-500">
                  ₹ {product.price}
                </span>

                <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}