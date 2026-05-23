"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Search,
  Plus,
  Pencil,
  Trash2,
  MoreVertical,
  FolderOpen,
  Package,
  X,
} from "lucide-react";

import "../../globals.css";

export default function CategoriesPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  // FETCH CATEGORIES
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");

      const data = await res.json();

      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  // CREATE CATEGORY
  const handleCreateCategory = async () => {
    try {
      if (!formData.name || !formData.image) {
        alert("Please fill all fields");
        return;
      }

      setLoading(true);

      const res = await fetch("/api/categories", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          image: formData.image,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create category");
      }

      await fetchCategories();

      setOpenModal(false);

      setFormData({
        name: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE CATEGORY
  const handleDeleteCategory = async (id) => {
    try {
      const confirmDelete = confirm(
        "Are you sure you want to delete this category?"
      );

      if (!confirmDelete) return;

      await fetch(`/api/categories/${id}`, {
        method: "DELETE",
      });

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  // FILTERED CATEGORIES
  const filteredCategories = useMemo(() => {
    return categories.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [categories, search]);

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        {/* LEFT */}
        <div>
          <h1 className="text-[28px] font-bold text-[#111827]">
            Categories Management
          </h1>

          <p className="mt-1 text-[13px] text-gray-500">
            Manage all your product categories
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setOpenModal(true)}
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
            <Plus size={16} />
            Create Category
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="mt-4 flex justify-end">
        <div
          className="
            h-[38px]
            rounded-xl
            border border-[#ececec]
            bg-white
            px-3
            w-full lg:w-[280px]
            flex items-center gap-2
          "
        >
          <Search size={15} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search categories..."
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
      </div>

      {/* CATEGORIES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
        {filteredCategories.map((item) => (
          <div
            key={item.id}
            className="
              bg-white
              rounded-[24px]
              overflow-hidden
              border border-[#ececec]
              shadow-sm
              hover:shadow-md
              transition-all
              cursor-pointer
            "
          >
            {/* TOP */}
            <div className="bg-[#f7f7f7] p-4">
              <div className="flex items-center justify-between">
                {/* PRODUCTS COUNT */}
                <div
                  className="
                    px-3 py-1
                    rounded-full
                    bg-white
                    text-[11px]
                    font-medium
                    text-[#111827]
                    flex items-center gap-1
                  "
                >
                  <Package size={12} />
                  {item.total_products || 0} Products
                </div>

                {/* MENU */}
                <button
                  className="
                    w-8 h-8
                    rounded-lg
                    bg-white
                    flex items-center justify-center
                  "
                >
                  <MoreVertical
                    size={16}
                    className="text-gray-500"
                  />
                </button>
              </div>

              {/* IMAGE */}
              <div className="mt-5 flex justify-center">
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
                <h2 className="text-[22px] font-bold text-[#111827]">
                  {item.name}
                </h2>

                <p className="mt-1 text-[12px] text-gray-500">
                  Click to manage category products
                </p>
              </div>

              {/* ACTION BUTTON */}
              <button
                onClick={() =>
                  router.push(`/admin/products/${item.slug}`)
                }
                className="
                  mt-5
                  w-full
                  h-[42px]
                  rounded-xl
                  bg-violet-600
                  text-white
                  text-[13px]
                  font-medium
                  flex items-center justify-center gap-2
                "
              >
                <FolderOpen size={16} />
                Open Products
              </button>

              {/* ACTIONS */}
              <div className="mt-3 flex items-center gap-2">
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
                  onClick={() =>
                    handleDeleteCategory(item.id)
                  }
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

      {/* CREATE CATEGORY MODAL */}
      {openModal && (
        <div
          className="
            fixed inset-0
            z-50
            bg-black/40
            flex items-center justify-center
            p-4
          "
        >
          <div
            className="
              w-full max-w-md
              bg-white
              rounded-[24px]
              p-5
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[24px] font-bold text-[#111827]">
                  Create Category
                </h2>

                <p className="mt-1 text-[13px] text-gray-500">
                  Add a new category
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="
                  w-9 h-9
                  rounded-xl
                  bg-gray-100
                  flex items-center justify-center
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* FORM */}
            <div className="mt-5 space-y-4">
              {/* CATEGORY NAME */}
              <div>
                <label className="text-[13px] font-medium text-[#111827]">
                  Category Name
                </label>

                <input
                  type="text"
                  placeholder="Enter category name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="
                    mt-2
                    w-full
                    h-[45px]
                    border border-[#ececec]
                    rounded-xl
                    px-4
                    outline-none
                    text-[14px]
                  "
                />
              </div>

              {/* IMAGE URL */}
              <div>
                <label className="text-[13px] font-medium text-[#111827]">
                  Image URL
                </label>

                <input
                  type="text"
                  placeholder="Paste image url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image: e.target.value,
                    })
                  }
                  className="
                    mt-2
                    w-full
                    h-[45px]
                    border border-[#ececec]
                    rounded-xl
                    px-4
                    outline-none
                    text-[14px]
                  "
                />
              </div>

              {/* PREVIEW */}
              {formData.image && (
                <div
                  className="
                    h-[140px]
                    rounded-2xl
                    bg-[#f8f8f8]
                    flex items-center justify-center
                  "
                >
                  <img
                    src={formData.image}
                    alt=""
                    className="w-28 h-28 object-contain"
                  />
                </div>
              )}

              {/* BUTTONS */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setOpenModal(false)}
                  className="
                    flex-1
                    h-[45px]
                    rounded-xl
                    border border-[#ececec]
                    text-[14px]
                    font-medium
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={handleCreateCategory}
                  disabled={loading}
                  className="
                    flex-1
                    h-[45px]
                    rounded-xl
                    bg-violet-600
                    text-white
                    text-[14px]
                    font-medium
                  "
                >
                  {loading ? "Creating..." : "Create"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}