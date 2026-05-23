"use client";

import Link from "next/link";

import {
  Sparkles,
  ShoppingBag,
  Heart,
  Home,
  Grid2X2,
  User,
} from "lucide-react";

export default function AppLayout({ children }) {
  return (
    <main className="relative bg-[#fafafa] min-h-screen flex flex-col">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">

        <div
          className="
            h-full w-full
            bg-[radial-gradient(#000_1px,transparent_1px)]
            [background-size:26px_26px]
          "
        />

      </div>

      {/* HEADER */}
      <header
        className="
          sticky top-0 z-50
          px-4 lg:px-8
          py-3
          flex items-center justify-between
          bg-[#fafafa]/90
          backdrop-blur-xl
          border-b border-black/5
          shrink-0
        "
      >

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">

          <div
            className="
              w-8 h-8 lg:w-9 lg:h-9
              rounded-xl
              bg-white
              flex items-center justify-center
              shadow-[0_4px_10px_rgba(0,0,0,0.04)]
            "
          >
            <Sparkles
              size={14}
              className="text-pink-500"
            />
          </div>

          <div>

            <h1
              className="
                text-[15px] lg:text-[16px]
                font-black
                leading-none
              "
            >
              Print My Memories
            </h1>

            <p className="text-[9px] text-gray-500 mt-1">
              custom printing studio
            </p>

          </div>

        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">

          {/* WISHLIST */}
          <Link
            href="/wishlist"
            className="
              w-8 h-8 lg:w-9 lg:h-9
              rounded-xl
              bg-white
              flex items-center justify-center
              shadow-[0_4px_10px_rgba(0,0,0,0.04)]
            "
          >
            <Heart
              size={13}
              className="text-pink-500"
            />
          </Link>

          {/* CART */}
          <Link
            href="/cart"
            className="
              bg-black text-white
              px-3 py-2
              rounded-xl
              flex items-center gap-2
              text-xs
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            "
          >
            <ShoppingBag size={12} />
            Cart
          </Link>

        </div>

      </header>

      {/* PAGE CONTENT */}
      <div
        className="
          relative z-10
          flex-1
          overflow-x-hidden
          pb-24 lg:pb-0
        "
      >
        {children}
      </div>

      {/* MOBILE BOTTOM NAV */}
      <div
        className="
          lg:hidden
          fixed bottom-2 left-1/2
          -translate-x-1/2
          w-[92%]
          bg-white/90
          backdrop-blur-xl
          border border-black/5
          rounded-[20px]
          px-4 py-2
          flex items-center justify-between
          shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          z-50
          overflow-visible
        "
      >

        {/* HOME */}
        <Link href="/" className="flex flex-col items-center gap-[2px]">

          <div
            className="
              w-9 h-9
              rounded-xl
              bg-black
              text-white
              flex items-center justify-center
            "
          >
            <Home size={15} />
          </div>

          <span className="text-[10px] font-medium">
            Home
          </span>

        </Link>

        {/* PRODUCTS */}
        <Link href="/products" className="flex flex-col items-center gap-[2px]">

          <div
            className="
              w-9 h-9
              rounded-xl
              bg-[#f5f5f5]
              flex items-center justify-center
            "
          >
            <Grid2X2 size={15} />
          </div>

          <span className="text-[10px] text-gray-500">
            Products
          </span>

        </Link>

        {/* CART */}
        <Link href="/cart" className="flex flex-col items-center gap-[2px]">

          <div
            className="
              w-11 h-11
              rounded-xl
              bg-pink-500
              text-white
              flex items-center justify-center
              shadow-[0_8px_20px_rgba(236,72,153,0.30)]
              -mt-6
            "
          >
            <ShoppingBag size={16} />
          </div>

          <span className="text-[10px] font-medium">
            Cart
          </span>

        </Link>

        {/* WISHLIST */}
        <Link href="/wishlist" className="flex flex-col items-center gap-[2px]">

          <div
            className="
              w-9 h-9
              rounded-xl
              bg-[#f5f5f5]
              flex items-center justify-center
            "
          >
            <Heart size={15} />
          </div>

          <span className="text-[10px] text-gray-500">
            Wishlist
          </span>

        </Link>

        {/* PROFILE */}
        <Link href="/profile" className="flex flex-col items-center gap-[2px]">

          <div
            className="
              w-9 h-9
              rounded-xl
              bg-[#f5f5f5]
              flex items-center justify-center
            "
          >
            <User size={15} />
          </div>

          <span className="text-[10px] text-gray-500">
            Profile
          </span>

        </Link>

      </div>

    </main>
  );
}