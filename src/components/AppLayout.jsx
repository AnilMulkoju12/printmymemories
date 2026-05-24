"use client";

import Link from "next/link";

import {
  Sparkles,
  Heart,
  Home,
  Package,
  MessageCircle,
  User,
  ShoppingBag,
} from "lucide-react";

export default function AppLayout({ children }) {
  return (
    <main className="relative bg-[#fafafa] min-h-screen flex flex-col overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">

        <div
          className="
            h-full
            w-full
            bg-[radial-gradient(#000_1px,transparent_1px)]
            [background-size:26px_26px]
          "
        />

      </div>

      {/* HEADER */}
      <header
        className="
          sticky
          top-0
          z-50
          px-4
          lg:px-8
          py-3
          flex
          items-center
          justify-between
          bg-[#fafafa]/90
          backdrop-blur-xl
          border-b
          border-black/5
          shrink-0
        "
      >

        {/* LEFT */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >

          {/* LOGO */}
          <div
            className="
              w-9
              h-9
              rounded-2xl
              bg-white
              flex
              items-center
              justify-center
              shadow-[0_4px_10px_rgba(0,0,0,0.04)]
            "
          >
            <Sparkles
              size={15}
              className="text-pink-500"
            />
          </div>

          {/* TITLE */}
          <div>

            <h1
              className="
                text-[15px]
                lg:text-[16px]
                font-black
                leading-none
              "
            >
              Print My Memories
            </h1>

            <p
              className="
                text-[9px]
                text-gray-500
                mt-1
              "
            >
              custom printing studio
            </p>

          </div>

        </Link>

        {/* RIGHT */}
        <div className="flex items-center gap-2">

          {/* CART */}
          <Link
            href="/cart"
            className="
              
              text-black
              px-4
              py-2.5
              rounded-xl
              flex
              items-center
              gap-2
              text-xs
              font-medium
              // shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            "
          >
            <ShoppingBag size={13} />
            {/* Cart */}
          </Link>

        </div>

      </header>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex-1
          overflow-y-auto
          overflow-x-hidden
          pb-24
          lg:pb-0
        "
      >
        {children}
      </div>

      {/* MOBILE STATUS BAR */}
      <div
        className="
          lg:hidden
          fixed
          bottom-2
          left-1/2
          -translate-x-1/2
          w-[92%]
          bg-white/90
          backdrop-blur-xl
          border
          border-black/5
          rounded-[22px]
          px-4
          py-2
          flex
          items-center
          justify-between
          shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          z-50
        "
      >

        {/* HOME */}
        <Link
          href="/"
          className="
            flex
            flex-col
            items-center
            gap-[2px]
          "
        >

          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-black
              text-white
              flex
              items-center
              justify-center
            "
          >
            <Home size={15} />
          </div>

          <span
            className="
              text-[10px]
              font-medium
            "
          >
            Home
          </span>

        </Link>

        {/* ORDERS */}
        <Link
          href="/orders"
          className="
            flex
            flex-col
            items-center
            gap-[2px]
          "
        >

          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-[#f5f5f5]
              flex
              items-center
              justify-center
            "
          >
            <Package size={15} />
          </div>

          <span
            className="
              text-[10px]
              text-gray-500
            "
          >
            Orders
          </span>

        </Link>

        {/* CHAT */}
        <Link
          href="/chat"
          className="
            flex
            flex-col
            items-center
            gap-[2px]
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-xl
              bg-pink-500
              text-white
              flex
              items-center
              justify-center
              shadow-[0_8px_20px_rgba(236,72,153,0.30)]
              -mt-6
            "
          >
            <MessageCircle size={16} />
          </div>

          <span
            className="
              text-[10px]
              font-medium
            "
          >
            Chat
          </span>

        </Link>

        {/* WISHLIST */}
        <Link
          href="/wishlist"
          className="
            flex
            flex-col
            items-center
            gap-[2px]
          "
        >

          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-[#f5f5f5]
              flex
              items-center
              justify-center
            "
          >
            <Heart size={15} />
          </div>

          <span
            className="
              text-[10px]
              text-gray-500
            "
          >
            Wishlist
          </span>

        </Link>

        {/* PROFILE */}
        <Link
          href="/profile"
          className="
            flex
            flex-col
            items-center
            gap-[2px]
          "
        >

          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-[#f5f5f5]
              flex
              items-center
              justify-center
            "
          >
            <User size={15} />
          </div>

          <span
            className="
              text-[10px]
              text-gray-500
            "
          >
            Profile
          </span>

        </Link>

      </div>

    </main>
  );
}