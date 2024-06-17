import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  // console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "Hi Raj User created successfully" });
  } catch (error) {
    // next(errorHandler(300, "Somthing went wrong."));
    next(error);
  }
};

export const signin = async (req, res, next) => {
  // next is middleware handing the error
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassowrd = bcryptjs.compareSync(password, validUser.password);
    if (!validPassowrd) return next(errorHandler(401, "wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
    const {password: hashedPassword , ...rest} = validUser._doc;
    const expiryData = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie("access_token", token, { httpOnly: true, expires:expiryData })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
