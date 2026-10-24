
const express = require("express");
const { getStudent, postStudent } = require("../controllers/studentController");

const router = express.Router();

router.get("/students", getStudent);
router.post("/students", postStudent);

module.exports = router;
