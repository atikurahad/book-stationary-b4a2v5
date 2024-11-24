Stationery Product Management API 
Overview
The Stationery Product Management API provides tools to manage stationery inventory, place orders, and calculate revenue.

Features
Product Management
Create a Product: Add a new product to the inventory.
Retrieve Products: Get all products or filter by category, brand, or name.
Get Product Details: View details of a product by ID.
Update Product: Modify product details (e.g., price, quantity).
Delete Product: Remove a product from the inventory.
Order Management
Place Orders: Place orders and automatically reduce inventory.
Calculate Revenue: View total revenue from all orders.
Key API Endpoints
Create Product: POST /api/products
Get All Products: GET /api/products (with optional search filters)
Get Product by ID: GET /api/products/:productId
Update Product: PUT /api/products/:productId
Delete Product: DELETE /api/products/:productId
Place an Order: POST /api/orders
Calculate Revenue: GET /api/orders/revenue
Inventory Rules
Placing an order reduces product quantity.
Products with quantity = 0 are marked as inStock: false.
This API simplifies inventory management and revenue tracking for stationery products.