import express from 'express';
import OrdersController from '../controllers/ordersController';

const router = express.Router();

router.get('/', (req, res) => OrdersController.getAllOrders(req, res));
// router.post('/', (req, res) => OrdersController.postProduct(req, res));

export default router;