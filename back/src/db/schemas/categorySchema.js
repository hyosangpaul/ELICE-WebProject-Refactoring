import { Schema } from "mongoose";


const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    imgUrl: { type: String },
  },
  { timestamps: true }
);

export { CategorySchema };
