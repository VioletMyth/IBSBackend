import express from "express";
import recipes from "./routes/recipes";
import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost/IBS")
    .then(() => console.log("Connected to IBS Database"))
    .catch(err => console.log("Failed to connect to IBS Database"))
const app = express();
app.use("/api/recipe/", recipes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
