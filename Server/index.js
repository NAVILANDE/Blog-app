import express from "express";
import cors from "cors";
import connectToMongo from "./config/db.js";
import authRoutes from "./routes/blog.js"
const app = express();
const PORT = 9000;
connectToMongo();
app.get("/", (req, res) => {
  res.send("API is running..");
});


app.use(cors());
app.use(express.json());
//api routes
app.use("/api/v1",authRoutes);

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
