import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import { IPostProduct } from '../interfaces/products.interface';

export default class ProductsModel {
  private connection = conn;

  async getAll() {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [rows] = await this.connection.execute(query);
    return rows;
  }

  async postProduct(postObj: IPostProduct) {
    const { name, amount } = postObj;
    const query = `
      INSERT INTO Trybesmith.Products(name,amount)
      VALUES(?,?);
    `;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return insertId;
  }
}