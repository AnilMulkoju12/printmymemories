import { addProduct, fetchProducts } from "@/services/productService";

export async function GET() {
  try {
    const data = await fetchProducts();
    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: err.message });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const data = await addProduct(body);

    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ success: false, error: err.message });
  }
}