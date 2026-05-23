"use client";

import DataTable from "../components/table/table";
import "../../globals.css"

export default function OrdersPage() {
  const orders = [
    {
      id: "#ORD-1001",
      customer: "Rahul Sharma",
      product: "Custom Mug",
      amount: "₹499",
      status: "Delivered",
      date: "12 May 2026",
    },
    {
      id: "#ORD-1002",
      customer: "Anjali Verma",
      product: "Photo Frame",
      amount: "₹899",
      status: "Pending",
      date: "14 May 2026",
    },
    {
      id: "#ORD-1003",
      customer: "Kiran Kumar",
      product: "Gift Box",
      amount: "₹1299",
      status: "Shipped",
      date: "15 May 2026",
    },
    {
      id: "#ORD-1004",
      customer: "Meghana",
      product: "LED Frame",
      amount: "₹1499",
      status: "Delivered",
      date: "18 May 2026",
    },
    {
      id: "#ORD-1005",
      customer: "Sai Teja",
      product: "Magic Pillow",
      amount: "₹799",
      status: "Cancelled",
      date: "20 May 2026",
    },
    {
      id: "#ORD-1006",
      customer: "Vikram",
      product: "Photo Lamp",
      amount: "₹1599",
      status: "Pending",
      date: "22 May 2026",
    },
  ];

  const columns = [
    {
      header: "Order ID",
      accessor: "id",
    },
    {
      header: "Customer",
      accessor: "customer",
    },
    {
      header: "Product",
      accessor: "product",
    },
    {
      header: "Amount",
      accessor: "amount",
      render: (value) => (
        <p className="text-[13px] font-bold text-violet-600">
          {value}
        </p>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (value) => (
        <span
          className={`
            px-2 py-[4px]
            rounded-full
            text-[10px]
            font-medium
            ${
              value === "Delivered"
                ? "bg-green-100 text-green-600"
                : value === "Pending"
                ? "bg-orange-100 text-orange-500"
                : value === "Shipped"
                ? "bg-blue-100 text-blue-600"
                : "bg-red-100 text-red-500"
            }
          `}
        >
          {value}
        </span>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        title="Orders Management"
        subtitle="Manage all customer orders"
        columns={columns}
        data={orders}
      />
    </div>
  );
}