// src/repositories/orderRepo.js
import { pool } from "@/lib/db";

export async function createOrder(user_id, total) {
  const res = await pool.query(
    "INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING *",
    [user_id, total]
  );
  return res.rows[0];
}