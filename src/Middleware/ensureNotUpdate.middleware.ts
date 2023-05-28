import { NextFunction, Request, Response } from "express";
import { AppError } from "../Error/errors";

const ensureNotUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    req.body.hasOwnProperty("isActive") ||
    req.body.hasOwnProperty("isAdm") ||
    req.body.hasOwnProperty("id")
  ) {
    throw new AppError("You can't update this field", 401);
  }

  return next();
};

export default ensureNotUpdateMiddleware;
