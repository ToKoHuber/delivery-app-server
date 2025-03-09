import { Router } from "express";
// import {
//   Register,
//   UpdateProfile,
//   UserInfo,
// } from "../controllers/user.controller";

const userRoute = Router();

userRoute.post("/register", Register);
userRoute.get("/profile", UserInfo);
userRoute.put("/profile", UpdateProfile);

export { userRoute };
