import express from "express";
import { changeUser, seeMyPage, logOut, deleteUser } from "../services/userService";
import { loginRequired } from "../middlewares/loginRequired.js";

const userRouter = express.Router();

userRouter.get("/logout", logOut);
userRouter.get("/:userId", seeMyPage);
userRouter.post("/:userId/edit", changeUser);
userRouter.delete("/:userId/delete", deleteUser);

export default userRouter;
