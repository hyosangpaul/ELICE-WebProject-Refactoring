const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String },
    categoryId: { type: String },
    manufacturer: { type: String },
    shortDesc: { type: String },
    detailDesc: { type: String },
    imgUrl: { type: String },
    totalstocks: { type: Number },
    price: { type: Number },
    searchKeywords: { type: String },
  },
  { timestamps: true }
);
ProductSchema.plugin(AutoIncrement, { inc_field: "id" });
export { ProductSchema };
