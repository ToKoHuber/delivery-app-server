import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getMovies } from "./database/mongodb";

const app = express();
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config({
  path: "/Users/24LP2879/Desktop/Pinecone/delivery-app/server/.env",
});

const port = 4000;

// app.use("/food", foodRoute);
// app.use("/food-category", categoryRoute);
// app.use("/auth", authenticationRoute);
// app.use("/food-order", orderRoute);

app.get("movies", async (req, res) => {
  try {
    const { year, rating } = await req.query;
    const movies = await getMovies(Number(year), Number(rating));
    res.status(200).json({ message: "success", movies: movies });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
