import { Router } from "express";
// import {
//   Register,
//   UpdateProfile,
//   UserInfo,
// } from "../controllers/user.controller";

const foodOrderRouth = Router();

foodOrderRouth.post("/", Register);
foodOrderRouth.get("/", UserInfo);
foodOrderRouth.get("/:userId", UserInfo);
foodOrderRouth.patch("/:foodOrderId", UserInfo);

export { foodOrderRouth };
