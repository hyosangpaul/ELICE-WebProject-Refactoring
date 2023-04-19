import { model } from "mongoose";
import PaymentSchema from "../schemas/paymentSchema";

const Payment = model("payments", PaymentSchema);

export default Payment;
