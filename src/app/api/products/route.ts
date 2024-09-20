import {
  addProduct,
  deleteProductById,
  getProductById,
  getProductList,
  updateProductById,
} from "@/app/controllers/product";
import dbConnect from "@/app/lib/dbConnect";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  await dbConnect();

  if (!id) {
    return getProductList();
  }
  return getProductById(id);
}

export async function POST(req: NextRequest) {
  await dbConnect();

  addProduct(req.body);
}

export async function PUT(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  await dbConnect();

  updateProductById(id);
}

export async function DELETE(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  await dbConnect();

  deleteProductById(id);
}
