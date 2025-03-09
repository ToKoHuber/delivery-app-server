import { Router } from "express";
// import {
//   Register,
//   UpdateProfile,
//   UserInfo,
// } from "../controllers/user.controller";

const foodRouth = Router();

foodRouth.get("/:foodId", Register);
foodRouth.post("/:foodId", UserInfo);
foodRouth.post("/:foodId", UserInfo);

export { foodRouth };
