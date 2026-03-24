const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email:  { type: String, unique: true },
  course: String,
  marks: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Students", studentSchema);