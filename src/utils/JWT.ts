import jwt from 'jsonwebtoken';
import { IAuthUser } from '../interfaces/users.interface';

const secret: string = process.env.JWT_SECRET || '';

export default class TokenUtils {
  public jwt = jwt;

  public generateToken(user: IAuthUser) {
    const payload = {
      id: user.id, username: user.username, classe: user.classe, level: user.level,
    };
    return this.jwt.sign(payload, secret, {
      algorithm: 'HS256',
    });
  }

  public authToken(token: string) {
    if (!token) return { status: 401, response: { message: 'Token not found' } };
    try {
      const validateToken = this.jwt.verify(token, secret);
      return { validateToken };
    } catch (error) {
      return { status: 401, response: { message: 'Invalid token' } };
    }
  }
}
