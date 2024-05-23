const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

//DB connection

const username = encodeURIComponent("akshayhallagade2612");
const password = encodeURIComponent("psva27jndYDfknMv");
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.cok6d9q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server Started.");
});
