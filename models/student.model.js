import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  course: {
    type: String,
    required: [true, "Course is required"]
  },
  marks: {
    type: Number,
    required: [true, "Marks are required"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
