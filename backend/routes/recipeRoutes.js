const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// ✅ Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Like a recipe
router.post("/:id/like", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    recipe.likes += 1;
    await recipe.save();
    res.json({ message: "Recipe liked!", likes: recipe.likes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Save a recipe
router.post("/:id/save", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    recipe.saves += 1;
    await recipe.save();
    res.json({ message: "Recipe saved!", saves: recipe.saves });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Add a comment
router.post("/:id/comment", async (req, res) => {
  try {
    const { user, text } = req.body;
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    recipe.comments.push({ user, text });
    await recipe.save();

    res.json({ message: "Comment added!", comments: recipe.comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;