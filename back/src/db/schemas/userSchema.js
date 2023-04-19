import { Schema, mongoose } from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const UserSchema = new Schema(
  {
    name: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    phoneNumber: { type: String, unique: true },
    address: { type: String },
    order: {
      type: [Schema.Types.ObjectId],
      ref: "Order",
      default: [],
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true, collection: "users" }
);
UserSchema.plugin(AutoIncrement, { inc_field: "userId" });
export default UserSchema;
