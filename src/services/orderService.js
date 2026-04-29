// src/services/orderService.js
import { createOrder } from "@/repositories/orderRepo";

export async function placeOrder(user_id, total) {
  return await createOrder(user_id, total);
}