import { pool } from "@/lib/db";

import { createUsersTable } from "./tables/usersTable";
import { createProductsTable } from "./tables/productsTable";
import { createOrdersTable } from "./tables/ordersTable";
import { createOrderItemsTable } from "./tables/orderItemsTable";

export async function setupDatabase() {
  await pool.query(createUsersTable);
  await pool.query(createProductsTable);
  await pool.query(createOrdersTable);
  await pool.query(createOrderItemsTable);
}