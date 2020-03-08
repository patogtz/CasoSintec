"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
require('./db/mongoose');
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(router_1.default);
app.use(cors_1.default());
app.listen(port, function () {
    console.log(`Server up running on port ${port}`);
});
//# sourceMappingURL=index.js.map