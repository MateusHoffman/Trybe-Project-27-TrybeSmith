import OrdersModel from '../models/OrdersModel';
// import { IPostProduct } from '../interfaces/products.interface';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  async getAllOrders() {
    const arrRows = await this.model.getAllOrders();
    return arrRows;
  }
}