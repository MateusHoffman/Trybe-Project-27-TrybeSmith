import ProductsModel from '../models/ProductsModel';
import { IPostProduct } from '../interfaces/products.interface';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  async getAllProducts() {
    const arrRows = await this.model.getAll();
    return arrRows;
  }

  async postProduct(postObj: IPostProduct) {
    const { name, amount } = postObj;
    const id = await this.model.postProduct(postObj);
    return { id, name, amount };
  }
}