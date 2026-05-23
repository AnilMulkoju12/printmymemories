import {
  Star,
  Heart,
  ShoppingBag,
} from "lucide-react";

import AppLayout from "@/components/AppLayout";

export default function TshirtPage() {
  const tshirts = [
    {
      title: "Classic White Tee",
      size: "S - XXL",
      price: "₹599",
      image:
        "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      title: "Oversized Black Tee",
      size: "M - XXL",
      price: "₹899",
      image:
        "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      title: "Couple T-Shirts",
      size: "Pair",
      price: "₹1499",
      image:
        "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      title: "Anime Printed Tee",
      size: "S - XL",
      price: "₹999",
      image:
        "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      title: "Minimal Beige Tee",
      size: "M - XXL",
      price: "₹799",
      image:
        "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      title: "Streetwear Tee",
      size: "L - XXL",
      price: "₹1199",
      image:
        "https://cdn-icons-png.flaticon.com/512/892/892458.png",
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

          {/* HEADER */}
          <div className="flex items-center justify-between">

            <div>

              <p
                className="
                  text-orange-500
                  font-semibold
                  text-sm
                "
              >
                premium apparel
              </p>

              <h2
                className="
                  mt-2
                  text-3xl lg:text-5xl
                  font-black
                  tracking-[-2px]
                "
              >
                Choose Your T-Shirt
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

          {/* GRID */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-7
              mt-12
            "
          >

            {tshirts.map((item, i) => (
              <div
                key={i}
                className={`
                  ${
                    i % 3 === 0
                      ? "bg-[#fff4ea]"
                      : i % 3 === 1
                      ? "bg-[#eef5ff]"
                      : "bg-[#f6f0ff]"
                  }
                  rounded-[30px]
                  p-4
                  border border-white/70
                  shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)]
                  hover:-translate-y-1
                  transition-all duration-300
                  overflow-hidden
                  group
                `}
              >

                {/* TOP */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <span
                      className="
                        px-3 py-1
                        rounded-full
                        bg-white/80
                        text-[10px]
                        font-bold
                        text-gray-700
                        shadow-sm
                      "
                    >
                      {item.size}
                    </span>

                    <span
                      className="
                        px-3 py-1
                        rounded-full
                        bg-black
                        text-white
                        text-[10px]
                        font-bold
                      "
                    >
                      Trending
                    </span>

                  </div>

                  <button
                    className="
                      w-9 h-9
                      rounded-2xl
                      bg-white/80
                      flex items-center justify-center
                      shadow-[0_4px_10px_rgba(0,0,0,0.05)]
                    "
                  >
                    <Heart
                      size={13}
                      className="text-pink-500"
                    />
                  </button>

                </div>

                {/* TSHIRT CARD */}
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
                        Premium Cotton Fabric
                      </p>

                    </div>

                    <div className="text-right">

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
                          text-orange-600
                        "
                      >
                        3 Days
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
                      210 reviews
                    </span>

                  </div>

                  {/* COLORS */}
                  <div className="mt-4 flex gap-2">

                    <div className="w-5 h-5 rounded-full bg-black border-2 border-white shadow-sm" />

                    <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300" />

                    <div className="w-5 h-5 rounded-full bg-orange-400 border-2 border-white shadow-sm" />

                    <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-sm" />

                  </div>

                  {/* FEATURES */}
                  <div className="mt-4 flex gap-2 flex-wrap">

                    {[
                      "HD Print",
                      "100% Cotton",
                      "Oversized",
                    ].map((tag, idx) => (
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
                          ₹1499
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
                        Save 30%
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
                        bg-white/80
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