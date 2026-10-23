const express = require("express");
const { postStudent } = require("../controllers/studentController");

const router = express.Router();

router.get("/students", postStudent);
// router.post("/students");

module.exports = router;
