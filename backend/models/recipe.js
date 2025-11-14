const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  ingredients: [String],
  instructions: String,
  likes: { type: Number, default: 0 },
  saves: { type: Number, default: 0 },
  comments: [
    {
      user: { type: String, required: true },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Recipe", recipeSchema);