"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-red-500">
          🎁 GiftStore
        </h1>

        {/* NAV LINKS */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-red-500 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-red-500 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-red-500 transition">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Login
        </button>

      </div>
    </nav>
  );
}