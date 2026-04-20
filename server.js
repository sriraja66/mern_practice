import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRouter from "./routers/students.js";

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/students", studentRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Student Management API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});