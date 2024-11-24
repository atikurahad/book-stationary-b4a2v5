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
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const product_model_1 = require("../models/product.model");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_model_1.Product(req.body);
    yield product.save();
    res.status(201).json({
        message: 'Product created successfully',
        success: true,
        data: product,
    });
});
exports.createProduct = createProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    const filter = searchTerm
        ? {
            $or: [
                { name: searchTerm },
                { brand: searchTerm },
                { category: searchTerm },
            ],
        }
        : {};
    const products = yield product_model_1.Product.find(filter);
    res.json({
        message: 'Products retrieved successfully',
        success: true,
        data: products,
    });
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(req.params.productId);
    if (!product)
        throw new Error('Product not found');
    res.json({
        message: 'Product retrieved successfully',
        success: true,
        data: product,
    });
});
exports.getProductById = getProductById;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    if (!product)
        throw new Error('Product not found');
    res.json({
        message: 'Product updated successfully',
        success: true,
        data: product,
    });
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findByIdAndDelete(req.params.productId);
    if (!product)
        throw new Error('Product not found');
    res.json({
        message: 'Product deleted successfully',
        success: true,
        data: {},
    });
});
exports.deleteProduct = deleteProduct;
