import { NextFunction, Request, Response } from 'express';
import { postProductSchema, postUserSchema } from './schema';

const validatePostProduct = async (req: Request, res: Response, next: NextFunction) => {
  const objInputPost = req.body;
  const { error } = postProductSchema.validate(objInputPost);
  const err: any = error;
  if (!err) return next();
  if (err.message.includes('required')) return res.status(400).json({ message: err.message });
  if (err.message.includes('must')) return res.status(422).json({ message: err.message });
  return next();
};

const validatePostUser = async (req: Request, res: Response, next: NextFunction) => {
  const objInputPost = req.body;
  const { error } = postUserSchema.validate(objInputPost);
  const err: any = error;
  if (!err) return next();
  if (err.message.includes('required')) return res.status(400).json({ message: err.message });
  if (err.message.includes('must')) return res.status(422).json({ message: err.message });
  return next();
};

export {
  validatePostProduct,
  validatePostUser,
};