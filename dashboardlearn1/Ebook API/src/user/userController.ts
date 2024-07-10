/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";

// create user
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  // validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }
  // database call
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      const error = createHttpError(400, "User already exists with this email");
      return next(error);
    }
  } catch (err) {
    return next(createHttpError(500, "Error while checking for existing user"));
  }
  // password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser: User;
  try {
    // create user
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    return next(createHttpError(500, "Error while creating user"));
  }
  try {
    // Token generation JWT
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
    });
    // response
    res.status(201).json({ accessToken: token });
  } catch (err) {
    return next(createHttpError(500, "Error while signing the jwt token"));
  }
};

// login user
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  // validation
  if (!email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }
  // database call
  const user = await userModel.findOne({ email });
  try {
    if (!user) {
      const error = createHttpError(404, "User does not exist.");
      return next(error);
    }
    // password validation
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = createHttpError(401, "Invalid email or password");
      return next(error);
    }
  } catch (err) {
    return next(createHttpError(500, "Error while checking for existing user"));
  }

  // Login token generation
  const token = sign({ sub: user._id }, config.jwtSecret as string, {
    expiresIn: "7d",
  });
  res.json({ accessToken: token });
};

export { createUser, loginUser };
