import Joi from 'joi';

const inputNameSchema = Joi.string().min(3).required();
const inputAmountSchema = Joi.string().min(3).required();

const inputUsernameSchema = Joi.string().min(3).required();
const inputClasseSchema = Joi.string().min(3).required();
const inputLevelSchema = Joi.number().min(1).required();
const inputPasswordSchema = Joi.string().min(8).required();

const postProductSchema = Joi.object({
  name: inputNameSchema,
  amount: inputAmountSchema,
});

const postUserSchema = Joi.object({
  username: inputUsernameSchema,
  classe: inputClasseSchema,
  level: inputLevelSchema,
  password: inputPasswordSchema,
});

export {
  postProductSchema,
  postUserSchema,
};