"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
require("express-async-errors");
const errorHandler_1 = require("./middlewares/errorHandler");
const routes_products_1 = __importDefault(require("./routes/routes.products"));
const routes_order_1 = __importDefault(require("./routes/routes.order"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Root Route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Stationary Shop" });
});
app.use("/api/products", routes_products_1.default);
app.use("/api/orders", routes_order_1.default);
app.use(errorHandler_1.errorHandler);
mongoose_1.default.connect(process.env.MONGO_URI || "mongodb://localhost:27017/stationery-shop");
exports.default = app;
