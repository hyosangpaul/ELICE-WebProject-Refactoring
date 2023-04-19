import cors from "cors";
import express from "express";
import "./db/index";
import cookieParser from "cookie-parser";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import productRouter from "./routers/productRouter";
import adminRouter from "./routers/adminRouter";

const app = express();

// CORS 에러 방지
app.use(cors());

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

app.use(cookieParser());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를
// 인식하고 핸들링할 수 있게 함.

app.use(express.urlencoded({ extended: false }));

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/admin", adminRouter);

export default app;
