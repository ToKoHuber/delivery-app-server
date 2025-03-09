import { Router } from "express";
// import {
//   Register,
//   UpdateProfile,
//   UserInfo,
// } from "../controllers/user.controller";

const foodCategoryRouth = Router();

foodCategoryRouth.get("/", Register);
foodCategoryRouth.post("/", UserInfo);
foodCategoryRouth.patch("/:foodCategoryId", UserInfo);
foodCategoryRouth.delete("/:foodCategoryId", UserInfo);

export { foodCategoryRouth };
