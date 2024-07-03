/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	const { name, email, password } = req.body;
	// validation
	if (!name || !email || !password) {
		const error = createHttpError(400, "All fields are required");
		return next(error);
	}
	// database call
	const user = await userModel.findOne({ email });
  if(user) {
    const error = createHttpError(400, "User already exists with this email");
    return next(error);
  }
  // password hashing
  const hashedPassword = await bcrypt.hash(password, 10);
	// process logic
	// response
	res.json({ message: "User Created" });
};

export { createUser };
