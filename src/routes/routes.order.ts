import express from 'express';
import { createOrder, calculateRevenue } from '../controllers/order.controller';

const router = express.Router();

router.post('/', createOrder);
router.get('/revenue', calculateRevenue);

export default router;
