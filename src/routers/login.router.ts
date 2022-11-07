import express from 'express';
import LoginController from '../controllers/loginController';

const router = express.Router();

router.post('/', (req, res) => LoginController.postLogin(req, res));

export default router;