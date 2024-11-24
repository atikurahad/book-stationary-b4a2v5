"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRevenue = exports.createOrder = void 0;
const order_model_1 = require("../models/order.model");
const product_model_1 = require("../models/product.model");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, product: productId, quantity } = req.body;
    const product = yield product_model_1.Product.findById(productId);
    if (!product)
        throw new Error('Product not found');
    if (product.quantity < quantity)
        throw new Error('Insufficient stock');
    product.quantity -= quantity;
    product.inStock = product.quantity > 0;
    yield product.save();
    const totalPrice = product.price * quantity;
    const order = new order_model_1.Order({ email, product: productId, quantity, totalPrice });
    yield order.save();
    res
        .status(201)
        .json({
        message: 'Order created successfully',
        success: true,
        data: order,
    });
});
exports.createOrder = createOrder;
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const revenue = yield order_model_1.Order.aggregate([
        { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    ]);
    res.json({
        message: 'Revenue calculated successfully',
        success: true,
        data: revenue[0],
    });
});
exports.calculateRevenue = calculateRevenue;
