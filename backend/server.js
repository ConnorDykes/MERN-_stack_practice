const express = require("express");
require("dotenv").config();

//express app
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
