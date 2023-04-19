import express from "express";
import { showAllProducts, findOneProduct, addProduct, editProduct, deleteProduct } from "../services/productService";

const productRouter = express.Router();

productRouter.get("/", showAllProducts);
productRouter.get("/:id", findOneProduct);
productRouter.post("/add", addProduct);
productRouter.post("/edit", editProduct);
productRouter.delete("/delete", deleteProduct);

export default productRouter;
