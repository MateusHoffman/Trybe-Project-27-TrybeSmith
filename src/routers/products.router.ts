import express from 'express';
import ProductsController from '../controllers/productsController';

const router = express.Router();

router.get('/', (req, res) => ProductsController.getAllProducts(req, res));
router.post('/', (req, res) => ProductsController.postProduct(req, res));
// router.get('/', ProductsController.getAllPath);

export default router;