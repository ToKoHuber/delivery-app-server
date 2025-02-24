import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use("/food", foodRoute);
// app.use("/food-category", categoryRoute);
// app.use("/auth", authenticationRoute);
// app.use("/food-order", orderRoute);

app.get("movies", async (req, res) => {
  try {
    const { year, imdb } = await req.query;
    const movies = await getMovies(Number(year), Number(imdb));
    res.status(200).json({ message: "success", movies: movies });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(4000, () => {
  console.log(`listening on port ${4000}`);
});
