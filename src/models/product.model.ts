import  { Schema, Document, model } from 'mongoose';

enum Category {
  Writing = 'Writing',
  OfficeSupplies = 'Office Supplies',
  ArtSupplies = 'Art Supplies',
  Educational = 'Educational',
  Technology = 'Technology',
}

interface IProduct extends Document {
  name: string;
  brand: string;
  price: number;
  category: Category;
  description: string;
  quantity: number;
  inStock: boolean;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, enum: Object.values(Category), required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

ProductSchema.pre('save', function () {
  this.inStock = this.quantity > 0;
});

export const Product = model<IProduct>('Product', ProductSchema);
