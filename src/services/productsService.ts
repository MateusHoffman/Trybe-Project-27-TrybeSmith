import ProductsModel from '../models/ProductsModel';
// import { IProducts } from '../interfaces/products.interface';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  async getAllProducts() {
    const arrRows = await this.model.getAll();
    return arrRows;
  }
}