import { Router } from "express";
import {
  createFood,
  deleteFood,
  getAllFoods,
  getFoodById,
  updateFood,
} from "../controllers/food.controller";

const foodRouth = Router();

foodRouth.get("/:foodId", getFoodById);
foodRouth.post("/", createFood);
foodRouth.get("/", getAllFoods);
foodRouth.put("/:foodId", updateFood);
foodRouth.delete("/:foodId", deleteFood);

export { foodRouth };
