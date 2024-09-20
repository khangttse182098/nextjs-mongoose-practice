import mongoose from "mongoose";

export interface Product extends mongoose.Document {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const ProductSchema = new mongoose.Schema<Product>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model<Product>("Product", ProductSchema);
