// import { MongoClient } from "mongodb";
const { MongoClient } = require("mongodb");
import { configDotenv } from "dotenv";

export async function getMovies(year: number, rating: number) {
  configDotenv();
  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri);
  console.log("uri", uri);

  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const collection = database.collection("movies");

    const findQuery = {
      $and: [{ "imdb.rating": { $gt: rating } }, { year: { $gt: year } }],
    };
    const movies = await collection.find(findQuery).limit(10).toArray();
    return movies;
  } catch (err) {
    console.error(`Something went wrong trying to delete documents: ${err}\n`);
  } finally {
    await client.close();
  }
}
