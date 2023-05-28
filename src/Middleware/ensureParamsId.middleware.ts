import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../Error/errors";

const ensureParamsIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);
  const foundParamsId = await userRepo.findOneBy({ id: req.params.id });

  if (!foundParamsId) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default ensureParamsIdMiddleware;
