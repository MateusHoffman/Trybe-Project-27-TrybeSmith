import { Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const error = (err: Error, req: Request, res: Response) => {
  console.log('err', err);
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default error;