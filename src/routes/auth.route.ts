import { Router } from "express";
// import {
//   Register,
//   UpdateProfile,
//   UserInfo,
// } from "../controllers/user.controller";

const authRouth = Router();

authRouth.get("/refresh", Register);
authRouth.post("/sign-up", UserInfo);
authRouth.post("/sign-in", UserInfo);
authRouth.post("/reset-password-request", UserInfo);
authRouth.get("/verify-reset-password-request", UserInfo);
authRouth.post("/reset-password", UpdateProfile);
export { authRouth };
