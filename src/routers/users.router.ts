import express from 'express';
import UsersController from '../controllers/usersController';
import { validatePostUser } from '../services/vilidations/inputValidatons';

const router = express.Router();

router.post('/', validatePostUser, (req, res) => UsersController.postUser(req, res));

export default router;