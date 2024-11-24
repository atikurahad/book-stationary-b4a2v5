"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (req, res) => {
    res.status(500).json({
        message: 'Something went wrong',
        success: false,
        error: 'InternalServerError',
    });
};
exports.errorHandler = errorHandler;
