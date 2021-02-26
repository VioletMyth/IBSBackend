"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipes_1 = __importDefault(require("./routes/recipes"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb://localhost/IBS")
    .then(() => console.log("Connected to IBS Database"))
    .catch(err => console.log("Failed to connect to IBS Database"));
const app = express_1.default();
app.use("/api/recipe/", recipes_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
