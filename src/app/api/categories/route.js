import { NextResponse } from "next/server";

import {
  getAllCategories,
  createCategory,
} from "../../../repositories/categoryRepo.js";

export async function GET() {
  try {
    const categories = await getAllCategories();

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const slug = body.name
      .toLowerCase()
      .replace(/\s+/g, "-");

    const category = await createCategory({
      name: body.name,
      slug,
      image: body.image,
    });

    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}