import express from "express";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/about", (req, res) => {
  res.send("About us..");
});



app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
