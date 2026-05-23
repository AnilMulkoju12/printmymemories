"use client";

import {
  Search,
  Bell,
  Menu,
} from "lucide-react";
import "../../globals.css";

export default function AdminHeader({
  setOpenSidebar,
  title,
}) {
  return (
    <header
      className="
        sticky top-0 z-20
        h-[72px]
        bg-white
        border-b border-[#ececec]
        px-4 lg:px-5
        flex items-center justify-between
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpenSidebar(true)}
          className="
            lg:hidden
            w-10 h-10
            rounded-xl
            border border-[#ececec]
            bg-white
            flex items-center justify-center
          "
        >
          <Menu size={18} />
        </button>

        <div>
          <h1 className="text-[22px] font-bold text-[#111827]">
            {title}
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <div
          className="
            hidden lg:flex
            w-[260px]
            h-[40px]
            rounded-xl
            border border-[#ececec]
            bg-[#fafafa]
            px-3
            items-center gap-2
          "
        >
          <Search size={15} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="
              flex-1
              bg-transparent
              outline-none
              text-[12px]
            "
          />
        </div>

        <button
          className="
            w-10 h-10
            rounded-xl
            border border-[#ececec]
            bg-white
            flex items-center justify-center
          "
        >
          <Bell size={16} />
        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt=""
          className="w-10 h-10 rounded-xl object-cover"
        />
      </div>
    </header>
  );
}