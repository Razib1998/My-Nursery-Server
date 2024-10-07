import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductIntoDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const isProductExists = await Product.findById(id);
  if (!isProductExists) {
    throw new Error("Product not found");
  }

  const result = await Product.findByIdAndUpdate(id, payload);
  return result;
};
const deleteProductFromDB = async (id: string) => {
  const isProductExists = await Product.findById(id);
  if (!isProductExists) {
    throw new Error("Product not found");
  }
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
