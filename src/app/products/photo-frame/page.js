import Link from "next/link";
import { ArrowLeft, Star, Heart, ShoppingBag, Sparkles } from "lucide-react";
import AppLayout from "@/components/AppLayout";

export default function PhotoFramePage() {
  const frames = [
    {
      title: "Classic Wooden Frame",
      size: "8 x 10",
      price: "₹499",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920253.png",
      bg: "bg-[#eefbf3]",
    },
    {
      title: "Premium Glass Frame",
      size: "12 x 16",
      price: "₹899",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
      bg: "bg-[#eef5ff]",
    },
    {
      title: "Modern Black Frame",
      size: "18 x 24",
      price: "₹1299",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      bg: "bg-[#fff2eb]",
    },
    {
      title: "Couple Memory Frame",
      size: "10 x 12",
      price: "₹799",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920263.png",
      bg: "bg-[#fff6e8]",
    },
    {
      title: "Luxury Gold Frame",
      size: "20 x 24",
      price: "₹1899",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920231.png",
      bg: "bg-[#f6f0ff]",
    },
    {
      title: "Minimal White Frame",
      size: "14 x 18",
      price: "₹999",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920289.png",
      bg: "bg-[#eefbf3]",
    },
  ];

  return (
    <AppLayout>
      <main className="min-h-screen bg-[#fafafa] overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="
            h-full w-full
            bg-[radial-gradient(#000_1px,transparent_1px)]
            [background-size:26px_26px]
          "
          />
        </div>
        {/* PRODUCTS */}
        <section
          className="
          relative z-10
          px-4 lg:px-10
          pb-20
        "
        >
          {/* SECTION HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-500 font-semibold text-sm">
                premium collection
              </p>

              <h2
                className="
                mt-2
                text-3xl lg:text-5xl
                font-black
                tracking-[-2px]
              "
              >
                Choose Your Frame
              </h2>
            </div>

            <button
              className="
              hidden lg:block
              bg-white
              px-5 py-3
              rounded-2xl
              text-sm
              shadow-[0_6px_18px_rgba(0,0,0,0.05)]
            "
            >
              View All
            </button>
          </div>

          {/* PRODUCT GRID */}
          <div
            className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-7
            mt-12
          "
          >
            {frames.map((item, i) => (
              <div
                key={i}
                className="
      bg-white
      rounded-[30px]
      p-4
      border border-[#f1f1f1]
      shadow-[0_10px_30px_rgba(0,0,0,0.06)]
      hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
      hover:-translate-y-1
      transition-all duration-300
      overflow-hidden
      group
    "
              >
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="
            px-3 py-1
            rounded-full
            bg-[#f6f6f6]
            text-[10px]
            font-bold
            text-gray-600
          "
                    >
                      {item.size}
                    </span>

                    <span
                      className="
            px-3 py-1
            rounded-full
            bg-[#eefbf3]
            text-[10px]
            font-bold
            text-green-600
          "
                    >
                      Bestseller
                    </span>
                  </div>

                  <button
                    className="
          w-9 h-9
          rounded-2xl
          bg-[#fafafa]
          flex items-center justify-center
          shadow-[0_4px_10px_rgba(0,0,0,0.04)]
        "
                  >
                    <Heart size={13} className="text-pink-500" />
                  </button>
                </div>

                {/* FRAME UI */}
                <div className="mt-5 flex justify-center">
                  <div
                    className="
          bg-[#2c2c2c]
          p-2
          rounded-[22px]
          shadow-[0_12px_30px_rgba(0,0,0,0.18)]
          group-hover:scale-105
          transition duration-300
        "
                  >
                    <div
                      className="
            bg-white
            rounded-[16px]
            p-4
          "
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="
              w-24 h-24
              lg:w-32 lg:h-32
              object-contain
            "
                      />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="mt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3
                        className="
              text-base lg:text-lg
              font-black
              leading-tight
              text-[#1e1e1e]
            "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
              mt-1
              text-xs
              text-[#6d6d6d]
            "
                      >
                        Premium Wooden Border
                      </p>
                    </div>

                    <div
                      className="
            text-right
          "
                    >
                      <p
                        className="
              text-[10px]
              text-gray-400
            "
                      >
                        Delivery
                      </p>

                      <p
                        className="
              text-xs
              font-bold
              text-blue-600
            "
                      >
                        2 Days
                      </p>
                    </div>
                  </div>

                  {/* REVIEWS */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={11}
                          className="
                fill-yellow-400
                text-yellow-400
              "
                        />
                      ))}
                    </div>

                    <span className="text-[11px] text-gray-500">
                      324 reviews
                    </span>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {["HD Print", "Waterproof", "Premium"].map((tag, idx) => (
                      <div
                        key={idx}
                        className={`
              px-3 py-1.5
              rounded-full
              text-[10px]
              font-bold
              ${
                idx === 0
                  ? "bg-[#eef5ff] text-blue-600"
                  : idx === 1
                    ? "bg-[#fff4ea] text-orange-600"
                    : "bg-[#f6f0ff] text-purple-600"
              }
            `}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* PRICE */}
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="flex items-end gap-2">
                        <h4
                          className="
                text-2xl
                font-black
                text-[#1a1a1a]
              "
                        >
                          {item.price}
                        </h4>

                        <span
                          className="
                text-xs
                text-gray-400
                line-through
              "
                        >
                          ₹1999
                        </span>
                      </div>

                      <p
                        className="
              mt-1
              text-[11px]
              font-bold
              text-green-600
            "
                      >
                        Save 40%
                      </p>
                    </div>

                    <div
                      className="
            bg-[#eefbf3]
            text-green-600
            text-[10px]
            font-bold
            px-3 py-2
            rounded-full
          "
                    >
                      In Stock
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-5 flex gap-3">
                    <button
                      className="
            flex-1
            bg-black
            text-white
            py-3
            rounded-2xl
            text-xs lg:text-sm
            font-semibold
            shadow-[0_10px_24px_rgba(0,0,0,0.12)]
            hover:scale-[1.02]
            transition
            flex items-center justify-center gap-2
          "
                    >
                      <ShoppingBag size={14} />
                      Add To Cart
                    </button>

                    <button
                      className="
            w-12
            rounded-2xl
            bg-[#f6f6f6]
            text-lg
            font-bold
          "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
