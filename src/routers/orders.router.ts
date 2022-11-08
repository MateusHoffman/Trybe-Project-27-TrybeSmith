import express from 'express';
import OrdersController from '../controllers/ordersController';
import auth from '../middlewares/auth.middleware';
import { validatePostOrders } from '../services/vilidations/inputValidatons';

const router = express.Router();

router.get('/', (req, res) => OrdersController.getAllOrders(req, res));
router.post('/', auth, validatePostOrders, (req, res) => OrdersController.postOrders(req, res));

export default router;