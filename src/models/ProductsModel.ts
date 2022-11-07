import conn from './connection';

export default class ProductsModel {
  private connection = conn;

  async getAll() {
    const [rows] = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    return rows;
  }
}