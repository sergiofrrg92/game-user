import User from '../models/User.js';

export const createUser = async (req, res, next) => {
  try {
    console.log(`Creating user with params: ${JSON.stringify(req.body)}`);
    const newUser = await User.create(req.body);
    return res.status(201).json({ user: newUser });
  } catch (error) {
    error.status = 500;
    next(error);
  }
};
