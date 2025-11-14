const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/recipeDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ MongoDB connected from config.js");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
};

module.exports = connectDB;