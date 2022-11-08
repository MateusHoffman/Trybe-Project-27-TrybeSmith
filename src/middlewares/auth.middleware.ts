import { Request, Response, NextFunction } from 'express';
import TokenUtils from '../utils/JWT';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || '';
  
  const tokenUtils = new TokenUtils();
  const user = tokenUtils.authToken(token);
  if ('status' in user) return res.status(user.status as number).json(user.response);
  req.body.user = user;
  next();
};

export default auth;