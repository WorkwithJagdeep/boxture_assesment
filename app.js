const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.all("*", (req, res) => {
  return res.status(404).json({
    status: "failed",
    error: "endpoint not found",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

module.exports = app;


