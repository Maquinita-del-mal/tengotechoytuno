import joi from 'joi';

const userSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export default async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.status(400).json({ err });
  }
};
