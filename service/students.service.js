import Student from "../models/student.model.js";

export async function addStudent(data) {
  const existing = await Student.findOne({ email: data.email });

  if (existing) {
    throw new Error("Student with this email already exists");
  }

  const student = new Student(data);
  const result = await student.save();

  return result;
}

export async function getAllStudents() {
  return await Student.find().sort({ createdAt: -1 });
}

export async function getStudentById(id) {
  return await Student.findById(id);
}