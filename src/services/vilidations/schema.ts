import Joi from 'joi';

const inputNameSchema = Joi.string().min(3).required();
const inputAmountSchema = Joi.string().min(3).required();

const postProductSchema = Joi.object({
  name: inputNameSchema,
  amount: inputAmountSchema,
});

export default postProductSchema;