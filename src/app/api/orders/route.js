// src/app/api/orders/route.js
import { placeOrder } from "@/services/orderService";

export async function POST(req) {
  const { user_id, total } = await req.json();
  const order = await placeOrder(user_id, total);
  return Response.json(order);
}