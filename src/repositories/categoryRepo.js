import { pool } from "@/lib/db";

export async function getAllCategories() {
  const result = await pool.query(`
    SELECT
      id,
      name,
      slug,
      image,
      created_at
    FROM categories

    ORDER BY created_at DESC
  `);

  return result.rows;
}

export async function createCategory(category) {
  const { name, slug, image } = category;

  const result = await pool.query(
    `
      INSERT INTO categories
      (name, slug, image)

      VALUES ($1, $2, $3)

      RETURNING *;
    `,
    [name, slug, image]
  );

  return result.rows[0];
}

export async function updateCategory(id, category) {
  const { name, slug, image } = category;

  const result = await pool.query(
    `
      UPDATE categories

      SET
        name = $1,
        slug = $2,
        image = $3

      WHERE id = $4

      RETURNING *;
    `,
    [name, slug, image, id]
  );

  return result.rows[0];
}

export async function deleteCategory(id) {
  await pool.query(
    `
      DELETE FROM categories
      WHERE id = $1
    `,
    [id]
  );
}