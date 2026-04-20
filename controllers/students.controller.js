import * as studentService from "../service/students.service.js";

const createStudent = async (req, res) => {
  try {
    const result = await studentService.addStudent(req.body);
    res.status(201).json({
      message: "Student added successfully",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "Error adding student",
    });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching students",
      error: error.message
    });
  }
};

export { createStudent, getStudents };