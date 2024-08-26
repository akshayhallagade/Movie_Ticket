const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = 8000;

//DB connection

const username = encodeURIComponent("akshayhallagade2612");
const password = encodeURIComponent("psva27jndYDfknMv");
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.cok6d9q.mongodb.net/BMS?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

// middlewares
app.use(express.json());
app.use(express.urlencoded());

// routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server Started.");
});
