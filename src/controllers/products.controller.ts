import { Request, Response } from 'express';
import  Product  from '../models/product.model';


export const createProduct = async (req: Request, res: Response) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json({
    message: 'Product created successfully',
    success: true,
    data: product,
  });
};

export const getAllProducts = async (_: Request, res: Response) => {
  const products = await Product.find();
  res.json({
    message: 'Products retrieved successfully',
    success: true,
    data: products,
  });
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.productId);
  if (!product) throw new Error('Product not found');
  res.json({
    message: 'Product retrieved successfully',
    success: true,
    data: product,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true },
  );
  if (!product) throw new Error('Product not found');
  res.json({
    message: 'Product updated successfully',
    success: true,
    data: product,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndDelete(req.params.productId);
  if (!product) throw new Error('Product not found');
  res.json({
    message: 'Product deleted successfully',
    success: true,
    data: {},
  });
};
