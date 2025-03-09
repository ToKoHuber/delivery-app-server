import { MongoClient } from "mongodb";

import { configDotenv } from "dotenv";

export async function createUser() {
  try {
    configDotenv();
    const uri = process.env.MONGODB_URL || "";

    console.log("uri", uri);
    const client = new MongoClient(uri);

    await client.connect();
    const database = client.db("food_delivery");
    const collection = database.collection("user");

    const food = await collection.insertMany([
      {
        name: "Bilguun",
        email: "Bilguun@text.com",
        password: "pass1234",
        phoneNumber: 80905978,
        address: "BzD 8th khoroo",
        role: "user",
        orderedFoods: ["burger", "pizza"],
        ttl: new Date(),
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    // return food;
  } catch (e) {
    console.log(e);
  }
}
