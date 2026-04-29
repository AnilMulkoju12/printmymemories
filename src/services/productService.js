import * as repo from "@/repositories/productRepo";

export const addProduct = async (data) => {
  if (!data.title || !data.price) {
    throw new Error("Title and price are required");
  }

  return await repo.createProduct(data);
};

export const fetchProducts = async () => {
  return await repo.getAllProducts();
};