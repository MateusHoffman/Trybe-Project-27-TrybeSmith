import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import { IPostUser } from '../interfaces/users.interface';

export default class UsersModel {
  private connection = conn;

  async postUser(postObj: IPostUser) {
    const { username, classe, level, password } = postObj;
    const query = `
      INSERT INTO Trybesmith.Users(username,classe,level,password)
      VALUES(?,?,?,?);
    `;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );
    return insertId;
  }
}