import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductControllers.addProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);
router.patch("/:id", ProductControllers.updateProductIntoDB);
router.delete("/:id", ProductControllers.deleteProductFromDB);

export const ProductRoutes = router;
