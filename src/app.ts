import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "express-async-errors";
import { errorHandler } from "./middlewares/errorHandler";
import productRoutes from "./routes/routes.products";
import orderRoutes from "./routes/routes.order";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
// Root Route
app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Welcome to Stationary Shop" });
  });
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use(errorHandler);



mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/stationery-shop", );

export default app;
