import ProductsModel from '../models/ProductsModel';
import OrdersModel from '../models/OrdersModel';
// import { IPostOrders } from '../interfaces/orders.interface';
// import TokenUtils from '../utils/JWT';

export default class OrdersService {
  modelOrders: OrdersModel;
  
  modelProducts: ProductsModel;

  constructor() {
    this.modelOrders = new OrdersModel();
    this.modelProducts = new ProductsModel();
  }

  async getAllOrders() {
    const arrRows = await this.modelOrders.getAllOrders();
    return arrRows;
  }

  async postOrders(productsIds: number[], userId: number) {
    const orderId = await this.modelOrders.postOrders(userId);
    const insertSaleId = productsIds.map(async (productId) => {
      await this.modelProducts.postOrderId(orderId, productId);
    });
    await Promise.all(insertSaleId);

    return { userId, productsIds };
  }
}