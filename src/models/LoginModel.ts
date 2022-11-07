import { RowDataPacket } from 'mysql2';
// import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import { IPostLogin } from '../interfaces/login.interface';

export default class LoginModel {
  private connection = conn;

  async getUserByPostLogin(postObj: IPostLogin) {
    const { username, password } = postObj;
    const query = `
      SELECT *
      FROM Trybesmith.Users
      WHERE username = ?
      AND password = ?
    `;
    const [row] = await this.connection.execute(
      query,
      [username, password],
    );
    
    return (row as RowDataPacket[])[0];
  }
}