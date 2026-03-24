import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb+srv://srirajavadivel:sriraj123@cluster0.hogh0pd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const db = client.db("studentDB");
const students = db.collection("students");


export async function addStudent(data) {

  const existing = await students.findOne({ email: data.email });

  if (existing) {
    throw new Error("Student with this email already exists");
  }

  const result = await students.insertOne({
    ...data,
    createdAt: new Date()
  });

  return result;
}