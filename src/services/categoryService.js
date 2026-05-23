import {
  getAllCategories,
  createCategory,
  deleteCategory,
} from "@/repositories/categoryRepository";

export async function fetchCategories() {
  return await getAllCategories();
}

export async function addCategory(data) {
  return await createCategory(data);
}
export async function editCategory(id, data) {
  return await updateCategory(id, data);
}
export async function removeCategory(id) {
  return await deleteCategory(id);
}