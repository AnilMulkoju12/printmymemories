import { pool } from "@/lib/db";

export const createProduct = async (data) => {
  const { title, description, price } = data;

  const res = await pool.query(
    `INSERT INTO products (title, description, price)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [title, description, price]
  );

  return res.rows[0];
};

export const getAllProducts = async () => {
  const res = await pool.query(`SELECT * FROM products ORDER BY id DESC`);
  return res.rows;
};