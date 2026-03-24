import { studentsCollection } from "../server.js";

const addStudent = async (req, res) => {
  try {

    const { name, email, course, marks } = req.body;

    const newStudent = {
      name,
      email,
      course,
      marks,
      createdAt: new Date()
    };

    const result = await studentsCollection.insertOne(newStudent);

    res.status(201).json({
      message: "Student added successfully",
      data: result
    });

  } catch (error) {
    res.status(500).json({
      message: "Error adding student",
      error: error.message
    });
  }
};

const getStudents = async (req, res) => {

  const students = await studentsCollection.find().toArray();

  res.json(students);

};

export { addStudent, getStudents };