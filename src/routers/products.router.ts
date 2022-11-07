import express from 'express';
import ProductsController from '../controllers/productsController';
import validatePostProduct from '../services/vilidations/inputValidatons';

const router = express.Router();

router.get('/', (req, res) => ProductsController.getAllProducts(req, res));
router.post('/', validatePostProduct, (req, res) => ProductsController.postProduct(req, res));

export default router;