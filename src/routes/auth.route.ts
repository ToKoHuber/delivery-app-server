import { Router } from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";
import { forgetPassword } from "../controllers/forget-password.controller";
import { resetPassword } from "../controllers/reset-password.controller";

const authRouth = Router();

authRouth.post("/signin", signIn);
authRouth.post("/signup", signUp);
// authRouth.post("/sign-in", UserInfo);
authRouth.post("/reset-password-request", forgetPassword);
// authRouth.get("/verify-reset-password-request", UserInfo);
authRouth.post("/reset-password", resetPassword);
export { authRouth };
