import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../Error/errors";

const ensureIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);
  const foundUser = await userRepo.findOneBy({ id: req.params.id });

  if (!foundUser.isActive) {
    throw new AppError("User already deleted", 400);
  }

  return next();
};

export default ensureIsActiveMiddleware;
