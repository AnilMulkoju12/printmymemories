// /api/test-db/route.js
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const res = await pool.query("SELECT NOW()");
    return Response.json({ success: true, time: res.rows[0] });
  } catch (err) {
    return Response.json({ success: false, error: err.message });
  }
}