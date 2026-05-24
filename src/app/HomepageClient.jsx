"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import AppLayout from "@/components/AppLayout";

import {
  Gift,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
} from "lucide-react";

import "./globals.css";

const categories = [
  {
    title: "Custom Mug",
    subtitle: "Mugs",
    slug: "/products/custom-mug",
    image: "https://cdn-icons-png.flaticon.com/512/751/751621.png",
  },
  {
    title: "Photo Frame",
    subtitle: "Frames",
    slug: "/products/photo-frame",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    title: "Printed T-Shirt",
    subtitle: "Fashion",
    slug: "/products/tshirt",
    image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    title: "Miniature Gift",
    subtitle: "Miniatures",
    slug: "/products/miniature",
    image: "https://cdn-icons-png.flaticon.com/512/2436/2436636.png",
  },
  {
    title: "Wooden Printing",
    subtitle: "Wood Art",
    slug: "/products/wooden-printing",
    image: "https://cdn-icons-png.flaticon.com/512/2857/2857433.png",
  },
  {
    title: "Gift Articles",
    subtitle: "Premium Gifts",
    slug: "/products/gift-articles",
    image: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
  },
  {
    title: "Coffee Mugs",
    subtitle: "Premium",
    slug: "/products/coffee-mugs",
    image: "https://cdn-icons-png.flaticon.com/512/924/924514.png",
  },
  {
    title: "Photo Albums",
    subtitle: "Albums",
    slug: "/products/photo-albums",
    image: "https://cdn-icons-png.flaticon.com/512/2436/2436636.png",
  },
];

const products = [
  {
    id: 1,
    title: "Premium LED Frame",
    description: "Customized LED frame with premium glossy finish.",
    price: "1499",
  },
  {
    id: 2,
    title: "Couple Gift Combo",
    description: "Romantic personalized combo gift collection.",
    price: "2299",
  },
  {
    id: 3,
    title: "Miniature Art",
    description: "Handcrafted miniatures with custom engraving.",
    price: "1799",
  },
  {
    id: 4,
    title: "Photo Mug",
    description: "Printed ceramic mug with your favorite memory.",
    price: "599",
  },
  {
    id: 5,
    title: "Wooden Art",
    description: "Premium laser wooden printing collection.",
    price: "1299",
  },
];

export default function HomepageClient() {
  const [showAll, setShowAll] = useState(false);

  const sliderRef = useRef(null);

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 6);

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <AppLayout>

      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
          px-3
          sm:px-4
          lg:px-8
          py-4
          lg:py-8
        "
      >

        {/* HERO */}
        <section
          className="
            rounded-[28px]
            lg:rounded-[40px]
            border border-black/5
            bg-gradient-to-br
            from-white
            via-[#fff8f8]
            to-[#fafafa]
            p-4
            sm:p-5
            lg:p-8
          "
        >

          {/* HEADER */}
          <div className="mb-2">

            <p className="text-pink-500 text-sm font-semibold">
              Categories
            </p>

          </div>

          {/* CATEGORY GRID */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-3
              lg:gap-5
            "
          >

            {visibleCategories.map((item, index) => (
              <Link
                href={item.slug}
                key={index}
                className="
                  bg-[#f8f8f8]
                  border border-black/5
                  rounded-[24px]
                  sm:rounded-[30px]
                  p-2
                  sm:p-3
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  block
                "
              >

                {/* IMAGE */}
                <div
                  className="
                    h-[120px]
                    sm:h-[180px]
                    rounded-[18px]
                    sm:rounded-[24px]
                    bg-[#efeff4]
                    flex items-center justify-center
                    overflow-hidden
                  "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-[70px]
                      h-[70px]
                      sm:w-[110px]
                      sm:h-[110px]
                      object-contain
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="pt-3 px-1">

                  <h3
                    className="
                      text-[14px]
                      sm:text-[20px]
                      font-black
                      leading-tight
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-gray-500
                      text-[11px]
                      sm:text-sm
                    "
                  >
                    {item.subtitle}
                  </p>

                </div>

              </Link>
            ))}

          </div>

          {/* SHOW MORE */}
          <div className="flex justify-center mt-5">

            <button
              onClick={() => setShowAll(!showAll)}
              className="
                h-10
                px-5
                rounded-xl
                bg-white
                border border-black/5
                text-sm
                font-semibold
                flex items-center gap-2
                shadow-sm
              "
            >

              {showAll ? "Show Less" : "Show More"}

              {showAll ? (
                <ChevronUp size={15} />
              ) : (
                <ChevronDown size={15} />
              )}

            </button>

          </div>

        </section>

        {/* PRODUCTS */}
        <section className="mt-8 lg:mt-10">

          {/* HEADER */}
          <div className="mb-5">

            <p className="text-pink-500 text-sm font-semibold">
              Trending Products
            </p>

            <h2
              className="
                mt-1
                text-[28px]
                sm:text-[40px]
                lg:text-[52px]
                leading-tight
                font-black
              "
            >
              Best Sellers
            </h2>

          </div>

          {/* SLIDER */}
          <div className="relative">

            {/* LEFT */}
            <button
              onClick={slideLeft}
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                z-20
                w-10
                h-10
                rounded-full
                bg-white
                border border-black/5
                shadow-lg
                hidden sm:flex
                items-center justify-center
              "
            >
              <ChevronLeft size={18} />
            </button>

            {/* RIGHT */}
            <button
              onClick={slideRight}
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                z-20
                w-10
                h-10
                rounded-full
                bg-white
                border border-black/5
                shadow-lg
                hidden sm:flex
                items-center justify-center
              "
            >
              <ChevronRight size={18} />
            </button>

            {/* SLIDER TRACK */}
            <div
              ref={sliderRef}
              className="
                flex
                gap-4
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                scrollbar-hide
                pb-2
              "
            >

              {products.map((product) => (
                <div
                  key={product.id}
                  className="
                    min-w-[220px]
                    sm:min-w-[240px]
                    lg:min-w-[260px]
                    snap-start
                    rounded-[24px]
                    border border-black/5
                    bg-white
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      h-[130px]
                      sm:h-[150px]
                      bg-gradient-to-br
                      from-pink-100
                      to-orange-50
                      flex items-center justify-center
                    "
                  >

                    <Gift
                      size={36}
                      className="text-pink-400"
                    />

                    <button
                      className="
                        absolute
                        top-3
                        right-3
                        w-7
                        h-7
                        rounded-full
                        bg-white
                        flex items-center justify-center
                        shadow-sm
                      "
                    >
                      <Heart size={12} />
                    </button>

                  </div>

                  {/* CONTENT */}
                  <div className="p-4">

                    {/* STARS */}
                    <div className="flex items-center gap-1">

                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={11}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}

                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-3
                        text-[15px]
                        font-black
                        leading-tight
                      "
                    >
                      {product.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-2
                        text-[12px]
                        text-gray-500
                        leading-relaxed
                        line-clamp-2
                      "
                    >
                      {product.description}
                    </p>

                    {/* FOOTER */}
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        mt-4
                      "
                    >

                      <p
                        className="
                          text-[18px]
                          font-black
                        "
                      >
                        ₹ {product.price}
                      </p>

                      <button
                        className="
                          w-9
                          h-9
                          rounded-xl
                          bg-black
                          text-white
                          flex items-center justify-center
                        "
                      >
                        <Gift size={13} />
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

      </div>

    </AppLayout>
  );
}