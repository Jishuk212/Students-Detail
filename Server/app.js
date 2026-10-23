const express = require("express");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const router = require("./routers/studentRouter");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is students-detail app and app running perfectely",
  });
});

app.get("/api/health", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "Server running pefectly",
  });
});
app.use("/api", router);

app.use(notFound);
app.use(errorHandler);
module.exports = app;
