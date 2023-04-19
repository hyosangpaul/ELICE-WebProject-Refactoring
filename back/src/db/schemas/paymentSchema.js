import { Schema } from "mongoose";

const PaymentSchema = new Schema(
  {
    name: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    requirement: { type: String },
    productName: { type: String },
    total: { type: Number },
  },
  { timestamps: true }
);

export default PaymentSchema;
