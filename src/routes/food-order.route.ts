import { Router } from "express";
import { createOrder, getAllOrder } from "../controllers/food-order.controller";

const foodOrderRouth = Router();

foodOrderRouth.post("/", createOrder);
foodOrderRouth.get("/", getAllOrder);
foodOrderRouth.get("/:userId", UserInfo);
foodOrderRouth.put("/:foodOrderId", UserInfo);

export { foodOrderRouth };
