const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },

    rollNumber: {
      type: String,
      required: [true, "Roll number is required"],
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age must be at least 1"],
      max: [120, "Age cannot exceed 120"],
    },

    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
      validate: {
        validator: (value) => value <= new Date(),
        message: "Date of birth cannot be in the future",
      },
    },

    section: {
      type: String,
      required: [true, "Section is required"],
      enum: {
        values: ["A", "B", "C", "D", "E", "F", "G"],
        message: "Please select a valid section",
      },
    },
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
