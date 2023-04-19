import express from "express";
import { postJoin, postLogin } from "../services/userService";
import { postPayment } from "../services/paymentService";

const rootRouter = express.Router();

rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.post("/order", postPayment);

export default rootRouter;
