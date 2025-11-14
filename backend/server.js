const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./routes/config");
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const cors = require("cors");


// MongoDB connect
connectDB();

// App bana rahe hain
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Backend connected successfully!");
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});