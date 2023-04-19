import { model } from "mongoose";
import { ProductSchema } from "../schemas/productSchema";

const Product = model("Products", ProductSchema);

export default Product;
