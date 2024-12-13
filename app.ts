import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "express-async-errors";
import productRoutes from "./src/routes/routes.products";
import errorHandler from "./src/middlewares/errorHandler";
import orderRoutes from "./src/routes/routes.order";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Root Route
app.get('/', (_: Request, res: Response) => {
    res.json({ message: "Welcome to Stationary Shop" });
  });


app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use(errorHandler);



mongoose.connect(`${process.env.MONGO_URI}/stationery-shop` );

export default app;
