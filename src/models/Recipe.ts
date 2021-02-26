import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
      },
    },
    { timestamps: true },
  );

const Recipe = mongoose.model('User', recipeSchema);

export default Recipe;
