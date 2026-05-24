"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { ArrowLeft, Star, Heart, ShoppingBag, Search } from "lucide-react";

import AppLayout from "@/components/AppLayout";
import "../../globals.css";

export default function PhotoFramePage() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const frames = [
    {
      title: "Classic Wooden Frame",
      size: "8 x 10",
      price: "₹499",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920253.png",
    },
    {
      title: "Premium Glass Frame",
      size: "12 x 16",
      price: "₹899",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      title: "Modern Black Frame",
      size: "18 x 24",
      price: "₹1299",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    },
    {
      title: "Couple Memory Frame",
      size: "10 x 12",
      price: "₹799",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920263.png",
    },
    {
      title: "Luxury Gold Frame",
      size: "20 x 24",
      price: "₹1899",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920231.png",
    },
    {
      title: "Minimal White Frame",
      size: "14 x 18",
      price: "₹999",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920289.png",
    },
  ];

  /* FILTER */
  const filteredFrames = useMemo(() => {
    return frames.filter((item) =>
      `${item.title} ${item.size}`.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  /* SWIPE BACK */
  useEffect(() => {
    let startX = 0;

    const touchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const touchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;

      if (startX < 40 && endX - startX > 100) {
        router.back();
      }
    };

    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchend", touchEnd);

    return () => {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [router]);

  return (
    <AppLayout>
      <main className="min-h-screen bg-[#fafafa]">
        {/* HEADER */}
        <div
          className="
            sticky
            top-0
            z-30
            bg-[#fafafa]/90
            backdrop-blur-xl
            border-b
            border-black/5
          "
        >
          <div
            className="
              px-3
              sm:px-4
              lg:px-8
              py-3
              flex
              items-center
              justify-between
              gap-3
            "
          >
            {/* BACK */}
            <button
              onClick={() => router.back()}
              className="
                w-10
                h-10
                rounded-2xl
                bg-white
                border border-black/5
                flex
                items-center
                justify-center
                shadow-sm
                shrink-0
              "
            >
              <ArrowLeft size={15} />
            </button>

            {/* SEARCH */}
            {/* SEARCH */}
            <div
              className="
    w-full
    lg:w-[340px]
    h-10
    rounded-2xl
    bg-white
    border border-black/5
    flex
    items-center
    gap-2
    px-3
    shadow-sm
  "
            >
              <Search size={14} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search mug size..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
      flex-1
      bg-transparent
      outline-none
      text-[13px]
      placeholder:text-gray-400
    "
              />
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <section
          className="
            px-3
            sm:px-4
            lg:px-8
            py-4
            pb-24
          "
        >
          {/* GRID */}
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-3
              gap-3
              lg:gap-5
            "
          >
            {filteredFrames.map((item, i) => (
              <div
                key={i}
                className="
                  bg-white
                  rounded-[22px]
                  border border-black/5
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div className="p-2.5 sm:p-3">
                  {/* TOP */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div
                      className="
                        px-2
                        py-1
                        rounded-full
                        bg-[#f5f5f5]
                        text-[8px]
                        sm:text-[9px]
                        font-bold
                        text-gray-600
                      "
                    >
                      {item.size}
                    </div>

                    <button
                      className="
                        w-7
                        h-7
                        rounded-xl
                        bg-[#fafafa]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Heart size={11} className="text-pink-500" />
                    </button>
                  </div>

                  {/* IMAGE */}
                  <div
                    className="
                      mt-3
                      bg-[#f6f6f6]
                      rounded-[18px]
                      p-3
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-[58px]
                        h-[58px]
                        sm:w-[90px]
                        sm:h-[90px]
                        object-contain
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="mt-3">
                    <h3
                      className="
                        text-[11px]
                        sm:text-[15px]
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
                        text-[9px]
                        sm:text-[10px]
                        text-gray-500
                      "
                    >
                      Premium Border
                    </p>

                    {/* REVIEWS */}
                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        gap-[2px]
                      "
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={8}
                          className="
                            fill-yellow-400
                            text-yellow-400
                          "
                        />
                      ))}

                      <span
                        className="
                          text-[8px]
                          sm:text-[9px]
                          text-gray-500
                          ml-1
                        "
                      >
                        324
                      </span>
                    </div>

                    {/* PRICE */}
                    <div
                      className="
                        mt-3
                        flex
                        items-end
                        justify-between
                        gap-2
                      "
                    >
                      <div>
                        <h4
                          className="
                            text-[15px]
                            sm:text-[20px]
                            font-black
                            leading-none
                          "
                        >
                          {item.price}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-[8px]
                            sm:text-[9px]
                            font-bold
                            text-green-600
                          "
                        >
                          In Stock
                        </p>
                      </div>

                      <button
                        className="
                          w-8
                          h-8
                          sm:w-10
                          sm:h-10
                          rounded-2xl
                          bg-black
                          text-white
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <ShoppingBag size={12} />
                      </button>
                    </div>
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
