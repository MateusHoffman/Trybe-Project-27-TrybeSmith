import { Request, Response } from 'express';
import ProductsService from '../services/productsService';
// import { IProducts } from '../interfaces/products.interface';

class ProductsController {
  service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  async getAllProducts(req: Request, res: Response) {
    const arrRows = await this.service.getAllProducts();
    res.status(200).json(arrRows);
  }

  async postProduct(req: Request, res: Response) {
    const row = await this.service.postProduct(req.body);
    res.status(201).json(row);
  }
}

export default new ProductsController();