import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../Error/errors";

const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);

  const existEmail = await userRepo.findOneBy({ email: req.body.email });

  if (existEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default verifyEmailExists;
