import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authRouth } from "./routes/auth.route";
import { foodRouth } from "./routes/food.route";
import { foodOrderRouth } from "./routes/food-order.route";
import foodCategoryRouth from "./routes/food-category.route";
import { connectMongoDb } from "./database/db";

connectMongoDb();

const app = express();
const port = 4000;
app.use(bodyParser.json());
// app.use("/user", authRouth);
app.use("/food", foodRouth);
app.use("/food-category", foodCategoryRouth);
// app.use("/food-order", foodOrderRouth);

app.get("/", (req: Request, res: Response) => {
  res.send("Hellow World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// pass: food123
