import express from 'express';
import error from './middlewares/error.middleware';
import { productsRouter, usersRouter, ordersRouter } from './routers';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
// app.use('/login', loginRouter);

app.use(error);

export default app;
