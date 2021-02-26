import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,
  // ingredients:
  createdAt: { type: Date, default: Date.now },
  imageUrl: String,
  restaurant: String,
});

const Recipe = mongoose.model("User", recipeSchema);

export default Recipe;
