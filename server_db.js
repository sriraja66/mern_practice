import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());

const url =
  "mongodb+srv://srirajavadivel:sriraj123@cluster0.hogh0pd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

let studentsCollection; // global variable

async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB connected");

    const db = client.db("studentDB");
    studentsCollection = db.collection("students");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });

  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

startServer();