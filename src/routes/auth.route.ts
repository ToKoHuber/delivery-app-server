import { Router } from "express";
import { signUp } from "../controllers/auth/signUp.controller";
import { signIn } from "../controllers/auth/signIn.controller";

const authRouth = Router();

authRouth.post("/signin", signIn);
authRouth.post("/signup", signUp);
// authRouth.post("/sign-in", UserInfo);
// authRouth.post("/reset-password-request", UserInfo);
// authRouth.get("/verify-reset-password-request", UserInfo);
// authRouth.post("/reset-password", UpdateProfile);
export { authRouth };
