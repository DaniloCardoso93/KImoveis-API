import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../Error/errors";

const ensureAdmOrLoggerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramsId = req.params.id;
  const loggedUserId = req.user.id;

  const userRepo = AppDataSource.getRepository(User);
  const loggedUser = await userRepo.findOneBy({ id: loggedUserId });

  if (loggedUser.isAdm || loggedUserId === paramsId) {
    return next();
  }

  throw new AppError("Missing admin permissions", 401);
};

export default ensureAdmOrLoggerUserMiddleware;
