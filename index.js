import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello From The Server");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Started");
});
