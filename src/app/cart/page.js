import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  TicketPercent,
} from "lucide-react";

import AppLayout from "@/components/AppLayout";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      title: "Custom Mug Printing",
      subtitle: "Premium Ceramic Mug",
      price: 499,
      qty: 1,
      size: "350ml",
      image:
        "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      bg: "bg-[#fff2eb]",
    },
    {
      id: 2,
      title: "Photo Frame",
      subtitle: "Wooden HD Frame",
      price: 899,
      qty: 2,
      size: "12 x 16",
      image:
        "https://cdn-icons-png.flaticon.com/512/2920/2920253.png",
      bg: "bg-[#eefbf3]",
    },
    {
      id: 3,
      title: "Printed T-Shirt",
      subtitle: "Premium Cotton",
      price: 1199,
      qty: 1,
      size: "XL",
      image:
        "https://cdn-icons-png.flaticon.com/512/892/892458.png",
      bg: "bg-[#eef5ff]",
    },
  ];

  const subtotal = 3496;
  const shipping = 99;
  const discount = 300;
  const total = subtotal + shipping - discount;

  return (
    <AppLayout>

      <main className="min-h-screen bg-[#fafafa]">

        {/* PAGE */}
        <section
          className="
            max-w-7xl mx-auto
            px-4 lg:px-8
            py-6 lg:py-10
          "
        >

          {/* CONTENT */}
          <div
            className="
              grid lg:grid-cols-[1fr_380px]
              gap-8
              mt-10
            "
          >

            {/* LEFT SIDE */}
            <div className="space-y-5">

              {cartItems.map((item, i) => (
                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-[30px]
                    p-4 lg:p-5
                    shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                    flex flex-col sm:flex-row
                    gap-5
                    items-center
                  "
                >

                  {/* IMAGE */}
                  <div
                    className={`
                      ${item.bg}
                      w-full sm:w-[150px]
                      h-[140px]
                      rounded-[24px]
                      flex items-center justify-center
                      shrink-0
                    `}
                  >

                    <img
                      src={item.image}
                      alt=""
                      className="
                        w-24 h-24
                        object-contain
                      "
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 w-full">

                    <div
                      className="
                        flex items-start
                        justify-between
                        gap-3
                      "
                    >

                      <div>

                        <h2
                          className="
                            text-lg lg:text-xl
                            font-black
                          "
                        >
                          {item.title}
                        </h2>

                        <p
                          className="
                            mt-1
                            text-sm
                            text-gray-500
                          "
                        >
                          {item.subtitle}
                        </p>

                      </div>

                      <button
                        className="
                          w-10 h-10
                          rounded-2xl
                          bg-[#fafafa]
                          flex items-center justify-center
                        "
                      >
                        <Trash2
                          size={16}
                          className="text-red-500"
                        />
                      </button>

                    </div>

                    {/* DETAILS */}
                    <div
                      className="
                        mt-5
                        flex flex-wrap
                        items-center gap-3
                      "
                    >

                      <div
                        className="
                          px-4 py-2
                          rounded-full
                          bg-[#f6f6f6]
                          text-xs
                          font-bold
                        "
                      >
                        Size: {item.size}
                      </div>

                      <div
                        className="
                          px-4 py-2
                          rounded-full
                          bg-[#eefbf3]
                          text-xs
                          font-bold
                          text-green-600
                        "
                      >
                        In Stock
                      </div>

                    </div>

                    {/* BOTTOM */}
                    <div
                      className="
                        mt-6
                        flex flex-col sm:flex-row
                        items-start sm:items-center
                        justify-between
                        gap-5
                      "
                    >

                      {/* QTY */}
                      <div
                        className="
                          bg-[#fafafa]
                          rounded-2xl
                          p-2
                          flex items-center gap-4
                        "
                      >

                        <button
                          className="
                            w-9 h-9
                            rounded-xl
                            bg-white
                            flex items-center justify-center
                            shadow-sm
                          "
                        >
                          <Minus size={14} />
                        </button>

                        <span className="font-black">
                          {item.qty}
                        </span>

                        <button
                          className="
                            w-9 h-9
                            rounded-xl
                            bg-black
                            text-white
                            flex items-center justify-center
                          "
                        >
                          <Plus size={14} />
                        </button>

                      </div>

                      {/* PRICE */}
                      <div className="text-right">

                        <p className="text-xs text-gray-400">
                          Total Price
                        </p>

                        <h3
                          className="
                            text-2xl
                            font-black
                          "
                        >
                          ₹ {item.price * item.qty}
                        </h3>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                bg-white
                rounded-[34px]
                p-6
                shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                h-fit
                sticky top-24
              "
            >

              {/* TITLE */}
              <div className="flex items-center gap-3">

                <div
                  className="
                    w-12 h-12
                    rounded-2xl
                    bg-black
                    text-white
                    flex items-center justify-center
                  "
                >
                  <ShoppingBag size={18} />
                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    order summary
                  </p>

                  <h2
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    Checkout
                  </h2>

                </div>

              </div>

              {/* COUPON */}
              <div
                className="
                  mt-8
                  bg-[#fafafa]
                  rounded-[24px]
                  p-4
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10 h-10
                      rounded-xl
                      bg-white
                      flex items-center justify-center
                    "
                  >
                    <TicketPercent
                      size={16}
                      className="text-pink-500"
                    />
                  </div>

                  <div>

                    <p className="text-xs text-gray-500">
                      Coupon Applied
                    </p>

                    <h4 className="font-black">
                      SAVE300
                    </h4>

                  </div>

                </div>

              </div>

              {/* PRICE DETAILS */}
              <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between">

                  <p className="text-gray-500">
                    Subtotal
                  </p>

                  <h4 className="font-black">
                    ₹ {subtotal}
                  </h4>

                </div>

                <div className="flex items-center justify-between">

                  <p className="text-gray-500">
                    Shipping
                  </p>

                  <h4 className="font-black">
                    ₹ {shipping}
                  </h4>

                </div>

                <div className="flex items-center justify-between">

                  <p className="text-gray-500">
                    Discount
                  </p>

                  <h4 className="font-black text-green-600">
                    - ₹ {discount}
                  </h4>

                </div>

              </div>

              {/* TOTAL */}
              <div
                className="
                  mt-8
                  pt-6
                  border-t border-dashed
                  flex items-center justify-between
                "
              >

                <div>

                  <p className="text-sm text-gray-500">
                    Total Amount
                  </p>

                  <h2
                    className="
                      text-4xl
                      font-black
                      tracking-[-2px]
                    "
                  >
                    ₹ {total}
                  </h2>

                </div>

                <div
                  className="
                    px-4 py-2
                    rounded-full
                    bg-[#eefbf3]
                    text-green-600
                    text-xs
                    font-bold
                  "
                >
                  Free Gift Included
                </div>

              </div>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10 h-10
                      rounded-xl
                      bg-[#eefbf3]
                      flex items-center justify-center
                    "
                  >
                    <ShieldCheck
                      size={16}
                      className="text-green-600"
                    />
                  </div>

                  <div>

                    <h4 className="font-bold text-sm">
                      Secure Payment
                    </h4>

                    <p className="text-xs text-gray-500">
                      100% protected checkout
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10 h-10
                      rounded-xl
                      bg-[#eef5ff]
                      flex items-center justify-center
                    "
                  >
                    <Truck
                      size={16}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <h4 className="font-bold text-sm">
                      Fast Delivery
                    </h4>

                    <p className="text-xs text-gray-500">
                      Delivered within 2-4 days
                    </p>

                  </div>

                </div>

              </div>

              {/* BUTTON */}
              <button
                className="
                  mt-8
                  w-full
                  bg-black
                  text-white
                  py-4
                  rounded-[24px]
                  font-semibold
                  shadow-[0_14px_30px_rgba(0,0,0,0.12)]
                  hover:scale-[1.01]
                  transition
                  flex items-center justify-center gap-3
                "
              >

                Proceed To Checkout

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </section>

      </main>

    </AppLayout>
  );
}