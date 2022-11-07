import jwt from 'jsonwebtoken';
import { IAuthUser } from '../interfaces/users.interface';

const token: string = process.env.JWT_SECRET || '';

export default class TokenUtils {
  public jwt = jwt;

  public generateToken(user: IAuthUser) {
    const payload = {
      id: user.id, username: user.username, classe: user.classe, level: user.level,
    };
    return this.jwt.sign(payload, token, {
      algorithm: 'HS256',
    });
  }
}
