import { MongoClient } from "mongodb";

import { configDotenv } from "dotenv";

export async function createFood() {
  try {
    configDotenv();
    const uri = process.env.MONGODB_URL || "";

    console.log("uri", uri);
    const client = new MongoClient(uri);

    await client.connect();
    const database = client.db("food_delivery");
    const collection = database.collection("food");

    const food = await collection.insertMany([
      {
        name: "Horloo",
        age: 31,
        gender: "male",
        gpa: 4,
      },
      {
        name: "Bilguun",
        age: 21,
        gender: "male",
        gpa: 3,
      },
      {
        name: "Ochiroo",
        age: 19,
        gender: "male",
        gpa: 3.1,
      },
      {
        name: "Enkhlen",
        age: 22,
        gender: "female",
        gpa: 3.5,
      },
      {
        name: "Zulaa",
        age: 25,
        gender: "female",
        gpa: 3.7,
      },
    ]);
    // return food;
  } catch (e) {
    console.log(e);
  }
}

export async function getFoods() {
  try {
    configDotenv();
    const uri = process.env.MONGODB_URL || "";

    console.log("uri", uri);
    const client = new MongoClient(uri);

    await client.connect();
    const database = client.db("food_delivery");
    const collection = database.collection("food");

    // const findQuery = {
    //   $and: [{ "imdb.rating": { $gt: imdb } }, { year: { $gt: year } }],
    // };
    const food = await collection.find().limit(10).toArray();
    return food;
  } catch (e) {
    console.log(e);
  }
}
