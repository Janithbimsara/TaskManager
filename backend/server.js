require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const categoryRouter = require('./routes/category.routes')

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

app.use('/v1/category',categoryRouter)

const startServer = () => {
  const PORT = process.env.PORT || 8080;
  // Listen for request
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

connectDB()
  .then(() => {
    startServer();
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB. Server not started.", err);
  });
