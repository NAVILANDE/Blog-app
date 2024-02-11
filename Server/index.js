import express from "express";
import connectToMongo from "./config/db.js";
const app = express();
const PORT = 9000;
connectToMongo();
app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/about", (req, res) => {
  res.send("About us..");
});



app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
