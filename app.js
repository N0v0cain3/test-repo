const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
const router = express.Router();




//routes
app.get("/", (req, res) => {
  res.status(200).json({
    message: " working",
  });
});

app.post("/post", (req, res) => {
  res.status(200).json({
    body: req.body,
  });
});

app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
