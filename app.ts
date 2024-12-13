import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "express-async-errors";
import productRoutes from "./src/routes/routes.products";
import errorHandler from "./src/middlewares/errorHandler";
import orderRoutes from "./src/routes/routes.order";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
// Root Route
app.get('/', (_: Request, res: Response) => {
    res.json({ message: "Welcome to Stationary Shop" });
  });

app.all("*",(_:Request,res:Response)=>{
  res.status(404).json({message:"Not Found"})
});
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use(errorHandler);



mongoose.connect(`${process.env.MONGO_URI}/stationary-shop` );

export default app;
