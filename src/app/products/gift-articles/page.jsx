"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  Star,
  Heart,
  ShoppingBag,
  Search,
} from "lucide-react";

import AppLayout from "@/components/AppLayout";
import "../../globals.css"
export default function GiftArticlesPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const giftArticles = [
    {
      title: "Couple Gift Box",
      size: "Medium",
      price: "₹1499",
      image:
        "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
    },
    {
      title: "Birthday Surprise Kit",
      size: "Large",
      price: "₹2299",
      image:
        "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
    },
    {
      title: "Premium Chocolate Hamper",
      size: "Combo",
      price: "₹1799",
      image:
        "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
    },
    {
      title: "Anniversary Gift Set",
      size: "Premium",
      price: "₹2999",
      image:
        "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
    },
    {
      title: "Festival Gift Basket",
      size: "XL",
      price: "₹1899",
      image:
        "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
    },
    {
      title: "Customized Memory Box",
      size: "Small",
      price: "₹999",
      image:
        "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
    },
  ];

  /* FILTER */
  const filteredArticles = useMemo(() => {
    return giftArticles.filter((item) =>
      `${item.title} ${item.size}`
        .toLowerCase()
        .includes(search.toLowerCase())
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

              <Search
                size={14}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Search gift articles..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
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

            {filteredArticles.map((item, i) => (
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
                      <Heart
                        size={11}
                        className="text-pink-500"
                      />
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
                      Premium Gift Collection
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
                        264
                      </span>

                    </div>

                    {/* FEATURES */}
                    <div className="mt-2 flex gap-1.5 flex-wrap">

                      <div
                        className="
                          px-2
                          py-1
                          rounded-full
                          bg-[#fff4ea]
                          text-[8px]
                          font-bold
                          text-orange-600
                        "
                      >
                        Premium
                      </div>

                      <div
                        className="
                          px-2
                          py-1
                          rounded-full
                          bg-[#eef5ff]
                          text-[8px]
                          font-bold
                          text-blue-600
                        "
                      >
                        Customized
                      </div>

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