export const createCategoriesTable = `
  CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name TEXT NOT NULL,

    slug TEXT UNIQUE NOT NULL,

    image TEXT,

    total_products INT DEFAULT 0,

    created_at TIMESTAMP DEFAULT NOW()
  );
`;