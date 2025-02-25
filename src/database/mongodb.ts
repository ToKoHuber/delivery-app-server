import { MongoClient } from "mongodb";

import { configDotenv } from "dotenv";

export async function getMovies(year: number, imdb: number) {
  try {
    configDotenv();
    const uri = process.env.MONGODB_URL || "";

    console.log("uri", uri);
    const client = new MongoClient(uri);

    await client.connect();
    const database = client.db("sample_mflix");
    const collection = database.collection("movies");

    const findQuery = {
      $and: [{ "imdb.rating": { $gt: imdb } }, { year: { $gt: year } }],
    };
    const movies = await collection.find().limit(10).toArray();
    return movies;
  } catch (e) {
    console.log(e);
  }
}
