import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";
import { productCategory } from "./product.constant";

const productSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: productCategory,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<TProduct>("Product", productSchema);
