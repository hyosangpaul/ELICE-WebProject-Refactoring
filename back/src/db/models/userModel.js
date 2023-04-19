import { model } from "mongoose";
import UserSchema from "../schemas/userSchema";

const User = model("users", UserSchema);

export default User;
