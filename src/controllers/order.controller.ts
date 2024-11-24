import { Request, Response } from 'express';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';

export const createOrder = async (req: Request, res: Response) => {
  const { email, product: productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) throw new Error('Product not found');
  if (product.quantity < quantity) throw new Error('Insufficient stock');

  product.quantity -= quantity;
  product.inStock = product.quantity > 0;
  await product.save();

  const totalPrice = product.price * quantity;
  const order = new Order({ email, product: productId, quantity, totalPrice });
  await order.save();

  res
    .status(201)
    .json({
      message: 'Order created successfully',
      success: true,
      data: order,
    });
};

export const calculateRevenue = async (req: Request, res: Response) => {
  const revenue = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
  ]);
  res.json({
    message: 'Revenue calculated successfully',
    success: true,
    data: revenue[0],
  });
};
