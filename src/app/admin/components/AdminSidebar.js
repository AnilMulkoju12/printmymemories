"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  ImageIcon,
  Settings,
  TicketPercent,
  Star,
  BarChart3,
  LogOut,
  X,
  Search,
  Bell,
  Menu,
} from "lucide-react";

export default function AdminLayoutWrapper({ children, title }) {
  const pathname = usePathname();

  const [openSidebar, setOpenSidebar] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      name: "Categories",
      icon: BarChart3,
      path: "/admin/categories",
    },
    {
      name: "Orders",
      icon: Package,
      path: "/admin/orders",
    },
    {
      name: "Customers",
      icon: Users,
      path: "/admin/customers",
    },
    {
      name: "Products",
      icon: ShoppingBag,
      path: "/admin/products",
    },

    {
      name: "Banners",
      icon: ImageIcon,
      path: "/admin/banners",
    },
    {
      name: "Coupons",
      icon: TicketPercent,
      path: "/admin/coupons",
    },
    {
      name: "Reviews",
      icon: Star,
      path: "/admin/reviews",
    },
    {
      name: "Reports",
      icon: BarChart3,
      path: "/admin/reports",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f7fb]">
      {/* OVERLAY */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:relative
          top-0 left-0
          z-50
          w-[260px]
          h-screen
          bg-white
          border-r border-[#ececec]
          flex flex-col
          justify-between
          px-4 py-5
          transition-transform duration-300
          ${
            openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* TOP */}
        <div>
          {/* LOGO */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
                G
              </div>

              <div>
                <h2 className="text-[18px] font-bold">Gift Store</h2>

                <p className="text-[11px] text-gray-500">Admin Panel</p>
              </div>
            </div>

            <button onClick={() => setOpenSidebar(false)} className="lg:hidden">
              <X size={18} />
            </button>
          </div>

          {/* MENU */}
          <div className="mt-8 flex flex-col gap-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              const active =
                pathname === item.path ||
                pathname.startsWith(item.path + "/") ||
                (item.path === "/admin/categories" &&
                  pathname.startsWith("/admin/products/"));

              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`
                    h-[46px]
                    px-4
                    rounded-xl
                    flex items-center gap-3
                    text-[14px]
                    font-medium
                    transition-all
                    ${
                      active
                        ? "bg-violet-50 text-violet-600"
                        : "text-[#374151] hover:bg-[#f8f8f8]"
                    }
                  `}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* LOGOUT */}
        <button className="h-[46px] rounded-xl bg-[#f8f8f8] flex items-center gap-3 px-4 text-[14px]">
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="h-[72px] bg-white border-b border-[#ececec] px-5 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenSidebar(true)}
              className="lg:hidden w-10 h-10 border rounded-xl flex items-center justify-center"
            >
              <Menu size={18} />
            </button>

            <div>
              <h1 className="text-[22px] font-bold text-[#111827]">{title}</h1>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* SEARCH */}
            <div className="hidden lg:flex w-[300px] h-[42px] rounded-xl border border-[#ececec] bg-[#fafafa] px-3 items-center gap-2">
              <Search size={16} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none text-[13px]"
              />
            </div>

            {/* NOTIFICATION */}
            <button className="w-10 h-10 rounded-xl border border-[#ececec] flex items-center justify-center bg-white">
              <Bell size={16} />
            </button>

            {/* PROFILE */}
            <img
              src="https://i.pravatar.cc/100"
              alt=""
              className="w-10 h-10 rounded-xl object-cover"
            />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}
