import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getMovies } from "./database/mongodb";
import { createFood, getFoods } from "./database/createFood";
import { createUser } from "./database/createUser";
import { createStudent, getStudent } from "./database/createStudent";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4000;

// app.use("/food", foodRoute);
// app.use("/food-category", categoryRoute);
// app.use("/auth", authenticationRoute);
// app.use("/food-order", orderRoute);
app.get("/movies", async (req, res) => {
  try {
    const { year, imdb } = await req.query;
    const movies = await getMovies(Number(year), Number(imdb));
    res.status(200).json({ message: "success", movies: movies });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.post("/food", async (req, res) => {
  try {
    await createFood();
    res.status(200).json({ message: "successfully added" });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.post("/user", async (req, res) => {
  try {
    await createUser();
    res.status(200).json({ message: "successfully added" });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.get("/food", async (req, res) => {
  try {
    // await getFoods();
    const food = await getFoods();
    res.status(200).json({ message: "data getting", data: food });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.post("/student", async (req, res) => {
  try {
    await createStudent();
    res.status(200).json({ message: "Student successfully added" });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.get("/student", async (req, res) => {
  try {
    // await getFoods();
    const student = await getStudent();
    res.status(200).json({ message: "Student data getting", data: student });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// pass: food123
