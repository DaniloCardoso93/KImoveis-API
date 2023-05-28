import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../Error/errors";

const ensureAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);
  const findUser = await userRepo.findOneBy({ id: req.user.id });

  if (!findUser.isAdm) {
    throw new AppError("Missing admin permissions", 403);
  }
  return next();
};

export default ensureAdmMiddleware;
