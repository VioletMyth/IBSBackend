import express from "express"
import recipes from "./routes/recipes"
import mongoose from "mongoose"

const app = express()
app.use("/api/recipe/", recipes)


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
