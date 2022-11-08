// import { ResultSetHeader } from 'mysql2';
import { ResultSetHeader } from 'mysql2';
import conn from './connection';
// import { IPostOrders } from '../interfaces/orders.interface';

export default class OrdersModel {
  private connection = conn;

  async getAllOrders() {
    const query = `
      SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) productsIds
      FROM Trybesmith.Orders o
      INNER JOIN Trybesmith.Products p
      ON p.orderId = o.id
      GROUP BY o.id;
    `;
    const [rows] = await this.connection.execute(query);
    return rows;
  }

  async postOrders(userId: number) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  }
}
