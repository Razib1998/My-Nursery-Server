import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const addProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.createProductIntoDB(req.body);
    res.json({
      success: true,
      message: "Product is Created Successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "product could not created",
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();
    res.json({
      success: true,
      message: "Products are retrieved  Successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "products could not fetched",
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductIntoDB(id);
    res.json({
      success: true,
      message: "Product is retrieved Successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "product could not fetched",
      error: err,
    });
  }
};

const updateProductIntoDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.updateProductIntoDB(id, req.body);
    res.json({
      success: true,
      message: "Product is updated Successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "product could not be updated",
      error: err,
    });
  }
};

const deleteProductFromDB = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.deleteProductFromDB(id);
    res.json({
      success: true,
      message: "Product is deleted Successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "product could not be deleted",
      error: err,
    });
  }
};

export const ProductControllers = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  deleteProductFromDB,
  updateProductIntoDB,
};
