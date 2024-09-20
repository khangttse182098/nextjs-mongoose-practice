import { NextResponse } from "next/server";
import Product from "../models/Product";

export const getProductList = async () => {
  try {
    const productList = await Product.find({});
    return NextResponse.json(
      { success: true, data: productList },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
};

export const getProductById = async (id: string) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
};

export const addProduct = async (payload: any) => {
  try {
    const product = await Product.create(payload);
    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
};

export const updateProductById = async (id: string | null) => {
  if (!id) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  try {
    const product = await Product.findByIdAndUpdate(id);
    if (!product) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
};

export const deleteProductById = async (id: string | null) => {
  if (!id) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
};
