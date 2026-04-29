// src/app/api/setup-db/route.js
import { setupDatabase } from "@/db/setup";

export async function GET() {
  try {
    await setupDatabase();
    return Response.json({ message: "Database setup complete ✅" });
  } catch (err) {
    return Response.json({ error: err.message });
  }
}