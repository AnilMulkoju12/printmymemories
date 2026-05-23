"use client";

import { useMemo, useState } from "react";

import {
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export default function DataTable({
  title,
  subtitle,
  columns,
  data,
}) {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  const totalPages = Math.ceil(
    filteredData.length / itemsPerPage
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-5">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        {/* LEFT */}
        <div>
          <h2 className="text-[22px] font-bold text-[#111827]">
            {title}
          </h2>

          <p className="mt-[2px] text-[12px] text-gray-500">
            {subtitle}
          </p>
        </div>

        {/* SEARCH */}
        <div
          className="
            w-full lg:w-[260px]
            h-[36px]
            rounded-lg
            border border-[#ececec]
            bg-white
            px-3
            flex items-center gap-2
          "
        >
          <Search size={14} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="
              flex-1
              bg-transparent
              outline-none
              text-[12px]
            "
          />
        </div>
      </div>

      {/* DESKTOP TABLE */}
      <div
        className="
          hidden lg:block
          mt-4
          bg-white
          rounded-[18px]
          border border-[#ececec]
          overflow-hidden
          shadow-sm
        "
      >
        {/* HEADER */}
        <div
          className="grid px-4 py-3 bg-[#fafafa] border-b border-[#ececec]"
          style={{
            gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr)) 120px`,
          }}
        >
          {columns.map((column, index) => (
            <h3
              key={index}
              className="text-[12px] font-semibold text-gray-500"
            >
              {column.header}
            </h3>
          ))}

          <h3 className="text-[12px] font-semibold text-gray-500 text-right">
            Actions
          </h3>
        </div>

        {/* BODY */}
        <div>
          {paginatedData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid px-4 py-4 border-b border-[#f3f4f6] items-center"
              style={{
                gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr)) 120px`,
              }}
            >
              {columns.map((column, colIndex) => (
                <div key={colIndex}>
                  {column.render ? (
                    column.render(row[column.accessor], row)
                  ) : (
                    <p className="text-[13px] text-[#111827]">
                      {row[column.accessor]}
                    </p>
                  )}
                </div>
              ))}

              {/* ACTIONS */}
              <div className="flex items-center justify-end gap-2">
                <button
                  className="
                    w-8 h-8
                    rounded-lg
                    bg-violet-100
                    text-violet-600
                    flex items-center justify-center
                  "
                >
                  <Eye size={14} />
                </button>

                <button
                  className="
                    w-8 h-8
                    rounded-lg
                    bg-blue-100
                    text-blue-600
                    flex items-center justify-center
                  "
                >
                  <Pencil size={14} />
                </button>

                <button
                  className="
                    w-8 h-8
                    rounded-lg
                    bg-red-100
                    text-red-500
                    flex items-center justify-center
                  "
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div
          className="
            px-4 py-3
            flex items-center justify-between
            border-t border-[#ececec]
          "
        >
          <p className="text-[12px] text-gray-500">
            Showing {paginatedData.length} of{" "}
            {filteredData.length} entries
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((prev) => prev - 1)
              }
              className="
                w-8 h-8
                rounded-lg
                border border-[#ececec]
                flex items-center justify-center
                disabled:opacity-40
              "
            >
              <ChevronLeft size={14} />
            </button>

            <div className="px-3 text-[12px] font-medium">
              {currentPage} / {totalPages}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => prev + 1)
              }
              className="
                w-8 h-8
                rounded-lg
                border border-[#ececec]
                flex items-center justify-center
                disabled:opacity-40
              "
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE CARDS */}
      <div className="lg:hidden mt-4 flex flex-col gap-3">
        {paginatedData.map((row, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-[18px]
              border border-[#ececec]
              p-4
              shadow-sm
            "
          >
            <div className="flex flex-col gap-3">
              {columns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="flex items-center justify-between gap-3"
                >
                  <p className="text-[11px] text-gray-500">
                    {column.header}
                  </p>

                  <div>
                    {column.render ? (
                      column.render(
                        row[column.accessor],
                        row
                      )
                    ) : (
                      <p className="text-[13px] font-medium text-[#111827]">
                        {row[column.accessor]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex items-center gap-2">
              <button
                className="
                  flex-1
                  h-[34px]
                  rounded-lg
                  bg-violet-100
                  text-violet-600
                  text-[12px]
                  font-medium
                  flex items-center justify-center gap-2
                "
              >
                <Eye size={13} />
                View
              </button>

              <button
                className="
                  flex-1
                  h-[34px]
                  rounded-lg
                  bg-blue-100
                  text-blue-600
                  text-[12px]
                  font-medium
                  flex items-center justify-center gap-2
                "
              >
                <Pencil size={13} />
                Edit
              </button>

              <button
                className="
                  flex-1
                  h-[34px]
                  rounded-lg
                  bg-red-100
                  text-red-500
                  text-[12px]
                  font-medium
                  flex items-center justify-center gap-2
                "
              >
                <Trash2 size={13} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}