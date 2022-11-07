import { NextFunction, Request, Response } from 'express';
import postProductSchema from './schema';

const validatePostProduct = async (req: Request, res: Response, next: NextFunction) => {
  const objInputPost = req.body;
  const { error } = postProductSchema.validate(objInputPost);
  const err: any = error;
  if (!err) return next();
  if (err.message.includes('required')) return res.status(400).json({ message: err.message });
  if (err.message.includes('must')) return res.status(422).json({ message: err.message });
  return next();
};

// const validatePutXXX = async (req, res, next) => {
//   const objInputPut = req.body;
//   const { error } = putXXXSchema.validate(objInputPut);
//   if (error) return res.status(123).json({ message: error.message });
//   return next();
// };

export default validatePostProduct;