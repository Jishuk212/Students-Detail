const Student = require("../models/student");

const postStudent = async (req, res, next) => {
  const students = await Student.find();
  return res.status(200).json({
    success: true,
    data: students,
  });
};

module.exports = { postStudent };
