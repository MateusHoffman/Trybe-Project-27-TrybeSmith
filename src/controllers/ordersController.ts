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
}

export default new OrdersController();