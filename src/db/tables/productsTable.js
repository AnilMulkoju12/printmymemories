export const createProductsTable = `
  CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    category_id UUID REFERENCES categories(id)
    ON DELETE CASCADE,

    name TEXT NOT NULL,

    slug TEXT UNIQUE,

    image TEXT,

    stock INT DEFAULT 0,

    price NUMERIC,

    status TEXT DEFAULT 'Active',

    created_at TIMESTAMP DEFAULT NOW()
  );
`;