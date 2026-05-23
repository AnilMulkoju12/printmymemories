"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

import {
  Search,
  Plus,
  Pencil,
  Trash2,
  MoreVertical,
  ArrowLeft,
  Package,
} from "lucide-react";
import { useRouter } from "next/navigation";
import "../../../globals.css";


export default function CategoryProductsPage() {
  const params = useParams();
const router = useRouter();
  const category = params.category;

  const [search, setSearch] = useState("");

  const formattedCategory = category
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const allProducts = [
    {
      id: 1,
      name: "LED Frame",
      category: "photo-frames",
      stock: 12,
      status: "Active",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
      bg: "bg-[#eefbf3]",
    },

    {
      id: 2,
      name: "Wooden Frame",
      category: "photo-frames",
      stock: 5,
      status: "Low Stock",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920253.png",
      bg: "bg-[#fff3f0]",
    },

    {
      id: 3,
      name: "Magic Mug",
      category: "custom-mugs",
      stock: 18,
      status: "Active",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      bg: "bg-[#eef5ff]",
    },

    {
      id: 4,
      name: "Couple Frame",
      category: "photo-frames",
      stock: 9,
      status: "Active",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920253.png",
      bg: "bg-[#f6f0ff]",
    },
  ];

  const filteredProducts = useMemo(() => {
    return allProducts.filter(
      (item) =>
        item.category === category &&
        item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [category, search]);

  return (
    <div>
      {/* TOP HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.back()}
              className="
    w-9 h-9
    rounded-xl
    border border-[#ececec]
    bg-white
    flex items-center justify-center
  "
            >
              <ArrowLeft size={16} />
            </button>

            <div>
              <h1 className="text-[28px] font-bold text-[#111827]">
                {formattedCategory}
              </h1>

              <p className="mt-1 text-[13px] text-gray-500">
                Manage category products
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap gap-3">
          {/* SEARCH */}
          <div
            className="
              h-[40px]
              rounded-xl
              border border-[#ececec]
              bg-white
              px-3
              w-full sm:w-[260px]
              flex items-center gap-2
            "
          >
            <Search size={15} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                flex-1
                bg-transparent
                outline-none
                text-[13px]
              "
            />
          </div>

          {/* CREATE BUTTON */}
          <button
            className="
              h-[40px]
              px-4
              rounded-xl
              bg-violet-600
              text-white
              text-[13px]
              font-medium
              flex items-center gap-2
            "
          >
            <Plus size={15} />
            Create Product
          </button>
        </div>
      </div>

      {/* CATEGORY INFO */}
      <div
        className="
          mt-5
          bg-white
          rounded-[20px]
          border border-[#ececec]
          p-4
          flex items-center justify-between
        "
      >
        <div>
          <p className="text-[12px] text-gray-500">Total Products</p>

          <h2 className="mt-1 text-[26px] font-bold text-[#111827]">
            {filteredProducts.length}
          </h2>
        </div>

        <div
          className="
            w-12 h-12
            rounded-2xl
            bg-violet-100
            text-violet-600
            flex items-center justify-center
          "
        >
          <Package size={22} />
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              rounded-[22px]
              overflow-hidden
              border border-[#ececec]
              shadow-sm
              hover:shadow-md
              transition-all
            "
          >
            {/* IMAGE AREA */}
            <div className={`${item.bg} p-4`}>
              {/* TOP */}
              <div className="flex items-center justify-between">
                <span
                  className={`
                    px-2.5 py-1
                    rounded-full
                    text-[10px]
                    font-medium
                    ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-500"
                    }
                  `}
                >
                  {item.status}
                </span>

                <button
                  className="
                    w-8 h-8
                    rounded-lg
                    bg-white/80
                    flex items-center justify-center
                  "
                >
                  <MoreVertical size={16} className="text-gray-500" />
                </button>
              </div>

              {/* IMAGE */}
              <div className="mt-4 flex justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            {/* DETAILS */}
            <div className="p-4">
              {/* TITLE */}
              <div>
                <h2 className="text-[18px] font-bold text-[#111827]">
                  {item.name}
                </h2>

                <p className="mt-1 text-[12px] text-gray-500">
                  {formattedCategory}
                </p>
              </div>

              {/* STOCK */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-gray-500">Stock</p>

                  <h3 className="mt-1 text-[20px] font-bold text-violet-600">
                    {item.stock}
                  </h3>
                </div>

                <div>
                  <p className="text-[11px] text-gray-500">Status</p>

                  <h3 className="mt-1 text-[14px] font-semibold text-[#111827]">
                    {item.status}
                  </h3>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="mt-4 flex items-center gap-2">
                <button
                  className="
                    flex-1
                    h-[38px]
                    rounded-xl
                    bg-violet-100
                    text-violet-600
                    text-[13px]
                    font-medium
                    flex items-center justify-center gap-2
                  "
                >
                  <Pencil size={14} />
                  Edit
                </button>

                <button
                  className="
                    flex-1
                    h-[38px]
                    rounded-xl
                    bg-red-100
                    text-red-500
                    text-[13px]
                    font-medium
                    flex items-center justify-center gap-2
                  "
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
