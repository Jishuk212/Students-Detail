const Student = require("../models/student");

const getStudent = async (req, res, next) => {
  const students = await Student.find();
  return res.status(200).json({
    success: true,
    data: students,
  });
};

const postStudent = async (req, res, next) => {
  try {
    console.log(req.body);
    const { studentName, rollNumber, email, age, dob, section } = req.body;
    const student = new Student({
      studentName,
      rollNumber,
      email,
      age,
      dob,
      section,
    });
    await student.save();

    return res.status(200).json({
      success: true,
      message: "Registration Successfuly",
    });
  } catch (err) {
    console.log("Error found during save student data");
    next(err);
  }
};

module.exports = { getStudent, postStudent };
