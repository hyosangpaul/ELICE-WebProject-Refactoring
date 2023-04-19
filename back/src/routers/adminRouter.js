import express from "express";
import { addCategory, deleteCategory, editCategory, getAdmin, handleOrder } from "../services/adminService";

const adminRouter = express.Router();

adminRouter.get("/", getAdmin);
adminRouter.get("/orders", handleOrder);
adminRouter.post("/category/add", addCategory);
adminRouter.post("category/edit", editCategory);
adminRouter.delete("category/delete", deleteCategory);

export default adminRouter;
