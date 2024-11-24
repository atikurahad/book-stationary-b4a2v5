"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
var Category;
(function (Category) {
    Category["Writing"] = "Writing";
    Category["OfficeSupplies"] = "Office Supplies";
    Category["ArtSupplies"] = "Art Supplies";
    Category["Educational"] = "Educational";
    Category["Technology"] = "Technology";
})(Category || (Category = {}));
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, enum: Object.values(Category), required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
}, { timestamps: true });
ProductSchema.pre('save', function () {
    this.inStock = this.quantity > 0;
});
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);
