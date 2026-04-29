import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return (
    <div className="bg-[#f4f6f8] min-h-screen font-sans">

      {/* 🔝 NAVBAR */}
      <header className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold tracking-wide">
          🎨 PrintCraft
        </h1>

        <div className="flex gap-8 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-black">Products</span>
          <span className="cursor-pointer hover:text-black">Customize</span>
          <span className="cursor-pointer hover:text-black">Orders</span>
        </div>

        <div className="flex gap-5 text-sm">
          <span>Cart</span>
          <span>Login</span>
        </div>
      </header>

      {/* 🎯 HERO (Studio Feel) */}
      <section className="px-10 py-10 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Design Your <br /> Own Product
          </h1>

          <p className="mt-5 text-gray-500 max-w-md">
            Upload your photos and print them on mugs, frames,
            t-shirts, wood & stone with premium quality.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
              Start Designing
            </button>

            <Link href="/products">
              <button className="bg-white px-6 py-3 rounded-xl shadow-md">
                Browse Products
              </button>
            </Link>
          </div>
        </div>

        {/* Floating Product Cards */}
        <div className="relative h-[400px]">

          {/* Mug */}
          <div className="absolute top-0 left-10 w-40 h-40 bg-white rounded-2xl shadow-2xl p-3">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Frame */}
          <div className="absolute top-32 left-40 w-48 h-48 bg-white rounded-2xl shadow-2xl p-3">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* T-shirt */}
          <div className="absolute bottom-0 left-0 w-44 h-44 bg-white rounded-2xl shadow-2xl p-3">
            <img
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* 🧱 PRODUCT TYPES (BIG CARDS WITH DEPTH) */}
      <section className="px-10 py-10 grid md:grid-cols-4 gap-6">

        {[
          {
            name: "Photo Frames",
            img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
          },
          {
            name: "Mug Printing",
            img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
          },
          {
            name: "T-Shirt Printing",
            img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
          },
          {
            name: "Wood / Stone Prints",
            img: "https://images.unsplash.com/photo-1582582494700-f8ce0b9b1f84",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden cursor-pointer"
          >
            <img
              src={item.img}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Customize with your photo
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ⚡ PROCESS (GLASS CARDS) */}
      <section className="px-10 py-14">
        <h2 className="text-2xl font-semibold mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { title: "Upload Image", icon: "📸" },
            { title: "Customize Design", icon: "🎨" },
            { title: "Get Delivered", icon: "🚚" },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center"
            >
              <div className="text-3xl">{step.icon}</div>
              <h3 className="mt-3 font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-500">
                Simple & fast process
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 FEATURE CTA */}
      <section className="mx-10 mb-10 bg-black text-white rounded-3xl p-10 text-center shadow-2xl">
        <h2 className="text-3xl font-semibold">
          Start Creating Your Custom Product
        </h2>

        <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl shadow-lg">
          Upload Photo
        </button>
      </section>

    </div>
  );
}