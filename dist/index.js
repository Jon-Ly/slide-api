"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});
app.get('/messages', (req, res) => {
    res.json({ message: 'Hello Messages' });
});
