import "dotenv/config";

import { pool } from "../lib/db.js";

import { createCategoriesTable } from "./tables/categoriesTable.js";
import { createProductsTable } from "./tables/productsTable.js";

export async function setupDatabase() {
  try {
    await pool.query(createCategoriesTable);

    await pool.query(createProductsTable);

    console.log("Database setup completed");
  } catch (error) {
    console.log(error);
  } finally {
    await pool.end();
  }
}

setupDatabase();