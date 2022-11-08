import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';
// import { IOrders } from '../interfaces/orders.interface';

class OrdersController {
  service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  async getAllOrders(req: Request, res: Response) {
    const arrRows = await this.service.getAllOrders();
    res.status(200).json(arrRows);
  }

  async postOrders(req: Request, res: Response) {
    const { productsIds, user: { validateToken: { id } } } = req.body;
    const obj = await this.service.postOrders(productsIds, id);
    res.status(201).json(obj);
  }
}

export default new OrdersController();