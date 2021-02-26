"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send("get request");
});
router.post('/', (req, res) => {
    res.send("post request");
});
router.put('/', (req, res) => {
    res.send("put request");
});
router.delete('/', (req, res) => {
    res.send("delete request");
});
exports.default = router;
