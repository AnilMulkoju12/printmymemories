
"use client";

import {
  ShoppingBag,
  Package,
  Users,
  DollarSign,
  TrendingUp,
  Eye,
} from "lucide-react";
import "../../globals.css"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Products",
      value: "128",
      icon: ShoppingBag,
      color: "bg-violet-100 text-violet-600",
    },
    {
      title: "Total Orders",
      value: "542",
      icon: Package,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Customers",
      value: "1,245",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Revenue",
      value: "₹2.4L",
      icon: DollarSign,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const recentProducts = [
    {
      id: 1,
      name: "Custom Mug",
      category: "Mugs",
      price: "₹499",
      stock: 12,
      image:
        "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    },
    {
      id: 2,
      name: "Photo Frame",
      category: "Frames",
      price: "₹899",
      stock: 5,
      image:
        "https://cdn-icons-png.flaticon.com/512/2920/2920253.png",
    },
    {
      id: 3,
      name: "Printed T-Shirt",
      category: "Fashion",
      price: "₹699",
      stock: 18,
      image:
        "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
  ];

  return (
    <div>
      {/* PAGE TITLE */}
      <div>
        <h1 className="text-[28px] font-bold text-[#111827]">
          Dashboard Overview
        </h1>

        <p className="mt-1 text-[14px] text-gray-500">
          Welcome back admin 👋
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                bg-white
                rounded-[24px]
                border border-[#ececec]
                p-5
                shadow-sm
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-[30px] font-bold text-[#111827]">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`
                    w-14 h-14
                    rounded-2xl
                    flex items-center justify-center
                    ${item.color}
                  `}
                >
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ANALYTICS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">
        {/* SALES */}
        <div
          className="
            xl:col-span-2
            bg-white
            rounded-[24px]
            border border-[#ececec]
            p-5
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[20px] font-bold text-[#111827]">
                Sales Analytics
              </h2>

              <p className="mt-1 text-[13px] text-gray-500">
                Monthly sales performance
              </p>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">
              <TrendingUp size={22} />
            </div>
          </div>

          <div className="mt-8 h-[300px] rounded-2xl bg-[#f6f7fb] flex items-center justify-center text-gray-400 text-[14px]">
            Chart Area
          </div>
        </div>

        {/* TRAFFIC */}
        <div
          className="
            bg-white
            rounded-[24px]
            border border-[#ececec]
            p-5
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[20px] font-bold text-[#111827]">
                Visitors
              </h2>

              <p className="mt-1 text-[13px] text-gray-500">
                Website traffic
              </p>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Eye size={22} />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {["Today", "This Week", "This Month"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <p className="text-[14px] text-gray-500">
                    {item}
                  </p>

                  <h3 className="text-[18px] font-bold text-[#111827]">
                    {Math.floor(Math.random() * 1000)}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* RECENT PRODUCTS */}
      <div
        className="
          mt-6
          bg-white
          rounded-[24px]
          border border-[#ececec]
          p-5
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-bold text-[#111827]">
              Recent Products
            </h2>

            <p className="mt-1 text-[13px] text-gray-500">
              Latest added products
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
          {recentProducts.map((item) => (
            <div
              key={item.id}
              className="border border-[#ececec] rounded-[20px] p-4"
            >
              <div className="bg-[#f6f7fb] rounded-2xl p-5 flex justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-[18px] font-bold text-[#111827]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[13px] text-gray-500">
                  {item.category}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-[22px] font-bold text-[#111827]">
                  {item.price}
                </h2>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-[12px] font-medium">
                  {item.stock} In Stock
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
